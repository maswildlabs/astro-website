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

<h1 style="margin-top: 2rem; margin-bottom: 1.5rem;">NIST CSF 2.0 Cybersecurity Compliance Assessment</h1>

<p style="margin-bottom: 0.5rem;"><strong>Target Infrastructure:</strong> Mas Wild Labs</p>
<p style="margin-bottom: 0.5rem;"><strong>Assessor:</strong> GRC Analyst Framework Draft</p>
<p style="margin-bottom: 0.5rem;"><strong>Framework Version Alignment:</strong> NIST Cybersecurity Framework (CSF) v2.0</p>
<p style="margin-bottom: 2rem;"><strong>Document Classification:</strong> Internal Use Only / Proprietary Information</p>

<hr style="margin-top: 2rem; margin-bottom: 2rem;" />

<h2 style="margin-top: 2.5rem; margin-bottom: 1.5rem;">Executive Summary</h2>

<p style="margin-top: 1rem; margin-bottom: 1.5rem; line-height: 1.6;">An independent cybersecurity compliance assessment was conducted on the core infrastructure of Mas Wild Labs. The objective of this assessment was to evaluate the laboratory environment against the foundational pillars of the NIST Cybersecurity Framework (CSF) 2.0, specifically targeting Asset Management (<strong>ID.AM</strong>), Identity Management & Access Control (<strong>PR.AA</strong>), and Data Security (<strong>PR.DS</strong>).</p>

<h3 style="margin-top: 2rem; margin-bottom: 1rem;">State of the Environment</h3>

<p style="margin-top: 1rem; margin-bottom: 1.5rem; line-height: 1.6;">The Mas Wild Labs environment represents a highly customized, dual-home, enterprise-simulated testing environment. The infrastructure integrates robust perimeter and distribution switching hardware (Ubiquiti/AT&T) alongside an isolated hypervisor host platform (Proxmox VE) orchestrating specialized edge endpoints (Android, Linux, and Windows-based digital signage players) and non-standard BYOD systems (Xbox X).</p>

<p style="margin-top: 1rem; margin-bottom: 1.5rem; line-height: 1.6;">The assessment revealed highly commendable security engineering, most notably vendor-enforced Multi-Factor Authentication (MFA) on perimeter gateways and strategic, dual-homed logical network isolation. However, several critical deficiencies were identified concerning single-factor administrative accounts, cleartext-equivalent remote command-line interfaces, local workstation authentication bypasses, and an unverified backup recovery strategy.</p>

<p style="margin-top: 1rem; margin-bottom: 2rem; line-height: 1.6;">This document serves as the formal record of findings, business risk translations, and actionable remediation roadmaps designed to bring Mas Wild Labs into complete foundational compliance.</p>

<hr style="margin-top: 2rem; margin-bottom: 2rem;" />

<h2 style="margin-top: 2.5rem; margin-bottom: 1.5rem;">Section 1: Physical & Logical Asset Management (ID.AM)</h2>

<h3 style="margin-top: 2rem; margin-bottom: 1rem;">1.1 Control Baseline (Current Inventory)</h3>

<p style="margin-top: 1rem; margin-bottom: 1.5rem; line-height: 1.6;">Per NIST CSF 2.0 <strong>ID.AM-01</strong>, a comprehensive physical and logical hardware baseline must be maintained.</p>

