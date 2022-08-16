import GameCanvas from './game-canvas/game-canvas';
import GameMenu from './game-menu/game-menu';
import styles from './game.module.scss';

/* eslint-disable-next-line */
export interface GameProps {}

export function Game(props: GameProps) {
  return (
    <div className={styles['game']}>
      <GameMenu className={styles['game__menu']}/>
      <GameCanvas className={styles['game__content']}/>
      <GameMenu className={styles['game__menu']}/>
    </div>
  );
}

export default Game;
