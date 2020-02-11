import "./libs/fontawesome-free-5.12.0-web/css/all.css";

import {cartList} from "./js/cartList";
import {cartToolbar} from "./js/cartToolbar";
import {leftMenu} from "./js/leftMenu";
import {userCart} from "./js/userCart";

// SCSS
import "./assets/scss/main.scss";

webix.ready(() => {
	if (!webix.env.touch && webix.env.scrollSize) { webix.CustomScroll.init(); }

	webix.ui({
		type: "space",
		cols: [
			{},
			{
				width: 1420,
				css: "grey",
				cols: [
					{
						width: 250,
						margin: 10,
						rows: [
							userCart,
							leftMenu
						]
					},
					{
						rows: [
							cartToolbar,
							{
								cols: [
									cartList
								]
							}

						]
					}
				]
			},
			{}
		]
	});
});