<table width="100%" cellpadding="8" cellspacing="0" border="0" style="margin-top: 1.5rem; margin-bottom: 2rem;">
  <thead>
    <tr style="border-bottom: 2px solid #555; text-align: left; font-weight: bold;">
      <th>Hostname</th>
      <th>Device Type</th>
      <th>OS / Firmware</th>
      <th>IP Address</th>
      <th>Location</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #333;">
      <td><strong>ATT-Gateway</strong></td>
      <td>ISP Router/Modem</td>
      <td>ATT Firmware</td>
      <td>192.168.x.x</td>
      <td>Desk</td>
    </tr>
    <tr style="border-bottom: 1px solid #333;">
      <td><strong>MasWild Gateway</strong></td>
      <td>Gateway</td>
      <td>Ubiquiti</td>
      <td>172.16.0.3</td>
      <td>Desk</td>
    </tr>
    <tr style="border-bottom: 1px solid #333;">
      <td><strong>MasWild Desk</strong></td>
      <td>8-Port PoE Switch</td>
      <td>Ubiquiti</td>
      <td>172.16.0.5</td>
      <td>Desk</td>
    </tr>
    <tr style="border-bottom: 1px solid #333;">
      <td><strong>MasWild Lab</strong></td>
      <td>16-Port PoE Switch</td>
      <td>Ubiquiti</td>
      <td>172.16.0.7</td>
      <td>Under TV</td>
    </tr>
    <tr style="border-bottom: 1px solid #333;">
      <td><strong>MasWildIoT</strong></td>
      <td>UK-Ultra WAP</td>
      <td>Ubiquiti</td>
      <td>172.16.0.9</td>
      <td>Under TV</td>
    </tr>
    <tr style="border-bottom: 1px solid #333;">
      <td><strong>MasWild Server</strong></td>
      <td>Mini PC Cluster</td>
      <td>Proxmox VE</td>
      <td>172.16.10.2 / .30.2</td>
      <td>Under TV</td>
    </tr>
    <tr style="border-bottom: 1px solid #333;">
      <td><strong>NVIDIA Enplug</strong></td>
      <td>Signage Player</td>
      <td>Android</td>
      <td>DHCP</td>
      <td>Under TV</td>
    </tr>
    <tr style="border-bottom: 1px solid #333;">
      <td><strong>NVIDIA DSX</strong></td>
      <td>Signage Player</td>
      <td>Android</td>
      <td>DHCP</td>
      <td>Under TV</td>
    </tr>
    <tr style="border-bottom: 1px solid #333;">
      <td><strong>Brightsign Enplug</strong></td>
      <td>Signage Player</td>
      <td>Linux</td>
      <td>DHCP</td>
      <td>Under TV</td>
    </tr>
    <tr style="border-bottom: 1px solid #333;">
      <td><strong>Windows Enplug</strong></td>
      <td>Signage Player</td>
      <td>Windows 11</td>
      <td>DHCP</td>
      <td>Under TV</td>
    </tr>
    <tr style="border-bottom: 1px solid #333;">
      <td><strong>Xbox X</strong></td>
      <td>Game Console / BYOD</td>
      <td>Xbox OS</td>
      <td>DHCP</td>
      <td>Under TV</td>
    </tr>
    <tr style="border-bottom: 2px solid #555;">
      <td><strong>HP Envy Printer</strong></td>
      <td>Network Printer</td>
      <td>HP Firmware</td>
      <td>DHCP</td>
      <td>Near Closet</td>
    </tr>
  </tbody>
</table>

<h4 style="margin-top: 2rem; margin-bottom: 1rem;">Control Note ID.AM-01.B: Advanced Network Segmentation (VLAN Isolation)</h4>

<ul style="margin-top: 1rem; margin-bottom: 2rem;">
  <li style="margin-bottom: 0.75rem;"><strong>Condition:</strong> Broad proliferation of consumer IoT nodes and high-bandwidth BYOD entertainment hardware (Xbox X) exists within the facility footprint.</li>
  <li style="margin-bottom: 0.75rem;"><strong>Audit Verification:</strong> Network architecture review confirms strict cryptographic isolation. Consumer IoT platforms are confined to VLAN 20 (IoT Subnet), and the Xbox console is restricted to VLAN 30 (Lab Subnet).</li>
  <li style="margin-bottom: 0.75rem;"><strong>Risk Status:</strong> <strong>Low / Fully Controlled.</strong> This multi-VLAN logical framework prevents lateral traversal. If an internet-facing edge asset is compromised, strict Access Control Lists (ACLs) prevent malicious actors from interacting with the critical core management subnet (<code>172.16.10.x</code>).</li>
</ul>

<h3 style="margin-top: 2.5rem; margin-bottom: 1.5rem;">1.2 Identified Deficiencies & Risk Analysis</h3>

