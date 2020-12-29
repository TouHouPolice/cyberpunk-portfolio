import React, { useEffect, useRef } from "react";

import { Link } from "react-router-dom";
import $ from "jquery";

// import { Matter } from "matter-js";

const Matter = require("matter-js");

export default function Landing() {
  var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Composites = Matter.Composites,
    Common = Matter.Common,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    World = Matter.World,
    Bodies = Matter.Bodies;

  var engine;
  var render;
  var mouse;
  var world;
  var mouseConstraint;
  var runner;

  function initMatter() {
    engine = Engine.create();
    world = engine.world;

    render = Render.create({
      element: $("#canvas-wrapper")[0],
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        background: "transparent"
      },
      textures: {}
    });

    Render.run(render);

    runner = Runner.create();
    Runner.run(runner, engine);

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
              Common.random(20, 50)
            );
          } else {
            return Bodies.rectangle(
              x,
              y,
              Common.random(80, 120),
              Common.random(20, 30)
            );
          }
        case 1:
          return Bodies.polygon(
            x,
            y,
            Math.round(Common.random(1, 8)),
            Common.random(20, 50)
          );
      }
    });

    World.add(world, stack);

    engine.world.gravity.y = 0;

    mouse = Mouse.create(render.canvas);
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });

    World.add(world, mouseConstraint);

    render.mouse = mouse;

    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: window.innerWidth, y: window.innerHeight }
    });
  }

  useEffect(() => {
    if (engine === undefined) {
      initMatter();
    }

    return () => {};
  }, []);

  return (
    <>
      <div id="canvas-wrapper" className="full-view-port"></div>
    </>
  );
}
