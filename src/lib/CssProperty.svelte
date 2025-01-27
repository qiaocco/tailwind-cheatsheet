<script lang="ts">
    import ClassesTable from "./ClassesTable.svelte";
    let { b, copied = $bindable(), toastVisible = $bindable() } = $props();
</script>

<details
    class="group border-t border-sky-500/20"
    ontoggle={(e) => e.target.querySelector("a").classList.toggle("hidden")}
>
    <summary
        class="cursor-pointer flex justify-between py-2 px-4 hover:bg-white dark:hover:bg-black group-open:bg-white dark:group-open:bg-black"
    >
        <h3 class="text-xs font-semibold">{b.title}</h3>

        <div class="flex gap-2">
            <a
                href={b.url}
                target="_blank"
                class="hidden flex items-center gap-1 text-xs font-semibold not-italic text-sky-500 border border-sky-500 px-1 rounded"
            >
                <img src="/twlogo.svg" alt="Tailwind CSS logo" class="w-4" />
                Docs
            </a>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
            >
                <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M12 6.273a.73.73 0 0 0-.18-.479L8.8 2.342A1 1 0 0 0 8.046 2h-.092a1 1 0 0 0-.753.341L4.18 5.794A.727.727 0 0 0 4.727 7h6.546A.727.727 0 0 0 12 6.273M4 9.727c0 .176.064.346.18.479l3.02 3.453a1 1 0 0 0 .753.341h.092a1 1 0 0 0 .753-.341l3.021-3.453A.727.727 0 0 0 11.273 9H4.727A.727.727 0 0 0 4 9.727"
                    clip-rule="evenodd"
                />
            </svg>
        </div>
    </summary>
    <div class="px-4 pb-2 bg-white dark:bg-black">
        <p class="text-sm italic mb-2">{b.description}</p>
        <ClassesTable {b} bind:copied bind:toastVisible />
    </div>
</details>

<style>
    details > summary {
        list-style: none;
    }
    details > summary::-webkit-details-marker {
        display: none;
    }
</style>
