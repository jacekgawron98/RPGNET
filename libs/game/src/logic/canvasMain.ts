export function initCanvas(canvasElement: HTMLCanvasElement) {
    const context = canvasElement.getContext("2d");
    if (context) {
        context.fillStyle = 'rgba(100,100,100,1)';
        context.fillRect(0, 0, canvasElement.width, canvasElement.height);
    }
}