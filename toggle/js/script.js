let counter = 0
function addCSS() {
  counter++
  const headElement = document.getElementsByTagName("head")[0];
  if (counter % 2 !== 0) {
    headElement.innerHTML = '<title>Example HTML Website</title> \n <link rel="stylesheet" href="./css/style.css">'
  } else {
    headElement.innerHTML = '<title>Example HTML Website</title> '
  }
}