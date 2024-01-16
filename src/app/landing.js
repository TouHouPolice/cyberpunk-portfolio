import React, { useEffect, useState, useRef } from "react";
import { Loading, Frame, Button as SFButton, Words } from "arwes";
import { Link, Redirect } from "react-router-dom";
import $ from "jquery"; //not needed

import { sleep } from "./utils";

import { typing, glass_breaking, machine_broken, hit } from "../assets/sounds";

import {
  red_a,
  red_c,
  red_d,
  red_e,
  red_i,
  red_n,
  red_s,
  green_a,
  green_c,
  green_d,
  green_e,
  green_g,
  green_n,
  green_r,
  green_s,
  green_t,
  hole_png,
  screen_png,
  hammer_png
} from "../assets/images";

// import { Matter } from "matter-js";

const Matter = require("matter-js");

const behindGlassCategory = 0x0001;
const beforeGlassCategory = 0x0002;

const wallThickness = 300;

var letterScale = 1;
var letterRadius = 15;

const redWords = [
  [red_a, red_c, red_c, red_e, red_s, red_s],
  [red_d, red_n, red_i, red_e, red_d]
];
const greenWords = [
  [green_a, green_c, green_c, green_e, green_s, green_s],
  [green_g, green_r, green_a, green_n, green_t, green_e, green_d]
];

