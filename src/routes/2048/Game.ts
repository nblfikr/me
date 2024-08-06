import Board, { SwipeDiretion } from "./Board"

export default class Game {
    private _board: Board
    private _history: Array<Board>
    private _historyIndex: number = -1
    private _maxUndo: number = 2
    
    constructor(board: Board) {
        this._board = board
        this._history = []
    }

    public move(direction: SwipeDiretion) {
        this._board.move(direction)
        this._saveHistory()
    }

    private _saveHistory() {
        if (this._history.length > this._maxUndo) {
            this._history.shift()
            this._historyIndex--
        }
        
        this._history.push(this._board.clone())
        this._historyIndex = this._history.length - 1
    }

    public undo(){
        if (this._historyIndex > 0) {
            this._historyIndex--
            this._board = this._history[this._historyIndex].clone()
        }
    }

    public get direction(): String {
        return this._board.direction
    }

    public get tile(): number[][] {
        return this._board.tile
    }

    public get board(): Board {
        return this._board
    }

    public get points(): number {
        return this._board.points
    }

    public get shifts(): number {
        return this._board.shifts
    }

    public get history(): Array<Board> {
        return this._history
    }

    public get state(): String {
        return this._board.state
    }
}