let data = [
    {name: "Paint", src: "/images/a_1.jpg"}, 
    {name: "Клякса", src: "/images/a_2.jpg"},
    {name: "Stain", src: "/images/a_3.jpg"},
    {name: "Macos Wallpaper", src: "/images/a_4.jpg"},
    {name: "Circle", src: "/images/a_5.jpg"},
    {name: "Hypnotic", src: "/images/a_6.jpg"},
];

const outer = document.querySelector(".container");
data.forEach(el => {
    outer.innerHTML += `
        <div class = "card" 
            data-src = "${el.src}"; 
            data-name = ${el.name}
        >${el.name}</div>
    `;
});

let other = document.createElement("div");
other.className = "card";
other.style.height = "100px";
other.setAttribute("data-src", "/images/guest.png");
let inp = document.createElement("input");
other.append(inp);
outer.append(other);
inp.addEventListener("click", e => {
    e.stopPropagation();
});
inp.addEventListener("input", e => {
    e.target.parentElement.setAttribute("data-name", e.target.value);
});


/* 
* При нажатии на карточку отправляться на страницу с соответсвующим изображением (img/<name>)
*/ 

outer.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", e => {
        // location.reload - перезагрузить страницу
        // location.replace - отправить по другому адресу

        /* 
        let name = e.target.getAttribute("data-name")};
        let src = e.target.getAttribute("data-src");
        let addres = `personal?name=${name} &img =${src}`;
        location.replace.addres
        */ 

        location.replace(`/personal?name=${e.target.getAttribute("data-name")}&img=${e.target.getAttribute("data-src")}`); // отправить по другому адресу
    });
})