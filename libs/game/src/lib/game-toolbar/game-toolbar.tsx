import styles from './game-toolbar.module.scss';

/* eslint-disable-next-line */
export interface GameToolbarProps {}

export function GameToolbar(props: GameToolbarProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to GameToolbar!</h1>
    </div>
  );
}

export default GameToolbar;
