---
title: "NIST CSF 2.0 Security Audit"
summary: "NIST CSF 2.0 Cybersecurity Compliance Assessment and mitigation blueprints."
status: "COMPLIANCE REVIEW"
statusTone: "yellow"
icon: "shield"
order: 2
destination: "Enterprise-Simulated Testing Environment"
vehicle: "NIST CSF 2.0 / GRC Protocol"
missionWindow: "Q2 2026"
---

# **NIST CSF 2.0 Cybersecurity Compliance Assessment**

**Target Infrastructure:** Mas Wild Labs  
**Assessor:** GRC Analyst Framework Draft  
**Framework Version Alignment:** NIST Cybersecurity Framework (CSF) v2.0  
**Document Classification:** Internal Use Only / Proprietary Information  

---
<br />

## **Executive Summary**

An independent cybersecurity compliance assessment was conducted on the core infrastructure of Mas Wild Labs. The objective of this assessment was to evaluate the laboratory environment against the foundational pillars of the NIST Cybersecurity Framework (CSF) 2.0, specifically targeting Asset Management (**ID.AM**), Identity Management & Access Control (**PR.AA**), and Data Security (**PR.DS**).

<br />

### **State of the Environment**

The Mas Wild Labs environment represents a highly customized, dual-home, enterprise-simulated testing environment. The infrastructure integrates robust perimeter and distribution switching hardware (Ubiquiti/AT&T) alongside an isolated hypervisor host platform (Proxmox VE) orchestrating specialized edge endpoints (Android, Linux, and Windows-based digital signage players) and non-standard BYOD systems (Xbox X).

The assessment revealed highly commendable security engineering, most notably vendor-enforced Multi-Factor Authentication (MFA) on perimeter gateways and strategic, dual-homed logical network isolation. However, several critical deficiencies were identified concerning single-factor administrative accounts, cleartext-equivalent remote command-line interfaces, local workstation authentication bypasses, and an unverified backup recovery strategy.

This document serves as the formal record of findings, business risk translations, and actionable remediation roadmaps designed to bring Mas Wild Labs into complete foundational compliance.


---
<br />

## **Section 1: Physical & Logical Asset Management (ID.AM)**

<br />


### **1.1 Control Baseline (Current Inventory)**

Per NIST CSF 2.0 **ID.AM-01**, a comprehensive physical and logical hardware baseline must be maintained.

<br />

