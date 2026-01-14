import { useEffect, useState } from "react";
import "./cursor.scss";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []); // ✅ IMPORTANT

  return (
    <div
      className="cursor"
      style={{
        left: position.x+10,
        top: position.y+10,
      }}
    />
  );
};

export default Cursor;
