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
    import { page } from '$app/stores';
    // import mp3 from "$lib/senyumanmu.mp4";

    let guestname = ""
    let address = ""

    function parsepayload(payload: string) {
        const guest = atob(payload.substring(5, payload.length - 6)).split('-')
        guestname = guest[0]
        address = guest[1]
    }

    onMount(() => {
        AOS.init({
            duration: 500
        });

        parsepayload($page.url.searchParams.get('id'))
    });
</script>

<svelte:head>
    <title>Undangan Pernikahan Fikri & Melinia</title>
    <meta meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="description" content="Sabtu, 06 Juli 2024" />
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

<A guestname="{guestname}" address="{address}" />
<B />
<C />
<D />
<E />