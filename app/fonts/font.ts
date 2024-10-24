import { Montserrat, Raleway, Roboto } from "next/font/google";

export const rale = Raleway({
  weight: ["400", "500"],
  subsets: ["latin"],
  style: ["normal"],
});

export const mon = Montserrat({
  weight: ["400", "500"],
  subsets: ["latin"],
  style: ["normal"],
});

export const robo = Roboto({
  weight: ["100", "400", "300"],
  style: ["normal"],
  preload: false,
});
