import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import $ from "jquery"; //not needed

// import { Matter } from "matter-js";

const Matter = require("matter-js");

const behindGlassCategory = 0x0001;
const beforeGlassCategory = 0x0002;

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
    Constraint = Matter.Constraint,
    Events = Matter.Events;

  var render;
  var mouse;

  var mouseConstraint;
  var runner;

  const [clicked, setClicked] = useState(false);
  const [clickPos, setClickPos] = useState([undefined, undefined]);
  const [world, setWorld] = useState(undefined);
  const [engine, setEngine] = useState(undefined);
  const [constrainedBodies, setConstrainedBodies] = useState([]);
  const [allOut, setAllOut] = useState(false);

  // const [constraintPos, setConstraintPos] = useState(undefined)

  function initMatter() {
    var newEngine = Engine.create();
    var newWorld = newEngine.world;

    render = Render.create({
      element: $("#canvas-wrapper")[0],
      engine: newEngine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        background: "transparent"
      },
      textures: {}
    });

    Render.run(render);

    runner = Runner.create();
    Runner.run(runner, newEngine);

    // World.add(world, [
    //   Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
    //   Bodies.rectangle(400, 600, 800, 50.5, { isStatic: true }),
    //   Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
    //   Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
    // ]);
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
        category: beforeGlassCategory
      }
    });

    World.add(newWorld, mouseConstraint);

    render.mouse = mouse;
    setWorld(newWorld);
    setEngine(newEngine);
  }

  function onClickCanvas(e) {
    if (!clicked) {
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
                bodies.splice(i, 1);
                console.log("removed");
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
      <div
        onClick={e => {
          onClickCanvas(e, world);
        }}
        id="canvas-wrapper"
        className="full-view-port"
      ></div>
    </>
  );
}
