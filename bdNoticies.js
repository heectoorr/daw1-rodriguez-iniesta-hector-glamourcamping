console.log("HOLAAAA!!!!!!");

const data = [
  {
    id: 1,
    img: "imagenes/noticia1.png",
    titulo: "La Noche de las Mil Estrellas: Acampa Bajo el Cielo Más Claro del Año",
    link: "articles/article1.html"
  },
  {
    id: 2,
    img: "imagenes/familiafuegos.avif",
    titulo: "Festival de Fuegos en el Bosque Encantado",
    link: "articles/article2.html"
  },
  {
    id: 3,
    img: "imagenes/lagunamagica.webp",
    titulo: "Aventura en la Laguna Escondida",
    link: "articles/article3.html"
  },
  {
    id: 4,
    img: "imagenes/valledelsilencio.jpg",
    titulo: "Caminata Nocturna por la Senda del Silencio",
    link: "articles/article4.html"
  },
  {
    id: 5,
    img: "imagenes/pobladovikingo.jpg",
    titulo: "Campamento Vikingos: Vive una Aventura Épica al Aire Libre",
    link: "articles/article5.html"
  }
];

const isIndex = window.location.pathname.includes("index.html") || window.location.pathname === "/";
const noticiasAMostrar = isIndex ? data.slice(0, 3) : data;


const contenedor = document.querySelector('#news0');
if (contenedor) {
  contenedor.innerHTML = "";

  noticiasAMostrar.forEach((item, index) => { 
    const div = document.createElement('div');
    div.className = "noticia";
    div.id = `${item.id}`;

    // Imagen con class
    const img = document.createElement('img');
    img.src = item.img;
    img.alt = `noticia${item.id}`;
    img.className = "imgnews";
    
    const divP = document.createElement('div');
    divP.className = "divp";

    // Título con class
    const p = document.createElement('p');
    p.className = "pnews";
    p.textContent = `"${item.titulo}"`;

    // Enlace a imagen
    const aImg = document.createElement('a');
    aImg.href = item.link;
    aImg.appendChild(img);

    // Enlace "Read" solo en index.html
    let readLink = '';
    if (isIndex) {
      readLink = `<a href="${item.link}" class="link_noticias">Read</a>`;
    }

    divP.appendChild(p);
    div.appendChild(aImg);
    div.appendChild(divP);
    if (readLink) {
      div.insertAdjacentHTML('beforeend', readLink);
    }

    div.style.marginLeft = "39px";
    contenedor.appendChild(div);
  });
}

const exploreBtn = document.querySelector('#explore-btn');
if (exploreBtn) {
  exploreBtn.addEventListener('click', () => {
    window.location.href = "new.html";
  });
}

 