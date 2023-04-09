import {
  none,
  mobile,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  shareme,
  tictactoe,
  preview,
  movieSearch,
  animeDB,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Computer Science Student",
    icon: creator,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Unfortunately, no work experience yet.",
    company_name: "_",
    icon: none,
    iconBg: "#383E56",
    date: "Not yet.",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "ShareMe App",
    description:
      "Social Media where users can share their photos, save and comment on other users' posts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: shareme,
    source_code_link: "https://github.com/ihrow/shareme-react-app/",
    live_preview_link: "https://shareme-react-app.netlify.app/"
  },
  {
    name: "MovieSearch App",
    description:
      "This is a simple React app that uses the OMDb API to search for movies.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "axios",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: movieSearch,
    source_code_link: "https://github.com/ihrow/movie-search-app",
    live_preview_link: "https://ihrow-search-movie-app.netlify.app/"
  },
  {
    name: "AnimeDB",
    description:
      "This is a simple React app that uses Anilist API to fetch anime data.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: animeDB,
    source_code_link: "https://github.com/ihrow/animeDB-react-app",
    live_preview_link: "https://tv-anime.netlify.app/"
  },
  {
    name: "TicTacToeOnline",
    description:
      "Web application that allows users to play the classic game of TicTacToe both locally and online against other players.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "webhooks",
        color: "green-text-gradient",
      },
    ],
    image: tictactoe,
    source_code_link: "https://github.com/ihrow/TicTacToe-React",
    live_preview_link: "https://tictactoe-game.herokuapp.com/"
  },
];

export { services, technologies, experiences, projects };