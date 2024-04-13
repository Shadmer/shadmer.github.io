import layerBack_1 from "./assets/img/screen-1/layer-back.jpg";
import layerMiddle_1 from "./assets/img/screen-1/layer-middle.png";
import layerFront_1 from "./assets/img/screen-1/layer-front.png";

import layerBack_2 from "./assets/img/screen-2/layer-back.jpg";
import layerGera from "./assets/img/screen-2/layer-gera.png";
import layerYen from "./assets/img/screen-2/layer-yen.png";
import layerFront_2 from "./assets/img/screen-2/layer-front.png";

import layerBack_3 from "./assets/img/screen-3/layer-back.jpg";
import layerMiddle_3 from "./assets/img/screen-3/layer-middle.png";
import layerCiri from "./assets/img/screen-3/layer-ciri.png";
import layerFront_3 from "./assets/img/screen-3/layer-front.png";

export const slideData = [
  {
    layers: [
      { parallax: "35%", image: layerBack_1 },
      { parallax: "25%", image: layerMiddle_1 },
      { parallax: "14%", image: layerFront_1 },
    ],
    color: "#BE9164",
  },
  {
    layers: [
      { parallax: "40%", image: layerBack_2 },
      { parallax: "34%", image: layerGera },
      { parallax: "30%", image: layerYen },
      { parallax: "14%", image: layerFront_2 },
    ],
    color: "#525A6D",
  },
  {
    layers: [
      { parallax: "48%", image: layerBack_3 },
      { parallax: "35%", image: layerMiddle_3 },
      { parallax: "29%", image: layerCiri },
      { parallax: "16%", image: layerFront_3 },
    ],
    color: "#938086",
  },
];
