import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'School Attendance System',
      content: {
        en: 'This system provides an efficient way for teachers  to manage attendance records, monitor students punctuality, and generate attendance reports.',
        id: 'Sistem ini memberikan cara yang efisien bagi guru untuk mengelola catatan kehadiran, memantau ketepatan waktu siswa, dan menghasilkan laporan kehadiran.'
      },
      image: '/absen-laravel.png',
      stack: ['Laravel', 'MySQL', 'Bootstrap'],
      links: {
        github: 'https://github.com/ekohunterz/absensi-siswa-laravel',
        demo: ''
      }
    },
    {
      id: 2,
      title: 'Expert System Bayes',
      content: {
        en: 'This system aims to help diagnose a disease based on symptoms that have been experienced.',
        id: 'Sistem ini bertujuan untuk membantu mendiagnosa suatu penyakit berdasarkan gejala yang dialami.'
      },
      image: '/bayes.png',
      stack: ['Laravel', 'MySQL', 'Vue 3'],
      links: {
        github: 'https://github.com/ekohunterz/sistemPakar_Theorema_Bayes',
        demo: ''
      }
    },
    {
      id: 3,
      title: 'Library Management System',
      content: {
        en: 'This system aims to automate library operations, enhance accessibility to resources, and promote a culture of reading and learning among students and staff.',
        id: 'Sistem ini bertujuan untuk mengotomatiskan operasional perpustakaan, meningkatkan aksesibilitas terhadap sumber daya, dan mempromosikan budaya membaca dan belajar di kalangan siswa dan staf.'
      },
      image: '/perpus.png',
      stack: ['Laravel', 'MySQL', 'Bootstrap'],
      links: {
        github: 'https://github.com/ekohunterz/perpustakaan',
        demo: ''
      }
    },
    {
      id: 4,
      title: 'Islamic Simple App',
      content: {
        en: "This is a simple Web application for the Islamic religion, built with Nuxt 3. This feature include read Qur'an, Prayer Schedule and Collection of Prayers",
        id: "Ini adalah aplikasi Web sederhana untuk agama Islam, dibangun dengan Nuxt 3. Fitur ini meliputi Bacaan Al-Qur'an, Jadwal Sholat dan Kumpulan Doa"
      },
      image: '/quran.png',
      stack: ['Laravel', 'MySQL', 'Bootstrap'],
      links: {
        github: 'https://github.com/ekohunterz/new_quran',
        demo: 'https://quran-lite-web.vercel.app/'
      }
    },
    {
      id: 5,
      title: 'Cashier App',
      content: {
        en: 'A simple Web application for Cashier, built with Laravel and Vue 3. This feature include Transaction and Sales Report',
        id: 'Aplikasi kasir sederhana dibangun menggunakan Laravel sebagai backend dan Vue 3 sebagai frontend. Fitur yang tersedia yaitu transaksi dan laporan penjualan'
      },
      image: 'https://github.com/user-attachments/assets/ba3e3312-b858-44ed-a7a9-54bff3b8545f',
      stack: ['Laravel', 'MySQL', 'Tailwind', 'Vue 3'],
      links: {
        github: 'https://github.com/ekohunterz/Kasir-Laravel',
        demo: ''
      }
    }
  ]
})
