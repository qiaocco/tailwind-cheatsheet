<script lang="ts">
    import { tw_versions } from "$lib/appStore";
    import v4 from "$lib/json/v4.0.json";

    let selected_v = $state(tw_versions[0]);
    let jsondata = $state(v4);
    let query = $state("");
    let copied = $state("");
    let toastVisible = $state(false);

    import Masonry from "$lib/Masonry.svelte";
    import Header from "$lib/Header.svelte";
    import Toast from "$lib/Toast.svelte";
    import CssProperty from "$lib/CssProperty.svelte";
</script>

<svelte:head>
	<meta name="title" content="Tailwind CSS Cheatsheet">
	<meta name="description" content="A quick reference guide to learn Tailwind CSS. Easily browse and search through all Tailwind utility classes and CSS properties on a single page.">
	<meta name="keywords" content="cheat, sheet, cheatsheet, tailwind, css, classes, utilities, v4, spa, single page, html, javascript">
	<meta name="robots" content="index, follow">
	<meta name="language" content="English">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://tailwind-cheatsheet-fawn.vercel.app/" />
    <meta property="og:title" content="Tailwind CSS Cheatsheet" />
    <meta property="og:description" content="A quick reference guide to mastering Tailwind CSS. Easily browse and search through all Tailwind utility classes and CSS properties on a single page." />
    <meta property="og:image" content="/twlogo.svg" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://tailwind-cheatsheet-fawn.vercel.app/" />
    <meta property="twitter:title" content="Tailwind CSS Cheatsheet" />
    <meta property="twitter:description" content="A quick reference guide to mastering Tailwind CSS. Easily browse and search through all Tailwind utility classes and CSS properties on a single page." />
    <meta property="twitter:image" content="/twlogo.svg" />
</svelte:head>
    
<main class="max-w-screen-2xl mx-auto p-4">
    <Masonry gap={20}>
        <Header {query} bind:selected_v bind:jsondata />
        {#each jsondata as a}
            <section class="border border-black/20 bg-gray-100 dark:bg-gray-900 rounded-md break-inside-avoid">
                <h2 class="font-bold p-2 px-4">{a.title}</h2>
                {#each a.children as b}
                    <CssProperty {b} bind:copied bind:toastVisible />
                {/each}
            </section>
        {/each}
    </Masonry>
</main>

<Toast {copied} {toastVisible} />