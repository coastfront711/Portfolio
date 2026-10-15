"use client";

import { useEffect, useRef } from "react";

export default function FloatingBlob() {
  const blobRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement | null>(null);

  const position = useRef({
    x: 0,
    y: 0,
  });

  const velocity = useRef({
    x: 0.45,
    y: 0.2,
  });

  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const dragging = useRef(false);

  const dragOffset = useRef({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const blob = blobRef.current;
    const hero = document.querySelector(
      ".hero"
    ) as HTMLElement | null;

    if (!blob || !hero) return;

    heroRef.current = hero;

    const heroWidth = hero.offsetWidth;
    const heroHeight = hero.offsetHeight;

    // Start somewhere toward the right side
    position.current.x =
      heroWidth * 0.72;

    position.current.y =
      heroHeight * 0.42;

    let animationFrame: number;

    const handleMouseMove = (
      event: MouseEvent
    ) => {
      if (!dragging.current) return;

      const rect =
        hero.getBoundingClientRect();

      mouse.current.x =
        event.clientX - rect.left;

      mouse.current.y =
        event.clientY - rect.top;

      position.current.x =
        mouse.current.x -
        dragOffset.current.x;

      position.current.y =
        mouse.current.y -
        dragOffset.current.y;
    };

    const handleMouseDown = (
      event: MouseEvent
    ) => {
      // Left click only
      if (event.button !== 0) return;

      const rect =
        blob.getBoundingClientRect();

      const inside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      if (!inside) return;

      const heroRect =
        hero.getBoundingClientRect();

      const mouseX =
        event.clientX - heroRect.left;

      const mouseY =
        event.clientY - heroRect.top;

      dragging.current = true;

      dragOffset.current.x =
        mouseX - position.current.x;

      dragOffset.current.y =
        mouseY - position.current.y;

      velocity.current.x = 0;
      velocity.current.y = 0;

      blob.style.cursor = "grabbing";

      event.preventDefault();
    };

    const handleMouseUp = (
      event: MouseEvent
    ) => {
      if (!dragging.current) return;

      if (event.button !== 0) return;

      dragging.current = false;

      blob.style.cursor = "grab";

      // Give it a little momentum
      velocity.current.x =
        (mouse.current.x -
          position.current.x) *
        0.012;

      velocity.current.y =
        (mouse.current.y -
          position.current.y) *
        0.012;
    };

    const animate = () => {
      const width = hero.offsetWidth;
      const height = hero.offsetHeight;

      const blobSize = 280;

      if (!dragging.current) {
        // Autonomous movement
        position.current.x +=
          velocity.current.x;

        position.current.y +=
          velocity.current.y;

        // Keep movement alive
        velocity.current.x *= 0.998;
        velocity.current.y *= 0.998;

        if (
          Math.abs(
            velocity.current.x
          ) < 0.18
        ) {
          velocity.current.x +=
            velocity.current.x >= 0
              ? 0.002
              : -0.002;
        }

        if (
          Math.abs(
            velocity.current.y
          ) < 0.08
        ) {
          velocity.current.y +=
            velocity.current.y >= 0
              ? 0.001
              : -0.001;
        }

        /*
         * Bounce around INSIDE the hero
         * instead of travelling across
         * the whole website.
         */

        const minX = -blobSize * 0.35;
        const maxX =
          width - blobSize * 0.65;

        const minY = -blobSize * 0.35;
        const maxY =
          height - blobSize * 0.65;

        if (
          position.current.x < minX
        ) {
          position.current.x = minX;
          velocity.current.x *= -1;
        }

        if (
          position.current.x > maxX
        ) {
          position.current.x = maxX;
          velocity.current.x *= -1;
        }

        if (
          position.current.y < minY
        ) {
          position.current.y = minY;
          velocity.current.y *= -1;
        }

        if (
          position.current.y > maxY
        ) {
          position.current.y = maxY;
          velocity.current.y *= -1;
        }
      }

      blob.style.transform = `
        translate3d(
          ${position.current.x}px,
          ${position.current.y}px,
          0
        )
      `;

      animationFrame =
        requestAnimationFrame(
          animate
        );
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    window.addEventListener(
      "mousedown",
      handleMouseDown
    );

    window.addEventListener(
      "mouseup",
      handleMouseUp
    );

    blob.style.cursor = "grab";

    animationFrame =
      requestAnimationFrame(
        animate
      );

    return () => {
      cancelAnimationFrame(
        animationFrame
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "mousedown",
        handleMouseDown
      );

      window.removeEventListener(
        "mouseup",
        handleMouseUp
      );
    };
  }, []);

  return (
    <div
      ref={blobRef}
      className="floating-blob"
      aria-hidden="true"
    />
  );
}