<h4 style="margin-top: 2rem; margin-bottom: 1rem;">Control Note ID.AM-01.A: Protected Physical Media Routing</h4>

<ul style="margin-top: 1rem; margin-bottom: 2rem;">
  <li style="margin-bottom: 0.75rem;"><strong>Condition:</strong> A 20ft Cat6 Ethernet media cable provides critical connection infrastructure across the physical laboratory environment between the eastern and western perimeters (Gateway to the 16-Port PoE Switch).</li>
  <li style="margin-bottom: 0.75rem;"><strong>Audit Verification:</strong> Physical inspection confirms the media line is routed entirely behind heavy laboratory furniture, completely isolated from active foot traffic lanes.</li>
  <li style="margin-bottom: 0.75rem;"><strong>Risk Status:</strong> <strong>Low / Fully Controlled.</strong> The positioning of the furniture acts as a passive engineering control, safeguarding the media line from physical snagging, accidental tension disconnection, or structural port strain. No further physical remediation is required.</li>
</ul>

<h4 style="margin-top: 2rem; margin-bottom: 1rem;">Finding ID.AM-01.B: Unmanaged Proliferation of Consumer-Grade IoT & BYOD Assets</h4>

<ul style="margin-top: 1rem; margin-bottom: 2rem;">
  <li style="margin-bottom: 0.75rem;"><strong>Condition:</strong> The network hosts several consumer-grade IoT devices (automated pet feeders, smart vehicle links, fountain controllers) alongside an entertainment console (Xbox X) and a network printer (HP Envy Printer) on dynamic DHCP leases.</li>
  <li style="margin-bottom: 0.75rem;"><strong>Vulnerability:</strong> Dynamic IP addressing creates logging and visibility drift during forensic tracking. Furthermore, consumer IoT devices commonly possess unpatchable firmware vulnerabilities and lack centralized endpoint protection agents.</li>
  <li style="margin-bottom: 0.75rem;"><strong>Business Risk:</strong> Increased lateral attack surface. If an attacker leverages an unpatched exploit in an external smart device (e.g., the smart fountain), they instantly establish a malicious network footprint. Because these devices live alongside the core lab infrastructure, the attacker can use this foothold to launch lateral reconnaissance scans against the primary hypervisor management server.</li>
  <li style="margin-bottom: 0.75rem;"><strong>Remediation Plan:</strong> Configure explicit DHCP Reservations (IP-to-MAC mapping) on the Ubiquiti controller for all baseline lab nodes to stop tracking drift. Isolate all non-corporate consumer devices, the Xbox console, and the printer onto a cryptographically distinct Guest Wi-Fi VLAN configured with strict Access Control Lists (ACLs) to completely block inbound communication to the <code>172.16.10.x</code> management subnet.</li>
</ul>

<hr style="margin-top: 2rem; margin-bottom: 2rem;" />

<h2 style="margin-top: 2.5rem; margin-bottom: 1.5rem;">Section 2: Identity Management & Access Control (PR.AA / PR.PS)</h2>

<h3 style="margin-top: 2rem; margin-bottom: 1rem;">2.1 Access Control Baseline (Authentication Matrix)</h3>

<p style="margin-top: 1rem; margin-bottom: 1.5rem; line-height: 1.6;">Per NIST CSF 2.0 <strong>PR.AA-01</strong> and <strong>PR.AA-02</strong>, access to system interfaces must be authenticated, restricted based on role, and secured via cryptographic strength.</p>

