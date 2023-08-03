// Typewriter effect logic

// Based on the current tagline index, return a css property value
const colorSelect = (index) => {
    odd = getComputedStyle(document.documentElement).getPropertyValue('--color-typewriter-A');
    even = getComputedStyle(document.documentElement).getPropertyValue('--color-typewriter-B');
    return index % 2 ? odd : even;
}

let taglines = [
    "Linux shill.",
    "Cat enthusiast.",
    "Coffee addict.",
    "Fullstack dev.",
    "Docker dude.",
    "Computer Engineer.",
];

const textElement = document.querySelector(".typewriter");
const cursor = document.querySelector(".typewriter-cursor");
const TTL = 1200; // How long should 'typing' last?
const TTD = 600; // How long should 'delete' last?
const long_pause = 2000;
const short_pause = 1000
let taglinePtr = 0;
let charPtr = 0;

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const typewriter = async () => {
    sleep_duration = 0;
    while(true){
        currentTagline = taglines[taglinePtr];
        isBlink = false;
        textElement.style.color = colorSelect(taglinePtr);
        if (charPtr < currentTagline.length) {
            sleep_duration = TTL / currentTagline.length;
            char = currentTagline.charAt(charPtr);
            // Replace all spaces with non-breaking spaces
            textElement.innerHTML += char === " " ? "&nbsp;" : char;
            charPtr++;
            isBlink = (charPtr === currentTagline.length);
            sleep_duration = isBlink? long_pause: sleep_duration;
        } else if (charPtr < 2 * currentTagline.length - 1) {
            sleep_duration = TTD / currentTagline.length;
            let textContent = currentTagline.slice(0, currentTagline.length - (charPtr % currentTagline.length));
            // Replace all spaces with non-breaking spaces
            textContent = textContent.replace(/ /g, "&nbsp;");
            textElement.innerHTML = textContent;
            charPtr++;
        } else {
            // clear text content after resetting
            charPtr = 0;
            textElement.innerHTML = "";
            taglinePtr = (taglinePtr + 1) % taglines.length;
            sleep_duration = short_pause;
            isBlink = !isBlink;
        }

        // Handle blinking logic
        if(isBlink){
            cursor.classList.add("blink-animation");
        }else{
            cursor.classList.remove("blink-animation");
        }
        await sleep(sleep_duration);
    }
}

typewriter();
