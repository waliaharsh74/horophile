import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "Ultimately, our mission is to create a trusted destination for watch enthusiasts, collectors, and anyone who appreciates the timeless allure of watches.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Our vision at horophile is to become a globally recognized authority in the world of horology, synonymous with excellence, passion, and the celebration of timepieces",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "Horophile was founded by a group of passionate watch enthusiasts who shared a deep appreciation for the art and craftsmanship of timepieces",
  },
];

export const products_url = "/.netlify/functions/products";

export const single_product_url = `/.netlify/functions/single-product?id=`;
