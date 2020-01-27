import "./libs/fontawesome-free-5.12.0-web/css/all.css";

import {cartList} from "./js/cartList";
import {cartToolbar} from "./js/cartToolbar";
import {leftMenu} from "./js/leftMenu";
import {userCart} from "./js/userCart";

// SCSS
import "./assets/scss/main.scss";

webix.ready(() => {

	// uncomment these lines after undating webpack config
	// if (!webix.env.touch && webix.env.scrollSize)
	// 	webix.CustomScroll.init();

	webix.ui({
		type: "space",
		cols: [
			{},
			{
				gravity:3,
				minWidth:960,
				css: {"background-color": "#ebedf0"},
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
