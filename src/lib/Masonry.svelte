<script lang="ts">
  import { onMount } from "svelte";
  let parent: HTMLDivElement;
  let { children, gap = 10 } = $props();
  let numCols = $state(3)
  let items = $state<Element[]>([])

  const updateLayout = () => {
    const width = document.documentElement.offsetWidth;

    width < 640 ? numCols = 1 : width < 768 ? numCols = 2 : width < 1280 ? numCols = 3 : numCols = 4

    // Apply the updated column count to the style
    parent.style.setProperty('--numCols', numCols.toString());

    const columns = Array.from({ length: numCols }, () => document.createElement("div"));
    columns.forEach(c =>  c.classList.add("child"));

    for (let i = 0; i < items.length; i++) {
      columns[i % numCols].appendChild(items[i]);
    }

    parent.replaceChildren(...columns);
  };

  onMount(() => {
    items = [...parent.children];
    items = items.filter((item) => item.nodeType === 1);

    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => {
      window.removeEventListener('resize', updateLayout);
    };
  });
</script>

<div bind:this={parent} id="masonry" style="--gap: {gap}px; --numCols: {numCols};">
  {@render children()}
</div>

<style>
  #masonry {
    display: grid;
    grid-template-columns: repeat(var(--numCols), 1fr);
    gap: var(--gap);
  }

  :global(#masonry .child) {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
  }
</style>