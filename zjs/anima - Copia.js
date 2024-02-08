document.addEventListener('DOMContentLoaded', function () {
  const btnessa = document.querySelector('.btnessa');
  const leftTriangle = document.querySelector('.triangle.left');
  const rightTriangle = document.querySelector('.triangle.right');

  let isOpen = false;

  function toggleDivOla() {
    isOpen = !isOpen;

    if (isOpen) {
      // Adiciona a classe para estilizar a div preta     
      btnessa.classList.add('btncor');
      // Mova as divs triangulares se a div preta estiver aberta
      // leftTriangle.style.transform = 'translateX(-100%)';
      // rightTriangle.style.transform = 'translateX(100%)';
      leftTriangle.classList.add('leftadd');
      rightTriangle.classList.add('rightadd');

      // Adiciona um atraso antes de definir z-index como -1
      setTimeout(() => {
        // leftTriangle.style.zIndex = -1;
        // rightTriangle.style.zIndex = -1;
        // essacx.style.zIndex = -1;
      }, 500);

    } else {
      // Remove a classe para reverter o estilo da div preta   
      setTimeout(() => {
        btnessa.classList.remove('btncor');
      }, 1000);

      // Reset as posições das divs triangulares se a div preta estiver fechada
      // leftTriangle.style.transform = 'translateX(0)';
      // rightTriangle.style.transform = 'translateX(0)';
      leftTriangle.classList.remove('leftadd');
      rightTriangle.classList.remove('rightadd');
      // Defina z-index como -1 para esconder as divs azul e amarela
      // leftTriangle.style.zIndex = 5;
      // rightTriangle.style.zIndex = 5;
      // essacx.style.zIndex = 5;
      // btnessa.style.zIndex = 6;

    }
  }

  btnessa.addEventListener('click', function () {
    toggleDivOla()
  });
});



document.addEventListener('DOMContentLoaded', function () {
  const btnAdd = document.querySelector('.btnadd');
  const bodyLateral = document.querySelector('.abody');
  const divLateral = document.querySelector('.divlateral');

  let isAdd = false;

  function toggleLateral() {
    isAdd = !isAdd;

    if (isAdd) {
      btnAdd.classList.add('btnaddcor');
      bodyLateral.classList.add('abodyadd');
      divLateral.classList.add('divlateraladd');
      setTimeout(() => {
        // leftTriangle.style.zIndex = -1;
      }, 500);
    } else {
      // Remove a classe para reverter o estilo da div preta   
      setTimeout(() => {
       
      }, 1000);
      btnAdd.classList.remove('btnaddcor');
      bodyLateral.classList.remove('abodyadd');
      divLateral.classList.remove('divlateraladd');

    }
  }
  btnAdd.addEventListener('click', function () {
    toggleLateral()
  });
});


// const bodyLateral = document.querySelector('.abody');
// const divLateral = document.querySelector('.divlateral');

// function toggleDiv() {
//   var transformValue = getComputedStyle(bodyLateral).transform;
//   // Exibir a posição atual no console
//   console.log('Posição atual:', transformValue);

//   // Verificar se a div está em -50% e alternar para 0%, ou vice-versa
//   if (transformValue === 'matrix(1, 0, 0, 1, -350, 0)') {
//     bodyLateral.classList.remove('abodyadd');
//     // divLateral.style.transform = 'translateX(350)';
//     divLateral.classList.remove('divlateraladd');
//   } else {
//     bodyLateral.classList.add('abodyadd');
//     //  divLateral.style.transform = 'translateX(0px)';
//     divLateral.classList.add('divlateraladd');
//   }
// }

// function moverDivParaZero() {
//   bodyLateral.classList.remove('abodyadd');
//   divLateral.classList.remove('divlateraladd');
// }
