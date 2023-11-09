export class CanvasView {
    canvas: HTMLCanvasElement
    private start : HTMLObjectElement | null;

    constructor(canvasName: string){
        this.canvas = document.querySelector(canvasName) as HTMLCanvasElement
        this.start = document.querySelector('#start');
    }

    initPlayButton(startFunction: (view: CanvasView) => void): void{
        this.start?.addEventListener('click', () => startFunction(this))
    }
}





