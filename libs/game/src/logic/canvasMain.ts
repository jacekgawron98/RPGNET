import { useRef } from "react";

export type CanvasContext = CanvasRenderingContext2D | null | undefined;

const useCanvasInit = () => {
    const canvasRef = useRef<HTMLCanvasElement|null>(null);

    const initCanvas = (ref: HTMLCanvasElement|null) => {
        if (!ref) return;
        canvasRef.current = ref;
        const context = canvasRef.current.getContext("2d");
        clearCanvas(context, canvasRef.current);
    }
    
    const clearCanvas = (context: CanvasContext, canvasRef: HTMLCanvasElement|null) => {
        if (!context || !canvasRef) return;
        context.fillStyle = 'rgba(100,100,100,1)';
        context.fillRect(0, 0, canvasRef.width, canvasRef.height);
    }

    return initCanvas;
}

export default useCanvasInit;