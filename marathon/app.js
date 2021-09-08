
const container = document.querySelector(".container");
const testFolder = './';
const mainContainer = document.getElementById("main-container");


window.addEventListener('load', () => {
    fetch('dir.txt')
        .then(response => response.text())
        .then(text => {
            mainContainer.innerHTML = `<div class="link">${text.substring(2)}</div>`;
        } )
        })
    //

  // outputs the content of the text file