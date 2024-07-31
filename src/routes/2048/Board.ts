export enum GameState {
    play,
    over,
    victory
}

export enum SwipeDiretion {
    unhandled,
    left,
    up,
    right,
    down
}

export class TileLine {
    private _tiles: number[]
    private _points: number

    constructor(tiles: number[]) {
        this._tiles = tiles
        this._points = 0
    }

    /**
     * kelompokkan tile nol disebelah kanan
     */
    private grouping() {
        let zeros = this._tiles.filter(tile => tile == 0).length

        if (zeros > 0) {
            for (let i = 0; i < this._tiles.length - 1; i++) {
                while (this._tiles[i] == 0 && zeros > 0) {
                    for (let x = i; x < this._tiles.length - 1; x++) {
                        const tmp = this._tiles[x]
                        this._tiles[x] = this._tiles[x + 1]
                        this._tiles[x + 1] = tmp
                    }
                    zeros--
                }
            }
        }
    }

    public toLeft() {
        this.grouping()

        // gabungkan angka yang sama
        for (let i = 0; i < this._tiles.length; i++) {
            if (this._tiles[i] == 0) {
                continue
            }

            if (this._tiles[i] == this._tiles[i + 1]) {
                this._tiles[i] = this._tiles[i] + this._tiles[i + 1]
                this._tiles[i + 1] = 0
                // point didapat dari akumulasi angka yang digabungkan
                this._points += this._tiles[i]
                
                this.grouping()
            }
        }

        return this._tiles
    }

    public get points(): number {
        return this._points
    }
}

type Pos = {
    x: number
    y: number
}

export default class Board {
    private _tile: number[][]
    private _points: number
    private _shifts: number

    constructor() {
        this._tile = [
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ]
        this._points = 0
        this._shifts = 0
        this.randomTile()
    }

    private transpose() {
        this._tile = this._tile[0].map((_, i) => this._tile.map(row => row[i]))
        // console.log('TRANSPOSE: ', this._tile)
        return this
    }
    
    private horizontalMirror() {
        this._tile = this._tile.map((row, i) => row.reverse())
        // console.log('HMIRROR: ', this._tile)
        return this
    }

    private toLeft() {
        for (let i = 0; i < this._tile.length; i++) {
            let line = new TileLine(this._tile[i])
            this._tile[i] = line.toLeft()
            // akumulasi point
            this._points += line.points
        }
        // console.log('LEFT: ', this._tile)
        // increase number of shifts
        this._shifts++

        return this
    }

    private randomTile() {

        // menghitung tile kosong
        let emptyTile: Pos[] = []
        for (let i = 0; i < this._tile.length; i++) {
            for (let j = 0; j < this._tile.length; j++) {
                if (this._tile[i][j] == 0) emptyTile.push({x: i, y: j})
            }
        }

        if (emptyTile.length > 0) {
            let count = 1
            if (emptyTile.length == 16) {
                count = 2
            }

            for (let i = 0; i < count; i++) {
                
                // random position
                const random = Math.floor(Math.random() * (emptyTile.length - 0))
                let pos = emptyTile[random]
                
                // value of tile
                let value = 2
                // 10% peluang mendapatkan tile 4
                if ((Math.floor(Math.random() * 10) + 1) > 9) {
                    value = 4
                }
                
                this._tile[pos.x][pos.y] = value
            }
        }
    }

    public move(direction: SwipeDiretion) {
        switch (direction) {
            case SwipeDiretion.left:
                this.toLeft()
                break;
            case SwipeDiretion.up:
                this.transpose().toLeft().transpose()
                break;
            case SwipeDiretion.right:
                this.horizontalMirror().toLeft().horizontalMirror()
                break;
            case SwipeDiretion.down:
                this.transpose().horizontalMirror().toLeft().horizontalMirror().transpose()
                break;
            case SwipeDiretion.unhandled:
                break;
        }
        
        if (direction != SwipeDiretion.unhandled) {
            this.randomTile()
        }
    }

    public get points(): number {
        if (this._points < 0) return 0
        return this._points
    }
    
    public get shifts(): number {
        if (this._shifts < 0) return 0
        return this._shifts
    }

    public get tile(): number[][] {
        return this._tile
    }
}