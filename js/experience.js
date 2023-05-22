document.addEventListener('DOMContentLoaded', (e) => {
    const cards = document.getElementsByClassName("expHeaderCont");
    for (let i = 0; i < cards.length; ++i) {
        cards[i].addEventListener("click", function () {
            this.classList.toggle("exp-active");
            var expContent = this.nextElementSibling;
            var upArrow = this.getElementsByClassName('exp-up-btn')[0];
            var downArrow = this.getElementsByClassName('exp-down-btn')[0];
            expContent.classList.toggle("open");
            if (expContent.classList.contains('open')) {
                expContent.style.maxHeight = expContent.scrollHeight + 'px';
                downArrow.style.display = 'none';
                upArrow.style.display = 'block';
            } else {
                expContent.style.maxHeight = '0';
                upArrow.style.display = 'none';
                downArrow.style.display = 'block';
            }
        });
    }
});