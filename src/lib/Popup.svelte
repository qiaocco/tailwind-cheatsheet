<script>
    import { base } from "$app/paths";
    import { onMount } from "svelte";
    import { fade } from 'svelte/transition';

    let showPopup = $state(false);

    onMount(() => {
        const timer = setTimeout(() => {
            showPopup = true;
        }, 10000);

        return () => clearTimeout(timer);
    });

    function closePopup() {
        showPopup = false;
    }
</script>

{#if showPopup}
<div transition:fade>
    <div class="fixed top-0 left-0 w-full h-full z-90 bg-black/75"></div>
    <div class="fixed top-1/2 left-1/2 z-91 -translate-x-50 -translate-y-1/2 rounded-lg shadow-2xl hover:scale-101 transition bg-white/80 p-2">
        <a target="_blank" href="https://taillens.io/?aff=zmn621">
            <img src="{base}/taillens/taillens_popup.png" class="w-md rounded-lg" alt="ad">
        </a>
        <button onclick={closePopup} class="absolute top-4 right-4 text-white/50 cursor-pointer hover:scale-110 transition" aria-label="close">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-11.414L9.172 7.757L7.757 9.172L10.586 12l-2.829 2.828l1.415 1.415L12 13.414l2.828 2.829l1.415-1.415L13.414 12l2.829-2.828l-1.415-1.415z" />
            </svg>
        </button>
    </div>
</div>
{/if}
