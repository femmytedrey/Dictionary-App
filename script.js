const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.querySelector(".search-btn");

btn.addEventListener('click', () => {
    let inputWord = document.getElementById("inp-word").value;
    if(inputWord === ""){
        alert("Input is required!");  
    }
    

    fetch(`${url}${inputWord}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        result.innerHTML = `
        <div class="word">
                <h1>${inputWord}</h1>
                <button>
                    <i class="fa-solid fa-volume-high"></i>
                </button>
            </div>
            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>${data[0].phonetic[0].text}</p>
            </div>
            <p class="word-meaning">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, iure.
            </p>
            <p class="word-example">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repellendus!
            </p>`;
    });

});