import { defineEventHandler } from "h3";

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: "Home",
      title_indo: "Beranda",
      href: "/#home",
      icon: "mdi:home-outline",
    },
    {
      id: 2,
      title: "About",
      title_indo: "Tentang",
      href: "/#about",
      icon: "mdi:user-outline",
    },
    {
      id: 3,
      title: "Skill",
      title_indo: "Keterampilan",
      href: "/#skill",
      icon: "icomoon-free:stack",
    },
    {
      id: 4,
      title: "Portfolio",
      title_indo: "Portofolio",
      href: "/#project",
      icon: "material-symbols:work-outline",
    },
    {
      id: 5,
      title: "Certificates",
      title_indo: "Sertifikat",
      href: "/#certificates",
      icon: "mdi:certificate-outline",
    },
    {
      id: 6,
      title: "Contact",
      title_indo: "Kontak",
      href: "/#contact",
      icon: "mdi:phone-outline",
    },
  ];
});
