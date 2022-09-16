import styles from './game-canvas.module.scss';
import { useEffect, useRef, useState } from 'react';
import useCanvasDraw from '../../logic/canvasDraw';
import useCanvasInit from '../../logic/canvasMain';

export interface GameCanvasProps {
  width: number;
  height: number;
}

export function GameCanvas(props: GameCanvasProps & React.HTMLAttributes<HTMLElement>) {
  const canvasRef = useRef<HTMLCanvasElement|null>(null);

  const canvasInit = useCanvasInit();
  const drawInit = useCanvasDraw();

  useEffect(() => {
    canvasInit(canvasRef.current)
    drawInit(canvasRef.current)
  }, []);

  return (
    <div className={`${props.className} ${styles['game-canvas']}`}>
      <canvas 
        width={props.width}
        height={props.height}
        ref={canvasRef} 
        className={styles['game-canvas__canvas']}>
      </canvas>
    </div>
  );
}

export default GameCanvas;
