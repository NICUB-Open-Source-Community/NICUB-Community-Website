import { Community, Docs, Resource, Dev, Writers } from "../../assets/svg";
export const navItems = [
  {
    resources: [
      {
        heading: "Open Source Resource",
        texts: "Learning Materials",
        icon: Resource,
        link: ""
      },
      {
        heading: "Developers & Designers",
        texts: "Tools and Support",
        icon: Dev,
        link: ""
      },
      {
        heading: "Projects",
        texts: "Access to Projects",
        icon: Resource,
        link: "projects"
        // 
      },
      {
        heading: "Technical Writers",
        texts: "Writing Standards",
        icon: Writers,
        link: ""
      },
    ],
    community: [
      {
        heading: "Community Guidelines",
        texts: "Code of Conduct",
        icon: Community,
        link: ""
      },
      {
        heading: "Contributor Documentation",
        texts: "How to Contribute",
        icon: Docs,
        link: ""
      },
    ],
    resourcesFooter: [{ texts: "Projects" }, { texts: "FAQs" },{texts: "Community"}],
    companyFooter: [{ texts: "Privacy Policy" }, { texts: "Terms of Use" },{texts: "Contact"}],
  },
];
