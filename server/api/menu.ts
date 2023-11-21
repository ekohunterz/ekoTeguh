import { defineEventHandler } from "h3";

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: "Home",
      href: "/#home",
      icon: "mdi:home-outline",
    },
    {
      id: 2,
      title: "About",
      href: "/#about",
      icon: "mdi:user-outline",
    },
    {
      id: 3,
      title: "Skill",
      href: "/#skill",
      icon: "icomoon-free:stack",
    },
    {
      id: 4,
      title: "Project",
      href: "/#project",
      icon: "material-symbols:work-outline",
    },
    {
      id: 5,
      title: "Certificates",
      href: "/#certificates",
      icon: "mdi:certificate-outline",
    },
    {
      id: 6,
      title: "Contact",
      href: "/#contact",
      icon: "mdi:phone-outline",
    },
  ];
});