<div style="display: flex; flex-direction: column; gap: 1.5rem; font-family: monospace; font-size: 0.9rem; color: #ffffff;">
  
  <div style="display: flex; font-weight: 700; color: #98BF92; border-bottom: 2px solid rgba(255,255,255,0.15); padding-bottom: 0.5rem;">
    <div style="flex: 2;">Hostname</div>
    <div style="flex: 3;">Device Type</div>
    <div style="flex: 3;">OS / Firmware</div>
    <div style="flex: 2;">IP Address</div>
    <div style="flex: 2;">Location</div>
  </div>

  <div style="display: flex; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 0.5rem;">
    <div style="flex: 2; font-weight: 700;">ATT-Gateway</div>
    <div style="flex: 3; color: rgba(255,255,255,0.7);">ISP Router/Modem</div>
    <div style="flex: 3; color: rgba(255,255,255,0.7);">ATT Firmware</div>
    <div style="flex: 2;">192.168.x.x</div>
    <div style="flex: 2; color: #98BF92;">Desk</div>
  </div>

  <div style="display: flex; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 0.5rem;">
    <div style="flex: 2; font-weight: 700;">MasWild Gateway</div>
    <div style="flex: 3; color: rgba(255,255,255,0.7);">Gateway</div>
    <div style="flex: 3; color: rgba(255,255,255,0.7);">Ubiquiti</div>
    <div style="flex: 2;">172.16.0.3</div>
    <div style="flex: 2; color: #98BF92;">Desk</div>
  </div>

  <div style="display: flex; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 0.5rem;">
    <div style="flex: 2; font-weight: 700;">MasWild Desk</div>
    <div style="flex: 3; color: rgba(255,255,255,0.7);">8-Port PoE Switch</div>
    <div style="flex: 3; color: rgba(255,255,255,0.7);">Ubiquiti</div>
    <div style="flex: 2;">172.16.0.5</div>
    <div style="flex: 2; color: #98BF92;">Desk</div>
  </div>

  <div style="display: flex; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 0.5rem;">
    <div style="flex: 2; font-weight: 700;">MasWild Lab</div>
    <div style="flex: 3; color: rgba(255,255,255,0.7);">16-Port PoE Switch</div>
    <div style="flex: 3; color: rgba(255,255,255,0.7);">Ubiquiti</div>
    <div style="flex: 2;">172.16.0.7</div>
    <div style="flex: 2; color: #98BF92;">Under TV</div>
  </div>

  <div style="display: flex; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 0.5rem;">
    <div style="flex: 2; font-weight: 700;">MasWildIoT</div>
    <div style="flex: 3; color: rgba(255,255,255,0.7);">UK-Ultra WAP</div>
    <div style="flex: 3; color: rgba(255,255,255,0.7);">Ubiquiti</div>
    <div style="flex: 2;">172.16.0.9</div>
    <div style="flex: 2; color: #98BF92;">Under TV</div>
  </div>

  <div style="display: flex; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 0.5rem;">
    <div style="flex: 2; font-weight: 700;">MasWild Server</div>
    <div style="flex: 3; color: rgba(255,255,255,0.7);">Mini PC Cluster</div>
    <div style="flex: 3; color: rgba(255,255,255,0.7);">Proxmox VE</div>
    <div style="flex: 2; font-size: 0.8rem;">172.16.10.2 / .30.2</div>
    <div style="flex: 2; color: #98BF92;">Under TV</div>
  </div>

  <div style="display: flex; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 0.5rem;">
    <div style="flex: 2; font-weight: 700;">NVIDIA Enplug</div>
    <div style="flex: 3; color: rgba(255,255,255,0.7);">Signage Player</div>
    <div style="flex: 3; color: rgba(255,255,255,0.7);">Android</div>
    <div style="flex: 2; color: rgba(255,255,255,0.4);">DHCP</div>
    <div style="flex: 2; color: #98BF92;">Under TV</div>
  </div>

  <div style="display: flex; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 0.5rem;">
    <div style="flex: 2; font-weight: 700;">NVIDIA DSX</div>
    <div style="flex: 3; color: rgba(255,255,255,0.7);">Signage Player</div>
    <div style="flex: 3; color: rgba(255,255,255,0.7);">Android</div>
    <div style="flex: 2; color: rgba(255,255,255,0.4);">DHCP</div>
    <div style="flex: 2; color: #98BF92;">Under TV</div>
  </div>

  <div style="display: flex; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 0.5rem;">
    <div style="flex: 2; font-weight: 700;">Brightsign Enplug</div>
    <div style="flex: 3; color: rgba(255,255,255,0.7);">Signage Player</div>
    <div style="flex: 3; color: rgba(255,255,255,0.7);">Linux</div>
    <div style="flex: 2; color: rgba(255,255,255,0.4);">DHCP</div>
    <div style="flex: 2; color: #98BF92;">Under TV</div>
  </div>

  <div style="display: flex; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 0.5rem;">
    <div style="flex: 2; font-weight: 700;">Windows Enplug</div>
    <div style="flex: 3; color: rgba(255,255,255,0.7);">Signage Player</div>
    <div style="flex: 3; color: rgba(255,255,255,0.7);">Windows 11</div>
    <div style="flex: 2; color: rgba(255,255,255,0.4);">DHCP</div>
    <div style="flex: 2; color: #98BF92;">Under TV</div>
  </div>

  <div style="display: flex; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 0.5rem;">
    <div style="flex: 2; font-weight: 700;">Xbox X</div>
    <div style="flex: 3; color: rgba(255,255,255,0.7);">Game Console / BYOD</div>
    <div style="flex: 3; color: rgba(255,255,255,0.7);">Xbox OS</div>
    <div style="flex: 2; color: rgba(255,255,255,0.4);">DHCP</div>
    <div style="flex: 2; color: #98BF92;">Under TV</div>
  </div>

  <div style="display: flex; border-bottom: 1px solid rgba(255,255,255,0.15); padding-bottom: 0.5rem;">
    <div style="flex: 2; font-weight: 700;">HP Envy Printer</div>
    <div style="flex: 3; color: rgba(255,255,255,0.7);">Network Printer</div>
    <div style="flex: 3; color: rgba(255,255,255,0.7);">HP Firmware</div>
    <div style="flex: 2; color: rgba(255,255,255,0.4);">DHCP</div>
    <div style="flex: 2; color: #98BF92;">Near Closet</div>
  </div>

</div>

---
<br />

#### **Control Note ID.AM-01.B: Advanced Network Segmentation (VLAN Isolation)**
<br />


