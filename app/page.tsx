"use client";
import { useState } from "react";

export default function Home() {
  const [showContact, setShowContact] = useState<null | "contact" | "resume">(null);

  return (
    <main className="bg-gradient-to-b from-white via-[#F8FAFC] to-white text-[#1F2937]">
      <a id="top"></a>

      {/* HEADER */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          {/* LOGO + NAME */}
          <div className="flex items-center gap-4">
            <img 
              src="/ths-logo.jpeg"
              alt="THS Consulting Logo"
              className="h-12 w-auto block"
            />
            <span className="text-2xl font-bold tracking-wide text-[#1E3A8A]">
              THS Consulting
            </span>
          </div>

          {/* NAVIGATION */}
          <nav className="hidden md:flex gap-10 text-[#1F2937] font-medium">
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
            className="bg-[#1E3A8A] text-white px-6 py-2 rounded-full hover:bg-[#162F6B] transition"
          >
            Contact Us
          </button>

        </div>
      </header>

      {/* HERO */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6 text-[#1E3A8A]">
              IT Consulting & Talent Solutions for Modern Enterprises
            </h1>

            <p className="text-[#4B5563] text-lg mb-8">
              We help companies scale engineering teams, modernize technology, and deliver high‑impact digital solutions.
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
      <section id="about" className="py-24 bg-white text-[#1F2937]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-[#1E3A8A]">About THS Consulting</h2>

          <div className="max-w-3xl text-[#4B5563] leading-relaxed space-y-4">
            <p>THS Consulting is a modern IT consulting and talent solutions firm helping companies build and scale.</p>
            <p>Our approach is simple — combine strong technical expertise with reliable execution.</p>
            <p>We help organizations move faster and deliver solutions that scale.</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-[#F8FAFC] text-[#1F2937]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-[#1E3A8A]">Our Services</h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="p-8 bg-white rounded-2xl border border-[#E2E8F0] shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-[#1E3A8A]">IT Consulting & Strategy</h3>
              <ul className="text-[#4B5563] space-y-2">
                <li>• Technology roadmapping</li>
                <li>• Architecture & system design</li>
                <li>• Cloud modernization</li>
                <li>• Digital transformation</li>
                <li>• Process automation</li>
              </ul>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-[#E2E8F0] shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-[#1E3A8A]">Talent Solutions</h3>
              <ul className="text-[#4B5563] space-y-2">
                <li>• Full‑stack developers</li>
                <li>• QA & automation testers</li>
                <li>• Data analysts & BI developers</li>
                <li>• Business analysts</li>
                <li>• DevOps & cloud engineers</li>
                <li>• Project managers</li>
              </ul>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-[#E2E8F0] shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-[#1E3A8A]">Software Engineering</h3>
              <ul className="text-[#4B5563] space-y-2">
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
      <section id="clients" className="py-24 bg-white text-[#1F2937]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-[#1E3A8A]">Industries We Serve</h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Technology & SaaS", desc: "Scaling engineering teams, cloud modernization, product development." },
              { title: "Media & Entertainment", desc: "Rights management, BI dashboards, workflow automation." },
              { title: "Finance & Fintech", desc: "Secure systems, data pipelines, QA automation." },
              { title: "Healthcare", desc: "Compliance‑driven development, analytics, integrations." },
              { title: "Retail & E‑commerce", desc: "Data analytics, automation, customer experience platforms." },
              { title: "Telecom & Infrastructure", desc: "Network automation, cloud engineering, system modernization." }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-[#1E3A8A]">{item.title}</h3>
                <p className="text-[#4B5563]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* WHY US */}
      <section id="whyus" className="py-24 bg-[#F8FAFC] text-[#1F2937]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-[#1E3A8A]">Why THS Consulting</h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-8 bg-white border border-[#E2E8F0] rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-[#1E3A8A]">Reliable Execution</h3>
              <p className="text-[#4B5563]">Predictable delivery, transparent communication, and consistent results.</p>
            </div>

            <div className="p-8 bg-white border border-[#E2E8F0] rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-[#1E3A8A]">Quality‑First Engineering</h3>
              <p className="text-[#4B5563]">Modern engineering standards, automation, CI/CD, and secure coding.</p>
            </div>

            <div className="p-8 bg-white border border-[#E2E8F0] rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-[#1E3A8A]">Experienced Talent</h3>
              <p className="text-[#4B5563]">Consultants with real‑world expertise across development, data, cloud, and QA.</p>
            </div>
          </div>
        </div>
      </section>

{/* CAREERS */}
<section id="careers" className="py-24 bg-white text-[#1F2937]">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl font-bold mb-12 text-[#1E3A8A]">Careers at THS Consulting</h2>

    <div className="grid md:grid-cols-2 gap-10">

      {/* FIRST: WHY WORK WITH US */}
      <div className="p-8 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl shadow-sm">
        <h3 className="text-xl font-semibold mb-3 text-[#1E3A8A]">Why Work With Us</h3>
<ul className="text-[#4B5563] space-y-2 mb-4">
  <li>• Flexible engagements, competitive compensation, and opportunities across diverse industries.</li>
  <li>• Modern engineering standards, strong technical leadership, and a culture of continuous improvement.</li>
  <li>• Long‑term relationships built on transparency, trust, and meaningful career growth.</li>
</ul>
      </div>

      {/* SECOND: JOIN OUR TALENT NETWORK */}
      <div className="p-8 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl shadow-sm">
        <h3 className="text-xl font-semibold mb-3 text-[#1E3A8A]">Join Our Talent Network</h3>
        <p className="text-[#4B5563] mb-4">
          We’re always looking for skilled developers, analysts, testers, and cloud engineers.
        </p>

        <ul className="text-[#4B5563] space-y-2 mb-6">
          <li>• Full‑stack Developers</li>
          <li>• QA & Automation Engineers</li>
          <li>• Data Analysts & BI Developers</li>
          <li>• Cloud & DevOps Engineers</li>
          <li>• Business Analysts & PMs</li>
        </ul>

        {/* APPLY BUTTON */}
        <a href="/apply">
          <button className="bg-[#1E3A8A] text-white px-6 py-3 rounded-full hover:bg-[#162F6B] transition">
            Apply
          </button>
        </a>
      </div>

    </div>
  </div>
</section>


      {/* CONTACT MODAL */}
      {showContact === "contact" && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-sm w-full text-center border border-[#E2E8F0]">
            <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-4">
              Contact THS Consulting
            </h2>

            <p className="text-[#4B5563] mb-2"><strong>Email:</strong> contact@thsitconsulting.com</p>
            <p className="text-[#4B5563] mb-6"><strong>Phone:</strong> 818‑588‑6061</p>

            <button
              onClick={() => setShowContact(null)}
              className="mt-4 px-6 py-2 rounded-full border border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {/* CONTACT SECTION */}
<section id="contact" className="py-20 bg-[#F8FAFC] text-[#1F2937]">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-6 text-[#1E3A8A]">Get in Touch</h2>

    <p className="text-[#4B5563] mb-8">
      Whether you're exploring opportunities or want to learn more about our services, 
      our team is here to help. Reach out anytime - we would love to connect.
    </p>

    <div className="inline-block text-left bg-white p-8 rounded-2xl shadow-sm border border-[#E2E8F0]">
      <p className="text-[#1E3A8A] font-semibold text-lg mb-2">THS Consulting</p>

      <p className="text-[#4B5563]"><strong>Email:</strong> contact@thsitconsulting.com</p>
      <p className="text-[#4B5563] mb-4"><strong>Phone:</strong> 818‑588‑6061</p>
    </div>
  </div>
</section>

    </main>
  );
}