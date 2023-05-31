import { useEffect, useRef } from 'react';
import styles from './style.module.scss';

function LittleGraphic({ className, data = [], width = 30, height = 30, color }) {
  const canvasRef = useRef(null);
  const _className = `${styles.root} ${className || ''}`;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Максимальное значение данных
    const maxDataValue = Math.max.apply(null, data);

    // Шаги по осям
    const xStep = width / (data.length - 1);
    const yStep = height / maxDataValue;

    // Очистить поле
    ctx.clearRect(0, 0, width, height);

    // Задаем цвет рисования
    ctx.lineWidth = 2;
    ctx.StrokeStyle = color;
    ctx.fillStyle = color;

    // Нарисовать оси графика
    // ctx.beginPath();
    // ctx.moveTo(0, 0);
    // ctx.lineTo(0, height);
    // ctx.lineTo(width, height);
    // ctx.stroke();

    // Нарисовать график с использованием кривых Безье
    ctx.beginPath();
    ctx.moveTo(1, data[0]);
    for (let i = 0; i < data.length - 1; i++) {
      const x1 = i * xStep;
      const y1 = height - data[i] * yStep;
      const x2 = (i + 1) * xStep;
      const y2 = height - data[i + 1] * yStep;
      const xc = (x1 + x2) / 2;
      const yc = (y1 + y2) / 2;
      ctx.quadraticCurveTo(x1, y1, xc, yc);
    }

    // // Нарисовать треугольник
    // ctx.beginPath();
    // ctx.moveTo(width / 2, 0); // Вершина треугольника
    // ctx.lineTo(0, height); // Левая точка основания
    // ctx.lineTo(width, height); // Правая точка основания
    // ctx.closePath();

    ctx.stroke();
  }, [data, width, height]);

  return <canvas className={_className} ref={canvasRef} width={width} height={height}></canvas>;
}
export default LittleGraphic;