* **Condition:** Broad proliferation of consumer IoT nodes and high-bandwidth BYOD entertainment hardware (Xbox X) exists within the facility footprint.
* **Audit Verification:** Network architecture review confirms strict cryptographic isolation. Consumer IoT platforms are confined to VLAN 20 (IoT Subnet), and the Xbox console is restricted to VLAN 30 (Lab Subnet).
* **Risk Status:** **Low / Fully Controlled.** This multi-VLAN logical framework prevents lateral traversal. If an internet-facing edge asset is compromised, strict Access Control Lists (ACLs) prevent malicious actors from interacting with the critical core management subnet (`172.16.10.x`).

<br />
<br />

### **1.2 Identified Deficiencies & Risk Analysis**

#### **Control Note ID.AM-01.A: Protected Physical Media Routing**

* **Condition:** A 20ft Cat6 Ethernet media cable provides critical connection infrastructure across the physical laboratory environment between the eastern and western perimeters (Gateway to the 16-Port PoE Switch).
* **Audit Verification:** Physical inspection confirms the media line is routed entirely behind heavy laboratory furniture, completely isolated from active foot traffic lanes.
* **Risk Status:** **Low / Fully Controlled.** The positioning of the furniture acts as a passive engineering control, safeguarding the media line from physical snagging, accidental tension disconnection, or structural port strain. No further physical remediation is required.

<br />

#### **Finding ID.AM-01.B: Unmanaged Proliferation of Consumer-Grade IoT & BYOD Assets**

* **Condition:** The network hosts several consumer-grade IoT devices (automated pet feeders, smart vehicle links, fountain controllers) alongside an entertainment console (Xbox X) and a network printer (HP Envy Printer) on dynamic DHCP leases.
* **Vulnerability:** Dynamic IP addressing creates logging and visibility drift during forensic tracking. Furthermore, consumer IoT devices commonly possess unpatchable firmware vulnerabilities and lack centralized endpoint protection agents.
* **Business Risk:** Increased lateral attack surface. If an attacker leverages an unpatched exploit in an external smart device (e.g., the smart fountain), they instantly establish a malicious network footprint. Because these devices live alongside the core lab infrastructure, the attacker can use this foothold to launch lateral reconnaissance scans against the primary hypervisor management server.
* **Remediation Plan:** Configure explicit DHCP Reservations (IP-to-MAC mapping) on the Ubiquiti controller for all baseline lab nodes to stop tracking drift. Isolate all non-corporate consumer devices, the Xbox console, and the printer onto a cryptographically distinct Guest Wi-Fi VLAN configured with strict Access Control Lists (ACLs) to completely block inbound communication to the `172.16.10.x` management subnet.

<br />
<br />
<br />

---

## **Section 2: Identity Management & Access Control (PR.AA / PR.PS)**

<br />

### **2.1 Access Control Baseline (Authentication Matrix)**

Per NIST CSF 2.0 **PR.AA-01** and **PR.AA-02**, access to system interfaces must be authenticated, restricted based on role, and secured via cryptographic strength.

***

**Target Endpoint: Ubiquiti Gateway UI**
* **Account / Role Type:** Admin / SuperUser
* **Authentication Method:** Password (Custom String)
* **Multi-Factor Authentication:** Yes (Enforced by Vendor)

<br />

**Target Endpoint: MasWild Server (Proxmox UI)**
* **Account / Role Type:** Root & Admin Accounts
* **Authentication Method:** Password (Standard Complex Alphanumeric)
* **Multi-Factor Authentication:** No

<br />

**Target Endpoint: MasWild Server (SSH / WinSCP)**
* **Account / Role Type:** Root SuperUser
* **Authentication Method:** Password (Standard Complex Alphanumeric)
* **Multi-Factor Authentication:** No

<br />

**Target Endpoint: MasWild Desk (PC OS Login)**
* **Account / Role Type:** Local User Account
* **Authentication Method:** None (Auto-Login Profile Configured)
* **Multi-Factor Authentication:** No

***

<br />
<br />

### **2.2 Control Baseline: Infrastructure & Port Hygiene**

Per NIST CSF 2.0 **PR.PS-01** and **PR.IR-02**, physical and logical switch architecture must enforce least functionality by restricting entry pathways.

* **Physical Ports:** **Fully Hardened.** Administrative review verifies that 100% of unused physical RJ45 interfaces across the MasWild Desk and MasWild Lab switches have been manually toggled to a Disabled/Locked state within the Ubiquiti network controller dashboard. This completely mitigates rogue local hardware insertions.

<br />

* **Logical Services:** Management access runs over well-known default administrative configurations (Port 22 for SSH). *(This remains an open finding to be resolved with SSH Keys later).*

<br />
<br />

### **2.3 Identified Deficiencies & Risk Analysis**

