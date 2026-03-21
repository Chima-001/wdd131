const currentYear = new Date().getFullYear();
const nav = document.querySelector("nav");
const header = document.querySelector("header");
const title = document.querySelector('header span')

const hamburger = document.createElement("button");

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Belém Brazil",
        location: "Belém, Pará, Brazil",
        dedicated: "2022, November, 20",
        area: 28675,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/belem-brazil-temple/belem-brazil-temple-31309-thumb.jpg"
    },
    {
        templeName: "Pocatello Idaho",
        location: "Pocatello, Idaho, United States",
        dedicated: "2021, November, 7",
        area: 71125,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/pocatello-idaho-temple/pocatello-idaho-temple-23416-thumb.jpg"
    },
    {
        templeName: "Praia Cape Verde",
        location: "Praia, Cape Verde",
        dedicated: "2022, June, 19",
        area: 8759,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/praia-cape-verde-temple/praia-cape-verde-temple-27204.jpg"
    },

    {
        templeName: "Concepción Chile",
        location: "Concepción, Chile",
        dedicated: "2018, October, 28",
        area: 23095,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/concepcion-chile-temple/concepcion-chile-temple-270-thumb.jpg"
    },

    {
        templeName: "Port-au-Prince Haiti",
        location: "Port-au-Prince, Haiti",
        dedicated: "2019, September, 1",
        area: 10396,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/port-au-prince-haiti-temple/port-au-prince-haiti-temple-6211-thumb.jpg"
    }

];

hamburger.setAttribute("id", "hamburger");
hamburger.innerHTML = "&#9776;";
header.appendChild(hamburger);

hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
    if (nav.classList.contains("open")) {
        hamburger.innerHTML = "&#10005;";
        title.style.display = "none";
    } else {
        hamburger.innerHTML = '&#9776;';
        title.style.display = "block"
        hamburger.style.position = "static"
        hamburger.style.top = ""
        hamburger.style.right = ""
    }
});

document.getElementById("currentyear").innerHTML = currentYear;
document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;

const mainEl = document.querySelector('main');
function showTemples(list) {
    mainEl.innerHTML = '<h1 id="heading">Home</h1>';
    list.forEach(spot => {
        const card = document.createElement('figure');
        const photo = document.createElement('img');
        const caption = document.createElement('figcaption');

        photo.src = spot.imageUrl;
        photo.alt = spot.templeName;
        photo.loading = 'lazy';

        caption.innerHTML = `
        <h3>${spot.templeName}</h3>
        <p><span>Location:</span> ${spot.location}</p>
        <p><span>Dedicated:</span> ${spot.dedicated}</p>
        <p><span>Size:</span> ${spot.area} sq ft</p>`;

        card.appendChild(caption);
        card.appendChild(photo);
        mainEl.appendChild(card);
    });
}

showTemples(temples);

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const picked = link.textContent;

        if (picked === 'Home') {
            showTemples(temples);
        }
        else if (picked === 'Old') {
            showTemples(temples.filter(spot => parseInt(spot.dedicated) < 1900));
        }
        else if (picked === 'New') {
            showTemples(temples.filter(spot => parseInt(spot.dedicated) > 2000));
        }
        else if (picked === 'Large') {
            showTemples(temples.filter(spot => spot.area > 90000));
        }
        else if (picked === 'Small') {
            showTemples(temples.filter(spot => spot.area < 10000));
        }
        document.querySelector('h1').textContent = picked;
    });
});