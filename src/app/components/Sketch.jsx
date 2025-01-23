"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import { $uw } from '@theme'; // Assuming this is valid in your setup

const HexagonCollisionGSAP = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const paths = document.querySelectorAll("#words .name");
    paths.forEach((p) => {
      const length = p.getTotalLength();
      gsap.set(p, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });
    });

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId = null;

    let pg_size = window.innerWidth;
    const uw = (number) => (pg_size / 52) * number;
    const palette = ["#00fbff"];

    let size = window.innerWidth;
    canvas.width = size;
    canvas.height = size;
    const scaleFactor = size / pg_size;

    class Hexagon {
      constructor(posx, posy, radius, angle, id) {
        this.posx = posx;
        this.posy = posy;
        this.radius = radius;
        this.angle = angle;
        this.id = id;

        // Precompute original vertices
        this.vertices = [];
        for (let i = 0; i < 6; i++) {
          const theta = (Math.PI / 3) * i;
          this.vertices.push({
            x: this.radius * Math.cos(theta),
            y: this.radius * Math.sin(theta),
          });
        }

        this.edges = [];
        this.makeEdges();
      }

      makeEdges() {
        this.edges = [];
        const coords = this.computeWorldCoordinates();
        for (let i = 0; i < coords.length; i++) {
          const p1 = coords[i];
          const p2 = coords[(i + 1) % coords.length];
          this.edges.push(new Line(p1, p2));
        }
      }

      computeWorldCoordinates() {
        const coords = [];
        const cosA = Math.cos(this.angle);
        const sinA = Math.sin(this.angle);
        for (let vert of this.vertices) {
          const rx = cosA * vert.x - sinA * vert.y;
          const ry = sinA * vert.x + cosA * vert.y;
          coords.push({ x: rx + this.posx, y: ry + this.posy });
        }
        return coords;
      }

      collisionCheck(otherHex) {
        const collisionPoints = [];
        if (this.id === otherHex.id) return collisionPoints;
        for (let lineA of this.edges) {
          for (let lineB of otherHex.edges) {
            const pt = lineA.intersects(lineB);
            if (pt) collisionPoints.push(pt);
          }
        }
        return collisionPoints;
      }

      checkIfPointWithin(pt) {
        const { x, y } = pt;
        let inside = false;
        const vs = this.computeWorldCoordinates();
        for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
          const xi = vs[i].x,
            yi = vs[i].y;
          const xj = vs[j].x,
            yj = vs[j].y;
          const intersect =
            (yi > y !== yj > y) &&
            x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
          if (intersect) inside = !inside;
        }
        return inside;
      }

      getIntersectionArea(otherHex) {
        const intersectionPoints = this.collisionCheck(otherHex);
        if (intersectionPoints.length === 0) {
          return null;
        }
        const otherPointsWithinThis = otherHex
          .computeWorldCoordinates()
          .filter((p) => this.checkIfPointWithin(p));
        const thisPointsWithinOther = this
          .computeWorldCoordinates()
          .filter((p) => otherHex.checkIfPointWithin(p));

        const allPoints = [
          ...intersectionPoints,
          ...otherPointsWithinThis,
          ...thisPointsWithinOther,
        ];

        const N = allPoints.length;
        const centerX = allPoints.reduce((acc, p) => acc + p.x, 0) / N;
        const centerY = allPoints.reduce((acc, p) => acc + p.y, 0) / N;

        const sorted = allPoints
          .map((p) => ({
            p,
            ang: Math.atan2(p.y - centerY, p.x - centerX),
          }))
          .sort((a, b) => a.ang - b.ang);

        return sorted.map((obj) => obj.p);
      }

      draw(ctx) {
        ctx.save();
        ctx.beginPath();
        const coords = this.computeWorldCoordinates();
        ctx.moveTo(coords[0].x, coords[0].y);
        for (let i = 1; i < coords.length; i++) {
          ctx.lineTo(coords[i].x, coords[i].y);
        }
        ctx.closePath();
        ctx.strokeStyle = "#117888";
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.restore();
      }
    }

    class Line {
      constructor(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
      }
      intersects(otherLine) {
        return intersectLines(this, otherLine);
      }
    }

    function intersectLines(line1, line2) {
      const { x: x1, y: y1 } = line1.p1;
      const { x: x2, y: y2 } = line1.p2;
      const { x: x3, y: y3 } = line2.p1;
      const { x: x4, y: y4 } = line2.p2;

      if ((x1 === x2 && y1 === y2) || (x3 === x4 && y3 === y4)) {
        return null;
      }
      const denominator =
        (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
      if (denominator === 0) return null;

      const ua =
        ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator;
      const ub =
        ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denominator;

      if (ua < 0 || ua > 1 || ub < 0 || ub > 1) {
        return null;
      }

      const x = x1 + ua * (x2 - x1);
      const y = y1 + ua * (y2 - y1);
      return { x, y };
    }

    // Create hexagons
    const h1 = new Hexagon(uw(6), uw(20), uw(5), 0, 0);
    const h2 = new Hexagon(uw(50), uw(20), uw(5), 0, 1);
    const hexagons = [h1, h2];

    // Main render loop
    function render() {
      ctx.clearRect(0, 0, size, size);
      ctx.save();
      ctx.scale(scaleFactor, scaleFactor);

      // Draw hexagons
      hexagons.forEach((hex) => {
        hex.makeEdges();
        hex.draw(ctx);
      });

      // Check collisions
      for (let i = 0; i < hexagons.length; i++) {
        for (let j = i + 1; j < hexagons.length; j++) {
          const polyPoints = hexagons[i].getIntersectionArea(hexagons[j]);
          if (polyPoints) {
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(polyPoints[0].x, polyPoints[0].y);
            for (let k = 1; k < polyPoints.length; k++) {
              ctx.lineTo(polyPoints[k].x, polyPoints[k].y);
            }
            ctx.closePath();
            ctx.fillStyle = palette[0];
            ctx.fill();
            ctx.lineWidth = 2.5;
            ctx.strokeStyle = "#117888";
            ctx.stroke();
            ctx.restore();
          }
        }
      }
      ctx.restore();
      animationFrameId = requestAnimationFrame(render);
    }
    render();

    // -----------------------------
    // 2) GSAP Timeline
    // -----------------------------
    // We want the second hex to "roll in" (align horizontally),
    // then immediately start drawing the letters,
    // then rotate the second hex to final angle.
    const tl = gsap.timeline();

    // 1) Move second hex horizontally into place
    tl.to(h2, {
      duration: 2,
      posx: uw(6),
      angle: -Math.PI * 3,
      ease: "power1.inOut",
    })
    // 2) Immediately draw the letters after it’s aligned
    .to(
      "#words .name",
      {
        strokeDashoffset: 0, // reveal
        duration: 2,
        delay: 1,
        ease: "power1.inOut",        
      },      
    )
    // 3) Rotate second hex to final angle
    .to(
      h2,
      {
        duration: 2,
        angle: -(Math.PI * 3) - Math.PI / 6,
        ease: "power1.inOut",
      },
      "<"
    );

    // Handle resizing
    function handleResize() {
      cancelAnimationFrame(animationFrameId);
      const newSize = window.innerWidth;
      canvas.width = newSize;
      canvas.height = newSize;
      size = newSize;
      pg_size = newSize;
      render();
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      tl.kill();
    };
  }, []);

  return (
    <>
      <Canvas ref={canvasRef} />
      <WordsContainer>
        <svg
          id="words"
          version="1.1"
          viewBox="0 0 755.9055 755.9055"
          fill="none"
          stroke="none"
          strokeMiterlimit="10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <clipPath id="p.0">
            <path d="m0 0h755.9055v755.9055h-755.9055z" clipRule="nonzero" />
          </clipPath>
          <g clipPath="url(#p.0)">
            <path
              className="name"
              stroke="#0b505b"
              strokeWidth="8"
              strokeLinejoin="round"
              strokeLinecap="butt"
              d="m285.99347 208.14973l-1.1686096 339.6786"
              fillRule="evenodd"
            />
            <path
              className="name"
              stroke="#0b505b"
              strokeWidth="8"
              strokeLinejoin="round"
              strokeLinecap="butt"
              d="m285.9888 211.46642l94.09482 241.37422"
              fillRule="evenodd"
            />
            <path
              className="name"
              stroke="#0b505b"
              strokeWidth="8"
              strokeLinejoin="round"
              strokeLinecap="butt"
              d="m472.99747 208.14973l1.1686096 339.6786"
              fillRule="evenodd"
            />
            <path
              className="name"
              stroke="#0b505b"
              strokeWidth="8"
              strokeLinejoin="round"
              strokeLinecap="butt"
              d="m473.00214 211.46642l-94.09482 241.37422"
              fillRule="evenodd"
            />
            <path
              className="name"
              stroke="#0b505b"
              strokeWidth="8"
              strokeLinejoin="round"
              strokeLinecap="butt"
              d="m282.44608 544.51154h161.18176"
              fillRule="evenodd"
            />
          </g>
        </svg>
      </WordsContainer>
    </>
  );
};

export default HexagonCollisionGSAP;

/* ----------------- STYLES ----------------- */
const Canvas = styled.canvas`
  opacity: 0;
  animation: appear 1s ease-in-out 1s;
  animation-fill-mode: forwards;
  width: 100%;
  display: block;
  position: absolute;


`;

const WordsContainer = styled.div`
  position: absolute;
  top: calc( 50% - ${$uw(12.5)});
  left: ${$uw(0.7)};
  width: ${$uw(12.5)};
  
  * {
    opacity:0;
    animation: appear 1s ease-in-out 4s;
    animation-fill-mode: forwards;
  }
  /* This container controls the SVG's size/position. 
     The 'letters' will remain invisible initially 
     because of the strokeDashoffset set on mount. */
`;
