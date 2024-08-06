<script lang="ts">
    import Board, { SwipeDiretion } from "./Board"
    import Game from "./Game"
    let game = new Game(new Board())

    
    let tiles: number[][] = game.tile
    let points: number = 0
    let shifts: number = 0
    let direction: String
    let state: String

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
                game.move(SwipeDiretion.left);
                break;
            case 'ArrowUp':
                game.move(SwipeDiretion.up);
                break;
            case 'ArrowRight':
                game.move(SwipeDiretion.right);
                break;
            case 'ArrowDown':
                game.move(SwipeDiretion.down);
                break;
        }

        render(game)

    }

    const handleUndo = () => {
        game.undo()
        render(game)
    }

    const render = (g: Game) => {
        direction = g.direction
        tiles = g.tile
        points = g.points
        shifts = g.shifts
        state = g.state
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
    <div class="title">{state}</div>
    <div class="title">2048</div>
    <div class="information">
        POINT: {points}<br>
        SHIFTS: {shifts}
    </div>
    <div>
        <button id="undo" on:click={handleUndo} type="button">ULANG</button>
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