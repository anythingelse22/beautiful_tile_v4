let cat_arr = [

	{
		name: "Декоративный гипсовый кирпич",
		cost: "350",
		image: "catalog_img_0.jpg",
		descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",

		stat: [
			[ "Материал:", "Гипс" ],
			[ "Длина (см):", "19" ],
			[ "Высота (см):", "9,5" ],
			[ "Толщина (см):", "0,9-1,1" ],
			[ "Вес (кг/м²):", "8,2" ],
		],

	},

	{
		name: "Рандомное имя номер два",
		cost: "1295",
		image: "catalog_img_1.jpg",
		descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",

		stat: [
			[ "Материал:", "Гипс" ],
			[ "Длина (см):", "19" ],
			[ "Высота (см):", "9,5" ],
			[ "Толщина (см):", "0,9-1,1" ],
			[ "Вес (кг/м²):", "8,2" ],
		],

	},

	{
		name: "Рандомный тест на две строки мммм ффф ссс",
		cost: "56.9",
		image: "catalog_img_2.jpg",
		descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",

		stat: [
			[ "Материал:", "Гипс" ],
			[ "Длина (см):", "19" ],
			[ "Высота (см):", "9,5" ],
			[ "Толщина (см):", "0,9-1,1" ],
			[ "Вес (кг/м²):", "8,2" ],
		],

	},

]



render_items()

function render_items() {
	// grid
	const main_grid = document.getElementById("catalog_main")
	
	const arr_length = cat_arr.length

	for (i=0; i < arr_length; i++) {

		// main div
		const main_cont = document.createElement("div")
		main_cont.setAttribute("class", "big_cont_div")
		main_grid.appendChild(main_cont)

		// image div
		const image_cont = document.createElement("div")
		image_cont.setAttribute("class", "image_cont_div")
		main_cont.appendChild(image_cont)

		// descr div
		const descr_main_cont = document.createElement("div")
		descr_main_cont.setAttribute("class", "descr_main_cont_div")
		main_cont.appendChild(descr_main_cont)

		// image
		const image_left = document.createElement("img")
		image_left.src = "imgs/catalog/" + cat_arr[i].image
		image_left.style.opacity = 0
		const id_to_pass = image_left.id
		img_opac(image_left)
		image_left.setAttribute("class", "image_left")
		image_cont.appendChild(image_left)

		// descr inner divs
		const descr_top_cont = document.createElement("div")
		descr_top_cont.setAttribute("class", "descr_inner_top")
		descr_main_cont.appendChild(descr_top_cont)
	
		const descr_bot_cont = document.createElement("div")
		descr_bot_cont.setAttribute("class", "descr_inner_bot")
		descr_main_cont.appendChild(descr_bot_cont)

		// name, cost divs
		const name_div = document.createElement("p")
		name_div.setAttribute("class", "name_cont")
		name_div.innerText = cat_arr[i].name
		descr_top_cont.appendChild(name_div)

		const cost_div = document.createElement("p")
		cost_div.setAttribute("class", "cost_cont")
		cost_div.innerText = cat_arr[i].cost + " руб./м²"
		descr_top_cont.append(cost_div)

		// detailed descr
		const descr_btn = document.createElement("button")
		descr_btn.setAttribute("class", "descr_btn")
		descr_btn.saved_idx = i
		descr_btn.innerText = "Подробнее"
		descr_bot_cont.appendChild(descr_btn)
		descr_btn.addEventListener("click", descr_cb)

	}

}

function img_opac(image_left) {

	setTimeout(function(image_left) {
		image_left.style.opacity = 1;
	}, 200, image_left)

}

function descr_cb(event) {
	const btn = event.target
	const idx = btn.saved_idx

	create_descr(idx)

}

function create_descr(idx) {
	// background
	const descr_bg = document.createElement("div")
	descr_bg.setAttribute("class", "big_descr_bg")
	document.body.appendChild(descr_bg)
	descr_bg.addEventListener("click", remove_big_descr)

	// main
	const descr_main = document.createElement("div")
	descr_main.setAttribute("class", "big_descr_main")
	descr_bg.appendChild(descr_main)
	
	//left
	const descr_left_cont = document.createElement("div")
	descr_left_cont.setAttribute("class", "big_descr_left_div")
	descr_main.appendChild(descr_left_cont)

	const descr_img = document.createElement("img")
	descr_img.setAttribute("class", "big_descr_img")
	descr_img.src = "imgs/catalog/" + cat_arr[idx].image
	descr_left_cont.appendChild(descr_img)

	//right
	const descr_right_cont = document.createElement("div")
	descr_right_cont.setAttribute("class", "big_descr_right_div")
	descr_main.appendChild(descr_right_cont)

	const descr_inner_name = document.createElement("p")
	descr_inner_name.setAttribute("class", "big_descr_name")
	descr_inner_name.innerText = cat_arr[idx].name
	descr_right_cont.appendChild(descr_inner_name)

	const descr_inner_stat = document.createElement("div")
	descr_inner_stat.setAttribute("class", "big_descr_stat_div")
	create_descr_stats(idx, descr_inner_stat)
	descr_right_cont.appendChild(descr_inner_stat)

	const descr_inner_descr = document.createElement("p")
	descr_inner_descr.setAttribute("class", "big_descr_descr")
	descr_inner_descr.innerText = cat_arr[idx].descr
	descr_right_cont.appendChild(descr_inner_descr)

}

function remove_big_descr(event) {
	const cont = event.target
	const cont_class = cont.className

	if (cont_class !== "big_descr_bg") {
		return
	}

	cont.remove()
}

function create_descr_stats(idx, main_div) {
	
	if (!(main_div)) {
		return
	}

	const arr_idx = cat_arr[idx]
	const arr_idx_stat = cat_arr[idx] && cat_arr[idx].stat

	if (!(arr_idx_stat)) {
		return
	}

	for (i=0; i < arr_idx_stat.length; i++) {
		const stat_div = document.createElement("div")
		stat_div.setAttribute("class", "descr_stat_row_div")
		main_div.appendChild(stat_div)

		const arr_idx_stat_idx = arr_idx_stat[i]
		
		for (j=0; j < arr_idx_stat_idx.length; j++) {
			const text = arr_idx_stat_idx[j]
			const new_p = document.createElement("p")
			new_p.setAttribute("class", "descr_stat_text")
			new_p.innerText = text
			stat_div.appendChild(new_p)
		}

	}

};
