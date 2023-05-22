document.addEventListener('DOMContentLoaded', (e) => {
    const banners = document.getElementsByClassName('badgebanner');
    for(let i=0; i<banners.length; ++i){
        if (banners[i].scrollWidth > banners[i].clientWidth) {
          banners[i].classList.add('banner-scroll');
        } else {
          banners[i].classList.remove('banner-scroll');
        }
    }
});