<table width="100%" cellpadding="8" cellspacing="0" border="0" style="margin-top: 1.5rem; margin-bottom: 2rem;">
  <thead>
    <tr style="border-bottom: 2px solid #555; text-align: left; font-weight: bold;">
      <th>Target Endpoint</th>
      <th>Account / Role Type</th>
      <th>Authentication Method</th>
      <th>Multi-Factor Authentication</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #333;">
      <td><strong>Ubiquiti Gateway UI</strong></td>
      <td>Admin / SuperUser</td>
      <td>Password (Custom String)</td>
      <td>Yes (Enforced by Vendor)</td>
    </tr>
    <tr style="border-bottom: 1px solid #333;">
      <td><strong>MasWild Server (Proxmox UI)</strong></td>
      <td>Root & Admin Accounts</td>
      <td>Password (Standard Complex Alphanumeric)</td>
      <td>No</td>
    </tr>
    <tr style="border-bottom: 1px solid #333;">
      <td><strong>MasWild Server (SSH / WinSCP)</strong></td>
      <td>Root SuperUser</td>
      <td>Password (Standard Complex Alphanumeric)</td>
      <td>No</td>
    </tr>
    <tr style="border-bottom: 2px solid #555;">
      <td><strong>MasWild Desk (PC OS Login)</strong></td>
      <td>Local User Account</td>
      <td>None (Auto-Login Profile Configured)</td>
      <td>No</td>
    </tr>
  </tbody>
</table>

<h3 style="margin-top: 2.5rem; margin-bottom: 1.5rem;">2.2 Control Baseline: Infrastructure & Port Hygiene</h3>

<p style="margin-top: 1rem; margin-bottom: 1.5rem; line-height: 1.6;">Per NIST CSF 2.0 <strong>PR.PS-01</strong> and <strong>PR.IR-02</strong>, physical and logical switch architecture must enforce least functionality by restricting entry pathways.</p>

<ul style="margin-top: 1rem; margin-bottom: 2rem;">
  <li style="margin-bottom: 0.75rem;"><strong>Physical Ports:</strong> <strong>Fully Hardened.</strong> Administrative review verifies that 100% of unused physical RJ45 interfaces across the MasWild Desk and MasWild Lab switches have been manually toggled to a Disabled/Locked state within the Ubiquiti network controller dashboard. This completely mitigates rogue local hardware insertions.</li>
  <li style="margin-bottom: 0.75rem;"><strong>Logical Services:</strong> Management access runs over well-known default administrative configurations (Port 22 for SSH). <em>(This remains an open finding to be resolved with SSH Keys later).</em></li>
</ul>

<h3 style="margin-top: 2.5rem; margin-bottom: 1.5rem;">2.3 Identified Deficiencies & Risk Analysis</h3>

<h4 style="margin-top: 2rem; margin-bottom: 1rem;">Finding PR.AA-01.A: Automated Workstation Operating System Authentication Bypass</h4>

<ul style="margin-top: 1rem; margin-bottom: 2rem;">
  <li style="margin-bottom: 0.75rem;"><strong>Condition:</strong> The main workstation console (MasWild Desk) is configured to completely bypass the Windows operating system credential challenge screen, executing an automatic login directly to an un-locked state upon hardware boot.</li>
  <li style="margin-bottom: 0.75rem;"><strong>Vulnerability:</strong> Total absence of identity authentication controls at the primary local endpoint perimeter.</li>
  <li style="margin-bottom: 0.75rem;"><strong>Business Risk:</strong> Unauthorized physical access exploit. Any insider threat or unauthorized visitor gaining physical proximity to the desk can boot or wake the workstation and inherit instantaneous access to the local file system, browser-cached passwords, session tokens, and active corporate GRC documentation without a credential challenge.</li>
  <li style="margin-bottom: 0.75rem;"><strong>Remediation Plan:</strong> Disable the automated login feature immediately via system registry modifications (<code>netplwiz</code>). Enforce a mandatory, complex Windows Hello PIN or alphanumeric passphrase requirement upon every initial boot, system restart, and wake-from-sleep command.</li>
</ul>

<h4 style="margin-top: 2rem; margin-bottom: 1rem;">Finding PR.AA-01.B: Privileged Root Shell Access via Cleartext Password Protocols</h4>

