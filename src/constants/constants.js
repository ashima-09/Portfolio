import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    ai,
    dsa,
    gcp,
    genai,
    whatsapp,
    ecom,
    riscv,
    threejs,
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
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "App Developer",
      icon: mobile,
    },
    {
      title: "AI/ML",
      icon: creator,
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
      name: "React JS",
      icon: reactjs,
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
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [];
  
  const projects = [
    {
      name: "GEN.AI",
      description:
            "A MERN stack project that uses Stable Diffusion Model API to fetch images, implemented MongoDB for efficient data storage, and utilized the Cloudinary platform to share the generated images with the community.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "pink-text-gradient",
        },
        {
          name: "node",
          color: "blue-text-gradient",
        },
        {
          name: "api",
          color: "blue-text-gradient",
        },
      ],
      image: genai,
      source_code_link: "https://github.com/ashima-09/AI_Image_Generator",
    },
    {
      name: "CureCloud: ",
      description:
      "Connecting hospitals to pool medical resources, enabling efficient resource utilization. Established patient monitoring, hospital bookings, and comprehensive patient record ColorManagement. In line with the UN Sustainable Development Goal #3: Good Health and Well-being.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
        {
          name: "google cloud",
          color: "blue-text-gradient",
        },
      ],
      image: gcp,
      source_code_link: "https://github.com/ashima-09/GCP-CureCloud",
    },
    {
      name: "AI based Snake Game",
      description:
        "The classic snake game implemented using Pygame. It is integrated with the Q-learning algorithm and Deep Q-Networks (DQN) using the PyTorch framework. The goal of the game is to train the snake to make optimal decisions in each state and capture food efficiently by learning from experience.",
      tags: [
        {
          name: "pygame",
          color: "blue-text-gradient",
        },
        {
          name: "torch",
          color: "green-text-gradient",
        },
        {
          name: "numpy",
          color: "pink-text-gradient",
        },
      ],
      image: ai,
      source_code_link: "https://github.com/ashima-09/Snake_Game_AI",
    },
    {
      name: "WhatsApp Clone",
      description:
        "Wide range of features like User Authentication, Real Time Chat Functionality, Presence Status Display - Online and Last Seen etc.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
      ],
      image: whatsapp,
      source_code_link: "https://github.com/ashima-09/whatsapp_clone",
    },
    {
      name: "RISC-V Simulator",
      description:
        "Simulator that executes RISC-V ISA. Implemented single cycle exectution and pipelined execution. Implementation of Cache and memory hierarchy",
      tags: [
        {
          name: "c++",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
      ],
      image: riscv,
      source_code_link: "https://github.com/ashima-09/CS204_RISCV",
    },
    {
      name: "Ecommerce Website",
      description:
        "E-commerce website using MERN stack, incorporating user authentication, shopping cart functionality, secure payment integration with Stripe, implementation of admin panel, etc.",
      tags: [
        {
          name: "mongodb",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "green-text-gradient",
        },
        {
          name: "react",
          color: "pink-text-gradient",
        },
        {
          name: "node",
          color: "blue-text-gradient",
        },
        {
          name: "stripe",
          color: "green-text-gradient",
        },
      ],
      image: ecom,
      source_code_link: "https://github.com/ashima-09/Ecommerce",
    },
  ];
  
  export { services, technologies, experiences, projects };