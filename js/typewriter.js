const text = document.querySelector(".typewriter");
const TTL = 4000; //ms

const taglines = [
    "Computer Engineer.",
    "local Linux shill.",
    "Backend dude.",
    "Cat enthusiast.",
    "guy that knows Docker.",
]

const colorSelect = (index) => {
    odd = getComputedStyle(document.documentElement).getPropertyValue('--color-typewriter-A');
    even = getComputedStyle(document.documentElement).getPropertyValue('--color-typewriter-B');
    return index % 2? odd:even;
}

const textLoad = () => {
    for(let i in taglines){
        setTimeout(() => {
            text.textContent = taglines[i];
            text.style.color = colorSelect(i);
            
        }, i*TTL);
    } 
}
textLoad();
setInterval(textLoad, TTL*taglines.length);
