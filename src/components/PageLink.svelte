<script lang="ts">
    import * as config from "$src/lib/config"
    import {activePage} from "$src/store";
</script>

<ul class="flex list-none gap-4">
    {#each config.pageLinks as link}
        <li class="text-sm">
            <a class="hover:text-primary transition-colors  {$activePage === link.name ? 'text-primary' : 'text-zinc-800'}" href={link.link}
               on:click={() => {activePage.set(link.name)}}
            >
                {link.name}
            </a>
        </li>
    {/each}
</ul>
