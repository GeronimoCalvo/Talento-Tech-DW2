/* ecommerce.js: Página e-commerce solo con JavaScript */
(() => {
  // 1. Insertar estilos con JS
  const style = document.createElement('style');
  style.textContent = `
    body { font-family: Arial, Helvetica, sans-serif; margin: 0; background: #f3f3f3; }
    header { background: #333; color: #fff; padding: 1rem; text-align: center; }
    #product-list { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1rem; padding: 1rem; }
    .card { background: #fff; border-radius: 0.75rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1); padding: 1rem; display: flex; flex-direction: column; align-items: center; }
    .card img { max-width: 100%; border-radius: 0.5rem; margin-bottom: 0.5rem; }
    .card h3 { margin: 0.5rem 0; font-size: 1.2rem; }
    .card p { margin: 0.25rem 0; }
    .card button { margin-top: auto; padding: 0.5rem 1rem; border: none; border-radius: 0.5rem; background: #007bff; color: #fff; cursor: pointer; transition: background 0.3s; }
    .card button:hover { background: #0056b3; }
  `;
  document.head.appendChild(style);

  // 2. Datos de productos
  const productos = [
    { titulo: "iPhone 14", marca: "Apple", precio: 150000, stock: 10, img: "https://maximstore.com/_next/image?url=https%3A%2F%2Fback.maximstore.com%2Fstatic%2Fimages%2F81e1e805-03f8-42c2-a494-ad6772fb6db1.png&w=3840&q=75" },
    { titulo: "Galaxy S23", marca: "Samsung", precio: 130000, stock: 7, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLtwxFGHhYrqnP2eWrEX5HrhzkPpwxXe3jOw&s" },
    { titulo: "Joystick PS5", marca: "SONY", precio: 110000, stock: 5, img: "https://arsonyb2c.vtexassets.com/arquivos/ids/348023/PS5_DS_Pshot_A.jpg?v=638767911345030000" },
    { titulo: "Heladera Smart", marca: "LG", precio: 200000, stock: 4, img: "https://www.lg.com/ar/images/heladeras/md07552263/gallery/medium01.jpg" },
    { titulo: "Heladera Frost Free", marca: "Samsung", precio: 180000, stock: 6, img: "https://images.samsung.com/is/image/samsung/latin_rf27t5200s8-big.jpg" },
    { titulo: "Smart TV 55\"", marca: "Sony", precio: 220000, stock: 3, img: "https://www.sony.com.ar/image/Smart-TV-LED-4K-Sony-X80K.jpg" },
    { titulo: "Smart TV 65\"", marca: "LG", precio: 250000, stock: 2, img: "https://www.lg.com/ar/images/tv/md07535364/gallery/S25_A.jpg" }
  ];

  // 3. Crear header y agregar al body
  const header = document.createElement('header');
  header.innerHTML = `<h1>Tienda Electrónica</h1><p>Selecciona tus productos favoritos</p>`;
  document.body.appendChild(header);

  // 4. Contenedor de productos
  const container = document.createElement('div');
  container.id = 'product-list';
  document.body.appendChild(container);

  // 5. Renderizar tarjetas
  productos.forEach(prod => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${prod.img}" alt="${prod.titulo}">
      <h3>${prod.titulo}</h3>
      <p>Marca: ${prod.marca}</p>
      <p>Precio: $${prod.precio.toLocaleString()}</p>
      <p>Stock: ${prod.stock}</p>
      <button>Agregar al carrito</button>
    `;
    card.querySelector('button').addEventListener('click', () => alert(`${prod.titulo} agregado al carrito!`));
    container.appendChild(card);
  });
})();
