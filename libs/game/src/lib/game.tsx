import { useRef } from 'react';
import GameCanvas from './game-canvas/game-canvas';
import GameMenu from './game-menu/game-menu';
import GameToolbar from './game-toolbar/game-toolbar';
import styles from './game.module.scss';

/* eslint-disable-next-line */
export interface GameProps {}

export function Game(props: GameProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <div className={styles['game']}>
      <GameMenu className={styles['game__menu']}/>
      <div>
        <GameToolbar/>
        <GameCanvas
          className={styles['game__content']}
          canvasRef={canvasRef}
          width = {document.body.clientWidth * 0.7}
          height = {window.innerHeight}
        />
      </div>
      <GameMenu className={styles['game__menu']}/>
    </div>
  );
}

export default Game;
