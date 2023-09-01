export interface ILink {
	id: string;
	label: string;
	href: string;
	hasDefaultTarget: boolean;
}

export interface IAsset {
	name: string;
	color: string;
	size?: number;
}

export type TIcon = {
	color: string;
};

export interface ILinkGroup {
	id: string;
	title: string;
	links: ILink[];
}

export interface IPostCard {
	id: string;
	title: string;
	topics: string[];
	authors: string;
	description: string;
	pubDate: string;
	heroImage: string;
}
