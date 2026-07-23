---
title: "Lab Infrastructure Modernization"
summary: "Release documentation details the decommissioning of a heterogeneous network and the implementation of a unified Ubiquiti UniFi Ultra ecosystem."
status: "Completed"
---

# Release Note: Lab Infrastructure Modernization

<div style="margin: 1.5rem 0;">
  <a href="/assignments/labreleasenote.pdf" target="_blank" rel="noopener noreferrer" style="display: inline-block !important; background-color: #98BF92 !important; color: #141414 !important; padding: 12px 24px !important; font-family: monospace !important; font-size: 14px !important; font-weight: 900 !important; letter-spacing: 0.05em !important; text-decoration: none !important; border-radius: 6px !important; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2) !important;">
    VIEW RELEASE NOTE PDF →
  </a>
</div>

* **Date:** May 2026
* **Version:** 2.0.0 (Unified Stack Migration)
* **Classification:** Internal Lab Operations

---

## 1. Executive Summary
This release documents the decommissioning of a heterogeneous "best-of-breed" network and the implementation of a unified **Ubiquiti UniFi Ultra** ecosystem. The architecture has been redesigned to decouple the lab environment from the primary production network, ensuring "break-fix" testing capabilities without sacrificing external connectivity for troubleshooting.

---

## 2. Physical Topology & Backhaul
The new design utilizes a distributed switching model connected via a high-bandwidth backbone.

* **Core Gateway (Cloud Gateway Ultra):** Serves as the WAN edge and Site Controller.
* **Lab Distribution (16-Port PoE Switch):** Located in the main lab area, connected to the Gateway via a *dedicated long-haul trunk cable*. This switch acts as the primary power and data hub for lab servers and the UK-Ultra WAP.
* **Workstation Edge (8-Port PoE Switch):** Situated at the desk to provide localized connectivity for "at-hand" testing devices, linked back to the core fabric to maintain VLAN consistency at the user interface.

---

## 3. Logical Network Design (Segmentation)

The network has migrated from a flat topology to an **802.1Q VLAN-segmented architecture**. The long-haul cable from the Gateway to the 16-port switch is configured as a **Trunk Port**, carrying all four defined VLANs:

<br />

**VLAN ID** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **Name** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **Description** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **Purpose**

***

**10** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Trusted &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Primary management & personal devices. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Secure, high-priority traffic.

<br />

**20** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; IoT &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Low-trust smart devices. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Isolation from core lab assets.

<br />

**30** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lab &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Active development & testing zone. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; General lab work/virtualization.

<br />

**99** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sandbox &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; High-risk testing environment. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Full isolation for "break-fix" scenarios.

***
---

## 4. Key Technical Improvements

### Hardware-Abstracted Management
By migrating the UniFi Controller from a ZimaOS-hosted container to the **dedicated Cloud Gateway Ultra**, the management layer is no longer dependent on a computer’s health. This ensures the network dashboard remains accessible even during total lab server failure.

### Backbone Reliability
The transition from a mix of QNAP fiber and Flex Mini switches to a unified UniFi trunk minimizes protocol mismatch. The long-haul link between the Gateway and the 16-port switch provides a stable, simplified backhaul that is easier to monitor for CRC errors or throughput bottlenecks.

### Redundant Power Efficiency
The 16-port (Lab) and 8-port (Desk) switches provide localized PoE, eliminating the need for power injectors. This allows for:
* **Remote Power Cycling:** Resetting the UK-Ultra WAP or lab nodes via the UniFi app.
* **Clean Desk Policy:** Significant reduction in cable clutter and "wall-wart" power supplies at the workstation.

### Resilient Troubleshooting Workflow
Because the Gateway manages the WAN independently of the Lab switch, a configuration failure in **VLAN 99 (Sandbox)** does not impact **VLAN 10 (Trusted)**. This allows the user to maintain internet access to research fixes while the lab environment is "broken".

---

## 5. Hardware Inventory & Placement

<div style="overflow-x: auto; margin: 1.5rem 0;">
  <table style="width: 100% !important; border-collapse: collapse !important; text-align: left !important; font-size: 14px !important; line-height: 1.5 !important;">
    <thead>
      <tr style="border-bottom: 2px solid rgba(255,255,255,0.2) !important;">
        <th style="padding: 12px 16px !important; font-weight: bold !important; color: #98BF92 !important; width: 35% !important;">Model</th>
        <th style="padding: 12px 16px !important; font-weight: bold !important; color: #98BF92 !important; width: 25% !important;">Location</th>
        <th style="padding: 12px 16px !important; font-weight: bold !important; color: #98BF92 !important; width: 40% !important;">Physical Interface</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid rgba(255,255,255,0.1) !important;">
        <td style="padding: 12px 16px !important; font-weight: bold !important; color: #ffffff !important;">Cloud Gateway Ultra</td>
        <td style="padding: 12px 16px !important; color: rgba(255,255,255,0.8) !important;">Main Entry</td>
        <td style="padding: 12px 16px !important; color: rgba(255,255,255,0.8) !important;">WAN In / Trunk Out</td>
      </tr>
      <tr style="border-bottom: 1px solid rgba(255,255,255,0.1) !important;">
        <td style="padding: 12px 16px !important; font-weight: bold !important; color: #ffffff !important;">16-Port PoE Switch</td>
        <td style="padding: 12px 16px !important; color: rgba(255,255,255,0.8) !important;">Lab</td>
        <td style="padding: 12px 16px !important; color: rgba(255,255,255,0.8) !important;">Trunk In (Long-haul) / Distribution</td>
      </tr>
      <tr style="border-bottom: 1px solid rgba(255,255,255,0.1) !important;">
        <td style="padding: 12px 16px !important; font-weight: bold !important; color: #ffffff !important;">8-Port PoE Switch</td>
        <td style="padding: 12px 16px !important; color: rgba(255,255,255,0.8) !important;">Desk</td>
        <td style="padding: 12px 16px !important; color: rgba(255,255,255,0.8) !important;">Local Access / Peripheral Testing</td>
      </tr>
      <tr style="border-bottom: 1px solid rgba(255,255,255,0.1) !important;">
        <td style="padding: 12px 16px !important; font-weight: bold !important; color: #ffffff !important;">UK-Ultra WAP</td>
        <td style="padding: 12px 16px !important; color: rgba(255,255,255,0.8) !important;">Lab</td>
        <td style="padding: 12px 16px !important; color: rgba(255,255,255,0.8) !important;">Wireless Access (PoE Powered)</td>
      </tr>
    </tbody>
  </table>
</div>
---

> **Note for Portfolio:** This document highlights the transition to a structured cabling approach. By utilizing a trunked long-haul connection between the Gateway and the 16-Port switch, the designer demonstrates proficiency in managing physical layer constraints while maintaining logical segmentation across the environment.

***End of Release Note***