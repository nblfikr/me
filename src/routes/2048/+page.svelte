<script lang="ts">
    import D from "../u/D.svelte";
import Board, { SwipeDiretion, TileLine } from "./Board"
    import Game from "./Game"
let board = new Board()

    
    let tiles = board.tile
    let points = 0
    let shifts = 0
    let direction = 0

    type Pos = {
        x: number
        y: number
    }

    let start: Pos
    let end: Pos

    const handleTouchstart = ((e: TouchEvent) => {
        // in mobile prevent swipe to refresh
        if (e.touches.length > 0) {
            let touch = e.touches[0];
            if (touch.clientY <= 10) { // Deteksi touch yang mendekati atas halaman
                e.preventDefault();
            }
        }

        const { clientX, clientY } = e.touches[0]
        start = { x: clientX, y: clientY }
    })

    const handleTouchMove = ((e: TouchEvent) => {
        // in mobile prevent swipe to refresh
        if (e.touches.length > 0) {
            let touch = e.touches[0];
            if (touch.clientY > 50) { // Jika posisi sentuhan lebih dari 50px dari atas
                e.preventDefault();
            }
        }
    })

    const handleTouchend = ((e: TouchEvent) => {
        const { clientX, clientY } = e.changedTouches[0]
        end = { x: clientX, y: clientY }

        const deltaX = end.x - start.x;
        const deltaY = end.y - start.y;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            // Horizontal swipe
            if (deltaX > 0) {
                handleEvent('ArrowRight')
            } else {
                handleEvent('ArrowLeft')
            }
        } else {
            // Vertical swipe
            if (deltaY > 0) {
                handleEvent('ArrowDown')
            } else {
                handleEvent('ArrowUp')
            }
        }
    })

    const onKeyDown = (e: KeyboardEvent) => handleEvent(e.key)

    const handleEvent = (key: string) => {
        switch (key) {
            case 'ArrowLeft':
                Game.direction = SwipeDiretion.left;
                break;
            case 'ArrowUp':
                Game.direction = SwipeDiretion.up;
                break;
            case 'ArrowRight':
                Game.direction = SwipeDiretion.right;
                break;
            case 'ArrowDown':
                Game.direction = SwipeDiretion.down;
                break;
            default:
                Game.direction = SwipeDiretion.unhandled;
                break;
        }

        board.move(Game.direction)
        direction = Game.direction
        tiles = board.tile
        points = board.points
        shifts = board.shifts
    }
</script>

<svelte:head>
    <title>2048 | Custom version</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="title" content="2048 | Custom version" />
    <meta name="description" content="2048 custom version with level" />
</svelte:head>

<svelte:window on:keydown|preventDefault={onKeyDown} />

<main>
    <div class="title">{direction}</div>
    <div class="title">2048</div>
    <div class="information">
        POINT: {points}<br>
        SHIFTS: {shifts}
    </div>
    <div class="container" on:touchstart={handleTouchstart} on:touchmove={handleTouchMove} on:touchend={handleTouchend} >
        <div class="board-container">
            <div class="board-row"></div>
            <div class="board-row"></div>
            <div class="board-row"></div>
            <div class="board-row"></div>

            <div class="board-row"></div>
            <div class="board-row"></div>
            <div class="board-row"></div>
            <div class="board-row"></div>

            <div class="board-row"></div>
            <div class="board-row"></div>
            <div class="board-row"></div>
            <div class="board-row"></div>

            <div class="board-row"></div>
            <div class="board-row"></div>
            <div class="board-row"></div>
            <div class="board-row"></div>
        </div>
        <div class="tile-container">
            {#each tiles as tiles}
                {#each tiles as tile}
                    <div class="tile">
                        {#if tile != 0}
                            {tile}
                        {/if}
                    </div>
                {/each}
            {/each}
        </div>
    </div>
</main>

<style>
    @import url('https://fonts.cdnfonts.com/css/pwchalk');

    main {
        margin: 0 auto;
        display: flex;
        /* justify-content: center; */
        align-items: center;
        flex-direction: column;
        background: rgb(232, 232, 232);
        max-width: 800px;
        height: 100vh;
        font-family: 'PWChalk', sans-serif;
    }
    .container {
        width: 300px;
        height: 600px;
        margin: 0 12px;
    }
    .board-container {
        position: absolute;
        z-index: 1;
        display: grid;
        grid-template-columns: auto auto auto auto;
        width: inherit;
        height: 300px;
        background: rgb(187, 173, 160);
        border-radius: .5   rem;
        padding: 4px;
    }
    .board-row {
        height: calc((300px - 20px) / 4);
        background: rgba(238, 228, 218, 0.35);
        margin: 3px;
    }
    .tile-container {
        position: absolute;
        z-index: 2;
        display: grid;
        grid-template-columns: auto auto auto auto;
        width: inherit;
        height: 300px;
        padding: 4px;
    }
    .tile {
        width: calc((300px - 20px) / 4);
        height: calc((300px - 20px) / 4);
        background: rgb(130, 159, 130);
        text-align: center;
        border-radius: .25rem;
        /* margin: */
        color: #fff;
        font-size: 2rem;
        font-weight: bold;
    }
</style>