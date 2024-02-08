document.addEventListener('DOMContentLoaded', function () {
  const btnessa = document.querySelector('.btnessa');
  const bvindoP= document.querySelectorAll('.bvindo');
  const leftTriangle = document.querySelector('.triangle.left');
  const rightTriangle = document.querySelector('.triangle.right');
  const cxBtnAdd = document.querySelector('.cxbtnadd');
  const btnAdd = document.querySelectorAll('.btnadd');
  const bodyLateral = document.querySelector('.abody');
  const divLateral = document.querySelector('.divlateral');


  let isOpen = false;
  let isAdd = false;

  function toggleDivOla() {

    isOpen = !isOpen;

    if (isOpen) {
      btnessa.classList.add('btncor');
      leftTriangle.classList.add('leftadd');
      rightTriangle.classList.add('rightadd');
      // bvindoP.classList.add('bvindoadd');
      setTimeout(() => {
        // essacx.style.zIndex = -1;
      }, 500);
    } else {
      bodyLateral.classList.remove('abodyadd');
      divLateral.classList.remove('divlateraladd');
      cxBtnAdd.classList.remove('cxbtnaddcor');
      // bvindoP.classList.remove('bvindoadd');
      setTimeout(() => {
        btnessa.classList.remove('btncor');
      }, 1000);
      leftTriangle.classList.remove('leftadd');
      rightTriangle.classList.remove('rightadd');
      // leftTriangle.style.zIndex = 5;
    }
  }


  function toggleLateral() {
    isAdd = !isAdd;
    if (isAdd) {
     
      bodyLateral.classList.add('abodyadd');
      divLateral.classList.add('divlateraladd');
      cxBtnAdd.classList.add('cxbtnaddcor');
      // setTimeout(() => {
      //   cxBtnAdd.classList.add('cxbtnaddcor');
      // }, 500);
    } else {
      bodyLateral.classList.remove('abodyadd');
      divLateral.classList.remove('divlateraladd');
      cxBtnAdd.classList.remove('cxbtnaddcor');
      // setTimeout(() => {
      //   cxBtnAdd.classList.remove('cxbtnaddcor');
      // }, 1000);
     
    }
  }

  btnAdd.forEach(btn => btn.addEventListener('click', toggleLateral))

  btnessa.addEventListener('click', function () {
    toggleDivOla(); 
    
  });

});




// document.addEventListener('DOMContentLoaded', function () {
//   const cxBtnAdd = document.querySelector('.cxbtnadd');
//   const btnAdd = document.querySelectorAll('.btnadd');
//   // const btnAdd = document.querySelector('.btnadd');
//   const bodyLateral = document.querySelector('.abody');
//   const divLateral = document.querySelector('.divlateral');
//   let isAdd = false;

//   function toggleLateral() {
//     isAdd = !isAdd;
//     if (isAdd) {
     
//       bodyLateral.classList.add('abodyadd');
//       divLateral.classList.add('divlateraladd');
//       cxBtnAdd.classList.add('cxbtnaddcor');
//       // setTimeout(() => {
//       //   cxBtnAdd.classList.add('cxbtnaddcor');
//       // }, 500);
//     } else {
//       bodyLateral.classList.remove('abodyadd');
//       divLateral.classList.remove('divlateraladd');
//       cxBtnAdd.classList.remove('cxbtnaddcor');
//       // setTimeout(() => {
//       //   cxBtnAdd.classList.remove('cxbtnaddcor');
//       // }, 1000);
     
//     }
//   }



//   btnAdd.forEach(btn => btn.addEventListener('click', toggleLateral))

//   // btnAdd.addEventListener('click', function () {
//   //   toggleLateral()
//   // });
// });






// document.addEventListener('DOMContentLoaded', function () {
//   // const btnAdd = document.querySelectorAll('.btnadd');
//   const btnAdd = document.querySelectorAll('.btnadd');
//   // const btnAdd = document.querySelector('.btnadd');
//   const bodyLateral = document.querySelector('.abody');
//   const divLateral = document.querySelector('.divlateral');
//   let isAdd = false;

//   function toggleLateral() {
//     isAdd = !isAdd;
//     if (isAdd) {
//       // btnAdd.classList.add('btnaddcor');
//       bodyLateral.classList.add('abodyadd');
//       divLateral.classList.add('divlateraladd');
//       setTimeout(() => {
//         // leftTriangle.style.zIndex = -1;
//       }, 500);
//     } else {
//       setTimeout(() => {
//       }, 1000);
//       // btnAdd.classList.remove('btnaddcor');
//       bodyLateral.classList.remove('abodyadd');
//       divLateral.classList.remove('divlateraladd');
//     }
//   }



//   btnAdd.forEach(btn => btn.addEventListener('click', toggleLateral))

//   // btnAdd.addEventListener('click', function () {
//   //   toggleLateral()
//   // });
// });
