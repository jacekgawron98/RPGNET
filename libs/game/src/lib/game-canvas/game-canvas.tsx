import styles from './game-canvas.module.scss';
import { RefObject, useEffect } from 'react';
import useCanvasDraw from '../../logic/canvasDraw';
import useCanvasInit from '../../logic/canvasMain';
import { GameState } from '@rpgnet/store';
import { useSelector } from 'react-redux';

export interface GameCanvasProps {
  width: number;
  height: number;
  canvasRef: RefObject<HTMLCanvasElement>
}

export function GameCanvas(props: GameCanvasProps & React.HTMLAttributes<HTMLElement>) {
  const gameState = useSelector((state: { gameState: GameState } ) => state.gameState)
  const canvasInit = useCanvasInit();
  useCanvasDraw(gameState.canvasToolState, props.canvasRef);

  useEffect(() => {
    canvasInit(props.canvasRef.current)
  }, [canvasInit, props.canvasRef]);

  return (
    <div className={`${props.className} ${styles['game-canvas']}`}>
      <canvas 
        width={props.width}
        height={props.height}
        ref={props.canvasRef} 
        className={styles['game-canvas__canvas']}>
      </canvas>
    </div>
  );
}

export default GameCanvas;
