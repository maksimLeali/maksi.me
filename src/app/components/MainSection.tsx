"use client"

import { $breakPoint, $color, $cssTRBL, $uw } from "@/theme"
import styled from "styled-components"


export const MainSection = () => {
    return (
        <Section id="mainSection">
            <Title>
                <h1>LeMaks</h1>
                <Cutter>
                    <Upper className="upper"></Upper>
                    <Lower className="lower"></Lower>
                    <Inside className="inside">Costruisco l'essenziale</Inside>
                </Cutter>
            </Title>

        </Section>
    )
}



const Section = styled.section`
  display: flex;
  justify-content: space-between;
  padding:${$cssTRBL(1)};
  height:${$uw(20)};
  align-items: center;
  position: relative;
  
  
`

const Title = styled.div`
    display: flex;
    align-items: center;
    h1 {
        font-size: ${$uw(4)};
    }

`

const Cutter = styled.div`
width: ${$uw(30)};
height: ${$uw(10)};
overflow: hidden;
position: relative;
margin-left: ${$uw(1)};
`

const Upper = styled.h3`
     position: absolute;
    width: 100%;
    height: ${$uw(1.5)};
    z-index: 1;
    top: calc( 50% - ${$uw(1.5)});
    overflow: hidden;
    animation: titleUp 2s ease-in-out 2s;
    animation-fill-mode: forwards;
    background-color: ${$color('black-dark')};
    &::before{
        position: absolute;
        width: 100%;
        height:${$uw(3)};
        font-size: ${$uw(3)};
        bottom:-50%;
        content: "Taglio il superfluo";
    }
   
`;

const Lower = styled.h3`
    position: absolute;
    width: 100%;
    height: ${$uw(1.5)};
    z-index: 1;
    top:50%;
    overflow: hidden;
    animation: titleDown 2s ease-in-out  2s;
    background-color: ${$color('black-dark')};
    animation-fill-mode: forwards;
    &::before{
        position: absolute;
        width: 100%;
        font-size: ${$uw(3)};
        height: ${$uw(3)};
        bottom: 50%;
        content: "Taglio il superfluo";
    }
 
`;

const Inside = styled.div`
  position: absolute;
font-size: ${$uw(3)};

animation: appear 3s ease-in-out  2s;
animation-fill-mode: forwards;
    width: 100%;
    text-align: center;
  top: calc(50% - ${$uw(2)});  
  z-index: 0;
  color: ${$color('tertiary')};
`;

/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hexagon Collision Visualization</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/p5.js"></script>
  <style>
    body {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #050505;
    }
    canvas {
      display: block;
    }
  </style>
