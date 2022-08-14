import styles from './game-canvas.module.scss';

/* eslint-disable-next-line */
export interface GameCanvasProps {}

export function GameCanvas(props: GameCanvasProps) {
  return (
    <div className={styles['game-canvas']}>
      <canvas id="gameCanvas" className={styles['game-canvas__canvas']}></canvas>
    </div>
  );
}

export default GameCanvas;
