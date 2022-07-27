const img_pos_ar = [

	[25, 25, 2.4],
	[-25, 25, 2.4],
	[25, -25, 2.4],
	[-25, -25, 2.4],
]

let zoomed = false
let new_z_idx = 0

function getWidth() {
	return Math.max(
		document.body.scrollWidth,
		document.documentElement.scrollWidth,
		document.body.offsetWidth,
		document.documentElement.offsetWidth,
		document.documentElement.clientWidth
	);
}

function home_image_click(event, elem) {
	const elem_id = elem.id
	const elem_ar_idx = elem_id.replace("home_img_", "")
	const child_x = img_pos_ar[elem_ar_idx][0]
	const child_y = img_pos_ar[elem_ar_idx][1]
	const child_s = img_pos_ar[elem_ar_idx][2]

	zoomed = !zoomed ? true : false

	if (!zoomed) {
		elem.style.transform = "none";
		return
	}

	new_z_idx++

	elem.style.transform = "scale(" + child_s + ")";
	elem.style.transform += "translate(" + child_x + "%," + child_y + "%)";
	elem.style.zIndex = new_z_idx
}
