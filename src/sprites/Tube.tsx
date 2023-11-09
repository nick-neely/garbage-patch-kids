import {Vector} from '../types';

export class Tube {

    private tubeImage: HTMLImageElement = new Image();

    constructor(
        private tubeWidth: number,
        private tubeHeight: number,
        private position: Vector,
        private tubeEnergy: number,
        image: string
    ){
            this.tubeWidth = tubeWidth;
            this.tubeHeight = tubeHeight;
            this.position = position;
            this.tubeEnergy = tubeEnergy;
            this.tubeImage.src = image;
     }   
     get width(): number{
        return this.tubeWidth;
     }

     get height(): number{
        return this.tubeHeight;
     }

     get pos(): Vector{
        return this.position;
     }

     get energy(): number{
        return this.tubeEnergy;
     }

     set energy(energy:number){
         this.tubeEnergy = energy
     }

     get img(): HTMLImageElement{
        return this.tubeImage;
     }
}