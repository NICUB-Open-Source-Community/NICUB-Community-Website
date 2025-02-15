// src/pages/Resources.tsx
import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { developerResources } from "./data/resources";
import ResourceSection from "../../components/resources/resources";
import { openSourceResources } from "./data/open-source";
import { designerResources } from "./data/designer";
import { technicalWritingResources } from "./data/writer";

const Resources: React.FC = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", ""); // Get ID from URL
      const section = document.getElementById(sectionId); // Find section

      if (section) {
        const yOffset = -160; // Adjust this value to match your header height
        const yPosition = section.getBoundingClientRect().top + window.scrollY + yOffset;

        window.scrollTo({ top: yPosition, behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-6 " id="open">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600">Open Source Resources</h1>
          <p className="text-gray-600 mt-4">A curated list of Open Source Resources.</p>
        </header>

        <main className="space-y-8">
          {openSourceResources.map((section, index) => (
            <ResourceSection key={index} category={section.category} resources={section.resources} />
          ))}
        </main>
      </div>
      <div className="max-w-4xl mx-auto px-6 mt-[100px]" id="developer">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600">Developers Resources</h1>
          <p className="text-gray-600 mt-4">A curated list of useful tools and documentation for developers.</p>
        </header>

        <main className="space-y-8">
          {developerResources.map((section, index) => (
            <ResourceSection key={index} category={section.category} resources={section.resources} />
          ))}
        </main>
      </div>
      <div className="max-w-4xl mx-auto px-6 mt-[100px]" id="designer">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600">Designers Resources</h1>
          <p className="text-gray-600 mt-4">A curated list of useful tools and documentation for designers.</p>
        </header>

        <main className="space-y-8">
          {designerResources.map((section, index) => (
            <ResourceSection key={index} category={section.category} resources={section.resources} />
          ))}
        </main>
      </div>
      <div className="max-w-4xl mx-auto px-6 mt-[100px]" id="writer">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600">Tecnical writers Resources</h1>
          <p className="text-gray-600 mt-4">A curated list of useful tools and documentation for Technical Writers.</p>
        </header>

        <main className="space-y-8">
          {technicalWritingResources.map((section, index) => (
            <ResourceSection key={index} category={section.category} resources={section.resources} />
          ))}
        </main>
      </div>
    </div>
  );
};

export default Resources;
