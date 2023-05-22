// Accordian animation for <summary>
document.addEventListener('DOMContentLoaded', (e) => {
    const detail_ls = document.getElementsByTagName("details");
    for (let i = 0; i < detail_ls.length; i++) {
        // Attach the listener to <summary>
        detail_ls[i].children[0].addEventListener("click", function (ev) {
            if (detail_ls[i].hasAttribute("open")) {
                ev.preventDefault();
                detail_ls[i].classList.add("hiding");
                setTimeout(() => {
                    detail_ls[i].removeAttribute("open");
                    detail_ls[i].classList.remove("hiding");
                }, 200);
            }
        });
    }
});
