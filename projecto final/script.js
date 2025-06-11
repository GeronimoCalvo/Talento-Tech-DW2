(function initEcommerce() {
  const productos = [
    { titulo: 'iPhone 16', marca: 'Apple', precio: 150000, stock: 40, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNSfkKPZva_yiOAVP61JQZ5QNaXW7cPnr1NA&s' },
    { titulo: 'Galaxy S23', marca: 'Samsung', precio: 130000, stock: 40, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWWoNgVy-Aoh814e-wDoRiQPDZQHzVxG9-4Q&s' },
    { titulo: 'Joystick PS5', marca: 'SONY', precio: 110000, stock: 50, img: 'https://arsonyb2c.vtexassets.com/arquivos/ids/348023-800-800?v=638767911345030000&width=800&height=800&aspect=true' },
    { titulo: 'Heladera Smart', marca: 'LG', precio: 200000, stock: 20, img: 'https://www.lg.com/ar/images/heladeras/md05913259/gallery/medium01.jpg' },
    { titulo: 'Computadora Escritorio', marca: 'HP', precio: 100000, stock: 30, img: 'https://www.worldcomputers.com.ec/wp-content/uploads/2022/03/Computador-de-escritiorio.webp' },
    { titulo: 'Consola PS5"', marca: 'Sony', precio: 220000, stock: 15, img: 'https://arsonyb2c.vtexassets.com/arquivos/ids/366582/Imagen-02_2000-x-2000-px.jpg.jpg?v=638826154074330000' },
    { titulo: 'Smart TV 65"', marca: 'LG', precio: 250000, stock: 20, img: 'https://lgear.vtexassets.com/arquivos/ids/158036-800-auto?v=638845593707200000&width=800&height=auto&aspect=true' }
  ];

  const carrito = [];

  const header = document.createElement('header');
  header.innerHTML = `<h1>Tienda Electrónica</h1><button id="finalize-btn">Finalizar compra</button>`;
  document.body.appendChild(header);

  const main = document.createElement('div');
  main.id = 'main';
  document.body.appendChild(main);

  const container = document.createElement('div');
  container.id = 'product-list';
  main.appendChild(container);

  const cartPanel = document.createElement('div');
  cartPanel.id = 'cart-panel';
  cartPanel.innerHTML = `<h2>Carrito</h2><ul id="cart-items"></ul><p id="cart-total">Total: $0</p>`;
  main.appendChild(cartPanel);

  function crearTarjeta(prod) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${prod.img}" alt="${prod.titulo}">
      <h3>${prod.titulo}</h3>
      <p>Marca: ${prod.marca}</p>
      <p>Precio: $${prod.precio.toLocaleString()}</p>
      <p class="stock">Stock: ${prod.stock}</p>
      <input type="number" class="qty-input" min="1" max="${prod.stock}" value="1">
      <button ${prod.stock === 0 ? 'disabled' : ''}>${prod.stock === 0 ? 'Sin stock' : 'Agregar al carrito'}</button>
    `;

    const btn = card.querySelector('button');
    const input = card.querySelector('.qty-input');
    const stockP = card.querySelector('.stock');

    btn.addEventListener('click', () => {
      let qty = Math.min(prod.stock, parseInt(input.value) || 0);
      if (qty <= 0) return;
      prod.stock -= qty;
      const existing = carrito.find(i => i.titulo === prod.titulo);
      if (existing) existing.cantidad += qty;
      else carrito.push({ titulo: prod.titulo, precio: prod.precio, cantidad: qty });

      stockP.innerText = `Stock: ${prod.stock}`;
      actualizarCarrito();
      if (prod.stock === 0) {
        btn.disabled = true;
        input.disabled = true;
        alert('El producto que esta seleccionando no hay más stock');
      }
    });

    card.addEventListener('mouseover', () => {
      card.style.border = '2px solid black';
      card.style.opacity = '0.8';
    });
    card.addEventListener('mouseout', () => {
      card.style.border = 'none';
      card.style.opacity = '1';
    });

    return card;
  }

  function actualizarCarrito() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    let total = 0;
    for (const idx in carrito) {
      const item = carrito[idx];
      const li = document.createElement('li');
      const subtotal = item.precio * item.cantidad;
      li.innerText = `${item.titulo} x ${item.cantidad} - $${subtotal.toLocaleString()}`;
      cartItems.appendChild(li);
      total += subtotal;
    }
    cartTotal.innerText = `Total: $${total.toLocaleString()}`;
    return total;
  }

  document.getElementById('finalize-btn').addEventListener('click', () => {
    if (carrito.length === 0) {
      alert('No agregaste productos al carrito');
      return;
    }
    const total = actualizarCarrito();
    alert(`Compra realizada. Total pagado: $${total.toLocaleString()}`);
    carrito.length = 0;
    actualizarCarrito();
  });

  for (const idx in productos) {
    const tarjeta = crearTarjeta(productos[idx]);
    container.appendChild(tarjeta);
  }
})();
