export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  status: 'OPERATIONAL' | 'DEVELOPMENT' | 'MITIGATION'; // Purged CRITICAL entirely from types
}

export const projects: Project[] = [
  {
    title: 'SYSTEMS LAB BUILD',
    description: 'Core Proxmox VE hypervisor cluster, isolated virtual network architectures, and robust Docker environment automation frameworks fully deployed and operating within stable parameters.',
    tags: ['UniFi', 'Proxmox', 'Docker'],
    liveUrl: '/docs/labbuild', 
    githubUrl: '#',
    status: 'OPERATIONAL'
  },
  {
    title: 'STE COMPLIANCE TOOL',
    description: 'Automated ASD-STE100 compliance validation engine designed to reduce technical writing ambiguity. Analyzes and filters text entries against strict controlled vocabulary guidelines and dictionary constraints in real-time.',
    tags: ['Astro', 'TypeScript', 'Linguistics', 'Analytics'],
    liveUrl: '#', 
    githubUrl: '#',
    status: 'DEVELOPMENT'
  },
  {
    title: 'TEXT-TO-MARKDOWN CONVERTER',
    description: 'A slick, real-time conversion utility built to translate unstructured plain-text documentation or corporate copy directly into production-ready, clean Markdown (.md) payloads.',
    tags: ['Astro', 'TypeScript', 'Parser', 'Markdown'],
    liveUrl: '#', 
    githubUrl: '#',
    status: 'DEVELOPMENT'
  },
  {
    title: 'SECURITY AUDIT',
    description: 'Active perimeter vulnerability scanning, isolated VLAN firewall validation, and strict access-control audits currently underway to harden internal infrastructure against threat vectors.',
    tags: ['Firewall', 'VLAN', 'Hardening'],
    liveUrl: '/docs/audit', 
    githubUrl: '#',
    status: 'MITIGATION' 
  }
];