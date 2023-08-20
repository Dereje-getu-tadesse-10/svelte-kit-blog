<script lang="ts">
    import { page } from '$app/stores';
    let errorCode: number | null = null;

    $: if ($page.error) {
        errorCode = $page.error.code;
    }
</script>

<svelte:head>
    <title>Error {errorCode}</title>
    <meta name="description" content="Oops, an error has occurred." />
    <meta property="og:title" content="Error {errorCode}" />
    <meta property="og:description" content="Oops, an error has occurred." />
    <meta property="og:type" content="website" />
    <meta name="twitter:title" content="Error {errorCode}" />
    <meta name="twitter:description" content="Oops, an error has occurred." />
</svelte:head>

<section class="mt-16 min-h-screen sm:mt-32">
    <span class="mx-auto my-7 block w-min rounded-md px-4 text-white drop-shadow-lg bg-primary py-[2px]">{errorCode}</span>
    <h1  class="text-center text-4xl font-bold tracking-tight text-primary sm:text-5xl">
        Error {errorCode}
    </h1>
</section>