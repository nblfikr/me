<script lang="ts">
    // @ts-nocheck
    import A from './A.svelte';
    import B from './B.svelte';
    import C from './C.svelte';
    import D from './D.svelte';
    import E from './E.svelte';
    import AOS from 'aos';
    import 'aos/dist/aos.css';
    import { onMount } from 'svelte';

    // import { sound, useSound } from "svelte-sound";
    // import mp3 from "$lib/senyumanmu.mp4";

    // const s = useSound(mp3, ['load'])

    onMount(() => {
        AOS.init({
            duration: 500
        });
    });

    export let data;
</script>

<svelte:head>
    <title>F&M</title>
    <meta meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="description" content="Svelte demo app" />
    <!-- <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'> -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true">
    <link href="https://fonts.googleapis.com/css2?family=Mr+Dafoe&family=Mrs+Saint+Delafield&family=Playball&family=Seaweed+Script&display=swap" rel="stylesheet">
    <!-- <link rel="preconnect" href="https://fonts.googleapis.com"> -->
    <!-- <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> -->
    <link href="https://fonts.googleapis.com/css2?family=Quintessential&display=swap&family=Sedan:ital@0;1&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">

    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true">
    <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&family=Rouge+Script&display=swap" rel="stylesheet">
    <!-- <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap" rel="stylesheet"> -->
</svelte:head>

<A guestname="{data.slug}" />
<B />
<C />
<D />
<E />