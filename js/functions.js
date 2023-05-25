
//funcion de resaltar menu segun la pagina en que esta

const actual_page = window.location.href;
const menu = document.querySelectorAll("#menu a");

menu.forEach(function (item) {
    if (actual_page === item.href) {
        item.style.color = "red";
        item.style.textDecoration = "underline";
        item.style
    }
});

//Control de div oculto y desplegable

const items = document.querySelectorAll('.items');

items.forEach(function(li) {
  const itemId = li.id.replace('li', 'item');
  const item = document.getElementById(itemId);

  li.addEventListener('mouseenter', function() {
    item.style.display = 'block';
  });

  li.addEventListener('touchstart', function() {
    item.style.display = 'block';
  });

  li.addEventListener('mouseleave', function() {
    item.style.display = 'none';
  });

  li.addEventListener('touchend', function() {
    item.style.display = 'none';
  });
  
});

//Control de boton volver arriba

const btnVolverArriba = document.getElementById('upperButton');

window.onscroll = function() {
  if (document.documentElement.scrollTop > 300) {
    btnVolverArriba.style.display = 'block';
  } else {
    btnVolverArriba.style.display = 'none';
  }
};


btnVolverArriba.onclick = function() {
  document.documentElement.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
