<script lang="ts">
    import * as config from "$src/config"
    import { activePage } from "$src/store";
    import { onMount } from "svelte";

    let lastScrollPosition = 0;
    let isHidden = false;

    onMount(() => {
        window.addEventListener("scroll", () => {
            const currentScrollPosition = window.scrollY;

            isHidden = currentScrollPosition > lastScrollPosition;

            lastScrollPosition = currentScrollPosition;
        });
    });
</script>

<nav class={`fixed bottom-5 left-2/4 z-10 mt-8 -translate-x-2/4 transform transition-transform duration-300 ease-in-out ${isHidden ? 'translate-y-96' : 'translate-y-0'}`}>
    <ul class="flex rounded-md bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-3xl">
        {#each config.pageLinks as link}
            <li>
                <a class="relative block px-3 py-2 transition hover:text-primary {$activePage === link.name ? 'text-primary' : 'text-zinc-800'}"
                   on:click={() => {activePage.set(link.name)}}
                   href={link.link}
                >
                    {link.name}
                </a>
            </li>
        {/each}
    </ul>
</nav>