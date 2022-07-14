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
  // e.currentTarget.children[1].style.display = 'block'
  e.currentTarget.children[1].classList.add('on');
  setTimeout(() => { // setTimeout에서는 currentTarget 대신 target을 사용한다.(고 일단은 생각하자)
    // e.currentTarget과 e.target의 대상은 조금 다르다. setTimeout의 특이성 때문에 이를 활용한다.
    e.target.children[1].style.opacity = 1;
  }, 1);
}
let menuOut = (e) => {
  // e.currentTarget.children[1].style.display = 'none'
  e.currentTarget.children[1].classList.remove('on');
  setTimeout(() => { 
    e.target.children[1].style.opacity = 0;
  }, 1);
}

list.forEach((li) => {
  li.addEventListener('mouseenter', menuOn);
  li.addEventListener('mouseleave', menuOut);
})
