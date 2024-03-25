<script lang="ts">
    import { onMount } from "svelte";

    type Star = { style: { boxShadow: string; }; }

    let star: Star
    let star2: Star
    let star3: Star

    function random(max: number) {
        return Math.floor(Math.random() * max)
    }

    function boxShadow(iterator: number) {
        let value: string = `${random(2000)}px ${random(2000)}px #fff`
        for (let i = 0; i < iterator; i++) {
            value += `, ${random(2000)}px ${random(2000)}px #fff`
        }

        return value
    }

    onMount(() => {
        star.style.boxShadow = boxShadow(700)
        star2.style.boxShadow = boxShadow(200)
        star3.style.boxShadow = boxShadow(100)
    })
</script>

<div class="parallax">
    <div bind:this={star} id="star"></div>
    <div bind:this={star2} id="star2"></div>
    <div bind:this={star3} id="star3"></div>
	<div id="title">
        <span>SVELTE</span>
        <br>
        <span>PARALLAX PIXEL STARS</span>
    </div>
</div>

<style>
    #star {
        width: 1px;
        height: 1px;
        background: transparent;
        animation: animStar 50s linear infinite;
    }

    #star2 {
        width: 1px;
        height: 2px;
        background: transparent;
        animation: animStar 100s linear infinite;
    }

    #star3 {
        width: 2px;
        height: 2px;
        background: transparent;
        animation: animStar 150s linear infinite;
    }

	#title {
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        color: #FFF;
        text-align: center;
        font-family: 'lato', sans-serif;
        font-weight: 300;
        font-size: 50px;
        letter-spacing: 10px;
        margin-top: -60px;
        padding-left: 10px;
    }
  
    #title span {
        background: -webkit-linear-gradient(white, #38495a);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    @keyframes animStar {
        from {
            transform: translateY(0px);
        }
        to {
            transform: translateY(-2000px);
        }	
    }
</style>
