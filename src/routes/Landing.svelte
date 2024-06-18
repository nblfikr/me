<script lang="ts">
    import { onMount } from "svelte";
    
    let i = 0;
    const text = "بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ";
    const speed = 50;

    onMount(() => {
        i = text.length
        function typing() {
            const section: HTMLElement = document.querySelector('section')!
            // if (i < text.length) {
            //     section.innerHTML += text.charAt(i);
            //     i++;
            //     setTimeout(typing, speed);
            // } else if (i == text.length) {
                console.log(text.substring(0, text.length - i))
                section.innerHTML = text.substring(0, text.length - i)
                i--;
                setTimeout(typing, speed);
            // }
        }
        typing()
    })
</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        font-family: "Roboto", sans-serif;
        font-size: 1.5rem;
        /* background: #222; */
        /* color: #aaa; */
    }
</style>
<section></section>