import { nextTick, onMounted, onBeforeUnmount, watch } from "vue";

let locks = 0;
let originalOverflow = "";
function lockScroll() {
  if (locks++ === 0) {
    originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }
}
function unlockScroll() {
  if (locks > 0 && --locks === 0) document.body.style.overflow = originalOverflow;
}

// Native dialogs make the background inert and contain keyboard focus.
export function useModalDialog(dialog, isOpen) {
  let opener;
  let timer;
  let locked = false;
  let disposed = false;
  function finish() {
    const restoreFocus = locked;
    clearTimeout(timer);
    dialog.value?.close();
    dialog.value?.classList.remove("is-closing");
    if (locked) { unlockScroll(); locked = false; }
    if (restoreFocus) {
      const target = opener?.isConnected && opener.getClientRects().length
        ? opener : document.getElementById("main-content");
      target?.focus({ preventScroll: true });
    }
  }
  function containFocus(event) {
    if (event.key !== "Tab") return;
    const items = [...dialog.value.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')]
      .filter(element => element.getClientRects().length > 0);
    const first = items[0];
    const last = items.at(-1);
    if (!first) { event.preventDefault(); return; }
    if (event.shiftKey && (document.activeElement === first || document.activeElement === dialog.value)) {
      event.preventDefault(); last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault(); first.focus();
    }
  }
  onMounted(() => dialog.value?.addEventListener("keydown", containFocus));
  watch(isOpen, async (open) => {
    await nextTick();
    if (disposed || !dialog.value) return;
    clearTimeout(timer);
    if (open) {
      dialog.value.classList.remove("is-closing");
      if (!dialog.value.open) {
        opener = document.activeElement;
        lockScroll();
        locked = true;
        dialog.value.showModal();
      }
    } else if (dialog.value.open) {
      dialog.value.classList.add("is-closing");
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const duration = parseFloat(getComputedStyle(dialog.value).getPropertyValue("--motion-exit"));
      if (reduced) finish();
      else timer = setTimeout(finish, Number.isFinite(duration) ? duration : 180);
    }
  }, { immediate: true });
  onBeforeUnmount(() => {
    disposed = true;
    dialog.value?.removeEventListener("keydown", containFocus);
    finish();
  });
}
