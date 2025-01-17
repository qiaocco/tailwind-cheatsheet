<script lang="ts">
    import classlist from "$lib/v3.4.17.json";
    let query = $state("");
    let copied = $state("");
    let toastVisible = $state(false);

    import Masonry from "$lib/Masonry.svelte";
    import Header from "$lib/Header.svelte";
    import Toast from "$lib/Toast.svelte";
    import CssProperty from "$lib/CssProperty.svelte";
</script>



<div class="">

    <Header {query} />

    <main class="lg:ml-[12rem] p-4">
        <Masonry gap={20}>
            {#each classlist as a}
                <section class="border border-black/20 bg-gray-100 dark:bg-gray-900 rounded-md break-inside-avoid">
                    <h2 class="font-bold p-2 px-4">{a.title}</h2>
                    {#each a.children as b}
                        <CssProperty {b} bind:copied bind:toastVisible />
                    {/each}
                </section>
            {/each}
        </Masonry>
    </main>
</div>

<Toast {copied} {toastVisible} />