export default function Landing() {
  var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Composite = Matter.Composite,
    Composites = Matter.Composites,
    Common = Matter.Common,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    Constraint = Matter.Constraint,
    Events = Matter.Events,
    Vector = Matter.Vector;

  var render;
  var mouse;

  var mouseConstraint;
  var runner;

  const maxForce = 0.5;

  var innerWalls = [];
  var outerWalls = [];

  const showWalls = false;

  const [clickPos, setClickPos] = useState([undefined, undefined]);
  const [world, setWorld] = useState(undefined);
  const [engine, setEngine] = useState(undefined);
  const [constrainedBodies, setConstrainedBodies] = useState([]);
  const [spawnReady, setSpawnReady] = useState(false);

  const [loading, setLoading] = useState(true);

  const [redBodies, setRedBodies] = useState([]);
  const [greenBodies, setGreenBodies] = useState([]);
  const [smashable, setSmashable] = useState(false);
  const [holdingHammer, setHoldingHammer] = useState(false);
  const [glassBroken, setGlassBroken] = useState(false);

  const [showRed, setShowRed] = useState(false);
  const [showGreen, setShowGreen] = useState(false);

  const [holePos, setHolePos] = useState([0, 0]);

  const [noOfEjected, setNoOfEjected] = useState(0);
  const noOfEjectedRef = useRef({});
  noOfEjectedRef.current = noOfEjected;

  const [toProfile, setToProfile] = useState(false);

  const [currentHitIndex, setCurrentHitIndex] = useState(0);
  const currentHitIndexRef = useRef({});
  currentHitIndexRef.current = currentHitIndex;
  var hitAudios = [];

  for (var i = 0; i < 10; i++) {
    hitAudios.push(
      <audio autoPlay={false} className="hidden-audio hit-sound">
        <source src={hit}></source>
      </audio>
    );
  }

  useEffect(() => {
    const watingTime = 500;
    var loadingInterval;

    if (loading) {
      loadingInterval = setInterval(() => {
        setLoading(false);
      }, watingTime);
    }

    if (!loading) {
      var brokenAudio = document.querySelector(".machine-broken-sound");
      brokenAudio.volume = 0.1;

      var glassAudio = document.querySelector(".glass-breaking-sound");
      glassAudio.volume = 0.5;

      var hitAudios = document.querySelectorAll(".hit-sound");

      for (var i = 0; i < hitAudios.length; i++) {
        hitAudios[i].volume = 0.3;
      }
    }

    return () => {
      clearInterval(loadingInterval);
    };
  }, [loading]);

  useEffect(() => {
    if (showRed) {
      spawnWords(world, redWords, setRedBodies, setSmashable, true);
    }
  }, [showRed]);

  // const [constraintPos, setConstraintPos] = useState(undefined)

  function initMatter() {
    var newEngine = Engine.create();
    var newWorld = newEngine.world;

    var outerBounds = document
      .querySelector(".canvas-parent")
      .getBoundingClientRect();
    var innerBounds = document
      .querySelector(".frame-filler")
      .getBoundingClientRect();

    console.log(outerBounds);

    var outerWidth = outerBounds.width;
    var outerHeight = outerBounds.height;

    var innerWidth = innerBounds.width;
    var innerHeight = innerBounds.height;

    var innerY = innerBounds.y;
    var innerX = innerBounds.x;

    render = Render.create({
      element: $(".canvas-parent")[0],
      engine: newEngine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: "transparent"
      },
      textures: {}
    });

    Render.run(render);

    runner = Runner.create();
    Runner.run(runner, newEngine);

    innerWalls.push(
      Bodies.rectangle(
        innerX + innerWidth / 2,
        innerY - wallThickness / 2,
        outerWidth,
        wallThickness,
        {
          isStatic: true,
          collisionFilter: {
            category: behindGlassCategory,
            mask: behindGlassCategory
          },
          render: {
            opacity: showWalls ? 1 : 0
          }
        }
      )
    );
    innerWalls.push(
      Bodies.rectangle(
        innerX + innerWidth + wallThickness / 2,
        innerY + innerHeight / 2,
        wallThickness,
        outerHeight,
        {
          isStatic: true,
          collisionFilter: {
            category: behindGlassCategory,
            mask: behindGlassCategory
          },
          render: {
            opacity: showWalls ? 1 : 0
          }
        }
      )
    );
    innerWalls.push(
      Bodies.rectangle(
        innerX + innerWidth / 2,
        innerY + innerHeight + wallThickness / 2,
        outerWidth,
        wallThickness,
        {
          isStatic: true,
          collisionFilter: {
            category: behindGlassCategory,
            mask: behindGlassCategory
          },
          render: {
            opacity: showWalls ? 1 : 0
          }
        }
      )
    );
    innerWalls.push(
      Bodies.rectangle(
        innerX - wallThickness / 2,
        innerY + innerHeight / 2,
        wallThickness,
        outerHeight,
        {
          isStatic: true,
          collisionFilter: {
            category: behindGlassCategory,
            mask: behindGlassCategory
          },
          render: {
            opacity: showWalls ? 1 : 0
          }
        }
      )
    );
    World.add(newWorld, innerWalls);

    outerWalls.push(
      Bodies.rectangle(
        outerWidth / 2,
        -wallThickness / 2,
        outerWidth,
        wallThickness,
        {
          isStatic: true,
          collisionFilter: {
            category: beforeGlassCategory,
            mask: beforeGlassCategory
          },
          render: {
            opacity: showWalls ? 1 : 0
          }
        }
      )
    );

    outerWalls.push(
      Bodies.rectangle(
        outerWidth + wallThickness / 2,
        outerHeight / 2,
        wallThickness,
        outerHeight,
        {
          isStatic: true,
          collisionFilter: {
            category: beforeGlassCategory,
            mask: beforeGlassCategory
          },
          render: {
            opacity: showWalls ? 1 : 0
          }
        }
      )
    );

    outerWalls.push(
      Bodies.rectangle(
        outerWidth / 2,
        outerHeight + wallThickness / 2,
        outerWidth,
        wallThickness,
        {
          isStatic: true,
          collisionFilter: {
            category: beforeGlassCategory,
            mask: beforeGlassCategory
          },
          render: {
            opacity: showWalls ? 1 : 0
          }
        }
      )
    );
    outerWalls.push(
      Bodies.rectangle(
        -wallThickness / 2,
        outerHeight / 2,
        wallThickness,
        outerHeight,
        {
          isStatic: true,
          collisionFilter: {
            category: beforeGlassCategory,
            mask: beforeGlassCategory
          },
          render: {
            opacity: showWalls ? 1 : 0
          }
        }
      )
    );

    World.add(newWorld, outerWalls);

    newEngine.world.gravity.y = 0;

    mouse = Mouse.create(render.canvas);
    mouseConstraint = MouseConstraint.create(newEngine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      },
      collisionFilter: {
        category: beforeGlassCategory | behindGlassCategory
      }
    });

    World.add(newWorld, mouseConstraint);

    render.mouse = mouse;
    setWorld(newWorld);
    setEngine(newEngine);
    setSpawnReady(true);
  }

  async function spawnWords(
    world,
    words,
    setBodies,
    setSmashable = undefined,
    wait
  ) {
    var bodies = [];
    const bounds = document
      .querySelector(".frame-filler")
      .getBoundingClientRect();
    const frameWidth = bounds.width;
    const frameHeight = bounds.height;

    console.log(bounds);
    var letterRadius = 32;
    var letterGap = 10;
    var lineGap = 48;
    var scale = 1;

    if (frameWidth < 1000) {
      scale = 0.75;
    } else if (frameWidth < 500) {
      scale = 0.5;
    }

    letterRadius *= scale;
    letterGap = letterRadius * 0.5;
    lineGap = 5 * letterRadius;

    var currentX = 0;
    var currentY = 0;

    if (wait) {
      await sleep(500);
    }

    for (var i = 0; i < words.length; i++) {
      var totalLength =
        words[i].length * 2 * letterRadius + (words[i].length - 2) * letterGap;
      currentX = bounds.left + (frameWidth - totalLength) / 2;
      currentY = window.innerHeight / 2 - lineGap * 0.5 + i * lineGap;

      console.log(bounds.left);
      console.log(frameWidth);
      console.log(totalLength / 2);

      for (var j = 0; j < words[i].length; j++) {
        // console.log(currentX);
        var letterBody = Bodies.circle(currentX, currentY, letterRadius, {
          friction: 0.01,
          restitution: 0.5,
          collisionFilter: {
            category: behindGlassCategory,
            mask: behindGlassCategory
          },
          render: {
            sprite: {
              texture: words[i][j],
              xScale: scale,
              yScale: scale
            }
          }
        });
        World.add(world, letterBody);
        bodies.push(letterBody);
        currentX += 2 * letterRadius + letterGap;

        var audio = document.querySelector(".typing-sound");
        audio.currentTime = 0;
        audio.play();

        await sleep(100);
      }
    }

    setBodies(bodies);

    if (setSmashable) {
      setTimeout(() => {
        setSmashable(true);
      }, 500);
    }
    return Promise.resolve();
  }

  function onClickScreen(e) {
    if (holdingHammer) {
      const frameBounds = e.target.getBoundingClientRect();
      const holeX = e.clientX - frameBounds.left;
      const holeY = e.clientY - frameBounds.top;

      setHolePos([holeX, holeY]);

      setGlassBroken(true);
      setClickPos([e.clientX, e.clientY]);
      var bodies = Composite.allBodies(world);
      setConstrainedBodies(bodies);
      for (var i = 0; i < bodies.length; i++) {
        var body = bodies[i];
        var constraint = Constraint.create({
          pointA: { x: e.clientX, y: e.clientY },
          bodyB: body,
          pointB: { x: 0, y: 0 },
          stiffness: 0.009,
          damping: 0.9,
          length: 1,
          render: {
            visible: false
          }
        });

        World.add(world, constraint);
      }
      setHoldingHammer(false);
      setSmashable(false);
      document.querySelector(".glass-breaking-sound").play();
      document.querySelector(".machine-broken-sound").play();
    }
  }

  function checkReachHole() {
    // for (var i = 0; i < bodies.length; i++){
    //   if()
    // }
    var bodies = [...constrainedBodies];

    for (var i = 0; i < bodies.length; i++) {
      if (bodies[i]) {
        var body = bodies[i];
        var x = body.position.x;
        var y = body.position.y;

        var dis = Math.sqrt(
          (x - clickPos[0]) * (x - clickPos[0]) +
            (y - clickPos[1]) * (y - clickPos[1])
        );

        if (dis < 45) {
          var targetId = body.id;
          var constraints = Composite.allConstraints(world);
          for (var j = 0; j < constraints.length; j++) {
            if (constraints[j].bodyB) {
              if (constraints[j].bodyB.id === targetId) {
                World.remove(world, constraints[j]);
                body.collisionFilter.category = beforeGlassCategory;
                body.collisionFilter.mask = beforeGlassCategory;
                var x = maxForce * (Math.random() < 0.5 ? -1 : 1);
                var y = maxForce * (Math.random() < 0.5 ? -1 : 1);

                Body.applyForce(body, body.position, Vector.create(x, y));
                bodies.splice(i, 1);

                setNoOfEjected(noOfEjectedRef.current + 1);

                break;
              }
            }
          }
        }
      }
    }
    setConstrainedBodies(bodies);
  }
  

  function playHitSound() {
    const audios = document.querySelectorAll(".hit-sound");

    if (audios) {
      const targetAudio = audios[currentHitIndexRef.current % 10];
      if (targetAudio) {
        targetAudio.currentTime = 0;
        targetAudio.play();
        setCurrentHitIndex(currentHitIndexRef.current + 1);
      }
    }
  }


  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkIsMobile = () => {
      const isMobileQuery = window.matchMedia('(max-width: 767px)');
      setIsMobile(isMobileQuery.matches);
    }},[]);

  useEffect(() => {
    if (engine === undefined) {
      initMatter();
    }
    if (engine) {
      Events.on(engine, "collisionStart", playHitSound);
    }
  }, [engine]);

  useEffect(() => {
    if (glassBroken) {
      Events.on(engine, "beforeUpdate", checkReachHole);
    }
  }, [glassBroken]);

  useEffect(() => {
    const totalLetters = redWords[0].length + redWords[1].length;
    console.log("total: " + totalLetters);
    console.log("current: " + noOfEjected);

    if (noOfEjected >= totalLetters) {
      setConstrainedBodies([]);
      Events.off(engine, "beforeUpdate", checkReachHole);

      setShowGreen(true);
    }
  }, [noOfEjected]);

  useEffect(() => {
    var timeout;
    if (showGreen) {
      spawnWords(world, greenWords, setGreenBodies, false, 1000).then(() => {
        timeout = setTimeout(() => {
          setToProfile(true);
        }, 1000);
      });
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [showGreen]);

  if (isMobile || toProfile) {
    // setToProfile(false);
    return <Redirect to="/profile/overview"></Redirect>;
  }

  return (
    <>
      <div className="loading-anim unclickable">
        <Loading show={loading} animate full></Loading>
      </div>

      <div className={`landing-container ${holdingHammer ? "hammer" : ""}`}>
        <div id="canvas-wrapper">
          <div className={`canvas-parent `}></div>
          <Frame
            className="z-index-6 screen-frame unclickable"
            show={!loading}
            animate={true}
            level={0}
            corners={5}
            noBackground={true}
          >
            {anim => (
              <div
                className={`frame-filler ${
                  anim.entered
                    ? "animate__animated animate__fadeIn animate__delay-05s"
                    : "invisible"
                }`}
                style={{
                  pointerEvents: holdingHammer ? "initial" : "none"
                }}
                onClick={e => {
                  onClickScreen(e, world);
                }}
              >
                <div className="screen-wrapper">
                  <img className="screen" alt="screen" src={screen_png}></img>
                  <img
                    style={{
                      opacity: glassBroken ? "1" : "0",
                      left: `${holePos[0]}px`,
                      top: `${holePos[1]}px`
                    }}
                    className="hole"
                    alt="hole"
                    src={hole_png}
                  ></img>
                </div>
              </div>
            )}
          </Frame>
        </div>

        <div className="hammer-btn-wrapper">
          <SFButton
            onClick={() => {
              setHoldingHammer(!holdingHammer);
            }}
            animate
            Cyberpunk
            show={smashable}
            level={0}
          >
            {anim => (
              <Words animate show={anim.entered}>
                {holdingHammer
                  ? "Disable Hacking Tool"
                  : "Activate Hacking Tool"}
              </Words>
            )}
          </SFButton>
        </div>

        <div className={`enter-btn-wrapper ${smashable ? "unclickable" : ""}`}>
          <SFButton
            onClick={() => {
              setShowRed(true);
              setSpawnReady(false);
            }}
            animate
            Cyberpunk
            show={spawnReady && !loading}
            level={0}
          >
            {anim => (
              <Words animate show={anim.entered}>
                Establish Connection
              </Words>
            )}
          </SFButton>
        </div>
      </div>

      <div className="audio container">
        <audio autoPlay={false} className="hidden-audio typing-sound">
          <source src={typing}></source>
        </audio>

        <audio autoPlay={false} className="hidden-audio glass-breaking-sound">
          <source src={glass_breaking}></source>
        </audio>

        <audio autoPlay={false} className="hidden-audio machine-broken-sound">
          <source src={machine_broken}></source>
        </audio>

        {hitAudios}
      </div>
    </>
  );
}
