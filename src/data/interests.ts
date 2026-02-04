export interface Interest {
	id: string;
	name: string;
	keywords: string[];
}

export const interests: Interest[] = [
	{
		id: '1',
		name: 'Web Development',
		keywords: ['Backend', 'Database Design', 'Software Architecture']
	},
	{
		id: '2',
		name: 'Low Level Programming',
		keywords: ['Microcontrollers', 'ESP32', 'RISC-V', 'CH32V MCU', 'PCB Design']
	},
	{
		id: '3',
		name: 'Cloud Platforms',
		keywords: ['Azure AKS', 'On-premise Kubernetes', 'Docker', 'Scalable Systems Design']
	},
	{
		id: '4',
		name: 'IoT Solutions',
		keywords: ['Distributed Sensor Grid', 'Wireless Communication', 'Mesh Networks', 'Machine Learning']
	}
];
