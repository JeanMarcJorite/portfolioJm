// Intrinsic dimensions reserve layout space before lazy-loaded media arrives.
const sizes = {
  "/images/welabbudget/01-login.png": [997, 448],
  "/images/welabbudget/02-dashboard.png": [812, 582],
  "/images/welabbudget/03-depenses-scan.png": [827, 558],
  "/images/welabbudget/04-salaires.png": [820, 476],
  "/images/welabbudget/05-recettes-devis.png": [822, 372],
  "/images/welabbudget/06-editeur-devis.png": [662, 612],
  "/images/welabbudget/07-profil.png": [815, 511],
  "/images/nutrigram/01-accueil.jpg": [1080, 2280],
  "/images/nutrigram/02-plats-recherche.jpg": [1080, 2280],
  "/images/nutrigram/03-calendrier-panier.jpg": [1080, 2280],
  "/images/alternance/m1-2025-2026.png": [3509, 2480],
  "/images/alternance/m2-2026-2027.png": [3509, 2480],
};
export function imageSize(src) {
  const size = sizes[src];
  return size ? { width: size[0], height: size[1] } : {};
}
