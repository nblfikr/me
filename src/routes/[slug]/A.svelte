<script lang="ts">
    // import mp3 from "$lib/senyumanmu.mp4";
    import { onMount } from "svelte";

    let audio: HTMLAudioElement;
    let container: any;
    let y: any;

    onMount(() => {
        setTimeout(() => {
            audio.play();
        }, 500);

        container.addEventListener('scroll', function() {
            alert()
        })
    });

    export let guestname;
</script>

<!-- <svelte:window bind:scrollY={y} />

{#if y > 50}
    <audio muted={false} autoplay={true} src={mp3} bind:this={audio}></audio>
{/if} -->

<style>
    .hero {
        max-width: 800px;
        height: 100vh;
        background: linear-gradient(rgba(153, 110, 109, 0.65), rgba(153, 110, 109, 0.65)), rgba(0, 0, 0, 0.55) url('https://fastly.picsum.photos/id/71/5000/3333.jpg?hmac=wBjyqoAke0uv6bTtbbIby9s-VTQ52gIkI-QVXWS3W0I') no-repeat;
        background-position: 43% 0%;
        background-attachment: fixed;
        background-size: cover;
        color: whitesmoke;
        box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: stretch;
        padding: 2rem 2rem 5rem;
        text-align: center;
    }
    .hero-title {
        font-size: 1.3rem;
        font-weight: 400;
        margin: 2rem;
    }
    .hero-main-title {
        font-family: "Rouge Script", cursive;
        font-weight: 700;
        font-size: 4rem;
        line-height: 1.125;
        margin: 2rem 0;
        text-align: center;
        letter-spacing: .1rem;
    }
    .hero-guest-subtitle {
        font-size: .8rem;
        padding: .5rem;
    }
    .hero-guest-text {
        font-size: 1.4rem;
        text-decoration: underline;
        text-transform: uppercase;
    }
</style>

<section class="hero">
    <div class="hero-title" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">Undangan Pernikahan</div>
    <div class="hero-main-title" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">Fikri & Melinia</div>
    <div class="hero-date" data-aos="fade-right" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">Sabtu, 06 Juli 2024</div>
    <div>
        <div class="hero-guest-subtitle" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">Kepada Yth. Bapak/Ibu/Saudara/i</div>
        <div class="hero-guest-text" data-aos="fade-right" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">{atob(guestname)}</div>
    </div>
</section>
