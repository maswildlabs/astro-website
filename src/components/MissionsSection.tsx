import React from 'react';

export default function MissionsSection() {
  const projects = [
    {
      title: "Systems Lab Build",
      status: "OPERATIONAL",
      statusColor: "text-emerald-400 border-emerald-400/30 bg-emerald-500/5",
      desc: "Core Proxmox VE hypervisor cluster, isolated virtual network architectures, and robust Docker environment automation frameworks fully deployed and operating within stable parameters.",
      liveUrl: "/missions/labbuild/"
    },
    {
      title: "STE Compliance Tool",
      status: "DEVELOPMENT",
      statusColor: "text-amber-400 border-amber-400/30 bg-amber-500/5",
      desc: "Automated ASD-STE100 compliance validation engine designed to reduce technical writing ambiguity. Analyzes and filters text entries against strict controlled vocabulary guidelines and dictionary constraints in real-time.",
      liveUrl: "#"
    },
    {
      title: "Text-To-Markdown Converter",
      status: "DEVELOPMENT",
      statusColor: "text-amber-400 border-amber-400/30 bg-amber-500/5",
      desc: "A slick, real-time conversion utility built to translate unstructured plain-text documentation or corporate copy directly into production-ready, clean Markdown (.md) payloads.",
      liveUrl: "#"
    },
    {
      title: "Security Audit",
      status: "MITIGATION",
      statusColor: "text-rose-400 border-rose-400/30 bg-rose-500/5",
      desc: "Active perimeter vulnerability scanning, isolated VLAN firewall validation, and strict access-control audits currently underway to harden internal infrastructure against threat vectors.",
      liveUrl: "/reports/audit/"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-[#1A1A1A] border-t border-[#98BF92]/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-[#C0C0C0]">
            Active Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="relative p-6 rounded-lg bg-[#0d1117]/40 border border-[#98BF92]/10 hover:border-[#98BF92]/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-display tracking-widest uppercase border px-2.5 py-1 rounded ${project.statusColor}`}>
                    {project.status}
                  </span>
                </div>
                
                <h3 className="font-display text-xl uppercase tracking-wide text-[#C0C0C0] group-hover:text-[#98BF92] transition-colors mb-3">
                  {project.title}
                </h3>
                
                <p className="text-sm leading-relaxed text-[#C0C0C0]/70">
                  {project.desc}
                </p>
              </div>

              <a 
                href={project.liveUrl} 
                className="mt-6 pt-4 border-t border-[#98BF92]/5 flex items-center text-xs font-display tracking-widest text-[#98BF92] hover:text-white uppercase transition-colors"
              >
                Project Specs &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}