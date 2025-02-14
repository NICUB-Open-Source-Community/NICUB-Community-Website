import { Community, Docs, Resource, Dev, Writers } from "../../assets/svg";
export const navItems = [
  {
    resources: [
      {
        heading: "Open Source Resource",
        texts: "Learning Materials",
        icon: Resource,
        link: "/resources#open"
      },
      {
        heading: "Developers",
        texts: "Tools and Support",
        icon: Dev,
        link: "/resources#developer"
      },
      {
        heading: " Designers",
        texts: "Tools and Support",
        icon: Dev,
        link: "/resources#designer"
      },
      {
        heading: "Technical Writers",
        texts: "Writing Standards",
        icon: Writers,
        link: "/resources#writer"
      },
    ],
    community: [
      {
        heading: "Community Guidelines",
        texts: "Code of Conduct",
        icon: Community,
        link: "/community#guideline"
      },
      {
        heading: "Contributor Documentation",
        texts: "How to Contribute",
        icon: Docs,
        link: "/community#contributor"
      },
    ],
    resourcesFooter: [{ texts: "Projects" }, { texts: "FAQs" },{texts: "Community"}],
    companyFooter: [{ texts: "Privacy Policy" }, { texts: "Terms of Use" },{texts: "Contact"}],
  },
];
