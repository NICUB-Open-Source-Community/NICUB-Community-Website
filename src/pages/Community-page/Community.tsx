import React from "react";
import CommunityGuidelines from "../../components/community-guide/community-guide";
import { guidelines } from "./data/guideline";
import { contributorGuide } from "./data/contributor";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Community: React.FC = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", ""); // Get ID from URL
      const section = document.getElementById(sectionId); // Find section

      if (section) {
        const yOffset = -180; // Adjust this value to match your header height
        const yPosition = section.getBoundingClientRect().top + window.scrollY + yOffset;

        window.scrollTo({ top: yPosition, behavior: "smooth" });
      }
    }
  }, [location]);

  return (
  <div className="bg-gray-50 min-h-screen py-8 ">
      <div className="max-w-4xl mx-auto px-6" id="guideline">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600">NICUB Community Guidelines</h1>
          <p className="text-gray-600 mt-4">
            Building a supportive, inclusive, and productive community for all members.
          </p>
        </header>
        <main className="space-y-8">
              {guidelines.map((items,index) => (
              <CommunityGuidelines index={index} title={items.title} content={items.content} />
            ))}   
        </main>
   
    </div>
    <div className="max-w-4xl mx-auto px-6" id="contributor">
        <header className="text-center mb-12 mt-[100px]">
          <h1 className="text-4xl font-bold text-blue-600">Contributors Guidelines</h1>
          <p className="text-gray-600 mt-4">
            Become a part of our community and help us grow by contributing in meaningful ways.
          </p>
        </header>
        <main className="space-y-8">
              {contributorGuide.map((items,index) => (
                    <CommunityGuidelines index={index} title={items.title}  content={items.content} />
                  ))}  
        </main>
   
    </div>
  </div>
  );
};

export default Community;
