import React, { useEffect, useState } from "react";
import { Loading, Frame } from "arwes";
import { Link } from "react-router-dom";
import $ from "jquery"; //not needed

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
  green_t
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

  const [clicked, setClicked] = useState(false);
  const [clickPos, setClickPos] = useState([undefined, undefined]);
  const [world, setWorld] = useState(undefined);
  const [engine, setEngine] = useState(undefined);
  const [constrainedBodies, setConstrainedBodies] = useState([]);
  const [allOut, setAllOut] = useState(false);

  const [loading, setLoading] = useState(true);

  const [redBodies, setRedBodies] = useState([]);

  const [greenBodies, setGreenBodies] = useState([]);
  const [smashable, setSmashable] = useState(false);

  useEffect(() => {
    const watingTime = 500;
    var loadingInterval;

    if (loading) {
      loadingInterval = setInterval(() => {
        setLoading(false);
      }, watingTime);
    }

    return () => {
      clearInterval(loadingInterval);
    };
  }, [loading]);

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

    // World.add(world, [
    //   Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
    //   Bodies.rectangle(400, 600, 800, 50.5, { isStatic: true }),
    //   Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
    //   Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
    // ]);
    async function spawnWords(words, setBodies, setSmashable = undefined) {
      var bodies = [];

      for (var i = 0; i < words.length; i++) {
        for (var j = 0; j < words[i]; j++) {
          var letterBody = Bodies.circle();
        }
      }
    }

    var stack = Composites.stack(50, 120, 11, 5, 0, 0, function(x, y) {
      switch (Math.round(Common.random(0, 1))) {
        case 0:
          if (Common.random() < 0.8) {
            return Bodies.rectangle(
              x,
              y,
              Common.random(20, 50),
              Common.random(20, 50),
              {
                collisionFilter: {
                  category: behindGlassCategory,
                  mask: behindGlassCategory
                }
              }
            );
          } else {
            return Bodies.rectangle(
              x,
              y,
              Common.random(80, 120),
              Common.random(20, 30),
              {
                collisionFilter: {
                  category: behindGlassCategory,
                  mask: behindGlassCategory
                }
              }
            );
          }
        case 1:
          return Bodies.polygon(
            x,
            y,
            Math.round(Common.random(1, 8)),
            Common.random(20, 50),
            {
              collisionFilter: {
                category: behindGlassCategory,
                mask: behindGlassCategory
              }
            }
          );
      }
    });

    World.add(newWorld, stack);

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
  }

  function onClickCanvas(e) {
    if (!clicked && !loading) {
      setClicked(true);
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

                break;
              }
            }
          }
        }
      }
    }

    if (Composite.allConstraints(world).length <= 1) {
      console.log("true");
      setConstrainedBodies([]);
      Events.off(engine, "beforeUpdate", checkReachHole);
    } else {
      setConstrainedBodies(bodies);
    }
  }

  useEffect(() => {
    if (engine === undefined) {
      initMatter();
    }

    return () => {};
  }, [engine]);

  useEffect(() => {
    if (clicked) {
      Events.on(engine, "beforeUpdate", checkReachHole);
    }

    return () => {};
  }, [clicked]);

  return (
    <>
      <div className="loading-anim unclickable">
        <Loading show={loading} animate full></Loading>
      </div>

      <div className="landing-container">
        <div
          onClick={e => {
            onClickCanvas(e, world);
          }}
          id="canvas-wrapper"
          className={``}
        >
          <div
            className={`canvas-parent ${
              loading
                ? "invisible"
                : "animate__animated animate__fadeIn animate__delay-05s"
            }`}
          ></div>
          <Frame show={!loading} animate={true} level={0} corners={5}>
            {anim => (
              <div
                className={`frame-filler ${
                  anim.entered
                    ? "animate__animated animate__fadeIn animate__delay-05s"
                    : "invisible"
                }`}
              ></div>
            )}
          </Frame>
        </div>
      </div>
    </>
  );
}
