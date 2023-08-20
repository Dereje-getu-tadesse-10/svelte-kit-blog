<script lang="ts">
	import * as config from '$src/routes/config';
	import dayjs from 'dayjs';
	const currentYear = dayjs().year();
</script>

<p class="text-sm  text-zinc-400">
	©{config.titleSite.toLowerCase()} - {currentYear}
</p>
