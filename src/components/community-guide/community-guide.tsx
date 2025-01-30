// src/components/CommunityGuidelines.tsx
import React from "react";
interface Guidelines {
    index: number;
    title: string;
    content: string[];
}

const CommunityGuidelines: React.FC<Guidelines> = ({index, title,content}) => {
  return (
    

        <main className="space-y-8">
          
            <section
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-blue-500 mb-4">
                {index + 1}. {title}
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {content.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </section>
        </main>
  );
};

export default CommunityGuidelines;
