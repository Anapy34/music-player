$(window).load(function(){

  var body = $("body"),
      universe = $("#universe"),
      solarsys = $("#solar-system");

  var init = function() {
    body.removeClass('view-2D opening').addClass("view-3D").delay(2000).queue(function() {
      $(this).removeClass('hide-UI').addClass("set-speed");
      $(this).dequeue();
    });
  };

  var setView = function(view) { universe.removeClass().addClass(view); };

  $("#toggle-data").click(function(e) {
    body.toggleClass("data-open data-close");
    e.preventDefault();
  });

  $("#toggle-controls").click(function(e) {
    body.toggleClass("controls-open controls-close");
    e.preventDefault();
  });

  $("#data a").click(function(e) {
    var ref = $(this).attr("class");
    solarsys.removeClass().addClass(ref);
    $(this).parent().find('a').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });

  $(".set-view").click(function() { body.toggleClass("view-3D view-2D"); });
  $(".set-zoom").click(function() { body.toggleClass("zoom-large zoom-close"); });
  $(".set-speed").click(function() { setView("scale-stretched set-speed"); });
  $(".set-size").click(function() { setView("scale-s set-size"); });
  $(".set-distance").click(function() { setView("scale-d set-distance"); });

  init();

});


// Captura a div universo
const universeDiv = document.getElementById('universe');

// Variáveis para armazenar as coordenadas do toque anterior
let lastX = 0;
let lastY = 0;

// Adiciona um ouvinte de eventos para o evento touchmove
universeDiv.addEventListener('touchmove', function(e) {
  // Previne o comportamento padrão do toque (por exemplo, rolar a página)
  e.preventDefault();

  // Captura o toque atual
  const touch = e.touches[0];

  // Calcula a diferença entre as coordenadas do toque atual e as coordenadas do toque anterior
  const deltaX = touch.clientX - lastX;
  const deltaY = touch.clientY - lastY;

  // Atualiza as coordenadas do toque anterior com as coordenadas do toque atual
  lastX = touch.clientX;
  lastY = touch.clientY;

  // Calcula o fator de escala com base no movimento dos dedos
  const scaleFactor = 1.05; // Fator de escala arbitrário
  const newWidth = universeDiv.offsetWidth * scaleFactor;
  const newHeight = universeDiv.offsetHeight * scaleFactor;

  // Aplica o zoom na div ajustando sua largura e altura
  universeDiv.style.width = newWidth + 'px';
  universeDiv.style.height = newHeight + 'px';
});
