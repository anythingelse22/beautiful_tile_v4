const cont_arr = {
	// phone
	phone: "+7-800-555-35-35",
	// whatsapp: [ "тут что дисплеится", "тут сама ссылка"]
	whatsapp: [ "WhatsApp", "https://wa.me/12345678"],
}

let page_load = true
const dbg = false

menu_click()
render_cont()
function menu_click() {
	const btn = document.querySelector(".head_menu")
	const navbar = document.querySelector(".navmenu")
	let menu = sessionStorage.getItem("menu")
	pr("menu is: %s || type: ", menu, typeof(menu))

	if (menu === null || menu === undefined) {
		sessionStorage.setItem("menu", "false")
		menu = sessionStorage.getItem("menu")
	}

	// page loaded
	if (page_load) {
		pr("page_load")
		page_load = false
		// and menu_open is true
		if (menu === "true") {
			// Show Menu
			toggle_menu(btn, navbar)
			pr("page loaded and menu is %s: Show Menu", menu)
		// and menu_open is false or null
		} else if (menu === "false") {
			// Do not Show menu
			pr("page loaded, but menu is %s: Do not Show Menu", menu)
		}
	// click callback
	} else {
		pr("click")
		// menu_open is true
		if (menu === "true") {
			// Close menu
			toggle_menu(btn, navbar, "false")
			pr("click, menu is true: Close Menu")
		} else if (menu === "false") {
			// Show menu
			toggle_menu(btn, navbar, "true")
			pr("click, menu is false: Show Menu")
		}
	}

}

function toggle_menu(obj1, obj2, val) {
	obj1.classList.toggle("active")
	obj2.classList.toggle("active")

	if (val === "true" || val === "false") {	// fkn js, dont understand the null eval xd
		sessionStorage.setItem("menu", val)
	}
}

function remove_menu_item() {
	sessionStorage.removeItem("menu")
}

function pr(...otherInfo) {
	if (!dbg) { return }
	console.log(...otherInfo)
}

function render_cont() {
//	const em = document.getElementById("mail_id")
	const ph = document.getElementById("phone_id")
	const wa = document.getElementById("wa_id")

//	const em_str = cont_arr.whatsapp
	const ph_str = cont_arr.phone
	const wa_str = cont_arr.whatsapp[0]

//	em.innerText = em_str
	ph.innerText = ph_str
	wa.innerText = wa_str

//	em.href = "mailto:" + em_str
	const new_ph_str = ph_str.replaceAll("-", "")
	ph.href = "tel:" + new_ph_str
	wa.href = cont_arr.whatsapp[1]
};