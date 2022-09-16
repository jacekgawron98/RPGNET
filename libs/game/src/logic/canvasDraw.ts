import { useRef } from "react";
import { CanvasContext } from "./canvasMain";

const useCanvasDraw = () => {
    const canvasRef = useRef<HTMLCanvasElement|null>(null);
    const isDrawingRef = useRef<boolean>(false);
    
    const initCanvasDrawing = (ref: HTMLCanvasElement|null) => {
        if (!ref) return;
        canvasRef.current = ref;
        initMouseMoveEvent();
        initMouseDownDrawing()
        initMouseUpDrawing()
    }
    
    const onDraw = (context: CanvasContext, point: {x: number, y: number} | undefined) => {
        if (!context || !point) return;
        context.fillStyle = '#fff';
        context.beginPath();
        context.arc(point.x, point.y, 2, 0, 2*Math.PI);
        context.fill()
    }
    
    const initMouseMoveEvent = () => {
        if (!canvasRef.current) return;
        const mouseMoveListener = (e: MouseEvent) => {
            if (isDrawingRef.current) {
                const context = canvasRef.current?.getContext("2d");
                const point = calculateCanvasPosition(canvasRef.current,e.clientX,e.clientY);
                onDraw(context, point);
            }
        }
        canvasRef.current.removeEventListener('mousemove', mouseMoveListener);
        console.log("amogus");
        canvasRef.current.addEventListener('mousemove', mouseMoveListener);
    }
    
    
    const calculateCanvasPosition = (canvasRef: HTMLCanvasElement|null, x: number, y: number) => {
        if (!canvasRef) return;
        const canvasRect = canvasRef.getBoundingClientRect();
        return {
            x: Math.round(x - canvasRect.left),
            y: Math.round(y - canvasRect.top)
        }
    }
    const initMouseDownDrawing = () => {
        if (!canvasRef.current) return;
        const callback = () => {
            isDrawingRef.current = true;
        }
        canvasRef.current.addEventListener('mousedown', callback);
    }
    
    const initMouseUpDrawing = () => {
        if (!canvasRef.current) return;
        const callback = () => {
            isDrawingRef.current = false;
        }
        canvasRef.current.addEventListener('mouseup', callback);
    }

    return initCanvasDrawing;
}


export default useCanvasDraw;
