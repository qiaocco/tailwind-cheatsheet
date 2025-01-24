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



<div class="">
    
    <main class=" p-4">
        
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
</div>

<Toast {copied} {toastVisible} />