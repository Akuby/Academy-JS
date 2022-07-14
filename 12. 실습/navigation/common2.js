const gnb = document.getElementById('gnb')
const headerWrap = document.getElementById('headerWrap')

let allMenuView = (h) => { // 익명함수는 선언 전 호출 불가
  headerWrap.style.height = `${h}px`
}

gnb.addEventListener('mouseenter', () => {
  allMenuView(300)
})
headerWrap.addEventListener('mouseleave', () => {
  allMenuView(80)
})