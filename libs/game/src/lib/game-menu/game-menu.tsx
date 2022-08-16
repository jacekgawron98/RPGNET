import styles from './game-menu.module.scss';

/* eslint-disable-next-line */
export interface GameMenuProps {}

export function GameMenu(props: GameMenuProps & React.HTMLAttributes<HTMLElement>) {
  return (
    <div className={`${props.className} ${styles['container']}`}>
      <h1>Welcome to GameMenu!</h1>
    </div>
  );
}

export default GameMenu;
