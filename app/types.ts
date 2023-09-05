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
	slug: string;
	title: string;
	topics: string[];
	author: string;
	description: string;
	pubDate: string;
	heroImage: string;
}

export interface ITabBtn {
	label: string;
	href: {
		pathname: string;
		query: {
			topic?: string;
		};
	};
	isActive: boolean;
}

export interface IPostList {
	posts: IPostCard[];
	activeTab: string;
}

export interface ISupporter {
	id: string;
	name: string;
	avatar: string;
	description: string;
}

export interface IContributor {
	id: number;
	handle: string;
	value: number;
}