#### **Finding PR.AA-01.A: Automated Workstation Operating System Authentication Bypass**

* **Condition:** The main workstation console (MasWild Desk) is configured to completely bypass the Windows operating system credential challenge screen, executing an automatic login directly to an un-locked state upon hardware boot.
* **Vulnerability:** Total absence of identity authentication controls at the primary local endpoint perimeter.
* **Business Risk:** Unauthorized physical access exploit. Any insider threat or unauthorized visitor gaining physical proximity to the desk can boot or wake the workstation and inherit instantaneous access to the local file system, browser-cached passwords, session tokens, and active corporate GRC documentation without a credential challenge.
* **Remediation Plan:** Disable the automated login feature immediately via system registry modifications (`netplwiz`). Enforce a mandatory, complex Windows Hello PIN or alphanumeric passphrase requirement upon every initial boot, system restart, and wake-from-sleep command.

<br />

#### **Finding PR.AA-01.B: Privileged Root Shell Access via Cleartext Password Protocols**

* **Condition:** Remote administrative file transfer and command-line management protocols (SSH and WinSCP) target the all-powerful root superuser account secured solely by a standard, single-factor alphanumeric password.
* **Vulnerability:** Over-reliance on single-factor, guessable credentials on an unprotected administrative daemon.
* **Business Risk:** High risk of brute-force compromise and lateral movement. Automated scripts from compromised edge devices can run continuous dictionary attacks against the open port 22. Because there is no secondary factor or key verification, a single successful credential guess instantly gives an attacker root hypervisor control, destroying system confidentiality and integrity.
* **Remediation Plan:**
  1. Generate an asymmetrical SSH Public/Private Key Pair (RSA 4096-bit or Ed25519) on the management workstation.
  2. Install the public key onto the server and update the SSH daemon configuration file (`sshd_config`) to explicitly set `PasswordAuthentication no`, forcing the protocol to reject all password-based login attempts.
  3. Disable direct remote login access for the root account (`PermitRootLogin no`), requiring all remote admin workflows to login as a standard user and escalate privileges locally via `sudo`.

<br />

#### **Finding PR.AA-01.C: Hypervisor Single Point of Failure (Implicit Trust)**

* **Condition:** Once authenticated into the Proxmox VE hypervisor UI web dashboard, administrative control grants direct console access to all underlying virtual machines and container environments without requiring independent sub-credential challenges.
* **Vulnerability:** Single Point of Failure across the virtualization fabric.
* **Business Risk:** Maximized blast radius. The security posture of every independent testing environment, container database, and web service relies 100% on the single login screen of the Proxmox panel. If an attacker gains access to this web interface, the blast radius is immediate and absolute across all sub-workloads.
* **Remediation Plan:** Fortify the hypervisor interface perimeter. Enforce a rigorous Time-Based One-Time Password (TOTP) Multi-Factor Authentication token requirement (via Google Authenticator or Microsoft Authenticator) directly onto the Proxmox UI login portal, matching the high compliance standard set by the Ubiquiti Gateway.

<br />

#### **Finding PR.PS-01.A: Unused Physical Ethernet Interfaces and Open Network Services**

* **Condition:** Multiple physical Ethernet ports on the network switches are active but unassigned. Additionally, logical network daemons are left in default open configurations.
* **Vulnerability:** Exposed logical attack vectors due to lack of network-level least functionality and port-lockdown configurations.
* **Contextual Risk Correction:** While the physical perimeter is considered low-risk due to zero unauthorized physical occupancy inside the facility, logical exposure remains high. If a remote attacker compromises a single network-adjacent endpoint (such as an Android-based digital signage player via an unpatched application vulnerability), the threat actor inherits an active logical foothold on the switch plane. From there, they can execute automated port scans across all open internal network interfaces.
* **Remediation Plan:**
  * **Disable Unused Physical Switching Ports:** Access the Ubiquiti network controller dashboard and manually set all unused physical RJ45 ports to a Disabled state to prevent rogue device communication.
  * **Restrict Network Broadcasts / UPnP:** Explicitly disable UPnP (Universal Plug and Play) on the AT&T and Ubiquiti gateways to prevent streaming endpoints from automatically requesting dynamic firewall port-forwarding rules.
  * **Implement Non-Standard Administrative Listening Ports:** Shift the primary management listening port for SSH/WinSCP on the server away from the well-known factory default (Port 22) to an alternative, high-numbered custom socket (e.g., Port 2222 or higher) to break automated discovery scripts.

<br />
<br />
<br />

---

## **Section 3: Data Security & Resiliency (PR.DS)**

<br />

