function removeSpoiler(element) {
  element.classList.remove("spoiler-hidden")
  element.classList.add("spoiler-visible");
  var spoilertext = element.children[0];
  spoilertext.style.visibility = 'visible';
}