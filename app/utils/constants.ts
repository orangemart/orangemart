import { ILink, ILinkGroup, ISupporter, IContributor } from "../types";

export const RUST_SERVER_IP = "orange.orangem.art";

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
		id: "tv",
		label: "TV",
		href: "http://orangemart.tv",
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
		href: "https://nosta.me/nprofile1qyv8wumn8ghj7mn0wd68ytnxd46zuamf0ghxy6t69uqsuamnwvaz7tmwdaejumr0dshsqgq6mr6axhhw7fxad6xe8ujtakexea9sw2nvzd4umkff8mxmkcjysck8k6ma",
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

export const RESOURCE_LINKS: ILink[] = [
	{
		id: "goodmorningbitcoin",
		label: "GMB Radio",
		href: "https://www.goodmorningbitcoin.com/",
		hasDefaultTarget: false,
	},
	{
		id: "whitepaper",
		label: "Bitcoin Whitepaper",
		href: "https://bitcoin.org/bitcoin.pdf",
		hasDefaultTarget: false,
	},
	{
		id: "rust",
		label: "Rust",
		href: "https://rust.facepunch.com/",
		hasDefaultTarget: false,
	},
];

export const FOOTER_LINKS: ILinkGroup[] = [
	{
		id: "orange",
		title: "Orange",
		links: NAV_LINKS,
	},
	{
		id: "resources",
		title: "Resources",
		links: RESOURCE_LINKS,
	},
];

export const BLOG_TOPICS: string[] = ["all topics", "orange", "rust", "bitcoin", "nostr"];

export const DEFAULT_TOPIC = "all topics";

export const SUPPORTERS: ISupporter[] = [
		{
		id: "geyser-fund",
		name: "Geyser Fund",
		avatar: "/img/geyser-fund.png",
		description: "Geyser is a lightning-native crowdfunding platform.",
		links: [
			{
				id: "twitter",
				href: "https://twitter.com/geyserfund",
			},
			{
				id: "website",
				href: "https://geyser.fund/orange",
			},
		],
	},
	{
		id: "lightsats",
		name: "Lightsats",
		avatar: "/img/lightsats.png",
		description:
			"Gift sats without losing them.✨ Building a pre-coiner onramp via bitcoin tips/gifts.",
		links: [
			{
				id: "twitter",
				href: "https://twitter.com/Lightsats21",
			},
			{
				id: "website",
				href: "https://lightsats.com",
			},
		],
	},
	{
		id: "good-morning-bitcoin",
		name: "Good Morning Bitcoin",
		avatar: "/img/goodmorningbitcoin.png",
		description: "Internet radio station focused on Bitcoin content.",
		links: [
			{
				id: "twitter",
				href: "https://twitter.com/goodmorningbtc",
			},
			{
				id: "website",
				href: "https://goodmorningbitcoin.com/",
			},
		],
	},
	{
		id: "nakamotor",
		name: "Nakamotor",
		avatar: "/img/nakamotor.png",
		description: "Monetizing energy through Bitcoin mining.",
		links: [
			{
				id: "twitter",
				href: "https://twitter.com/nakamotor_",
			},
			{
				id: "website",
				href: "https://nakamotor.io/",
			},
		],
	},
	{
		id: "standard-and-moons",
		name:"Standard & Moons",
		avatar: "/img/standardandmoons.png",
		description: "Innovate the standard & reach for the moons.",
		links: [
			{
				id: "twitter",
				href: "https://twitter.com/standardandmoon",
			},
			{
				id: "website",
				href: "https://www.standardandmoons.com/",
			}
		]
	},
	{
		id: "orangemart",
		name: "ORANGEMART",
		avatar: "/img/orangemart.png",
		description: "Just a humble shop in Orange.",
		links: SOCIAL_LINKS,
	},
];

export const GEYSER_SUPPORTERS: IContributor[] = [
	{
		id: 1,
		handle: "@cbspears",
		value: 15675000,
	},
	{
		id: 2,
		handle: "@geyserfund",
		value: 2365000,
	},
	{
		id: 3,
		handle: "@tip_nz",
		value: 1031585,
	},
	{
		id: 4,
		handle: "@jamesviggy",
		value: 1003678,
	},
	{
		id: 5,
		handle: "anon",
		value: 529013,
	},
	{
		id: 6,
		handle: "@CivilBtcSaver",
		value: 528756,
	},
	{
		id: 7,
		handle: "@bradmillscan",
		value: 500000,
	},
	{
		id: 8,
		handle: "@HodlerHero23",
		value: 413917,
	},
	{
		id: 9,
		handle: "anon",
		value: 413534,
	},
	{
		id: 10,
		handle: "@JoanaCotar",
		value: 376896
	},
	{
		id: 11,
		handle: "@_lolo_spears_",
		value: 351506,
	},
	{
		id: 12,
		handle: "@bitcoinanatomy",
		value: 265904,
	},
	{
		id: 13,
		handle: "@BitcoinShooter",
		value: 250000,
	},
	{
		id: 14,
		handle: "anon",
		value: 239181,
	},
	{
		id: 15,
		handle: "@TheOrangeMart",
		value: 237640,
	},
	{
		id: 16,
		handle: "@Lightsats21",
		value: 231000,
	},
	{
		id: 17,
		handle: "@liviudm",
		value: 210000,
	},
	{
		id: 18,
		handle: "anon",
		value: 183620,
	},
	{
		id: 19,
		handle: "anon",
		value: 118726,
	},
	{
		id: 20,
		handle: "anon",
		value: 100100,
	},
	{
		id: 21,
		handle: "@kiwilambnz",
		value: 100000,
	},
	{
		id: 22,
		handle: "+81 more supporters",
		value: 0,
	},
];