</head>
<body>
  <script>
    const palette = [ "#29ac9f"];

    let pg;
    const pg_size = 1080;
    let w, pad;
    let handler;

    function windowResized() {
      w = Math.min(windowWidth, windowHeight);
      resizeCanvas(w, w);
      image(pg, 0, 0, w, w);
    }

    function setup() {
      w = Math.min(windowWidth, windowHeight);
      pad = w / 12;
      createCanvas(w, w);

      pg = createGraphics(pg_size, pg_size);
      pg.strokeJoin(ROUND);

      handler = new makeHandler();
    }

    function draw() {
      pg.background("#050505");
      handler.update(); // Update angles for rotation
      handler.display();
      handler.collisionHandler();
      handler.getIntersectionPolygons();

      image(pg, 0, 0, w, w);
    }

    function makeHexagon(posx, posy, radius, angle, id) {
      this.posx = posx;
      this.posy = posy;
      this.radius = radius;
      this.angle = angle;
      this.id = id;
      this.vertices = [];

      this.makeCoordinates = function () {
        this.vertices = [];
        for (let i = 0; i < 6; i++) {
          let theta = this.angle + (PI / 3) * i;
          this.vertices.push({
            x: this.radius * cos(theta),
            y: this.radius * sin(theta),
          });
        }
      };
      this.makeCoordinates();

      this.computeRotation = function () {
        let recomputedCoordinates = [];
        for (let vert of this.vertices) {
          let c = cos(this.angle);
          let s = sin(this.angle);
          recomputedCoordinates.push({
            x: c * vert.x - s * vert.y + this.posx,
            y: s * vert.x + c * vert.y + this.posy,
          });
        }
        return recomputedCoordinates;
      };

      this.edges = [];
      this.makeEdges = function () {
        this.edges = [];
        let coords = this.computeRotation();
        for (let n = 0; n < coords.length; n++) {
          let coord = coords[n];
          let nextCoord = coords[(n + 1) % 6];
          this.edges.push(new makeLine(coord, nextCoord));
        }
      };
      this.makeEdges();

      this.collisionCheck = function (otherHexagon) {
        let collisionArea = [];

        if (this.id === otherHexagon.id) {
          return collisionArea;
        }

        for (let currLine of this.edges) {
          for (let otherLine of otherHexagon.edges) {
            let check = currLine.intersects(otherLine);
            if (check) {
              collisionArea.push(check);
            }
          }
        }
        return collisionArea;
      };

      this.checkIfPointWithin = function (p) {
        let x = p.x;
        let y = p.y;

        let inside = false;
        let vs = this.computeRotation();
        for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
          var xi = vs[i].x,
            yi = vs[i].y;
          var xj = vs[j].x,
            yj = vs[j].y;

          var intersect =
            yi > y !== yj > y &&
            x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
          if (intersect) inside = !inside;
        }

        return inside;
      };

      this.getIntersectionArea = function (otherHexagon) {
        let intersectionPoints = this.collisionCheck(otherHexagon);

        if (intersectionPoints.length === 0) {
          return false;
        }

        let otherPointsWithinThis = otherHexagon
          .computeRotation()
          .filter((v) => this.checkIfPointWithin(v));

        let thisPointsWithinOther = this
          .computeRotation()
          .filter((v) => otherHexagon.checkIfPointWithin(v));

        let allPoints = [
          ...intersectionPoints,
          ...otherPointsWithinThis,
          ...thisPointsWithinOther,
        ];

        let N = allPoints.length;
        let centerX = allPoints.reduce((p, c) => p + c.x, 0) / N;
        let centerY = allPoints.reduce((p, c) => p + c.y, 0) / N;

        let pointsAndAngs = allPoints.map((p) => ({
          p: p,
          ang: atan2(centerY - p.y, centerX - p.x),
        }));

        pointsAndAngs.sort((a, b) => a.ang - b.ang);

        return pointsAndAngs;
      };

      this.display = function () {
        pg.push();
        pg.noFill();
        pg.stroke("#fffbe6");
        let coords = this.computeRotation();
        pg.strokeWeight(2.5);
        pg.beginShape();
        for (let coord of coords) {
          pg.vertex(coord.x, coord.y);
        }
        pg.endShape(CLOSE);
        pg.pop();
      };
    }

    function makeLine(p1, p2) {
      this.p1 = p1;
      this.p2 = p2;

      this.intersects = function (otherLine) {
        return intersect(this, otherLine);
      };
    }

    function intersect(line1, line2) {
      x1 = line1.p1.x;
      y1 = line1.p1.y;

      x2 = line1.p2.x;
      y2 = line1.p2.y;

      x3 = line2.p1.x;
      y3 = line2.p1.y;

      x4 = line2.p2.x;
      y4 = line2.p2.y;

      if ((x1 === x2 && y1 === y2) || (x3 === x4 && y3 === y4)) {
        return false;
      }

      let denominator = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);

      if (denominator === 0) {
        return false;
      }

      let ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator;
      let ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denominator;

      if (ua < 0 || ua > 1 || ub < 0 || ub > 1) {
        return false;
      }

      let x = x1 + ua * (x2 - x1);
      let y = y1 + ua * (y2 - y1);

      return { x, y };
    }

    function makeHandler() {
      this.hexagons = [];

      this.makeHexagons = function () {
        this.hexagons.push(
          new makeHexagon(pg_size / 2, pg_size / 2, 100, 0, 0),
          new makeHexagon(pg_size / 2, pg_size / 2, 100, 0, 1)
        );
      };
      this.makeHexagons();

      this.update = function () {
        // Only rotate the second hexagon until it reaches 30 degrees
        const maxAngle = radians(30);
        if (this.hexagons[1].angle > -maxAngle) {
          this.hexagons[1].angle -= radians(6) / 60; // Rotate counterclockwise
          this.hexagons[1].makeEdges();
        }
      };

      this.collisionHandler = function () {
        for (let n = 0; n < this.hexagons.length; n++) {
          let currH = this.hexagons[n];
          for (let k = 0; k < this.hexagons.length; k++) {
            let otherH = this.hexagons[k];
            if (currH.id !== otherH.id) {
              currH.collisionCheck(otherH);
            }
          }
        }
      };

      this.getIntersectionPolygons = function () {
        for (let n = 0; n < this.hexagons.length; n++) {
          let currH = this.hexagons[n];
          for (let k = n; k < this.hexagons.length; k++) {
            let otherH = this.hexagons[k];
            if (currH.id !== otherH.id) {
              let check = currH.getIntersectionArea(otherH);
              if (check) {
                pg.push();
                pg.fill(random(palette));
                pg.stroke(255);
                pg.strokeWeight(5);
                pg.beginShape();
                check.forEach((v) => pg.vertex(v.p.x, v.p.y));
                pg.endShape(CLOSE);
                pg.pop();
              }
            }
          }
        }
      };

      this.display = function () {
        for (let hex of this.hexagons) {
          hex.display();
        }
      };
    }
  </script>
</body>
</html>
*/