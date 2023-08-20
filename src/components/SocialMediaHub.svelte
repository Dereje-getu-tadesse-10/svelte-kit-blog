<script lang="ts">
	import * as config from '$src/config';
	const { socials } = config;
</script>

<ul class="flex list-none gap-4">
	{#each socials as social}
		<li class="transition-all hover:scale-[1.1]">
			<a href={social.link} target="_blank">
				<img src="/{social.icon}" alt={social.name} height="24" width="24" />
			</a>
		</li>
	{/each}
</ul>
