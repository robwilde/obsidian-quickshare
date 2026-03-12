import { ItemView, WorkspaceLeaf } from "obsidian";
import { mount, unmount } from "svelte";
import QuickShareSideViewComponent from "./QuickShareSideView.svelte";
export class QuickShareSideView extends ItemView {
	static viewType = "QUICKSHARE_SIDE_VIEW";

	public navigation = false;

	private component!: Record<string, any>;

	constructor(leaf: WorkspaceLeaf) {
		super(leaf);
	}

	/* Obsidian event lifecycle */

	async onOpen(): Promise<void> {
		this.component = mount(QuickShareSideViewComponent, {
			target: this.contentEl,
		});
	}

	async onClose() {
		unmount(this.component);
	}

	/* View abstract method implementations */

	getViewType(): string {
		return QuickShareSideView.viewType;
	}

	getDisplayText(): string {
		return "QuickShare";
	}

	getIcon(): string {
		return "cloud";
	}
}
