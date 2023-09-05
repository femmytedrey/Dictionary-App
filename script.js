const url = "https://api.dictionaryapi.dev/api/v2/entries/en";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.querySelector(".search-btn");

btn.addEventListener('click', () => {
    let inputWord = document.getElementById("inp-word").value;
    fetch(`${url}${inputWord}`)
    .then((response) => response.json)
    .then((data) => console.log(data));

});