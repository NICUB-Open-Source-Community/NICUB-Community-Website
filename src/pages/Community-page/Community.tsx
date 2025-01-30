import React from "react";
import CommunityGuidelines from "../../components/community-guide/community-guide";
import { guidelines } from "./data/guideline";
import { contributorGuide } from "./data/contributor";

const Community: React.FC = () => {

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-6">
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
    <div className="max-w-4xl mx-auto px-6 mt-[150px]">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600">Contributor Guide</h1>
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
