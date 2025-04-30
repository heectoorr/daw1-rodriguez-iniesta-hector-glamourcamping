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
      titulo: "Descubre el Observatorio de las Cumbres",
      link: "articles/article5.html"
    }
  ];
  
  // Detectar si estamos en index.html (solo 3 noticias) o new.html (todas)
  const isIndex = window.location.pathname.includes("index.html") || window.location.pathname === "/";
  const noticiasAMostrar = isIndex ? data.slice(0, 3) : data;
  
  const contenedor = document.querySelector('#news0');
  if (contenedor) {
    contenedor.innerHTML = "";
  
    noticiasAMostrar.forEach((item, index) => {
      const div = document.createElement('div');
      div.className = "noticia";
      div.id = `news${item.id}`;
  
      // Solo mostrar enlace "Read" en index.html
      const readLink = isIndex
        ? `<a href="${item.link}" class="link_noticias" class=anoticia >Read</a>`
        : "";
  
      div.innerHTML = `
        <a href="${item.link}">
          <img src="${item.img}" alt="noticia${item.id}" class="imgnoticias">
        </a>
        <p class="pnoticia">"${item.titulo}"</p>
        ${readLink}
      `;
  
      div.style.marginLeft = index === 0 ? "210px" : "39px";
      contenedor.appendChild(div);
    });
  }
  
  // Solo en index: activar botón "Explore"
  const exploreBtn = document.querySelector('#explore-btn');
  if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
      window.location.href = "new.html";
    });
  }
  
 