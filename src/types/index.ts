export interface Project {
	id: string;
	title: string;
	shortDescription: string;
	description: string;
	bannerImage: string;
	images: string[];
	labels: string[];
	github: string | null;
	demo: string | null;
	tags: string[];
}

export interface Basics {
	name: string;
	headline: string;
	email: string;
	location: string;
}

export interface CustomField {
	id: string;
	icon: string;
	text: string;
	link: string;
}

export interface Skill {
	id: number | string;
	name: string;
	icon?: string;
	keywords: string[];
	proficiency?: string;
	level?: number;
}

export interface Experience {
	id: string;
	company: string;
	position: string;
	location: string;
	period: string;
	description: string;
	hidden: boolean;
}

export interface Education {
	id: string;
	school: string;
	degree: string;
	area: string;
	period: string;
	description: string;
	hidden: boolean;
}

export interface Certification {
	id: string;
	title: string;
	issuer: string;
	date: string;
	description: string;
	hidden: boolean;
}

export interface Interest {
	id: string;
	name: string;
	keywords: string[];
}

export interface Language {
	id: string;
	language: string;
	fluency: string;
	level: number;
	hidden: boolean;
}
