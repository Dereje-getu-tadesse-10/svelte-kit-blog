<script>
    import { ChevronUp } from 'lucide-svelte';
    export let showOnPx = 150;
    let hidden = true;

    function goTop() {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }

    function scrollContainer() {
        return document.documentElement || document.body;
    }

    function handleOnScroll() {
        if (!scrollContainer()) {
            return;
        }

        hidden = scrollContainer().scrollTop <= showOnPx;
    }
</script>

<svelte:window on:scroll={handleOnScroll} />

<button aria-label="back to top" class="fixed right-4 bottom-5 z-10 flex cursor-pointer items-center justify-center rounded-md bg-white p-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 text-primary sm:right-4" on:click={goTop} class:hidden>
    <ChevronUp size="19"/>
</button>
