import {
  buildingsNavLinks,
  fleetNavLinks,
  researchNavLinks,
  resourcesNavLinks,
  universeLinks,
  yourLinks,
} from "./links";

export const footerLogos = [
  { name: "discord", img: "/brand/logos/discord.png" },
  { name: "instagram", img: "/brand/logos/instagram.png" },
  { name: "reddit", img: "/brand/logos/reddit.png" },
  { name: "github", img: "/brand/logos/github.png" },
  { name: "twitter", img: "/brand/logos/twitter.png" },
];

export const checkNavLinks = (active) => {
  if (active === "fleet") return fleetNavLinks;
  if (active === "buildings") return buildingsNavLinks;
  if (active === "research") return researchNavLinks;
  if (active === "resources") return resourcesNavLinks;
  if (active === "yours") return yourLinks;
  if (active === "universe") return universeLinks;
};

export const HOUR_TO_SEC = 3600;
