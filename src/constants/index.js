// import {
//   Bienestar,
//   flapes,
//   flapusa,
//   LogoFacebook,
//   logoinstagram,
//   logotiktok,
//   logoWhatsapp,
//   logox,
//   logoyoutube,
//   mobilelogo,
//   phoneicon,
// } from "../assets/img/icons";
// import { LogoBienestar } from "../assets/img/logo";

import assistence from "../assets/img/blog/assistence.jpg";
import bienestar from "../assets/img/blog/bienestar.jpg";
import emergency from "../assets/img/blog/emergency.jpg";
import vocational from "../assets/img/blog/vocational.jpg";

import enlinea from "../assets/img/servicios/enlinea.jpg";
import presencial from "../assets/img/servicios/presencial.jpg";
import servicios from "../assets/img/servicios/servicios.jpg";
import talleres from "../assets/img/servicios/talleres.jpg";
import vocacional from "../assets/img/servicios/vocacional.jpg";

export const navLinks = [
  { href: "/", label: "Inicio", section: "Home" },
  { href: "services", label: "Servicios", section: "Services" },
  { href: "customerreview", label: "Testimonios", section: "CustomerReviews" },
  { href: "schedule", label: "Agenda", section: "Schedule" },
  { href: "blog", label: "Blog", section: "Blog" },
  { href: "about-us", label: "Identidad", section: "AboutUs" },
  { href: "contact-us", label: "Contactame", section: "Contact" },
];

export const phonebarLinks = [
  { tag: "phone", name: "+503 2228-26314", link: "tel:+92554862354" },
  { tag: "mobile", name: "+503 6439-1622", link: "tel:+50364391622" },
  {
    tag: "email",
    name: "marioalex77@hotmail.com",
    link: "mailto:marioalex77@hotmail.com",
  },
];

export const blogContent = [
  {
    blogTitle: "¿Qué es la asistencia psicologica?",
    blogImage: assistence,
    blogSummary:
      "Velit velit minim consectetur qui commodo nisi ut aliquip mollit exercitation voluptate aliquip. Dolore amet pariatur cupidatat ea mollit ipsum occaecat deserunt ad et. Ad id et Lorem cillum incididunt cupidatat ipsum elit voluptate sint nisi ad deserunt voluptate. Id adipisicing labore do occaecat labore amet dolore. Consequat consequat nulla elit veniam laborum et irure ex.",
    blogLink: "/",
  },
  {
    blogTitle: "¿Que significa Bienestar?",
    blogImage: bienestar,
    blogSummary:
      "Velit velit minim consectetur qui commodo nisi ut aliquip mollit exercitation voluptate aliquip. Dolore amet pariatur cupidatat ea mollit ipsum occaecat deserunt ad et. Ad id et Lorem cillum incididunt cupidatat ipsum elit voluptate sint nisi ad deserunt voluptate. Id adipisicing labore do occaecat labore amet dolore. Consequat consequat nulla elit veniam laborum et irure ex.",
    blogLink: "/",
  },
  {
    blogTitle: "¿Qué es la vocación y como orientarla?",
    blogImage: vocational,
    blogSummary:
      "Velit velit minim consectetur qui commodo nisi ut aliquip mollit exercitation voluptate aliquip. Dolore amet pariatur cupidatat ea mollit ipsum occaecat deserunt ad et. Ad id et Lorem cillum incididunt cupidatat ipsum elit voluptate sint nisi ad deserunt voluptate. Id adipisicing labore do occaecat labore amet dolore. Consequat consequat nulla elit veniam laborum et irure ex.",
    blogLink: "/",
  },
  {
    blogTitle: "¿Que es una emergencia psicologica?",
    blogImage: emergency,
    blogSummary:
      "Velit velit minim consectetur qui commodo nisi ut aliquip mollit exercitation voluptate aliquip. Dolore amet pariatur cupidatat ea mollit ipsum occaecat deserunt ad et. Ad id et Lorem cillum incididunt cupidatat ipsum elit voluptate sint nisi ad deserunt voluptate. Id adipisicing labore do occaecat labore amet dolore. Consequat consequat nulla elit veniam laborum et irure ex.",
    blogLink: "/",
  },
];

