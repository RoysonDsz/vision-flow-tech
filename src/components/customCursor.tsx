import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<HTMLDivElement[]>([]);
  const trailCount = 12; // Number of trailing elements

  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const positions: { x: number; y: number }[] = Array(trailCount).fill({ x: 0, y: 0 });
    let fadeTimeout: NodeJS.Timeout;

    const updateTrail = (x: number, y: number) => {
      positions.pop(); // Remove the last position
      positions.unshift({ x, y }); // Add new position at the front

      trailRefs.current.forEach((trail, index) => {
        if (trail) {
          const { x, y } = positions[index];
          trail.style.transform = `translate(${x}px, ${y}px)`;
          trail.style.opacity = "0.5"; // Ensure visibility while moving
        }
      });

      setIsMoving(true);
      clearTimeout(fadeTimeout);
      fadeTimeout = setTimeout(() => {
        setIsMoving(false); // Detect stop
      }, 100);
    };

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`;
      }

      updateTrail(clientX, clientY);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(fadeTimeout);
    };
  }, []);

  useEffect(() => {
    if (!isMoving) {
      // Fade out trails when stopping
      trailRefs.current.forEach((trail) => {
        if (trail) {
          trail.style.opacity = "0"; // Gradually fade out
        }
      });
    }
  }, [isMoving]);

  return (
    <>
      {/* Main Cursor */}
      <div
        ref={cursorRef}
        className="hidden md:block fixed w-4 h-4 bg-white rounded-full pointer-events-none z-50"
        style={{
          transform: "translate(-50%, -50%)",
          transition: "transform 0.05s linear",
        }}
      />

      {/* Trailing Effect */}
      {Array(trailCount)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            ref={(el) => (trailRefs.current[index] = el!)}
            className="hidden md:block fixed w-3 h-3 bg-white rounded-full pointer-events-none z-40 transition-opacity duration-500"
            style={{
              transform: "translate(-50%, -50%)",
              transition: `transform ${0.05 * (index + 1)}s ease-out`,
              opacity: "0", // Start invisible
            }}
          />
        ))}
    </>
  );
}
