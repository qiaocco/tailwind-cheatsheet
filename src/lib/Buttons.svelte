<script lang="ts">
    
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
>
    <option value="3.4.17" selected>v3.4.17</option>
    <option value="2.2.19">v2.2.19</option>
    <option value="1.9.6">v1.9.6</option>
    <option value="0.7.4">v0.7.4</option>
</select>
