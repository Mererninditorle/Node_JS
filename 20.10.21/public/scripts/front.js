let data = [
    {name: "Paint", src: "/images/a_1.jpg"}, 
    {name: "Клякса", src: "/images/a2_.jpg"},
    {name: "Stain", src: "/images/a3_.jpg"},
    {name: "Macos Wallpaper", src: "/images/a4_.jpg"},
    {name: "Circle", src: "/images/a5_.jpg"},
    {name: "Hypnotic", src: "/images/a6_.jpg"},
];

const outer = document.querySelector(".container");
data.forEach(el => {
    outer.innerHTML += `
        <div class = "card">${el.name}</div>
    `;
})