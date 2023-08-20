<script lang="ts">
    import {lazyLoad} from "$lib/lazyLoad";
    export let alt:string;
    export let src:string;
</script>

<figure>
    <img use:lazyLoad={src} alt={alt} />
</figure>