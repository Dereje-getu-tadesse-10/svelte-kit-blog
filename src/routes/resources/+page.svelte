<script lang="ts">
    import type {Data} from "$lib/types";
    import * as config from "$src/routes/config"
    import PageSummaryCard from "$src/components/PageSummaryCard.svelte";
    const {resPageTitle, resPageDesc} = config
    export let data:{ props: Data };
</script>

<PageSummaryCard title={resPageTitle} description={resPageDesc} />

<div class="mt-16 flex flex-col sm:px-8">
    {#each Object.values(data.props) as category (category.title)}
        <div class="my-7">
            <h2 class="text-sm text-zinc-800">{category.title}</h2>
            {#each category.data as item}
                <div class="relative my-10 group">
                    <span class="absolute -inset-x-4 -inset-y-6 -z-50 cursor-pointer rounded-md opacity-0 transition bg-hover_color -z-1 group-hover:scale-100 group-hover:opacity-50 sm:-inset-x-6"></span>
                    <h3><a class="text-base font-semibold tracking-tight text-zinc-800" href={item.link} target="_blank">{item.title}</a></h3>
                    <p class="mt-2 text-sm text-zinc-600">{item.description}</p>
                </div>
            {/each}
        </div>
    {/each}
</div>