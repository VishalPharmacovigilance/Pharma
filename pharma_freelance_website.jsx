import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, FileText } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-6">
      <section className="text-center mb-10">
        <div className="flex flex-col items-center">
          <Image
            src="/profile-photo.png"
            alt="Vishal Kumar"
            width={150}
            height={150}
            className="rounded-full shadow-lg mb-4"
          />
          <h1 className="text-4xl font-bold mb-2">Vishal Kumar</h1>
          <p className="text-lg">Pharmacovigilance Specialist | Drug Safety Expert</p>
          <div className="mt-4 flex justify-center gap-4">
            <a href="mailto:youremail@example.com" aria-label="Email"><Mail /></a>
            <a href="https://linkedin.com/in/yourprofile" aria-label="LinkedIn"><Linkedin /></a>
            <a href="/CV.pdf" download aria-label="Download CV"><FileText /></a>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-6 mb-10">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">About Me</h2>
            <p>
              I am a Licensed pharmacist with over 09 years of experience in Pharmacovigilance. Proven expertise in drug safety monitoring, adverse event reporting, quality management, regulatory compliance, and risk
              management. Dedicated with strong collaboration skills with cross-functional teams in clinical research and regulatory affairs. Adept at ensuring compliance with international regulations (ICH, FDA, EMA) and
              contributing to the safety profile of pharmaceutical products throughout their lifecycle. I offer reliable, accurate, and confidential drug safety services.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Services</h2>
            <ul className="list-disc ml-5 space-y-1">
              <li>Adverse Event Case Processing</li>
              <li>Literature Screening & Reporting</li>
              <li>Quality Management System (QMS)</li>
              <li>MedDRA Coding & Narrative Writing</li>
              <li>Database Expert</li>
              <li>PSUR Preparation</li>
              <li>Compliance Management</li>
              <li>Risk Assessment & Mitigation</li>
              <li>Audit Planning</li>
              <li>Deviation Management</li>
              <li>DevOps Testing (UAT, CSV)</li>
              <li>Client Interfacing</li>
              <li>Regulatory Submissions</li>
              <li>Project Management</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mb-10">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Testimonials</h2>
            <blockquote className="italic">
              "Vishal delivered high-quality case processing support and always met our deadlines. We look forward to working with him again!"
            </blockquote>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
            <p>Email me at <a href="mailto:youremail@example.com" className="text-blue-600 underline">VishalPharmacovigilance@gmail.com</a></p>
            <Button className="mt-4">Contact Me</Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
