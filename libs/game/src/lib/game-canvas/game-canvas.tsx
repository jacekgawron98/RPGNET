import styles from './game-canvas.module.scss';
import { initCanvas } from '../../logic/canvasMain';
import { useEffect } from 'react';

/* eslint-disable-next-line */
export interface GameCanvasProps {}

export function GameCanvas(props: GameCanvasProps & React.HTMLAttributes<HTMLElement>) {

  useEffect( () => {
    const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement | null;
    if (canvas) {
      initCanvas(canvas)
    } 
  }, 
  []);

  return (
    <div className={`${props.className} ${styles['game-canvas']}`}>
      <canvas id="gameCanvas" className={styles['game-canvas__canvas']}></canvas>
    </div>
  );
}

export default GameCanvas;
