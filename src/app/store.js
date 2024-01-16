import React from "react";

import * as IMAGE from "../assets/images";

export const intro = "Self-disciplined undergraduate with a solid foundation in Computer Science. Equipped with strong self-learning skills and always prepared to adapt to new challenges. Rational thinker and eﬃcient team player. Game and game development enthusiast. Love to experiment with new technologies.";

export const jobs = [
  {
    logo: IMAGE.digipen_logo,
    company: "DigiPen Institute of Technology, Singapore",
    type: "Part time",
    title: "Teaching Assistance",
    desc: "Helping junior students in the Acenedmic Suppot Center with their lectures or assignments. Helping professors to grade the assignments.",
    startDate: "2022.08.01",
    endDate: "----",
    link: "https://www.digipen.edu.sg/"
  },
  {
    logo: IMAGE.hol_logo,
    company: "hol experiences pte. ltd",
    type: "Full time",
    title: "web developer",
    desc: "Develop and maintain websites that feature physical-space-based virtual tours that aim to bring unique virtual experiences.",
    startDate: "2020.08.01",
    endDate: "2020.07.31",
    link: "https://www.hol.sg/"
  },
  {
    logo: IMAGE.hitachi_logo,
    company: "hitachi asia ltd",
    type: "Internship",
    title: "R&D Intern",
    desc: "Work in an independent team to develop a drone-based intelligent aerial surveillance system that is capable of autonomous navigation, object detection and tracking and various tasks.",
    startDate: "2019.06.08",
    endDate: "2020.02.14",
    link: "https://www.hitachi.com.sg/"
  }
];