<ul style="margin-top: 1rem; margin-bottom: 2rem;">
  <li style="margin-bottom: 0.75rem;"><strong>Condition:</strong> Remote administrative file transfer and command-line management protocols (SSH and WinSCP) target the all-powerful root superuser account secured solely by a standard, single-factor alphanumeric password.</li>
  <li style="margin-bottom: 0.75rem;"><strong>Vulnerability:</strong> Over-reliance on single-factor, guessable credentials on an unprotected administrative daemon.</li>
  <li style="margin-bottom: 0.75rem;"><strong>Business Risk:</strong> High risk of brute-force compromise and lateral movement. Automated scripts from compromised edge devices can run continuous dictionary attacks against the open port 22. Because there is no secondary factor or key verification, a single successful credential guess instantly gives an attacker root hypervisor control, destroying system confidentiality and integrity.</li>
  <li style="margin-bottom: 0.75rem;"><strong>Remediation Plan:</strong>
    <ol style="margin-top: 0.5rem; margin-bottom: 0.5rem;">
      <li style="margin-bottom: 0.5rem;">Generate an asymmetrical SSH Public/Private Key Pair (RSA 4096-bit or Ed25519) on the management workstation.</li>
      <li style="margin-bottom: 0.5rem;">Install the public key onto the server and update the SSH daemon configuration file (<code>sshd_config</code>) to explicitly set <code>PasswordAuthentication no</code>, forcing the protocol to reject all password-based login attempts.</li>
      <li style="margin-bottom: 0.5rem;">Disable direct remote login access for the root account (<code>PermitRootLogin no</code>), requiring all remote admin workflows to login as a standard user and escalate privileges locally via <code>sudo</code>.</li>
    </ol>
  </li>
</ul>

<h4 style="margin-top: 2rem; margin-bottom: 1rem;">Finding PR.AA-01.C: Hypervisor Single Point of Failure (Implicit Trust)</h4>

<ul style="margin-top: 1rem; margin-bottom: 2rem;">
  <li style="margin-bottom: 0.75rem;"><strong>Condition:</strong> Once authenticated into the Proxmox VE hypervisor UI web dashboard, administrative control grants direct console access to all underlying virtual machines and container environments without requiring independent sub-credential challenges.</li>
  <li style="margin-bottom: 0.75rem;"><strong>Vulnerability:</strong> Single Point of Failure across the virtualization fabric.</li>
  <li style="margin-bottom: 0.75rem;"><strong>Business Risk:</strong> Maximized blast radius. The security posture of every independent testing environment, container database, and web service relies 100% on the single login screen of the Proxmox panel. If an attacker gains access to this web interface, the blast radius is immediate and absolute across all sub-workloads.</li>
  <li style="margin-bottom: 0.75rem;"><strong>Remediation Plan:</strong> Fortify the hypervisor interface perimeter. Enforce a rigorous Time-Based One-Time Password (TOTP) Multi-Factor Authentication token requirement (via Google Authenticator or Microsoft Authenticator) directly onto the Proxmox UI login portal, matching the high compliance standard set by the Ubiquiti Gateway.</li>
</ul>

<h4 style="margin-top: 2rem; margin-bottom: 1rem;">Finding PR.PS-01.A: Unused Physical Ethernet Interfaces and Open Network Services</h4>

<ul style="margin-top: 1rem; margin-bottom: 2rem;">
  <li style="margin-bottom: 0.75rem;"><strong>Condition:</strong> Multiple physical Ethernet ports on the network switches are active but unassigned. Additionally, logical network daemons are left in default open configurations.</li>
  <li style="margin-bottom: 0.75rem;"><strong>Vulnerability:</strong> Exposed logical attack vectors due to lack of network-level least functionality and port-lockdown configurations.</li>
  <li style="margin-bottom: 0.75rem;"><strong>Contextual Risk Correction:</strong> While the physical perimeter is considered low-risk due to zero unauthorized physical occupancy inside the facility, logical exposure remains high. If a remote attacker compromises a single network-adjacent endpoint (such as an Android-based digital signage player via an unpatched application vulnerability), the threat actor inherits an active logical foothold on the switch plane. From there, they can execute automated port scans across all open internal network interfaces.</li>
  <li style="margin-bottom: 0.75rem;"><strong>Remediation Plan:</strong>
    <ul style="margin-top: 0.5rem;">
      <li style="margin-bottom: 0.5rem;"><strong>Disable Unused Physical Switching Ports:</strong> Access the Ubiquiti network controller dashboard and manually set all unused physical RJ45 ports to a Disabled state to prevent rogue device communication.</li>
      <li style="margin-bottom: 0.5rem;"><strong>Restrict Network Broadcasts / UPnP:</strong> Explicitly disable UPnP (Universal Plug and Play) on the AT&T and Ubiquiti gateways to prevent streaming endpoints from automatically requesting dynamic firewall port-forwarding rules.</li>
      <li style="margin-bottom: 0.5rem;"><strong>Implement Non-Standard Administrative Listening Ports:</strong> Shift the primary management listening port for SSH/WinSCP on the server away from the well-known factory default (Port 22) to an alternative, high-numbered custom socket (e.g., Port 2222 or higher) to break automated discovery scripts.</li>
    </ul>
  </li>
