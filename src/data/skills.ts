import type { Skill } from '@/types';

export const skills: Skill[] = [
	{
		id: 1,
		name: 'Web Development',
		keywords: ['NestJS', 'Next.js', 'Vue.js', 'MongoDB', 'PostgreSQL', 'TypeScript']
	},
	{
		id: 2,
		name: 'Embedded Programming',
		keywords: ['ESP-IDF', 'Arduino', 'PlatformIO', 'RISC-V', 'C', 'C++', 'KiCad']
	},
	{
		id: 3,
		name: 'Computer Networking',
		keywords: ['MikroTik', 'Cisco', 'VPN', 'Routing', 'Network Security']
	},
	{
		id: 4,
		name: 'Cloud Infrastructure',
		keywords: ['Azure AKS', 'Kubernetes', 'Docker', 'Microservices']
	}
];
