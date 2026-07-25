# Stephanie R. Wilder — Developer Portfolio & Documentation Site
**Live Site:** [maswildlabs.com](https://maswildlabs.com)

A professional developer portfolio, resume hosting engine, and technical documentation site built on a modern frontend stack. This platform serves as a centralized hub for enterprise systems architecture, technical writing showcases, and cybersecurity project documentation.

---

## 🚀 Tech Stack & Infrastructure

*   **Frontend Framework:** [Astro](https://astro.build/) — Utilized for optimal performance, component-driven design, and static site generation (SSG).
*   **Content Management:** Markdown (`.md`) via Astro Content Collections with structured YAML frontmatter schemas.
*   **Hosting & Deployment:** [Cloudflare Pages](https://pages.cloudflare.com/) — Integrated directly with GitHub for automated CI/CD build and deployment pipelines.
*   **Local Development Environment:** Containerized application running inside a Docker infrastructure (`portfolio-app`) on a remote Ubuntu worker node.

---

## 📁 Key Directory Structure

*   `/src/content/pages/` — Core page markdown files, including the structured resume layouts.
*   `/public/assignments/` — Static binary assets, including the verified professional print-ready PDF resume.

---

## 🛠️ Local Development & Deployment Workflow

### Prerequisites
* Docker & Docker Compose
* Git

### Step-by-Step Deployment
1. Make structural or content updates within the development workspace directory.
2. Synchronize target content tracking folders:
   ```bash
   cp src/content/pages/resume.md /root/opt/appdata/astro-portfolio/src/content/pages/resume.md
