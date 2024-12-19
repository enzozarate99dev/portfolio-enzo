import { useEffect, useRef } from 'react';

const BackgroundEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const w = (canvas.width = window.innerWidth);
    const h = (canvas.height = window.innerHeight);
    const cols = Math.floor(w / 20) + 1;
    const ypos = Array(cols).fill(0);

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, w, h);

    const matrix = () => {
      ctx.fillStyle = '#0001';
      ctx.fillRect(0, 0, w, h);

      // Adjust font size based on screen width
      const fontSize = window.innerWidth <= 768 ? 10 : 15; // Smaller font for mobile
      ctx.font = `${fontSize}pt monospace`;

      ctx.fillStyle = '#009929';

      ypos.forEach((y, ind) => {
        const text = Math.floor(Math.random() * 2);
        const x = ind * 20;
        ctx.fillText(text, x, y);

        if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
        else ypos[ind] = y + 20;
      });
    };

    const intervalId = setInterval(matrix, 100);

    // Cleanup on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    />
  );
};

export default BackgroundEffect;
