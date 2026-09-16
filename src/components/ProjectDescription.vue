<script setup>
import { computed } from "vue";
const props = defineProps({ text: { type: String, required: true } });
// A small text parser covers the existing paragraphs, lists and bold labels without injecting HTML.
const blocks = computed(() => {
  const output = [];
  for (const raw of props.text.split(/\r?\n/)) {
    const line = raw.trim();
    if (!line) continue;
    if (line.startsWith("- ")) {
      if (output.at(-1)?.type !== "list")
        output.push({ type: "list", items: [] });
      output.at(-1).items.push(line.slice(2));
    } else output.push({ type: "paragraph", text: line });
  }
  return output;
});
const segments = (text) =>
  text
    .split(/(\*\*.*?\*\*)/g)
    .filter(Boolean)
    .map((part) => ({
      bold: part.startsWith("**") && part.endsWith("**"),
      text:
        part.startsWith("**") && part.endsWith("**") ? part.slice(2, -2) : part,
    }));
</script>
<template>
  <div class="project-prose">
    <template v-for="(block, i) in blocks" :key="i"
      ><ul v-if="block.type === 'list'">
        <li v-for="(item, j) in block.items" :key="j">
          <template v-for="(part, k) in segments(item)" :key="k"
            ><strong v-if="part.bold">{{ part.text }}</strong
            ><template v-else>{{ part.text }}</template></template
          >
        </li>
      </ul>
      <p v-else>
        <template v-for="(part, j) in segments(block.text)" :key="j"
          ><strong v-if="part.bold">{{ part.text }}</strong
          ><template v-else>{{ part.text }}</template></template
        >
      </p></template
    >
  </div>
</template>
