import "./style.scss";

export const leftMenu = {
	view: "menu",
	borderless: true,
	layout: "y",
	css: "leftMenu",
	select: true,
	type: {
		height: 44
	},
	on: {
		onAfterRender() {
			this.select(1);
		}
	},
	data: [
		{id: "1", value: "My products", icon: "fas fa-list-ul"},
		{id: "2", value: "My Sales", icon: "fas fa-percent"},
		{id: "3", value: "My disputes", icon: "fas fa-envelope-open-text"},
		{id: "4", value: "Edit profile", icon: "fas fa-user-edit"},
		{id: "5", value: "Log Out", icon: "fas fa-sign-out-alt"}
	]
};
