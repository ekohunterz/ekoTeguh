import { defineEventHandler } from "h3";

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: "School Attendance System",
      content: {
        en: "This system provides an efficient way for teachers  to manage attendance records, monitor students punctuality, and generate attendance reports.",
        id: "Pariatur reprehenderit proident magna sint aute exercitation adipisicing laborum laborum do cupidatat aute dolor.",
      },
      image: "/absen-laravel.png",
      stack: ["Laravel", "MySQL", "Bootstrap"],
      links: {
        github: "https://github.com/ekohunterz/absensi-siswa-laravel",
        demo: "",
      },
    },
    {
      id: 2,
      title: "Expert System Bayes",
      content: {
        en: "This system aims to assist cat owners and veterinarians in making informed decisions about their pets health by offering reliable diagnostic suggestions.",
        id: "Non qui incididunt eu consectetur mollit excepteur irure et minim excepteur incididunt fugiat nulla.",
      },
      image: "/bayes.png",
      stack: ["Laravel", "MySQL", "Bootstrap"],
      links: {
        github: "",
        demo: "",
      },
    },
    {
      id: 3,
      title: "Library Management System",
      content: {
        en: "This system aims to automate library operations, enhance accessibility to resources, and promote a culture of reading and learning among students and staff.",
        id: "Laborum pariatur amet cillum mollit amet.",
      },
      image: "/perpus.png",
      stack: ["Laravel", "MySQL", "Bootstrap"],
      links: {
        github: "https://github.com/ekohunterz/perpustakaan",
        demo: "",
      },
    },
    {
      id: 4,
      title: "Islamic Simple App",
      content: {
        en: "This is a simple Web application for the Islamic religion, built with Nuxt 3. This feature include read Qur'an, Prayer Schedule and Collection of Prayers",
        id: "Consectetur amet eu ad excepteur ea sit do dolore occaecat quis aliqua.",
      },
      image: "/quran.png",
      stack: ["Laravel", "MySQL", "Bootstrap"],
      links: {
        github: "https://github.com/ekohunterz/new_quran",
        demo: "https://quran-lite-web.vercel.app/",
      },
    },
  ];
});
