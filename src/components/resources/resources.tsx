
import React from "react";

interface Resource {
  name: string;
  url: string;
}

interface ResourceSectionProps {
  category: string;
  resources: Resource[];
}

const ResourceSection: React.FC<ResourceSectionProps> = ({ category, resources }) => {
  return (
    <section className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-blue-500 mb-4">{category}</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {resources.map((resource, idx) => (
          <li key={idx}>
            <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              {resource.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ResourceSection;
