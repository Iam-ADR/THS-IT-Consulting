"use client";
import { useState } from "react";

export default function Home() {
  const [showContact, setShowContact] = useState<null | "contact">(null);

  return (
    <main className="bg-gradient-to-b from-white via-[#F8FAFC] to-white text-[#1F2937]">
      <a id="top"></a>

      {/* CONTACT MODAL */}
      {showContact === "contact" && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[999]">
          <div className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-[#1E3A8A]">Get in Touch</h2>

            <p className="text-[#4B5563] mb-2">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:contact@thsitconsulting.com"
                className="text-[#1E3A8A] underline hover:text-[#162F6B]"
              >
                contact@thsitconsulting.com
              </a>
            </p>

            <p className="text-[#4B5563] mb-6">
              <strong>Phone:</strong>{" "}
              <a
                href="tel:8185886061"
                className="text-[#1E3A8A] underline hover:text-[#162F6B]"
              >
                818‑588‑6061
              </a>
            </p>

            <button
              onClick={() => setShowContact(null)}
              className="bg-[#1E3A8A] text-white px-4 py-2 rounded-lg hover:bg-[#162F6B] transition w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* HEADER */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* LOGO + NAME */}
          <div className="flex items-center gap-3">
            <img 
              src="/ths-logo.png"
              alt="THS Consulting Logo"
              className="h-16 w-auto block mr-2"
            />

            <span className="text-2xl font-bold tracking-wide text-[#1E3A8A]">
              THS IT Consulting LLC
            </span>
          </div>

          {/* NAVIGATION */}
          <nav className="hidden md:flex gap-8 text-[#1F2937] font-medium">
            {[
              { label: "Home", link: "#top" },
              { label: "About", link: "#about" },
              { label: "Services", link: "#services" },
              { label: "Clients", link: "#clients" },
              { label: "Why Us", link: "#whyus" },
              { label: "Careers", link: "#careers" }
            ].map((item) => (
              <a 
                key={item.label} 
                href={item.link} 
                className="relative group hover:text-[#1E3A8A]"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#3B82F6] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CONTACT BUTTON */}
          <button
            onClick={() => setShowContact("contact")}
            className="bg-[#1E3A8A] text-white px-5 py-2 rounded-full hover:bg-[#162F6B] transition"
          >
            Contact Us
          </button>

        </div>
      </header>

      {/* HERO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-5 text-[#1E3A8A]">
              Bridging Studio Operations with Modern Engineering
            </h1>

            <p className="text-[#4B5563] text-lg mb-6">
              THS IT Consulting LLC helps Hollywood studios modernize Rightsline, streamline 
              Rights & Avails workflows, and upgrade BI ecosystems with modern, AI‑driven 
              engineering. Our work spans enterprise Rightsline delivery, reporting 
              modernization, and automation solutions that support content lifecycles end‑to‑end.
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => setShowContact("contact")}
                className="bg-[#1E3A8A] text-white px-6 py-3 rounded-full shadow hover:bg-[#162F6B] transition"
              >
                Get Started
              </button>

              <a
                href="#services"
                className="border border-[#1E3A8A] px-6 py-3 rounded-full text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white transition"
              >
                Explore Services
              </a>
            </div>
          </div>

          <img 
            src="/website.png"
            alt="THS Consulting Image"
            className="w-full h-auto block rounded-xl shadow-md"
          />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 bg-white text-[#1F2937]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-[#1E3A8A]">
            About THS IT Consulting LLC
          </h2>

          <div className="max-w-3xl text-[#4B5563] leading-relaxed space-y-4">
            <p>
              THS IT Consulting LLC specializes in Rightsline implementations, Rights & Avails 
              workflows, and BI modernization for major and mid‑tier Hollywood studios. Our team 
              has led large‑scale Rightsline programs, metadata modeling initiatives, ingestion 
              pipelines, and reporting transformations that support studio operations at scale.
            </p>

            <p>
              We’ve delivered enterprise reporting migrations—including the transition from 
              Izenda to Sigma Computing—enabling real‑time Avails insights, automated analytics, 
              and modernized data workflows.
            </p>

            <p>
              Our hybrid model blends studio‑experienced professionals with engineers specializing 
              in automation, data engineering, and AI‑powered tooling. This allows us to deliver 
              solutions that are both operationally accurate and technically modern.
            </p>

            <p>
              Beyond entertainment, we support clients across technology, finance, healthcare, 
              and enterprise IT with scalable engineering, cloud modernization, and automation 
              initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 bg-[#F8FAFC] text-[#1F2937]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-[#1E3A8A]">Our Core Services</h2>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Rightsline */}
            <div className="p-7 bg-white rounded-2xl border border-[#E2E8F0] shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-[#1E3A8A]">
                Rightsline Implementations
              </h3>
              <ul className="text-[#4B5563] space-y-1.5">
                <li>• Enterprise Rightsline rollout</li>
                <li>• Rights & Avails workflow design</li>
                <li>• Metadata modeling & ingestion</li>
                <li>• Integrations & automation</li>
                <li>• Studio‑grade QA & validation</li>
              </ul>
            </div>

            {/* BI */}
            <div className="p-7 bg-white rounded-2xl border border-[#E2E8F0] shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-[#1E3A8A]">
                BI & Reporting Modernization
              </h3>
              <ul className="text-[#4B5563] space-y-1.5">
                <li>• Migration from Izenda to Sigma</li>
                <li>• Real‑time Avails dashboards</li>
                <li>• Data modeling & ETL pipelines</li>
                <li>• Analytics automation</li>
                <li>• Executive reporting frameworks</li>
              </ul>
            </div>

            {/* AI */}
            <div className="p-7 bg-white rounded-2xl border border-[#E2E8F0] shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-[#1E3A8A]">
                AI‑Driven Engineering
              </h3>
              <ul className="text-[#4B5563] space-y-1.5">
                <li>• Workflow automation</li>
                <li>• Custom LLM tools</li>
                <li>• Data extraction & enrichment</li>
                <li>• API & backend engineering</li>
                <li>• Cloud modernization</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section id="clients" className="py-16 bg-white text-[#1F2937]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-[#1E3A8A]">Industries We Serve</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Hollywood Studios",
                desc: "Rightsline delivery, Rights & Avails workflows, metadata modeling, and studio-grade QA."
              },
              {
                title: "Media & Entertainment",
                desc: "Avails reporting, BI dashboards, Sigma migration, and workflow automation."
              },
              {
                title: "Streaming Platforms",
                desc: "Content rights management, data pipelines, analytics automation, and AI tooling."
              },
              {
                title: "Technology & SaaS",
                desc: "Cloud modernization, backend engineering, and scalable API integrations."
              },
              {
                title: "Finance & Enterprise",
                desc: "Secure systems, ETL pipelines, reporting modernization, and compliance automation."
              },
              {
                title: "AI‑Driven Organizations",
                desc: "LLM tools, data extraction, enrichment, and intelligent workflow automation."
              }
            ].map((item, i) => (
              <div key={i} className="p-7 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-[#1E3A8A]">{item.title}</h3>
                <p className="text-[#4B5563]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="whyus" className="py-16 bg-[#F8FAFC] text-[#1F2937]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-[#1E3A8A]">Why THS IT Consulting LLC</h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-7 bg-white border border-[#E2E8F0] rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-[#1E3A8A]">Studio‑Focused Expertise</h3>
              <p className="text-[#4B5563]">
                Deep operational understanding of Rights & Avails, distribution workflows, and studio data ecosystems.
              </p>
            </div>

            <div className="p-7 bg-white border border-[#E2E8F0] rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-[#1E3A8A]">Proven Rightsline Delivery</h3>
              <p className="text-[#4B5563]">
                Successful enterprise implementations for major studios, including workflow design, ingestion, and QA.
              </p>
            </div>

            <div className="p-7 bg-white border border-[#E2E8F0] rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-[#1E3A8A]">Modern Engineering + AI</h3>
              <p className="text-[#4B5563]">
                A hybrid team combining studio veterans with engineers specializing in automation, data, and AI.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section id="careers" className="py-16 bg-white text-[#1F2937]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-[#1E3A8A]">Careers at THS IT Consulting LLC</h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* WHY WORK WITH US */}
            <div className="p-7 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-[#1E3A8A]">Why Work With Us</h3>
              <ul className="text-[#4B5563] space-y-1.5 mb-4">
                <li>• Contribute to Rightsline and BI modernization programs for major studios.</li>
                <li>• Work alongside industry experts and modern engineering teams.</li>
                <li>• Competitive compensation, flexible engagements, and long‑term growth.</li>
              </ul>
            </div>

            {/* JOIN OUR TALENT NETWORK */}
            <div className="p-7 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-[#1E3A8A]">Join Our Talent Network</h3>
              <p className="text-[#4B5563] mb-4">
                We partner with studios and enterprises seeking top-tier Rightsline, BI, and engineering talent.
              </p>

              <ul className="text-[#4B5563] space-y-1.5 mb-6">
                <li>• Rightsline Analysts & Implementation Specialists</li>
                <li>• BI Developers (Sigma, Tableau, Power BI)</li>
                <li>• Data Engineers & ETL Developers</li>
                <li>• AI/Automation Engineers</li>
                <li>• Full‑stack & Backend Engineers</li>
              </ul>

              <a href="/apply">
                <button className="bg-[#1E3A8A] text-white px-6 py-3 rounded-full hover:bg-[#162F6B] transition">
                  Apply
                </button>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-14 bg-[#F8FAFC] text-[#1F2937]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#1E3A8A]">Get in Touch</h2>

          <p className="text-[#4B5563] mb-6">
            Whether you're a studio exploring Rightsline support, BI modernization, or AI‑driven automation,
            our team is ready to help. Let’s build something impactful together.
          </p>

          <div className="inline-block text-left bg-white p-7 rounded-2xl shadow-sm border border-[#E2E8F0]">
            <p className="text-[#1E3A8A] font-semibold text-lg mb-2">THS IT Consulting LLC</p>

            <p className="text-[#4B5563]">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:contact@thsitconsulting.com"
                className="text-[#1E3A8A] underline hover:text-[#162F6B]"
              >
                contact@thsitconsulting.com
              </a>
            </p>

            <p className="text-[#4B5563] mb-3">
              <strong>Phone:</strong>{" "}
              <a
                href="tel:8185886061"
                className="text-[#1E3A8A] underline hover:text-[#162F6B]"
              >
                818‑588‑6061
              </a>
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
