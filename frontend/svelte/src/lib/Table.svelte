<script lang="ts">
	export let items = [];
</script>

<!--<ul>-->
<!--    {#each items as item}-->
<!--        <li>-->
<!--        </li>-->
<!--    {/each}-->
<!--</ul>-->

<div>
	{#each items as item}
		<svelte:component this={item.component} />
	{/each}
</div>
