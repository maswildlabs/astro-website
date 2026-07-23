---
title: "Systems Lab Build"
summary: "Core Proxmox VE hypervisor cluster and isolated virtual network automation architectures."
status: "OPERATIONAL"
statusTone: "green"
icon: "rocket"
order: 1
destination: "Local Lab Infrastructure"
vehicle: "Proxmox / Docker"
missionWindow: "Q2 2026"
---

# **Systems Lab Infrastructure Build**

<br />

This document outlines the architectural implementation of the core enterprise-grade virtualization cluster, dedicated isolated virtual networks, and automated container deployment frameworks.

<br />

---

<br />

## **Core Infrastructure & Hypervisor Configuration**

<br />

* **Hypervisor OS:** Proxmox VE (Virtual Environment Cluster)

<br />

* **Compute Provisioning:** Isolated Linux Containers (LXC) & Hardware-Isolated Virtual Machines

<br />

* **Network Strategy:** Granular 802.1Q VLAN Tagging, dedicated firewall rulesets, and isolated routing profiles to segment sandbox testing environments from core infrastructure.

<br />

## **Containerized Service Inventory**

<br />

The underlying application services are fully containerized and orchestrate continuous ingress handling, repository management, and core presentation layers.

<br />
<br />

**Container Name** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **Base Image / Tech** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **Internal Port** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **Routing Profile** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 
<br />

**nginx-proxy-manager** &nbsp;&nbsp;&nbsp;&nbsp; Nginx / NPM Admin &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 80, 443, 81 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 80 / 443 Public Ingress &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<br />

 **The Gateway:** Handles SSL termination via Cloudflare and maps incoming domain traffic to the correct container destination.

<br />

**forgejo-git** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Forgejo / Go &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3000 (HTTP) / 22 (SSH) &nbsp; `git.yourdomain.com` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 

<br /> 

**The Forge:** Private, self-hosted Git server hosting all local repository code, system layouts, and deployment manifests.

<br />

**astro-portfolio** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Node.js / Astro &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4321 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `yourdomain.com` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<br />

**The Showcase:** Powering the primary portfolio frontend, the custom "Stealth" UI workspace, the STE Rater, and the Markdown Converter.


<br />

> ### **Deployment & Scalability Note**
<br />

> While the custom utilities (STE Rater and Text-to-Markdown Converter) currently run natively inside the monolithic application container, the underlying architecture is engineered to scale out seamlessly into microservices as compute demand dictates.