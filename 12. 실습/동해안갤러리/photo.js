// element 요소들 각 변수에 할당
// id는 getElement, 나머지는 querySelector
const photo = document.getElementById('photo')
const photoWrap = document.getElementById('photoWrap')
const photoList = document.getElementById('photoList')
const list = photoList.querySelectorAll('li')
const prevBtn = document.querySelector('.prevBtn')
const nextBtn = document.querySelector('.nextBtn')
// 각 썸네일을 클릭시 큰이미지가 바뀌도록
for ( let i=0; i<list.length; i++ ) {
  list[i].addEventListener('click', (e)=> {
    e.preventDefault();
    photo.src = e.currentTarget.children[0].href
  })
}
// list[0].addEventListener('click', (e)=> {
//   e.preventDefault();
//   // photo.src = 'images/pic_1.jpg';
// })
// list[1].addEventListener('click', (e)=> {
//   e.preventDefault();
//   // photo.src = 'images/pic_2.jpg';
//   // photo.src = list[1].children[0].getAttribute('href')
//   // photo.src = list[1].children[0].href
//   photo.src = e.currentTarget.children[0].href
// })

// 슬라이드 버튼 클릭시 좌우로 한칸씩 이동하도록
let n = 0;
let nextMove = ()=> {
  if ( n == -500 ) return;
  else {
    n-=100;
    photoList.style.marginLeft = `${n}px`;
  }
}
let prevMove = ()=> {
  if ( n == 0) return;
  else {
    n+=100;
    photoList.style.marginLeft = `${n}px`;
  }
}
nextBtn.addEventListener('click', nextMove)
prevBtn.addEventListener('click', prevMove)
