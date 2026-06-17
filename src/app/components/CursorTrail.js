"use client";

import { useEffect, useRef } from "react";

export default function CursorTrail() {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const smoothedPos = useRef({ x: 0, y: 0 });
  const trailPoints = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const config = {
      maxTrailLength: 28,
      smoothFactor: 0.12,
      lineWidth: 2.5,
      // Dark ink: near-black with slight warm tint
      color: "17, 17, 17",
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      // Smooth toward real cursor
      smoothedPos.current.x +=
        (mousePos.current.x - smoothedPos.current.x) * config.smoothFactor;
      smoothedPos.current.y +=
        (mousePos.current.y - smoothedPos.current.y) * config.smoothFactor;

      trailPoints.current.push({ ...smoothedPos.current });
      if (trailPoints.current.length > config.maxTrailLength) {
        trailPoints.current.shift();
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (trailPoints.current.length > 1) {
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        for (let i = 1; i < trailPoints.current.length; i++) {
          // Progress 0→1 along the trail; newer points = higher alpha & width
          const t = i / trailPoints.current.length;
          const alpha = t * 0.45; // max ~45% opacity so it stays subtle
          const width = config.lineWidth * t;

          const p1 = trailPoints.current[i - 1];
          const p2 = trailPoints.current[i];

          ctx.strokeStyle = `rgba(${config.color}, ${alpha})`;
          ctx.lineWidth = width;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 9998 }} // just below context menu (9999)
      aria-hidden="true"
    />
  );
}
