<script lang="ts">
    import {blur, fade, fly, scale, slide} from 'svelte/transition';
    import { cubicIn, cubicOut } from 'svelte/easing'

    export let key: string;
    const optionsInFade = {
        easing: cubicOut, duration: 300, delay: 400
    }
    const optionOutFade = {
        easing: cubicIn, duration: 300
    }
</script>

{#key key}
     <div in:blur={optionsInFade} out:blur={optionOutFade}>
        <slot/>
    </div>
{/key}

