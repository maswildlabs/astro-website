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

<div class="incident-report-box" style="margin-top: 2.5rem; padding: 1.5rem; border: 1px solid #1a202c; background-color: #14171c; border-radius: 4px;">
    <span style="color: #718096; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; font-weight: bold;">Systems Lab // Case Study</span>
    <h4 style="color: #ffffff; margin: 0.5rem 0; font-size: 1.2rem; font-weight: 600;">Incident Retrospective: Production Outage & GitOps Pivot</h4>
    <p style="color: #cbd5e0; margin: 0 0 1.2rem 0; font-size: 0.95rem; line-height: 1.5;">
        A comprehensive, formal post-mortem documenting a recent deployment failure on maswildlabs.com. Analyzes the AI-driven development workflow boundaries, localized file system corruption, and the structural hardening roadmap implemented to transition the lab environment to an autonomous GitOps model.
    </p>
    <a href="/tools/maswildlabs_post_mortem.pdf" target="_blank" style="display: inline-flex; align-items: center; background-color: #2d3748; color: #ffffff; padding: 0.6rem 1.2rem; border-radius: 4px; text-decoration: none; font-size: 0.9rem; font-weight: 600; transition: background-color 0.2s; border: 1px solid #4a5568;" onmouseover="this.style.backgroundColor='#4a5568'" onmouseout="this.style.backgroundColor='#2d3748'">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
        Download Incident Report (PDF)
    </a>
</div>