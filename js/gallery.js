const imgs_amount = 12

let grid_ar = []

/* first week in js :( 
guess we can't read amount of files in folder with vanilla js
so this value has to be the exact amount or less */
add_img(imgs_amount)

// forEach doesnt seem to like 404 http errors
// const allowed_format = [ ".jpeg", ".png" ]

function url_exists(url) {
	const http = new XMLHttpRequest()
	http.open("HEAD", url, false)
	http.send()

	return http.status != 404
}

function get_img_path(str) {
	let def_form = ".jpg"
	let img_url = "imgs/gallery/gallery_img_" + str

	if (url_exists(img_url + def_form)) {
		img_url = img_url + def_form
	} else if (url_exists(img_url + ".jpeg")) {
		img_url = img_url + ".jpeg"
	} else if (url_exists(img_url + ".png")) {
		img_url = img_url + ".png"
	} else if (url_exists(img_url + ".webp")) {
		img_url = img_url + ".webp"
	} else {
		return
	}

	return img_url
}

function create_elems(str) {
	const cont = document.getElementById("main_grid")

	// image url check
	const image_path = get_img_path(str)
	if (image_path === undefined) {
		return
	} 

	// image cont
	const img_cont = document.createElement("div")
	img_cont.setAttribute("class", "image_cont")
	cont.appendChild(img_cont)

	// image
	const img_obj = document.createElement("img")
//	const image_path = get_img_path(str)
	img_obj.src = image_path
	img_obj.setAttribute("class", "image")
	img_cont.appendChild(img_obj)

	// darkening
	const bg_obj = document.createElement("div")
	bg_obj.setAttribute("class", "image_bg")
	bg_obj.id = "img_bg_" + str
	img_cont.appendChild(bg_obj)
	bg_obj.addEventListener("click", bg_onClick)

	// how tf do i pass arguments to event handlers
	grid_ar[str] = grid_ar[str] || []
	grid_ar[str].img_path = image_path

}

function add_img(amnt) {

	for (i=0; i <= amnt; i++) {
		create_elems(i)
	}

}

// background click callback
function bg_onClick(event) {
	const bg = event.target
	const bg_id = bg.id
	const ar_idx = bg_id.replace("img_bg_", "")

	enable_big_image(ar_idx)
}

// image enabler
let cur_img_idx
function enable_big_image(idx) {

	// new container
	const big_img_cont = document.createElement("div")
	big_img_cont.setAttribute("class", "big_image_cont")
	big_img_cont.id = "big_image_cont_id"
	document.body.appendChild(big_img_cont)
	big_img_cont.addEventListener("click", big_img_cont_onClick)

	// left arrow
	const left_arrow = document.createElement("div")
	left_arrow.setAttribute("class", "arrow_left")
	big_img_cont.appendChild(left_arrow)
	left_arrow.addEventListener("click", arrow_onClickPress)

	const left_mini_arrow = document.createElement("img")
	left_mini_arrow.setAttribute("class", "arrow_mini_left")
	left_mini_arrow.src = "imgs/misc/arrow_left.png"
	left_arrow.appendChild(left_mini_arrow)

	// image div and image
	const img_div = document.createElement("div")
	img_div.setAttribute("class", "image_div")
	big_img_cont.appendChild(img_div)

	const big_img = document.createElement("img")
	big_img.src = grid_ar[idx].img_path
	big_img.setAttribute("class", "big_image")
	img_div.appendChild(big_img)

	// bottom counter
	const counter = document.createElement("div")
	counter.setAttribute("class", "bottom_counter")
	const counter_text = Number(idx) + 1
	counter.innerText = counter_text + " / " + grid_ar.length
	img_div.appendChild(counter)

	// right arrow
	const right_arrow = document.createElement("div")
	right_arrow.setAttribute("class", "arrow_right")
	big_img_cont.appendChild(right_arrow)
	right_arrow.addEventListener("click", arrow_onClickPress)

	const right_mini_arrow = document.createElement("img")
	right_mini_arrow.setAttribute("class", "arrow_mini_right")
	right_mini_arrow.src = "imgs/misc/arrow_right.png"
	right_arrow.appendChild(right_mini_arrow)

	// still don't know how to pass
	cur_img_idx = idx

}

// image disabler and callback
function big_img_cont_onClick(event) {
	const cont = event.target
	const cont_class = cont.className

	if (cont_class !== "big_image_cont") {
		return
	}

	cont.remove()
}

// arrows click/keys callbacks
document.addEventListener("keydown", arrow_onClickPress)

function arrow_onClickPress(event) {
	const cont = document.getElementById("big_image_cont_id")
	const arrow_class = event.target.className
	
	const keypressed = event.key

	// main container exists
	if (!(cont)) {
		return
	}

	// ESC pressed
	if (keypressed === "Escape") {
		cont.remove()
		return
	}

	// arrows clicked or arrowkeys pressed
	if (arrow_class === "arrow_left" || arrow_class === "arrow_mini_left" || keypressed === "ArrowLeft") {
	
		if (cur_img_idx > 0) {
			cur_img_idx--
		} else {
			return
		}

	} else if (arrow_class === "arrow_right" || arrow_class === "arrow_mini_right" || keypressed === "ArrowRight") {

		if (cur_img_idx < grid_ar.length - 1) {
			cur_img_idx++
		} else {
			return
		}

	}

	cont.remove()
	enable_big_image(cur_img_idx)
};