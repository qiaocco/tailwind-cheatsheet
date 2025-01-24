<script lang="ts">
  import { onMount } from "svelte";
  let parent: HTMLDivElement;
  let { children, gap = 10 } = $props();
  let numCols = $state(3)
  let items = $state<Element[]>([])

  export const updateLayout = () => {
    const width = document.documentElement.offsetWidth;

    width < 640 ? numCols = 1 : width < 768 ? numCols = 2 : width < 1280 ? numCols = 3 : numCols = 4

    // Apply the updated column count to the style
    parent.style.setProperty('--numCols', numCols.toString());

    const columns = Array.from({ length: numCols }, () => document.createElement("div"));
    columns.forEach(c =>  c.classList.add("child"));
    parent.replaceChildren(...columns);

    for (let i = 0; i < items.length; i++) {
      if (i < numCols) {
        columns[i].appendChild(items[i]);
      }
      else {
        const shortestColumn = columns.reduce((a, b) => Array.from(a.children).reduce((sum, child) => sum + child.clientHeight, 0) < Array.from(b.children).reduce((sum, child) => sum + child.clientHeight, 0) ? a : b);
        shortestColumn.appendChild(items[i]);
      }
    }
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