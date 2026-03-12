<script lang="ts">
	import { useIcon } from ".";

	let {
		icon,
		size = "md",
		active = false,
		tooltip = "",
		nopadding = false,
		disabled = false,
		onclick,
		onkeypress,
	}: {
		icon: string;
		size?: "xs" | "sm" | "md" | "lg";
		active?: boolean;
		tooltip?: string;
		nopadding?: boolean;
		disabled?: boolean;
		onclick?: (e: MouseEvent) => void;
		onkeypress?: (e: KeyboardEvent) => void;
	} = $props();
</script>

<div
	class="clickable-icon"
	class:nopadding
	class:is-active={active}
	class:icon-xs={size === "xs"}
	class:icon-sm={size === "sm"}
	class:icon-md={size === "md"}
	class:icon-lg={size === "lg"}
	aria-label={tooltip}
	use:useIcon={icon}
	{onclick}
	{onkeypress}
	{disabled}
></div>

<style>
	.nopadding {
		padding: 0;
	}
	.icon-xs {
		--icon-size: var(--icon-xs);
		--icon-stroke: var(--icon-xs-stroke-width);
	}
	.icon-sm {
		--icon-size: var(--icon-s);
		--icon-stroke: var(--icon-s-stroke-width);
	}
	.icon-md {
		--icon-size: var(--icon-m);
		--icon-stroke: var(--icon-m-stroke-width);
	}
	.icon-lg {
		--icon-size: var(--icon-l);
		--icon-stroke: var(--icon-l-stroke-width);
	}
</style>
