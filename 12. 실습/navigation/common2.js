const gnb = document.getElementById('gnb')
const headerWrap = document.getElementById('headerWrap')

gnb.addEventListener('mouseenter', () => {
  headerWrap.style.height = '300px';
})
headerWrap.addEventListener('mouseleave', () => {
  headerWrap.style.height = '80px';
})