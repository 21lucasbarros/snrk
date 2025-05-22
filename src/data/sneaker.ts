import type { Product } from "../types";

export const product: Product = {
  id: "1",
  name: "Dunk Low",
  price: 899.9,
  description:
    "O clássico que domina as ruas e as quadras — o Dunk Low é muito mais que um tênis, é história viva, cultura pulsante e autenticidade pura. Com um design lendário e combinações de cores que não passam despercebidas, ele é item essencial pra qualquer sneakerhead que se preze. Quer elevar seu estilo ao máximo? Garanta já o seu e faça seu drip explodir!",
  images: [
    "../img/sneaker/sneaker1.png",
    "../img/sneaker/sneaker2.png",
    "../img/sneaker/sneaker3.png",
    "../img/sneaker/sneaker4.png",
    "../img/sneaker/sneaker5.png",
    "../img/sneaker/sneaker6.png",
    "../img/sneaker/sneaker7.png",
  ],
  sizes: ["38", "39", "40", "41", "42", "43", "44"],
  colors: [
    { name: "Court Purple", value: "#4B3F72" },
    { name: "Triple White", value: "#FFFFFF" },
    { name: "Chicago", value: "#B20000" },
    { name: "Kentucky", value: "#0051BA" },
  ],
};
