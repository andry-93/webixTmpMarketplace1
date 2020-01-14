import "./style.scss";

export const userCart = {
	css: {"background-color": "#fff"},
	padding: 10,
	rows: [
		{
			view: "template",
			data: {name: "Jack Smith", src: "../../assets/img/user.png"},
			css: "userCart",
			height: 150,
			borderless: true,
			template(obj) {
				const html = `
					<div class="avatarImg" style="background-image: url(${obj.src});"></div>
					<div class="avatarContent">
						<span>${obj.name}</span>
					</div>
				`;
				return html;
			}
		},
		{
			cols: [
				{},
				{
					height: 1,
					css: {"background-color": "#EBEDF0"}
				},
				{}
			]
		},
		{
			view: "label",
			label: "447,29$",
			align: "center"
		},
		{
			view: "combo",
			label: "Royalty Balance:",
			labelWidth: 115,
			value: "All Time",
			options: ["All Time", "Last Week"]
		}
	]
};
