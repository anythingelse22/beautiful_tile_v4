const about_ar = [

	"ИП: Безгубов Владос",
	"Адрес: ул.Пушкина, д.Колотушкина",
	"ИНН: 12391231828491",

]

add_contacts()
function add_contacts() {
	const main_cont = document.querySelector(".cont_top")

	for (i=0; i < about_ar.length; i++) {
		const text_cont = document.createElement("p")
		text_cont.innerText = about_ar[i]
		text_cont.setAttribute("class", "top_text")
		main_cont.appendChild(text_cont)
	}

};