export const serviceItem = [
  {
    serviceTitle: "Asistencia Psicologica en Línea",
    serviceIcon: enlinea,
    serviceDescription: [
      {
        feature:
          "Asistencia psicologica remota a traves de web-Metting o whatsapp.",
      },
      {
        feature: "Psicoterapia",
      },
      {
        feature: "Consejeria",
      },
      {
        feature: "Asesoria Escolar",
      },
    ],
    servicePrice: 20.0,
    serviceUnit: "Sesion",
    serviceAccion: "Agendar",
  },
  {
    serviceTitle: "Asistencia Psicologica Presencial",
    serviceIcon: presencial,
    serviceDescription: [
      {
        feature: "Asistencia psicologica a domicilio o en clinica.",
      },
      {
        feature: "Psicoterapia",
      },
      {
        feature: "Consejeria",
      },
      {
        feature: "Asesoria Escolar",
      },
    ],
    servicePrice: 25.0,
    serviceUnit: "Sesion",
    serviceAccion: "Agendar",
  },
  {
    serviceTitle: "Orientacion Vocacional",
    serviceIcon: vocacional,
    serviceDescription: [
      {
        feature: "Entrevista individuales y/o familiar",
      },
      {
        feature: "Aplicacion de pruebas psicosometricas especializadas",
      },
      {
        feature: "Entrega de informe de orientacion vocacional",
      },
      {
        feature: "Examenes en plataforma",
      },
    ],
    servicePrice: 50.0,
    serviceUnit: "Paquete",
    serviceAccion: "Agendar",
  },
  {
    serviceTitle: "Talleres",
    serviceIcon: talleres,
    serviceDescription: [
      {
        feature: "Talleres grupales",
      },
      {
        feature: "Diferentes tematicas",
      },
      {
        feature: "Centros Educativos, empresas, instituciones en general",
      },
    ],
    servicePrice: 0.0,
    serviceUnit: "Taller",
    serviceAccion: "Contactanos",
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

// export const services = [
//   {
//     imgURL: truckFast,
//     label: "Free shipping",
//     subtext: "Enjoy seamless shopping with our complimentary shipping service.",
//   },
//   {
//     imgURL: shieldTick,
//     label: "Secure Payment",
//     subtext:
//       "Experience worry-free transactions with our secure payment options.",
//   },
//   {
//     imgURL: support,
//     label: "Love to help you",
//     subtext: "Our dedicated team is here to assist you every step of the way.",
//   },
// ];

export const reviews = [
  {
    customerName: "Sofía García",
    rating: 4.5,
    feedback:
      "Llegué a la clínica de salud mental y vocacional sintiéndome perdido y sin rumbo. Estaba luchando con ansiedad y depresión, y no sabía qué camino tomar en mi vida profesional. El equipo de la clínica me brindó un espacio seguro y de apoyo para explorar mis emociones y desarrollar herramientas para manejar mi salud mental. También me ayudaron a identificar mis intereses y habilidades, y me dieron la confianza para perseguir mis sueños. Estoy muy agradecido por la ayuda que recibí en la clínica, y sin duda la recomendaría a cualquier persona que esté buscando apoyo en su salud mental o vocacional.",
  },
  {
    customerName: "Carlos Pérez",
    rating: 4.5,
    feedback:
      "Durante mucho tiempo, me sentí atrapada en un trabajo que no me satisfacía. No sabía cómo encontrar una carrera que me apasionara, y tenía miedo de hacer un cambio. La clínica de salud mental y vocacional me brindó la orientación y el apoyo que necesitaba para dar el siguiente paso en mi vida profesional. A través de la terapia y el asesoramiento vocacional, pude descubrir mis fortalezas e intereses, y desarrollar un plan para alcanzar mis objetivos. Ahora estoy trabajando en una carrera que me encanta, y me siento mucho más feliz y realizada.",
  },
  {
    customerName: "Valentina López",
    rating: 5.0,
    feedback:
      "Sufría de ataques de pánico que me impedían vivir mi vida al máximo. Tenía miedo de salir de mi casa y no podía disfrutar de las cosas que antes me gustaban. La clínica de salud mental y vocacional me brindó las herramientas que necesitaba para controlar mi ansiedad y recuperar mi vida. A través de la terapia cognitivo-conductual, aprendí a identificar y desafiar mis pensamientos negativos, y a desarrollar estrategias para manejar mi ansiedad. Ahora puedo vivir una vida plena y libre de miedo.",
  },
  {
    customerName: "Diego Rodríguez",
    rating: 4.0,
    feedback:
      "Estaba pasando por un momento muy difícil en mi vida personal y profesional. Me sentía abrumado por el estrés y la ansiedad, y no sabía cómo manejar la situación. La clínica de salud mental y vocacional me brindó un espacio seguro para hablar sobre mis problemas y recibir apoyo profesional. El equipo de la clínica me ayudó a desarrollar estrategias para afrontar el estrés, mejorar mi comunicación y fortalecer mis relaciones. Estoy muy agradecido por la ayuda que recibí en la clínica, y sin duda la recomendaría a cualquier persona que esté pasando por un momento difícil.",
  },
  {
    customerName: "Camila Martínez",
    rating: 4.5,
    feedback:
      "Me encontraba en una etapa de transición en mi vida y no sabía qué camino tomar. La clínica de salud mental y vocacional me brindó la orientación que necesitaba para descubrir mis intereses y habilidades, y para desarrollar un plan para mi futuro profesional. A través de talleres, evaluaciones y sesiones de asesoramiento individual, pude identificar mis fortalezas y debilidades, y explorar diferentes opciones de carrera. Ahora tengo una mejor idea de lo que quiero hacer con mi vida, y me siento más seguro y confiado en mi futuro.",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      {
        tag: "email",
        name: "customer@nike.com",
        link: "mailto:customer@nike.com",
      },
      { tag: "phone", name: "+503 2228-26314", link: "tel:+92554862354" },
      { tag: "mobile", name: "+503 6439-1622", link: "tel:+50364391622" },
    ],
  },
];
