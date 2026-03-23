"use client";
import { useState } from "react";

export default function Home() {
  const [showContact, setShowContact] = useState<null | "contact" | "resume">(null);

  return (
    <main className="bg-[#f5f5f5] text-[#111]">
      <a id="top"></a>

      {/* HEADER */}
      <header className="backdrop-blur-md bg-white/70 border-b border-neutral-300 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-wide text-[#111]">THS Consulting</div>

          <nav className="hidden md:flex gap-10 text-[#333] font-medium">
            {[
              { label: "Home", link: "#top" },
              { label: "About", link: "#about" },
              { label: "Services", link: "#services" },
              { label: "Clients", link: "#clients" },
              { label: "Why Us", link: "#whyus" },
              { label: "Careers", link: "#careers" },
              { label: "Contact", link: "#contact" }
            ].map((item) => (
              <a key={item.label} href={item.link} className="relative group">
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#2563eb] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <button
            onClick={() => setShowContact("contact")}
            className="bg-[#2563eb] text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Contact Us
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6 text-[#111]">
              IT Consulting & Talent Solutions for Modern Enterprises
            </h1>
            <p className="text-[#555] text-lg mb-8">
              We help companies scale engineering teams, modernize technology, and deliver high‑impact digital solutions.
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => setShowContact("contact")}
                className="bg-[#2563eb] text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
              >
                Get Started
              </button>

              <a
                href="#services"
                className="border border-neutral-400 px-6 py-3 rounded-full text-[#333] hover:border-[#2563eb] hover:text-[#2563eb] transition"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="bg-[#f5f5f5] shadow-xl rounded-2xl p-6 border border-neutral-200">
            <img
              src="https://media.finebi.com/strapi/dashboard_laporan_penjualan_21dfe81a3e.jpg"
              alt="Dashboard"
              className="rounded-xl w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-white text-[#111]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">About THS Consulting</h2>
          <div className="max-w-3xl text-[#555] leading-relaxed space-y-4">
            <p>THS Consulting is a modern IT consulting and talent solutions firm helping companies build and scale.</p>
            <p>Our approach is simple — combine strong technical expertise with reliable execution.</p>
            <p>We help organizations move faster and deliver solutions that scale.</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-[#111] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Our Services</h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-8 bg-[#1f1f1f] rounded-2xl border border-neutral-700">
              <h3 className="text-xl font-semibold mb-4">IT Consulting & Strategy</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Technology roadmapping</li>
                <li>• Architecture & system design</li>
                <li>• Cloud modernization</li>
                <li>• Digital transformation</li>
                <li>• Process automation</li>
              </ul>
            </div>

            <div className="p-8 bg-[#1f1f1f] rounded-2xl border border-neutral-700">
              <h3 className="text-xl font-semibold mb-4">Talent Solutions</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Full‑stack developers</li>
                <li>• QA & automation testers</li>
                <li>• Data analysts & BI developers</li>
                <li>• Business analysts</li>
                <li>• DevOps & cloud engineers</li>
                <li>• Project managers</li>
              </ul>
            </div>

            <div className="p-8 bg-[#1f1f1f] rounded-2xl border border-neutral-700">
              <h3 className="text-xl font-semibold mb-4">Software Engineering</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Web & mobile development</li>
                <li>• API & backend engineering</li>
                <li>• Data engineering & ETL</li>
                <li>• QA automation</li>
                <li>• Integration & automation</li>
                <li>• Maintenance & support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
            {/* CLIENTS */}
      <section id="clients" className="py-24 bg-white text-[#111]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Industries We Serve</h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Technology & SaaS", desc: "Scaling engineering teams, cloud modernization, product development." },
              { title: "Media & Entertainment", desc: "Rights management, BI dashboards, workflow automation." },
              { title: "Finance & Fintech", desc: "Secure systems, data pipelines, QA automation." },
              { title: "Healthcare", desc: "Compliance‑driven development, analytics, integrations." },
              { title: "Retail & E‑commerce", desc: "Data analytics, automation, customer experience platforms." },
              { title: "Telecom & Infrastructure", desc: "Network automation, cloud engineering, system modernization." }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-[#f5f5f5] border border-neutral-300 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-[#555]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="whyus" className="py-24 bg-[#111] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Why THS Consulting</h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-8 bg-[#1f1f1f] border border-neutral-700 rounded-2xl">
              <h3 className="text-xl font-semibold mb-2">Reliable Execution</h3>
              <p className="text-gray-300">Predictable delivery, transparent communication, and consistent results.</p>
            </div>

            <div className="p-8 bg-[#1f1f1f] border border-neutral-700 rounded-2xl">
              <h3 className="text-xl font-semibold mb-2">Quality‑First Engineering</h3>
              <p className="text-gray-300">Modern engineering standards, automation, CI/CD, and secure coding.</p>
            </div>

            <div className="p-8 bg-[#1f1f1f] border border-neutral-700 rounded-2xl">
              <h3 className="text-xl font-semibold mb-2">Experienced Talent</h3>
              <p className="text-gray-300">Consultants with real‑world expertise across development, data, cloud, and QA.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section id="careers" className="py-24 bg-white text-[#111]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Careers at THS Consulting</h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-8 bg-[#f5f5f5] border border-neutral-300 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Join Our Talent Network</h3>
              <p className="text-[#555] mb-4">
                We’re always looking for skilled developers, analysts, testers, and cloud engineers.
              </p>
              <ul className="text-[#555] space-y-2">
                <li>• Full‑stack Developers</li>
                <li>• QA & Automation Engineers</li>
                <li>• Data Analysts & BI Developers</li>
                <li>• Cloud & DevOps Engineers</li>
                <li>• Business Analysts & PMs</li>
              </ul>
            </div>

            <div className="p-8 bg-[#f5f5f5] border border-neutral-300 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Why Work With Us</h3>
              <p className="text-[#555] mb-4">
                Flexible engagements, competitive compensation, and opportunities across industries.
              </p>
              <p className="text-[#555] mb-6">
                Submit your resume and we’ll reach out when a matching opportunity becomes available.
              </p>

              <button
                onClick={() => setShowContact("resume")}
                className="bg-[#2563eb] text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
              >
                Submit Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-[#111] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
            Whether you're looking for IT talent or consulting support, we’re here to help.
          </p>

          <div className="bg-[#1f1f1f] border border-neutral-700 p-10 rounded-2xl max-w-xl mx-auto">
            <p className="text-gray-300 mb-3"><strong>Email:</strong> info@thsconsulting.com</p>
            <p className="text-gray-300 mb-6"><strong>Phone:</strong> (555) 123‑4567</p>

            <button
              onClick={() => setShowContact("contact")}
              className="bg-[#2563eb] text-white px-8 py-3 rounded-full hover:bg-blue-700 transition"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT MODAL */}
      {showContact === "contact" && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-sm w-full text-center border border-neutral-300">
            <h2 className="text-2xl font-semibold text-[#111] mb-4">Contact THS Consulting</h2>

            <p className="text-[#555] mb-2"><strong>Email:</strong> info@thsconsulting.com</p>
            <p className="text-[#555] mb-6"><strong>Phone:</strong> (555) 123‑4567</p>

            <button
              onClick={() => setShowContact(null)}
              className="mt-4 px-6 py-2 rounded-full border border-neutral-400 text-[#333] hover:bg-neutral-200 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
            {/* RESUME SUBMISSION MODAL */}
      {showContact === "resume" && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full border border-neutral-300">

            <h2 className="text-2xl font-semibold text-[#111] mb-2">
              Contact HR & Submit Resume
            </h2>
            <p className="text-[#555] mb-6">
              Questions? Reach us or upload your resume.
            </p>

            <div className="space-y-4 text-left">

              <div>
                <label className="block text-sm font-medium text-[#333] mb-1">Full name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-[#2563eb]"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#333] mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-[#2563eb]"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#333] mb-1">Phone number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-[#2563eb]"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#333] mb-1">Position applying for</label>
                <select className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-[#2563eb]">
                  <option>Select a position</option>
                  <option>Full‑stack Developer</option>
                  <option>QA / Automation Engineer</option>
                  <option>Data Analyst / BI Developer</option>
                  <option>Cloud / DevOps Engineer</option>
                  <option>Business Analyst</option>
                  <option>Project Manager</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#333] mb-1">Upload resume</label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="w-full text-sm text-[#555]"
                />
                <p className="text-xs text-[#777] mt-1">
                  Accepted: .pdf, .doc, .docx — max 5MB
                </p>
              </div>

              <div className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <p className="text-sm text-[#555]">
                  I agree to be contacted about this application and accept the privacy policy.
                </p>
              </div>

            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setShowContact(null)}
                className="px-5 py-2 rounded-full border border-neutral-400 text-[#333] hover:bg-neutral-200 transition"
              >
                Cancel
              </button>

              <button
                className="px-6 py-2 rounded-full bg-[#2563eb] text-white hover:bg-blue-700 transition"
              >
                Submit Application
              </button>
            </div>

          </div>
        </div>
      )}

    </main>
  );
}