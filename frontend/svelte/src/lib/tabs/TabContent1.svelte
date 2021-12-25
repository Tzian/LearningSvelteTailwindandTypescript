<script lang="ts">
	import Table from '$lib/Table.svelte';
	import Track from '$lib/TrackCard.svelte';

	let items = [
		{
			label: 'First Entry',
			value: 1,
			component: Track
		},
		{
			label: 'Second Entry',
			value: 2,
			component: Track
		},
		{
			label: 'Third Entry',
			value: 3,
			component: Track
		}
	];
</script>

<Table {items} />
