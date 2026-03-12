import type NoteSharingPlugin from "main";
import { Modal } from "obsidian";
import type { Moment } from "moment";
import { mount, unmount } from "svelte";
import Component from "./SharedNoteSuccessComponent.svelte";

export class SharedNoteSuccessModal extends Modal {
	private url: string;
	private component!: Record<string, any>;
	private expire_time: Moment;

	constructor(plugin: NoteSharingPlugin, url: string, expire_time: Moment) {
		super(plugin.app);
		this.url = url;
		this.expire_time = expire_time;
		this.render();
	}

	render() {
		this.titleEl.innerText = "Shared note";
	}

	async onOpen() {
		this.component = mount(Component, {
			target: this.contentEl,
			props: {
				url: this.url,
				expireTime: this.expire_time,
			},
		});
	}

	async onClose() {
		unmount(this.component);
	}
}
