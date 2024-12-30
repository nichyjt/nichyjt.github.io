// Smooth expandable scripting, similar to accordian
document.addEventListener('DOMContentLoaded', (e) => {
    const cards = document.getElementsByClassName("expandable-header");
    for (let i = 0; i < cards.length; ++i) {
        cards[i].addEventListener("click", function () {
            var content = this.nextElementSibling;
            var upArrow = this.getElementsByClassName('expandable-up-btn')[0];
            var downArrow = this.getElementsByClassName('expandable-down-btn')[0];
            content.classList.toggle("open");
            if (content.classList.contains('open')) {
                content.style.maxHeight = content.scrollHeight + 'px';
                downArrow.style.display = 'none';
                upArrow.style.display = 'block';
            } else {
                content.style.maxHeight = '0';
                upArrow.style.display = 'none';
                downArrow.style.display = 'block';
            }
        });
    }
});