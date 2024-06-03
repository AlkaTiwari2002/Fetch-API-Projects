let input = document.getElementById("Movie");
let button = document.getElementById("btn");
let show = document.getElementById("result");
let image = document.getElementById("image");

button.addEventListener("click", () => {
  fetch(`https://omdbapi.com/?t=${input.value}&apikey=8bf974f8`)
    .then((response) => response.json())
    .then((data) => {
      show.innerHTML = `Movie Name: ${data.Title} <br> 
          Released: ${data.Released} <br> 
          Director: ${data.Director} <br> 
          Writer: ${data.Writer} <br> 
          Actors: ${data.Actors} <br>`;
      image.src = data.Poster;
    })
    .catch((error) => {
      show.innerHTML = `Error: ${error.message}`;
    });
});
