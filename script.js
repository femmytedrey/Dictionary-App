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
            <button onclick="playSound()">
                <i class="fa-solid fa-volume-high"></i>
            </button>
        </div>
        <div class="details">
            <p>${data[0].meanings[0].partOfSpeech}</p>
            <p>${data[0].phonetic}</p>
        </div>
        <p class="word-meaning">
            ${data[0].meanings[0].definitions[0].definition}
        </p>
        <p class="word-example">
            ${data[0].meanings[0].definitions[0].example || ""}
        </p>`;

        // Set the source URL for the audio element
        sound.setAttribute("src", `https://api.dictionaryapi.dev/media/pronunciations/en/${inputWord}-us.mp3`);
        
        sound.load();
        // sound.play();
    })
    .catch(() =>{
        result.innerHTML = `<h3 class = "error">Couldn't find word!</h3>`;
    });
});

function playSound(){
    sound.play();
}