### **3.1 Control Baseline (Data Redundancy Strategy)**

Per NIST CSF 2.0 **PR.DS-11**, backup assets and configuration status must be maintained and tested regularly to ensure operational resilience. Currently, lightweight hypervisor configurations, local database schemas, and digital signage player logistics are backed up monthly to a secure cloud repository.

<br />

#### **Finding PR.DS-11.A: Unverified Disaster Recovery and Backup Restoration Integrity**

* **Condition:** While routine automated configuration backups are systematically directed to remote storage boundaries, a formal restoration validation drill has never been successfully executed.
* **Vulnerability:** Total reliance on unverified data redundancy pipelines without recovery validation.
* **Business Risk:** High risk of permanent data loss and extended recovery downtime. If a primary hardware failure or hypervisor corruption occurs, the organization must rely entirely on unverified data assets. If those files are corrupted or unreadable, Mas Wild Labs faces a total loss of testing environments and a complete disruption of operations.
* **Remediation Plan:** Implement a mandatory, bi-annual Disaster Recovery drill. GRC or infrastructure personnel must pull a random configuration archive from cloud storage and actively restore it inside an isolated sandbox environment to document recovery speed and verify data block integrity.

<br />
<br />
<br />

---

## **Section 4: Document Control & Sign-Off**

<br />

### **4.1 Assessment Summary & Continuous Improvement**

This compliance assessment establishes the initial security baseline for Mas Wild Labs under the NIST CSF 2.0 framework. While the perimeter controls (Ubiquiti MFA) and network architecture (dual homing) demonstrate a mature structural foundation, the immediate risk posture of the organization is heavily dependent on executing the remediation paths outlined in this report.

Per the continuous improvement guidelines of the NIST framework, a follow-up mini-assessment is recommended in Q3 to verify the status of:
* Workstation auto-login deactivation.
* Cryptographic SSH key deployment.
* Logical network switch port shutdowns.
* The initial disaster recovery validation drill.

<br />

### **4.2 Formal Sign-Off**

By signing below, the Lead Assessor validates that the current baseline inventory, access matrices, and operational data security deficiencies have been recorded with high resolution and structural accuracy.

**Assessor Signature:** Stephanie R. Wilder  
**Role:** Lead GRC Security Analyst  
**Date of Sign-Off:** May 28, 2026  

<br />
<br />
<br />

---

## **Section 5: Appendix — Framework Cross-Mapping Matrix**

<br />

This matrix maps the identified risks and controlled engineering states of Mas Wild Labs to alternative international security standards, proving multi-framework compliance alignment.

***

**Risk ID: R-01**
* **Core Vulnerability:** Windows Auto-Login Bypass
* **NIST CSF 2.0:** `PR.AA-01` / `PR.AA-02`
* **CIS Controls v8:** Control 6.1 (MFA/Passwords)
* **ISO/IEC 27001:2022:** A.8.5 (Secure Auth)

<br />

**Risk ID: R-02**
* **Core Vulnerability:** Privileged Root Shell Over Cleartext
* **NIST CSF 2.0:** `PR.AA-01` / `PR.PS-01`
* **CIS Controls v8:** Control 4.8 (Secure SSH)
* **ISO/IEC 27001:2022:** A.8.20 / A.5.15 (Access)

<br />

**Risk ID: R-03**
* **Core Vulnerability:** Long-run Cat6 Cable Exposure
* **NIST CSF 2.0:** `ID.AM-01` / `PR.PS-01`
* **CIS Controls v8:** Control 3.12 (Segment Network)
* **ISO/IEC 27001:2022:** A.7.10 (Physical Protection)

<br />

**Risk ID: R-04**
* **Core Vulnerability:** Backup Recovery Validation Missing
* **NIST CSF 2.0:** `PR.DS-11`
* **CIS Controls v8:** Control 11.2 (Backup Testing)
* **ISO/IEC 27001:2022:** A.8.13 (Backup Policy)

<br />

**Risk ID: R-05**
* **Core Vulnerability:** Consumer IoT/BYOD Isolation Status
* **NIST CSF 2.0:** `ID.AM-01` / `PR.IR-02`
* **CIS Controls v8:** Control 12.2 (Secure VLAN Architecture)
* **ISO/IEC 27001:2022:** A.8.22 (Network Segregation)

<br />

**Risk ID: R-06**
* **Core Vulnerability:** Inactive Switch Port Status
* **NIST CSF 2.0:** `PR.PS-01`
* **CIS Controls v8:** Control 12.4 (Port Lockdown)
* **ISO/IEC 27001:2022:** A.8.20 (Network Control)

***