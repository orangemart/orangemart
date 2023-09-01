import { ILink } from "../types";

export const NAV_LINKS: ILink[] = [
  {
    id: "about",
    label: "About",
    href: "/about",
    hasDefaultTarget: true,
  },
  {
    id: "blog",
    label: "Blog",
    href: "/blog",
    hasDefaultTarget: true,
  },
  {
    id: "supporters",
    label: "Supporters",
    href: "/supporters",
    hasDefaultTarget: true,
  },
  {
    id: "contribute",
    label: "Contribute",
    href: "https://geyser.fund/project/orange",
    hasDefaultTarget: false,
  },
];

export const SOCIAL_LINKS: ILink[] = [
  {
    id: "discord",
    label: "Discord",
    href: "https://dsc.gg/orangemart",
    hasDefaultTarget: false,
  },
  {
    id: "nostr",
    label: "Nostr",
    href: "https://satellite.earth/@orange@orangem.art",
    hasDefaultTarget: false,
  },
  {
    id: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@theorangemart",
    hasDefaultTarget: false,
  },
  {
    id: "twitch",
    label: "Twitch",
    href: "https://www.twitch.tv/orangemart",
    hasDefaultTarget: false,
  },
  {
    id: "youtube",
    label: "Youtube",
    href: "https://www.youtube.com/@orangemart",
    hasDefaultTarget: false,
  },
  {
    id: "twitter",
    label: "Twitter",
    href: "https://twitter.com/theorangemart",
    hasDefaultTarget: false,
  },
];

export const RUST_SERVER_IP = "104.129.133.89:28116";
