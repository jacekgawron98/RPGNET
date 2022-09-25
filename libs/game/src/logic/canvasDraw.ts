import { RefObject, useCallback, useEffect, useRef } from "react";
import { CanvasToolState } from "../types";
import { CanvasContext } from "./canvasMain";

const useCanvasDraw = (canvasState: CanvasToolState, canvasRef: RefObject<HTMLCanvasElement>) => {
    const isDrawingRef = useRef<boolean>(false);
    
    const onDraw = (context: CanvasContext, point: {x: number, y: number} | undefined) => {
        if (!context || !point) return;
        context.fillStyle = '#fff';
        context.beginPath();
        context.arc(point.x, point.y, 2, 0, 2*Math.PI);
        context.fill()
    }

    const calculateCanvasPosition = (canvasRef: HTMLCanvasElement|null, x: number, y: number) => {
        if (!canvasRef) return;
        const canvasRect = canvasRef.getBoundingClientRect();
        return {
            x: Math.round(x - canvasRect.left),
            y: Math.round(y - canvasRect.top)
        }
    }
    
    const initMouseMoveEvent = useCallback(() => {
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
    },[canvasRef])
    
    const initMouseDownDrawing = useCallback(() => {
        if (!canvasRef.current) return;
        const callback = () => {
            isDrawingRef.current = true;
        }
        canvasRef.current.addEventListener('mousedown', callback);
    },[canvasRef])
    
    const initMouseUpDrawing = useCallback(() => {
        if (!canvasRef.current) return;
        const callback = () => {
            isDrawingRef.current = false;
        }
        canvasRef.current.addEventListener('mouseup', callback);
    },[canvasRef])

    const initCanvasDrawing = useCallback(() => {
        initMouseMoveEvent();
        initMouseDownDrawing()
        initMouseUpDrawing()
    },[initMouseDownDrawing,initMouseUpDrawing,initMouseMoveEvent]);

    useEffect(() => {
        if (canvasState === 'DRAW')
            initCanvasDrawing();
    },[canvasState, initCanvasDrawing])
}

export default useCanvasDraw;
