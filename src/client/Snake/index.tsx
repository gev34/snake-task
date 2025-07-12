import { FC, useEffect, useState } from "react";

import { WIDTH, HEIGHT, CELL_SIZE, DOWN, LEFT, UP, RIGHT, INITIAL_SNAKE } from "./config";

const Snake: FC = () => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(RIGHT);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const allDirections = [UP, DOWN, LEFT, RIGHT];
      if (allDirections.includes(e.key)) {
        setDirection(e.key);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSnake((prev) => {
        const head = { ...prev[0] };
        switch (direction) {
          case UP:
            head.y -= 1;
            break;
          case DOWN:
            head.y += 1;
            break;
          case LEFT:
            head.x -= 1;
            break;
          case RIGHT:
            head.x += 1;
            break;
        }
        return [head, ...prev.slice(0, -1)];
      });
    }, 200);
    return () => clearInterval(interval);
  }, [direction]);

  return (
    <svg width={WIDTH} height={HEIGHT} style={{ border: "1px solid black" }}>
      {snake.map((dir, idx) => (
        <rect
          key={idx}
          x={dir.x * CELL_SIZE}
          y={dir.y * CELL_SIZE}
          width={CELL_SIZE}
          height={CELL_SIZE}
          fill="green"
        />
      ))}
    </svg>
  );
};

export default Snake;