</ul>

<hr style="margin-top: 2rem; margin-bottom: 2rem;" />

<h2 style="margin-top: 2.5rem; margin-bottom: 1.5rem;">Section 3: Data Security & Resiliency (PR.DS)</h2>

<h3 style="margin-top: 2rem; margin-bottom: 1rem;">3.1 Control Baseline (Data Redundancy Strategy)</h3>

<p style="margin-top: 1rem; margin-bottom: 1.5rem; line-height: 1.6;">Per NIST CSF 2.0 <strong>PR.DS-11</strong>, backup assets and configuration status must be maintained and tested regularly to ensure operational resilience. Currently, lightweight hypervisor configurations, local database schemas, and digital signage player logistics are backed up monthly to a secure cloud repository.</p>

<h4 style="margin-top: 2rem; margin-bottom: 1rem;">Finding PR.DS-11.A: Unverified Disaster Recovery and Backup Restoration Integrity</h4>

<ul style="margin-top: 1rem; margin-bottom: 2rem;">
  <li style="margin-bottom: 0.75rem;"><strong>Condition:</strong> While routine automated configuration backups are systematically directed to remote storage boundaries, a formal restoration validation drill has never been successfully executed.</li>
  <li style="margin-bottom: 0.75rem;"><strong>Vulnerability:</strong> Total reliance on unverified data redundancy pipelines without recovery validation.</li>
  <li style="margin-bottom: 0.75rem;"><strong>Business Risk:</strong> High risk of permanent data loss and extended recovery downtime. If a primary hardware failure or hypervisor corruption occurs, the organization must rely entirely on unverified data assets. If those files are corrupted or unreadable, Mas Wild Labs faces a total loss of testing environments and a complete disruption of operations.</li>
  <li style="margin-bottom: 0.75rem;"><strong>Remediation Plan:</strong> Implement a mandatory, bi-annual Disaster Recovery drill. GRC or infrastructure personnel must pull a random configuration archive from cloud storage and actively restore it inside an isolated sandbox environment to document recovery speed and verify data block integrity.</li>
</ul>

<hr style="margin-top: 2rem; margin-bottom: 2rem;" />

<h2 style="margin-top: 2.5rem; margin-bottom: 1.5rem;">Section 4: Document Control & Sign-Off</h2>

### 4.1 Assessment Summary & Continuous Improvement

<p style="margin-top: 1rem; margin-bottom: 1.5rem; line-height: 1.6;">This compliance assessment establishes the initial security baseline for Mas Wild Labs under the NIST CSF 2.0 framework. While the perimeter controls (Ubiquiti MFA) and network architecture (dual homing) demonstrate a mature structural foundation, the immediate risk posture of the organization is heavily dependent on executing the remediation paths outlined in this report.</p>

<p style="margin-top: 1rem; margin-bottom: 1rem; line-height: 1.6;">Per the continuous improvement guidelines of the NIST framework, a follow-up mini-assessment is recommended in Q3 to verify the status of:</p>
<ul style="margin-top: 0.5rem; margin-bottom: 2rem;">
  <li style="margin-bottom: 0.5rem;">Workstation auto-login deactivation.</li>
  <li style="margin-bottom: 0.5rem;">Cryptographic SSH key deployment.</li>
  <li style="margin-bottom: 0.5rem;">Logical network switch port shutdowns.</li>
  <li style="margin-bottom: 0.5rem;">The initial disaster recovery validation drill.</li>
