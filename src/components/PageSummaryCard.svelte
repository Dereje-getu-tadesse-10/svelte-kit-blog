<script lang="ts">
    export let title:string;
    export let description:string;

</script>

<div class="mt-16 sm:mt-32 sm:px-8">
    <header class="max-w-2xl">
        <h1 class="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            {title}
        </h1>
        <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {description}
        </p>
    </header>
</div>