import { useEffect, useRef } from 'react';
import styles from './style.module.scss';

function LittleGraphic({ className, data = [], width = 30, height = 30, color = '#000' }) {
  const canvasRef = useRef(null);
  const _className = `${styles.root} ${className || ''}`;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Максимальное значение данных
    const maxDataValue = Math.max.apply(null, data);

    // Шаги по осям
    const xStep = (width - 5) / (data.length - 1);
    const yStep = (height - 5) / maxDataValue;

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
    ctx.moveTo(2, data[0]);
    for (let i = 0; i < data.length - 1; i++) {
      const x1 = i * xStep + 2;
      const y1 = height - data[i] * yStep;
      const x2 = (i + 1) * xStep + 2;
      const y2 = height - data[i + 1] * yStep;
      const xc = (x1 + x2) / 2;
      const yc = (y1 + y2) / 2;
      ctx.quadraticCurveTo(x1, y1, xc, yc);
    }
    ctx.stroke();
    // ctx.beginPath();
    // ctx.moveTo(1, data[0]);
    // for (let i = 1; i < data.length; i++) {
    //   const x = i * xStep;
    //   const y = height - data[i] * yStep;
    //   ctx.lineTo(x, y);
    // }
    // ctx.stroke();

    // Нарисовать треугольник
    const lastPoint = data.length - 1;
    const lastData = data[lastPoint];
    drawPoint(ctx, lastPoint * xStep, height - lastData * yStep, color, 3);

    ctx.fill();
    ctx.stroke();
  }, [data, width, height]);

  return <canvas className={_className} ref={canvasRef} width={width} height={height}></canvas>;
}

function drawPoint(context, x, y, color, size) {
  if (color == null) {
    color = '#000';
  }
  if (size == null) {
    size = 5;
  }

  // to increase smoothing for numbers with decimal part
  var pointX = Math.round(x);
  var pointY = Math.round(y);

  context.beginPath();
  context.fillStyle = color;
  context.arc(pointX, pointY, size, 0 * Math.PI, 2 * Math.PI);
  context.fill();
}

export default LittleGraphic;