</ul>

<h3 style="margin-top: 2.5rem; margin-bottom: 1.5rem;">4.2 Formal Sign-Off</h3>

<p style="margin-top: 1rem; margin-bottom: 1.5rem; line-height: 1.6;">By signing below, the Lead Assessor validates that the current baseline inventory, access matrices, and operational data security deficiencies have been recorded with high resolution and structural accuracy.</p>

<p style="margin-top: 1rem; margin-bottom: 0.5rem;"><strong>Assessor Signature:</strong> Stephanie R. Wilder</p>
<p style="margin-bottom: 0.5rem;"><strong>Role:</strong> Lead GRC Security Analyst</p>
<p style="margin-bottom: 2rem;"><strong>Date of Sign-Off:</strong> May 28, 2026</p>

<hr style="margin-top: 2rem; margin-bottom: 2rem;" />

<h2 style="margin-top: 2.5rem; margin-bottom: 1.5rem;">Section 5: Appendix — Framework Cross-Mapping Matrix</h2>

<p style="margin-top: 1rem; margin-bottom: 1.5rem; line-height: 1.6;">This matrix maps the identified risks and controlled engineering states of Mas Wild Labs to alternative international security standards, proving multi-framework compliance alignment.</p>

<table width="100%" cellpadding="8" cellspacing="0" border="0" style="margin-top: 1.5rem; margin-bottom: 2rem;">
  <thead>
    <tr style="border-bottom: 2px solid #555; text-align: left; font-weight: bold;">
      <th>Risk ID</th>
      <th>Core Vulnerability</th>
      <th>NIST CSF 2.0</th>
      <th>CIS Controls v8</th>
      <th>ISO/IEC 27001:2022</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #333;">
      <td><strong>R-01</strong></td>
      <td>Windows Auto-Login Bypass</td>
      <td><code>PR.AA-01</code> / <code>PR.AA-02</code></td>
      <td>Control 6.1 (MFA/Passwords)</td>
      <td>A.8.5 (Secure Auth)</td>
    </tr>
    <tr style="border-bottom: 1px solid #333;">
      <td><strong>R-02</strong></td>
      <td>Privileged Root Shell Over Cleartext</td>
      <td><code>PR.AA-01</code> / <code>PR.PS-01</code></td>
      <td>Control 4.8 (Secure SSH)</td>
      <td>A.8.20 / A.5.15 (Access)</td>
    </tr>
    <tr style="border-bottom: 1px solid #333;">
      <td><strong>R-03</strong></td>
      <td>Long-run Cat6 Cable Exposure</td>
      <td><code>ID.AM-01</code> / <code>PR.PS-01</code></td>
      <td>Control 3.12 (Segment Network)</td>
      <td>A.7.10 (Physical Protection)</td>
    </tr>
    <tr style="border-bottom: 1px solid #333;">
      <td><strong>R-04</strong></td>
      <td>Backup Recovery Validation Missing</td>
      <td><code>PR.DS-11</code></td>
      <td>Control 11.2 (Backup Testing)</td>
      <td>A.8.13 (Backup Policy)</td>
    </tr>
    <tr style="border-bottom: 1px solid #333;">
      <td><strong>R-05</strong></td>
      <td>Consumer IoT/BYOD Isolation Status</td>
      <td><code>ID.AM-01</code> / <code>PR.IR-02</code></td>
      <td>Control 12.2 (Secure VLAN Architecture)</td>
      <td>A.8.22 (Network Segregation)</td>
    </tr>
    <tr style="border-bottom: 2px solid #555;">
      <td><strong>R-06</strong></td>
      <td>Inactive Switch Port Status</td>
      <td><code>PR.PS-01</code></td>
      <td>Control 12.4 (Port Lockdown)</td>
      <td>A.8.20 (Network Control)</td>
    </tr>
  </tbody>
</table>