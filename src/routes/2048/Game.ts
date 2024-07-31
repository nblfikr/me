import { SwipeDiretion } from "./Board"

export default class Game {
    static direction: number
    
    constructor() {
        Game.direction = SwipeDiretion.unhandled
    }
}