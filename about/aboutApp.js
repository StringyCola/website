const scrollImg = document.querySelector('#scroll-img');
const recVidList = document.querySelector('#lower-content');
scrollImg.addEventListener('click', () => {
    recVidList.scrollIntoView({ block: 'start', behavior: 'smooth' });
});
