export class CanvasView {
    canvas: HTMLCanvasElement
    private context: CanvasRenderingContext2D | null;
    private scoreDisplay: HTMLObjectElement | null;
    private start : HTMLObjectElement | null;
    private info: HTMLObjectElement | null;

    constructor(canvasName: string){
        this.canvas = document.querySelector(canvasName) as HTMLCanvasElement
        this.context = this.canvas.getContext('2d');
        this.scoreDisplay = document.querySelector('#score')
        this.start = document.querySelector('#start');
        this.info = document.querySelector('#info')
    }

    initPlayButton(startFunction: (view: CanvasView) => void): void{
        this.start?.addEventListener('click', () => startFunction(this))
    }

    drawScore(score: number): void {
        if(this.scoreDisplay)this.scoreDisplay.innerHTML = score.toString();

    }

    drawInfo(text: string): void {
        if (this.info) this.info.innerHTML = text; 

    }

    drawSprite(tubes: Tube | Bird   ): void {
    if (!tubes) return;

        this.context?.drawImage(
            tubes.image,
            tubes.pos.x,
            tubes.pos.y,
            tubes.width,
            tubes.height
        );
    }

    drawTubes(tube: Tube[]): void {
        tube.forEach(tube => this.drawSprite(tube));
    }
}





