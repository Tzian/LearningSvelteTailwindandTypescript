<script lang="ts">
	import Tabs from '$lib/tabs/Tabs.svelte';

	import TabContent1 from '$lib/tabs/TabContent1.svelte';
	import TabContent2 from '$lib/tabs/TabContent2.svelte';
	import TabContent3 from '$lib/tabs/TabContent3.svelte';

	// List of tab items with labels and values.
	let items = [
		{
			label: 'Tab 1',
			value: 1,
			component: TabContent1
		},
		{
			label: 'Tab 2',
			value: 2,
			component: TabContent2
		},
		{
			label: 'Tab 3',
			value: 3,
			component: TabContent3
		}
	];
</script>

<Tabs {items} />
