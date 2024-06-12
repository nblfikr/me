<script>
    import basmallah from '$lib/images/basmallah1.png?enhanced';
    import ZCoupledetail from './Z_coupledetail.svelte';
</script>
<style>
    .b {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        line-height: 1.5rem;
        box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    }
    .cover-circle-image {
        margin: 3rem 3rem 1.5rem;
        width: 10rem;
        height: 3.7rem;
    }
    .text {
        /* font-family: 'Courier New', Courier, monospace; */
        font-family: "Arial", cursive;
        /* font-weight: bold; */
        font-size: 1rem;
        text-align: center;
    }

</style>
<section class="b bg-light">
    <!-- <a href='https://pngtree.com/freepng/bismillah-arabic-calligraphy-png-and-vector_7965768.html'>png image from pngtree.com/</a> -->
    <enhanced:img data-aos="fade-down" class="cover-circle-image" src="{basmallah}" />
    <div data-aos="fade-down" data-aos-delay="150" class="text">
        <span class="salam">Assalamu'alaikum Warahmatullahi Wabarakaatuh</span><br><br>
        Tanpa mengurangi rasa hormat, melalui pesan ini perkenankan kami mengundang Bapak/Ibu/Saudara/i, untuk menghadiri acara ngunduh mantu pernikahan anak kami:
    </div>
    <ZCoupledetail/>
    <div class="flower1">
        <!-- <a href='https://pngtree.com/freepng/watercolor-floral-border-composition-for-wedding-cards_4869610.html'>png image from pngtree.com/</a> -->
        <!-- <enhanced:img class="cover-circle-image2" src="{flower1}" />
        <enhanced:img class="cover-circle-image2" src="{flower1}" /> -->
    </div>
</section>