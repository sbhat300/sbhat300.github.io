import React, { useRef, useEffect } from 'react';
import { createNoise3D } from 'simplex-noise';
import './AmbientCanvas.scss'

const AmbientCanvas = () => {
  const canvasRef = useRef(null);

  const circleCount = 150; 
  const circlePropCount = 8; 
  const circlePropsLength = circleCount * circlePropCount;
  const baseSpeed = 0.001;
  const rangeSpeed = 0.001; 
  const baseTTL = 200; 
  const rangeTTL = 250; 
  const baseRadius = 100; 
  const rangeRadius = 200; 
  const rangeHue = 60; 
  const xOff = 0.0015, yOff = 0.0015, zOff = 0.0015; 
  const backgroundColor = 'hsla(0,0%,5%,1)'; 
  const TAU = Math.PI * 2;
  const hueSpeed = 0.03;

  function rand(v) {
    return Math.random() * v;
  }
  function fadeInOut(t, m) {
    // Fade in and out function
    let hm = 0.5 * m;
    return Math.abs((t + hm) % m - hm) / hm;
  }
  function cos(t) { return Math.cos(t); }
  function sin(t) { return Math.sin(t); }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const offCanvas = document.createElement('canvas');
    const ctx = {
      a: offCanvas.getContext('2d'), // Offscreen context
      b: canvas.getContext('2d'), // Visible context
    };

    let circleProps;
    let noise3D;
    let baseHue;
    let animationFrameId;

    function resize() {
      const { innerWidth, innerHeight } = window;
      offCanvas.width = innerWidth;
      offCanvas.height = innerHeight;
      ctx.a.drawImage(offCanvas, 0, 0);
      canvas.width = innerWidth;
      canvas.height = innerHeight;
      ctx.b.drawImage(canvas, 0, 0);
    }

    function initCircles() {
      circleProps = new Float32Array(circlePropsLength);
      noise3D = createNoise3D();
      baseHue = 220;
      for (let i = 0; i < circlePropsLength; i += circlePropCount) {
        initCircle(i);
      }
    }

    function initCircle(i) {
      let x = rand(canvas.width); 
      let y = rand(canvas.height);
      let n = noise3D(x * xOff, y * yOff, baseHue * zOff); // Noise value
      let speed = baseSpeed + rand(rangeSpeed); 
      let t = rand(TAU);
      let vx = speed * cos(t); // Velocity x
      let vy = speed * sin(t); // Velocity y
      let life = 0;
      let ttl = baseTTL + rand(rangeTTL); // Time to live
      let radius = baseRadius + rand(rangeRadius);
      let hue = baseHue + n * rangeHue;
      circleProps.set([x, y, vx, vy, life, ttl, radius, hue], i);
    }

    function updateCircles() {
      baseHue += hueSpeed;
      for (let i = 0; i < circlePropsLength; i += circlePropCount) {
        updateCircle(i);
      }
    }

    // Update a single circle and redraw it if necessary
    function updateCircle(i) {
      let x = circleProps[i];
      let y = circleProps[i + 1];
      let vx = circleProps[i + 2];
      let vy = circleProps[i + 3];
      let life = circleProps[i + 4];
      let ttl = circleProps[i + 5];
      let radius = circleProps[i + 6];
      let hue = circleProps[i + 7];

      drawCircle(x, y, life, ttl, radius, hue); 
      life++;
      circleProps[i] = x + vx; 
      circleProps[i + 1] = y + vy; 
      circleProps[i + 4] = life; 
      // If out of bounds or life expired, re-initialize
      (checkBounds(x, y, radius) || life > ttl) && initCircle(i);
    }

    // Draw a single circle on the offscreen canvas
    function drawCircle(x, y, life, ttl, radius, hue) {
      // Save drawing state and values
      ctx.a.save();
      ctx.a.fillStyle = `hsla(${hue},60%,25%,${fadeInOut(life, ttl)})`;
      ctx.a.beginPath();
      ctx.a.arc(x, y, radius, 0, TAU);
      ctx.a.fill();
      ctx.a.closePath();
      //Restore drawing state and values
      ctx.a.restore();
    }

    // Check if a circle is out of bounds
    function checkBounds(x, y, radius) {
      return (
        x < -radius ||
        x > offCanvas.width + radius ||
        y < -radius ||
        y > offCanvas.height + radius
      );
    }

    function render() {
      ctx.b.save();
      // ctx.b.filter = 'blur(50px)';
      ctx.b.drawImage(offCanvas, 0, 0);
      ctx.b.restore();
    }

    function draw() {

      ctx.a.fillStyle = backgroundColor;
      ctx.a.fillRect(0, 0, offCanvas.width, offCanvas.height);
      updateCircles();
      render();
      animationFrameId = window.requestAnimationFrame(draw);
    }

    resize(); 
    initCircles(); 
    draw();
    window.addEventListener('resize', resize); 

    return () => {
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className='canvas-blur'>
      <canvas
        ref={canvasRef}
        style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}
      />
    </div>
  );
};

export default AmbientCanvas;
