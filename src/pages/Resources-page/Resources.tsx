// src/pages/Resources.tsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { developerResources } from "./data/resources";
import ResourceSection from "../../components/resources/resources";
import { openSourceResources } from "./data/open-source";
import { designerResources } from "./data/designer";
import { technicalWritingResources } from "./data/writer";

const Resources: React.FC = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("open");

  // Handle scroll to section based on URL hash
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      const section = document.getElementById(sectionId);

      if (section) {
        const yOffset = -80;
        const yPosition = section.getBoundingClientRect().top + window.scrollY + yOffset;
        
        window.scrollTo({ top: yPosition, behavior: "smooth" });
        setActiveSection(sectionId);
      }
    }
  }, [location]);

  // Handle nav clicks
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    
    if (section) {
      const yOffset = -80;
      const yPosition = section.getBoundingClientRect().top + window.scrollY + yOffset;
      
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="bg-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Community Resources</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            Discover tools, guides, and resources to help you contribute to our open source ecosystem
          </p>
          
          {/* Quick stats */}
          <div className="flex flex-wrap mt-12 gap-8">
            <div className="bg-blue-800 bg-opacity-40 rounded-lg p-6 flex-1">
              <p className="text-3xl font-bold">{openSourceResources.reduce((total, section) => total + section.resources.length, 0)}</p>
              <p className="text-blue-200">Open Source Resources</p>
            </div>
            <div className="bg-blue-800 bg-opacity-40 rounded-lg p-6 flex-1">
              <p className="text-3xl font-bold">{developerResources.reduce((total, section) => total + section.resources.length, 0)}</p>
              <p className="text-blue-200">Developer Tools</p>
            </div>
            <div className="bg-blue-800 bg-opacity-40 rounded-lg p-6 flex-1">
              <p className="text-3xl font-bold">{designerResources.reduce((total, section) => total + section.resources.length, 0) + technicalWritingResources.reduce((total, section) => total + section.resources.length, 0)}</p>
              <p className="text-blue-200">Design & Documentation</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation Bar */}
      <div className="sticky top-0 z-10 bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="flex overflow-x-auto scrollbar-hide">
            <button 
              onClick={() => scrollToSection("open")}
              className={`py-4 px-6 font-medium whitespace-nowrap transition-colors ${activeSection === "open" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-600"}`}
            >
              Open Source
            </button>
            <button 
              onClick={() => scrollToSection("developer")}
              className={`py-4 px-6 font-medium whitespace-nowrap transition-colors ${activeSection === "developer" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-600"}`}
            >
              Developers
            </button>
            <button 
              onClick={() => scrollToSection("designer")}
              className={`py-4 px-6 font-medium whitespace-nowrap transition-colors ${activeSection === "designer" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-600"}`}
            >
              Designers
            </button>
            <button 
              onClick={() => scrollToSection("writer")}
              className={`py-4 px-6 font-medium whitespace-nowrap transition-colors ${activeSection === "writer" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-600"}`}
            >
              Technical Writers
            </button>
          </nav>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Community Call to Action */}
        <div className="bg-blue-50 rounded-xl p-6 md:p-8 mb-16 flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold text-blue-800 mb-3">Join Our Community</h2>
            <p className="text-gray-700">
              Connect with other contributors, get help, and collaborate on exciting open source projects. 
              Our community is open to everyone regardless of experience level.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <a 
              href="#" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Get Involved →
            </a>
          </div>
        </div>
        
        {/* Open Source Resources Section */}
        <section id="open" className="mb-20 scroll-mt-20">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Open Source Resources</h2>
          </div>
          <p className="text-gray-600 mb-10 max-w-3xl">
            Essential resources for contributing to open source projects, understanding licenses, 
            and joining the global open source movement.
          </p>
          
          <div className="space-y-10">
            {openSourceResources.map((section, index) => (
              <ResourceSection key={index} category={section.category} resources={section.resources} />
            ))}
          </div>
        </section>
        
        {/* Developer Resources Section */}
        <section id="developer" className="mb-20 scroll-mt-20">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Developer Resources</h2>
          </div>
          <p className="text-gray-600 mb-10 max-w-3xl">
            Tools, libraries, and documentation to help developers build and contribute to our projects.
            Find everything you need to get started with development.
          </p>
          
          <div className="space-y-10">
            {developerResources.map((section, index) => (
              <ResourceSection key={index} category={section.category} resources={section.resources} />
            ))}
          </div>
        </section>
        
        {/* Designer Resources Section */}
        <section id="designer" className="mb-20 scroll-mt-20">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Designer Resources</h2>
          </div>
          <p className="text-gray-600 mb-10 max-w-3xl">
            UI/UX guidelines, design systems, and assets to ensure consistent and accessible interfaces
            across our open source ecosystem.
          </p>
          
          <div className="space-y-10">
            {designerResources.map((section, index) => (
              <ResourceSection key={index} category={section.category} resources={section.resources} />
            ))}
          </div>
        </section>
        
        {/* Technical Writer Resources Section */}
        <section id="writer" className="mb-20 scroll-mt-20">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Technical Writer Resources</h2>
          </div>
          <p className="text-gray-600 mb-10 max-w-3xl">
            Style guides, documentation tools, and best practices for creating clear and helpful
            documentation for our projects.
          </p>
          
          <div className="space-y-10">
            {technicalWritingResources.map((section, index) => (
              <ResourceSection key={index} category={section.category} resources={section.resources} />
            ))}
          </div>
        </section>
        
        {/* Footer CTA */}
        <div className="bg-gray-50 rounded-xl p-8 mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Can't find what you're looking for?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our community is always growing. If you have suggestions for resources to add or if you need help
            finding specific tools, reach out to our team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
              Suggest a Resource
            </a>
            <a href="#" className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-lg transition-colors">
              Join Discord Community
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;