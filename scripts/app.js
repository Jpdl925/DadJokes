// Button used for fetching, and changing the text on screen to the randomly generated dad joke
let jokeBtn = document.getElementById("jokeBtn").addEventListener('click', () =>{
    dadJoke();
});
// Text that is changed from the button click to a randomly generated dad joke from the api
let jokeTxt = document.getElementById("jokeTxt");
// Laugh track that plays once button is pressed
let audio = new Audio("/media/laughTrack.mp3");


async function dadJoke(){
    let apiResponse = await fetch("https://icanhazdadjoke.com", {
        headers: {
            'accept': 'application/json',
        }
    }).then((Response) => Response.json());;
    // Setting the jokeTxt to the randomly generated dad joke once button is clicked
    jokeTxt.innerText = apiResponse.joke;
    // Playing laugh track audio upon click
    audio.play();
}


