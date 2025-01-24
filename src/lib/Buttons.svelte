<script lang="ts">
    import v4 from "$lib/json/v4.0.json";
    import v3 from "$lib/json/v3.4.17.json";
    import v2 from "$lib/json/v2.2.16.json";
    import v1 from "$lib/json/v1.9.0.json";
    import v0 from "$lib/json/v0.7.4.json";
    import { tw_versions } from "$lib/appStore";

    let { selected_v = $bindable(), jsondata = $bindable() } = $props();

    async function loadData() {
        switch (selected_v) {
            case tw_versions[0]: jsondata = v4; break;
            case tw_versions[1]: jsondata = v3; break;
            case tw_versions[2]: jsondata = v2; break;
            case tw_versions[3]: jsondata = v1; break;
            case tw_versions[4]: jsondata = v0; break;
        }
    }
</script>

<button
    class="order-4 hidden lg:flex w-full bg-sky-500 text-white px-6 py-1 rounded-md justify-center items-center gap-2"
    onclick={() =>
        document.querySelectorAll("details").forEach((e) => (e.open = false))}
>
    <span>Collapse</span>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
    >
        <path
            fill="currentColor"
            d="M4 12h16v2H4zm0-3h16v2H4zm12-5l-4 4l-4-4h3V1h2v3zM8 19l4-4l4 4h-3v3h-2v-3z"
        />
    </svg>
</button>

<button
    class="order-5 hidden lg:flex w-full bg-sky-500 text-white px-6 py-1 rounded-md justify-center items-center gap-2"
    onclick={() =>
        document.querySelectorAll("details").forEach((e) => (e.open = true))}
>
    <span>Expand</span>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
    >
        <path
            fill="currentColor"
            d="M13 9v6h3l-4 4l-4-4h3V9H8l4-4l4 4zM4 2h16v2H4zm0 18h16v2H4z"
        />
    </svg>
</button>

<select
    class="order-6 hidden w-full lg:flex hw-full mt-auto bg-sky-500 text-white px-2 py-1 rounded-md items-center gap-2"
    bind:value={selected_v}
    onchange={loadData}
>
    {#each tw_versions as version}
        <option value={version}>v{version}</option>
    {/each}
</select>