export const projects = [
  {
    name: "3D Game Engine - Wehehe (WIP)",
    shortName: "3D Game Engine",
    desc: `After finishing the 2D game engine project, we ventured into 3D game engine development. I was always fascinated by 3D computer graphics, so I took the role of Graphics Lead.

    The graphics API we decided to use is Vulkan, it is the most trendy graphics API at the moment and therefore it is the most beneficial to learn. Although it is much more complex than OpenGL, but I adapted to Vulkan Programming with early preparation and countless hours of learning.
    
    The project is still ongoing...`,
    images:[],
    video: "https://www.youtube.com/embed/ZhdJroK0hs0?si=0LkAOqG7isEMFLMw",
  },
  {
    name: "2D Game Engine - Primordial",
    shortName: "2D Game Engine",
    desc: `My first game engine project was a challenging but rewarding experience. The goal was to create a game engine with 2D graphics and a custom editor. The engine had to support all the essential features for making a 2D game.

    As one of the most experienced programmers and game developers in the team, I took the lead in product management and code contribution.
    
    The project felt like exploring an unknown territory since none of us had any prior game engine development experience. I spent the trimester break learning as much as I could about game engine development. I found some useful resources that helped me understand key concepts such as OpenGL programming and Entity Component Systems (ECS).
    
    The development was a wild ride, but by constantly challenging ourselves, we managed to deliver what exceeded our initial expectation.`,
    images: [
      IMAGE.primordial_1,
      IMAGE.primordial_2,
    ],
    video: "https://www.youtube.com/embed/IbneiGRJ1c0?si=NvE6ZxLgsXPXS03V",
  },
  {
    name: "2D Hack&Slash Survival Game - Herald",
    shortName: "Herald (Game)",
    desc: "We developed the game with our custom 2D game engine. The game is a survival challenge against waves of enemies and bosses. The players have to choose the right combination of ally minions to succeed."
    +"\nThe engine supports Mono C# scripting, which we used for all the game logic. I was responsible for the program architecture and code integration. I also helped my team members with C# whenever they needed it.",
    images: [
      IMAGE.herald_1,
      IMAGE.herald_2,
      IMAGE.herald_3,
    ],
    video: "https://www.youtube.com/embed/US6NZfotw1s?si=xzP5K11cs1ezKxHH",
  },
  {
    name: "Field Commander",
    shortName: "Field Commander (Game)",
    desc: "This was one of our first student game projects, which aimed to teach us basic game development skills. It was not developed with any commercial game engine. We were provided with some internal libraries for rendering and math."
    +"\nThe game is a strategy game where the players command their army and deploy the right units to defeat all enemies and win the levels."
    +"\nThe project began with 5 members, but only two of us remained at the end. The others dropped out for various reasons, mostly academic pressure, confirming the high drop-out rate of DigiPen."
    +"\nIt was a very challenging project and we faced immense pressure, but we managed to complete it and present our game with pride.",
    images: [
      IMAGE.field_commander_1,
      IMAGE.field_commander_2
    ],
    video: "https://www.youtube.com/embed/3jSo7N1bKe8?si=ggMaqIzzBQ8Mc1iR",
  },
  {
    name: "Bounding volume hierarchy demo",
    shortName: "BVH Demo",
    desc: `A demo featuring how to use bouding volume hierarchy for rendering optimization. Three methods are implemented: Topdown, Insert and bottomup.`,
    images: [
    ],
    video: "https://www.youtube.com/embed/0r880dkAshw?si=zqtlYzifPsRtLrv9",
  },
  {
    name: "Octree demo",
    shortName: "Octree Demo",
    desc: `A demo featuring how to use Octree to optimize physics simulations by reducing the number of collision checks needed`,
    images: [
    ],
    video: "https://www.youtube.com/embed/xpfSwbC3-gY?si=fXw_SU00MQFmoux-",
  },
  {
    name: "The Char Kway Tewo Legacy Virtual Tour",
    shortName: "Charity Virtual Tour (PRE-UNI)",
    desc: "The Char Kway Teow Legacy Virtual Tour was one of the virtual tours I developed under HOL Experiences. The theme of the virtual tour was about giving. There are a lot of interactive and visual elements added into the virtual tours, like minigames, javascript physics and 3D graphics. The 3D space was created with Matterport. All the programming was done by me, including front-end, back-end and server management.",
    images: [
      IMAGE.tcktl_0,
      IMAGE.tcktl_1,
      IMAGE.tcktl_2,
      IMAGE.tcktl_3,
      IMAGE.tcktl_4,
      IMAGE.tcktl_5,
      IMAGE.tcktl_6,
      IMAGE.tcktl_7,
      IMAGE.tcktl_8,
      IMAGE.tcktl_9,
      IMAGE.tcktl_10,
      IMAGE.tcktl_11,
      IMAGE.tcktl_12,
      IMAGE.tcktl_13,
      IMAGE.tcktl_14
    ],
    video: "https://www.youtube.com/embed/Q0SYASNcphs?si=pc9zK8RBcbCOxOhO",
    address: "https://tcktl.sg/",
  },
    {
    name: "NIE Visitor Learning Center Virtual Tour",
    shortName: "NIE Virtual Tour (PRE-UNI)",
    desc: "The NIEVLC Virtual Tour was one of the virtual tours I developed under HOL Experiences, and the client was NIE. The virtual tour was to be launched together with the launch of the physical NIE visitor learning centre. All the programming was done by me, including front-end, back-end and server management.",
    images: [IMAGE.nie_1, IMAGE.nie_2, IMAGE.nie_3],
    video: "https://www.youtube.com/embed/UsCwc-a7PQw?si=OlZoYSf-b-n8zKOd",
    address: "https://nievlc.sg/",
  },
  {
    name: "YOLOv5 oject detection & tracking",
    shortName: "Object detection & tracking (PRE-UNI)",
    desc: "The project demonstrates how we can bridge object detection algorithms and single object tracking algorithms. The object detection algorithm used was YOLOv5. YOLO is one of the state-of-the-art open-source object detection projects. The object tracking algorithm was median flow which was an OpenCV built-in algorithm. The project was for fun and personal study.",
    images: [IMAGE.yolo_1, IMAGE.yolo_2],
    video: "https://www.youtube.com/embed/2VQd6gOp5dQ?si=ydeucxZnpVnCV4qv",
    github: "https://github.com/TouHouPolice/yolov5-opencv-detect-track"
  },
  {
    name: "Intelligent Aerial Surveillance System",
    shortName: "Autonomous Surveillance Drone (PRE-UNI)",
    desc: "This drone project was developed under Hitachi Asia as an intern. The presumed client would be the Singapore government, especially the police force. The final product is capable of human detection and tracking, receiving remote commands from a ground control station and perform autonomous navigation. Only few of the details can be shared due to confidential reasons.",
    images: [IMAGE.drone_1,IMAGE.drone_2,IMAGE.drone_3],
  },
  {
    name: "Live2D face tracking avatar",
    shortName: "Live2D face tracking (PRE-UNI)",
    desc: "Live2D is a technique of generating animated 2D graphics. It allows individuals to have their own unique movable avatar at an affordable cost. It is getting increasingly popular in both game and streaming industries. This project demonstrates how we can combine face tracking algorithms with live2D to create a web version of Facerig. It is mainly for my personal study because I expect to use Live2D in my future games.",
    images: [IMAGE.live2d_1],
    video: "https://www.youtube.com/embed/zSFtcAvijKs?si=FoC2bLRVEtCUwY7T",
    github: "https://github.com/TouHouPolice/live2D_face_tracking_prototype"
  },
  {
    name: "Cherki card game AI",
    shortName: "Card Game AI (PRE-UNI)",
    desc: "It was a unique school project only I had done successfully. Cherki was a Malaysian card game, the goal of the project was to develop a competent AI opponent. I developed the game from scratch and implemented the MCTS(Monte Carlo tree search) algorithm to create the AI. The AI is essentially a cheating AI that possesses the information of the deck and performs simulation for all possibilities, and make decision based on the results of the simulations.",
    images: [IMAGE.cherki_1,IMAGE.cherki_2],
    video: "https://www.youtube.com/embed/JbODPR53jjk?si=nppX14NngPcymySt",
    github: "https://github.com/TouHouPolice/CherkiGame_MCTS"
  },
  {
    name: "Nueral Network tic tac toe AI",
    shortName: "Nueral Network AI (PRE-UNI)",
    desc: "A neural network AI that can play Tic Tac Toe game. Instead of using a traditional algorithm like min-max, the project aimed to test how well would a NN perform in Tic Tac Toe game. The results were not very good, mainly because the model I constructed was not ideal. It's my first implementation of NN in games, the project is purely for personal study and entertainment.",
    images: [IMAGE.nn_1],
    video: "https://www.youtube.com/embed/T84GZSJC0P0?si=0-F3H1bYo8YOSAbs",
    github: "https://github.com/TouHouPolice/tictactoe-NN"
  },
  {
    name: "Endless runner game",
    shortName: "Endless Runner game (PRE-UNI)",
    desc: "It was a school project, aimed to create a replicate of existing 3D endless runner games.",
    images: [IMAGE.endless_1,IMAGE.endless_2],
    video: "https://www.youtube.com/embed/8nBBJTac2rg?si=ZJFjDSSjmrKOvSrG",
    github: "https://github.com/TouHouPolice/3D-endless-runner"
  },
  {
    name: "My first ever game",
    shortName: "My first ever game (PRE-UNI)",
    desc: "A 2D platformer game built in Unity. The first game I ever developed. As buggy as it is, it will forever hold a special place in my heart, the start of my journey.",
    images: [IMAGE.first_game_1, IMAGE.first_game_2],
    video: "https://www.youtube.com/embed/yOP8_gLoOH8?si=lZL5es1Fzd1e5AQq",
    github: "https://github.com/TouHouPolice/2D-platformmer-reisen"
  }
];
