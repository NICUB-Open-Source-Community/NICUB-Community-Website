import { Community, Docs, Resource, Dev, Writers } from "../../../assets/svg";
export const navItems = [
  {
    resources: [
      {
        heading: "Open Source Resource",
        texts: "Learning Materials",
        icon: Resource,
      },
      {
        heading: "Developers & Designers",
        texts: "Tools and Support",
        icon: Dev,
      },
      {
        heading: "Projects",
        texts: "Access to Projects",
        icon: Resource,
      },
      {
        heading: "Technical Writers",
        texts: "Writing Standards",
        icon: Writers,
      },
    ],
    community: [
      {
        heading: "Community Guidelines",
        texts: "Code of Conduct",
        icon: Community,
      },
      {
        heading: "Contributor Documentation",
        texts: "How to Contribute",
        icon: Docs,
      },
    ],
    resourcesFooter: [{ texts: "Projects" }, { texts: "FAQs" },{texts: "Community"}],
  },
];
