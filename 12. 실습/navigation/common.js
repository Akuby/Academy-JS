const list = document.querySelectorAll('#gnbList > li')
const snb = document.querySelectorAll('.snb')
// 1번째 코드

// for ( let i = 0; i < list.length; i++ ) {
//   list[i].addEventListener('mouseenter', () => {
//     snb[i].style.display = 'block'
//   });
//   list[i].addEventListener('mouseleave', () => {
//     snb[i].style.display = 'none';
//   })
// }

// 2번째 코드

// list.forEach((li, i) => {
//   li.addEventListener('mouseenter', () => {
//     snb[i].style.display = 'block'
//   });
//   li.addEventListener('mouseleave', () => {
//     snb[i].style.display = 'none'
//   });
// })

// 3번째 코드 ( children 생각을 못했네 )

let menuOn = (e) => {
  e.currentTarget.children[1].style.display = 'block'
}
let menuOut = (e) => {
  e.currentTarget.children[1].style.display = 'none'
}

list.forEach((li) => {
  li.addEventListener('mouseenter', menuOn);
  li.addEventListener('mouseleave', menuOut);
})
