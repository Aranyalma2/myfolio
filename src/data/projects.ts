import type { Project } from '@/types';

export const projects: Project[] = [
	{
		id: 'hvac-management-platform',
		title: 'HVAC Management Platform',
		shortDescription: 'Cloud-based platform for managing industrial HVAC systems with real-time monitoring and remote control.',
		description: `
      <p>A comprehensive web application built with <strong>NestJS</strong> and <strong>Vue.js</strong> for managing 100+ industrial HVAC installations.</p>
      <p>Features include real-time monitoring, alert systems, remote configuration, and analytics dashboard.</p>
      <p>Deployed on <strong>Azure Kubernetes Service</strong> with MongoDB backend and WebSocket communication for live updates.</p>
      <h3>Key Features:</h3>
      <ul>
        <li>Real-time temperature and humidity monitoring</li>
        <li>Remote system control and configuration</li>
        <li>Alert and notification system</li>
        <li>Historical data analytics and reporting</li>
        <li>Multi-tenant architecture supporting 50+ clients</li>
      </ul>
    `,
		bannerImage: '/projects/picture.webp',
		images: ['/projects/picture.webp', '/projects/picture.webp', '/projects/picture.webp', '/projects/picture.webp', '/projects/picture.webp', '/projects/picture.webp'],
		labels: ['NestJS', 'Vue.js', 'MongoDB', 'Azure AKS', 'IoT', 'TypeScript', 'WebSocket'],
		github: 'https://github.com/',
		demo: null,
		tags: ['Active']
	},
	{
		id: 'esp32-controller',
		title: 'ESP32 Custom Controller',
		shortDescription: 'Low-level embedded firmware for ESP32-based HVAC controllers with custom PCB design.',
		description: `
      <p>Developed custom firmware in <strong>C++</strong> using <strong>ESP-IDF</strong> for industrial HVAC control units.</p>
      <p>Designed PCB in <strong>KiCad</strong> with I/O extension modules, supporting Modbus RTU and MQTT protocols.</p>
      <p>Implemented OTA updates, secure boot, and failsafe mechanisms for field deployment.</p>
      <h3>Technical Highlights:</h3>
      <ul>
        <li>Custom PCB design with ESP32-S3 microcontroller</li>
        <li>Support for multiple communication protocols (Modbus RTU, MQTT, HTTP)</li>
        <li>OTA firmware updates with rollback capability</li>
        <li>Watchdog timer and fail-safe mechanisms</li>
        <li>Low-power mode for energy efficiency</li>
        <li>Temperature range: -40°C to +85°C</li>
      </ul>
    `,
		bannerImage: '/projects/picture.webp',
		images: ['/projects/picture.webp', '/projects/picture.webp'],
		labels: ['ESP32', 'C++', 'ESP-IDF', 'KiCad', 'Embedded', 'IoT', 'Modbus'],
		github: 'https://github.com/',
		demo: null,
		tags: ['Active', 'Passion Project']
	},
	{
		id: 'vpn-management-system',
		title: 'VPN Management System',
		shortDescription: 'Scalable VPN management platform integrated with MikroTik routers for remote industrial access.',
		description: `
      <p>Built a custom VPN management platform using <strong>Next.js</strong> and <strong>NestJS</strong> for centralized remote access.</p>
      <p>Integrates with <strong>MikroTik RouterOS API</strong> for automated VPN tunnel provisioning and monitoring.</p>
      <p>Manages 50+ active VPN connections with user authentication, access logs, and bandwidth monitoring.</p>
      <h3>Features:</h3>
      <ul>
        <li>Automated VPN tunnel provisioning</li>
        <li>Real-time connection monitoring</li>
        <li>User and access management</li>
        <li>Bandwidth usage tracking and reporting</li>
        <li>Integration with MikroTik RouterOS API</li>
        <li>Multi-site VPN mesh networking</li>
      </ul>
    `,
		bannerImage: '/projects/picture.webp',
		images: ['/projects/picture.webp'],
		labels: ['Next.js', 'NestJS', 'MikroTik', 'Networking', 'PostgreSQL', 'TypeScript', 'API'],
		github: null,
		demo: null,
		tags: ['Maintained']
	},
	{
		id: 'iot-sensor-mesh',
		title: 'IoT Sensor Mesh Network',
		shortDescription: 'Distributed wireless sensor network for industrial monitoring using ESP32 and LoRa.',
		description: `
      <p>Designed a mesh network architecture for distributed temperature and humidity monitoring.</p>
      <p>Implemented custom wireless protocol using <strong>ESP-NOW</strong> and <strong>LoRa</strong> for long-range communication.</p>
      <p>Data aggregation with edge processing and cloud synchronization via MQTT.</p>
      <h3>System Architecture:</h3>
      <ul>
        <li>ESP32-based sensor nodes with DHT22/BME280 sensors</li>
        <li>LoRa for long-range communication (up to 2km)</li>
        <li>ESP-NOW for local mesh networking</li>
        <li>Gateway node with LTE/4G connectivity</li>
        <li>MQTT protocol for cloud communication</li>
        <li>Battery-powered with solar charging option</li>
        <li>Edge computing for data preprocessing</li>
      </ul>
    `,
		bannerImage: '/projects/picture.webp',
		images: ['/projects/picture.webp', '/projects/picture.webp'],
		labels: ['ESP32', 'LoRa', 'C++', 'MQTT', 'IoT', 'Wireless', 'ESP-NOW'],
		github: 'https://github.com/',
		demo: null,
		tags: ['Hobby', 'Open-Source']
	},
	{
		id: 'kubernetes-microservices',
		title: 'Kubernetes Microservices Platform',
		shortDescription: 'Scalable microservices architecture deployed on Azure Kubernetes Service.',
		description: `
      <p>Designed and deployed a microservices-based architecture on <strong>Azure Kubernetes Service (AKS)</strong>.</p>
      <p>Implemented CI/CD pipelines, service mesh, and observability stack.</p>
      <h3>Technologies:</h3>
      <ul>
        <li>Azure Kubernetes Service (AKS)</li>
        <li>Docker containerization</li>
        <li>Istio service mesh</li>
        <li>Prometheus and Grafana for monitoring</li>
        <li>ArgoCD for GitOps deployments</li>
        <li>Helm charts for package management</li>
      </ul>
    `,
		bannerImage: '/projects/picture.webp',
		images: ['/projects/picture.webp'],
		labels: ['Kubernetes', 'Docker', 'Azure AKS', 'Microservices', 'DevOps', 'Istio'],
		github: null,
		demo: null,
		tags: ['Default']
	},
	{
		id: 'risc-v-firmware',
		title: 'RISC-V Firmware Development',
		shortDescription: 'Low-level firmware for CH32V RISC-V microcontrollers.',
		description: `
      <p>Developed firmware for <strong>CH32V</strong> RISC-V microcontrollers using bare-metal C.</p>
      <p>Implemented peripheral drivers, interrupt handling, and real-time operating system tasks.</p>
      <h3>Components:</h3>
      <ul>
        <li>Bare-metal C firmware</li>
        <li>Custom bootloader</li>
        <li>UART, SPI, I2C drivers</li>
        <li>PWM motor control</li>
        <li>ADC sensor reading</li>
        <li>Real-time task scheduling</li>
      </ul>
    `,
		bannerImage: '/projects/picture.webp',
		images: ['/projects/picture.webp', '/projects/picture.webp'],
		labels: ['RISC-V', 'C', 'Embedded', 'CH32V', 'Bare-metal', 'Firmware'],
		github: 'https://github.com/',
		demo: null,
		tags: ['Legacy']
	}
];

export const getFeaturedProjects = (): Project[] => {
	return projects.filter(project => project.tags.includes('Active') || project.tags.includes('Production'));
};

export const getProjectById = (id: string): Project | undefined => {
	return projects.find(project => project.id === id);
};

export const getAllLabels = (): string[] => {
	const labels = new Set<string>();
	projects.forEach(project => {
		project.labels.forEach(label => labels.add(label));
	});
	return Array.from(labels).sort();
};
