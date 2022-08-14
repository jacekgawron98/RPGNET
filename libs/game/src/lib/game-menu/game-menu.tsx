import styles from './game-menu.module.scss';

/* eslint-disable-next-line */
export interface GameMenuProps {}

export function GameMenu(props: GameMenuProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to GameMenu!</h1>
    </div>
  );
}

export default GameMenu;
