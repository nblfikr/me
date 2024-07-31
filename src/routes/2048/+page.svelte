<script lang="ts">
    // import { onMount } from "svelte"

    import Board, { SwipeDiretion, TileLine } from "./Board"
    import Game from "./Game"
    import { handleTouchstart, handleTouchend } from "./TouchHandler"

    
    // let canvas: HTMLCanvasElement
    // let context
    // let width = 300
    // let height = 300
    // let background = "#e5e5f5"
    let board = new Board()
    // board.randomTile()

    
    let tiles = board.tile
    let points = 0
    let shifts = 0
    // onMount(() => {
        // context = canvas.getContext('2d')
    // })

    const onKeyDown = (e: KeyboardEvent) => {
        switch (e.key) {
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
        tiles = board.tile
        points = board.points
        shifts = board.shifts
        // console.log('GESER: ', board.shifts, 'POINT: ', board.points)
    }
</script>

<svelte:head>
    <title>Undangan Pernikahan Fikri & Melinia</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="title" content="Undangan Pernikahan Fikri & Melinia" />
    <meta name="description" content="Sabtu, 06 Juli 2024" />
</svelte:head>

<svelte:window on:keydown|preventDefault={onKeyDown} />
<!-- <svelte:window on:keydown|preventDefault={onKeyDown} on:touchstart|preventDefault={handleTouchstart} /> -->

<main>
    <div class="title">2048</div>
    <div class="information">
        POINT: {points}<br>
        SHIFTS: {shifts}
    </div>
    <div class="container" on:touchstart={handleTouchstart} on:touchend={handleTouchend} >
        <div class="board">
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
    .container {
        width: 300px;
        height: 300px;
        margin: 0 12px;
    }
    .board {
        display: grid;
        grid-template-columns: auto auto auto auto;
        width: inherit;
        height: inherit;
        background: brown;
        /* border-radius: 1rem; */
        padding: 4px 4px 0;
    }
    .tile {
        width: calc((300px - 20px) / 4);
        height: calc((300px - 20px) / 4);
        background: lightpink;
        text-align: center;
        /* border-radius: .25rem; */
        /* margin: */
        font-size: 2rem;
        font-weight: bold;
    }
</style>