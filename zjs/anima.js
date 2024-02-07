document.addEventListener('DOMContentLoaded', function () {
  const btnessa = document.querySelector('.btnessa');
  const leftTriangle = document.querySelector('.triangle.left');
  const rightTriangle = document.querySelector('.triangle.right');

  let isOpen = false;

  function toggleDivOla() {
    isOpen = !isOpen;

    if (isOpen) {
      // Adiciona a classe para estilizar a div preta     
      btnessa.classList.add('brtcor');
      // Mova as divs triangulares se a div preta estiver aberta
      leftTriangle.style.transform = 'translateX(-100%)';
      rightTriangle.style.transform = 'translateX(100%)';

      // Adiciona um atraso antes de definir z-index como -1
      setTimeout(() => {
        leftTriangle.style.zIndex = -1;
        rightTriangle.style.zIndex = -1;
        // essacx.style.zIndex = -1;
      }, 500);

    } else {
      // Remove a classe para reverter o estilo da div preta   
      setTimeout(() => {
        btnessa.classList.remove('brtcor');
      }, 1000);

      // Reset as posições das divs triangulares se a div preta estiver fechada
      leftTriangle.style.transform = 'translateX(0)';
      rightTriangle.style.transform = 'translateX(0)';
      // Defina z-index como -1 para esconder as divs azul e amarela
      leftTriangle.style.zIndex = 5;
      rightTriangle.style.zIndex = 5;
      // essacx.style.zIndex = 5;
      btnessa.style.zIndex = 6;

    }
  }

  btnessa.addEventListener('click', function () {
    toggleDivOla();
  });
});



const bodyLateral = document.querySelector('.abody');
const divLateral = document.querySelector('.divlateral');

function toggleDiv() {
  var transformValue = getComputedStyle(bodyLateral).transform;
  // Exibir a posição atual no console
  console.log('Posição atual:', transformValue);

  // Verificar se a div está em -50% e alternar para 0%, ou vice-versa
  if (transformValue === 'matrix(1, 0, 0, 1, -350, 0)') {
    bodyLateral.style.transform = 'translateX(0)';
    // divLateral.style.transform = 'translateX(350)';
    divLateral.classList.remove('divlateraladd');
  } else {
    bodyLateral.style.transform = 'translateX(-350px)';
    bodyLateral.style.transition= 'all 1s'
  //  divLateral.style.transform = 'translateX(0px)';
  divLateral.classList.add('divlateraladd');
  }
}

function moverDivParaZero() {
  bodyLateral.style.transform = 'translateX(0)';
  divLateral.classList.remove('divlateraladd');
} 
