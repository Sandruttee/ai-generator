function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "1be70t3b32a048fab4oc2947a8669607";

  let context =
    "You are an expert in food making and know a lot of delicious food recipes that you are eager to share with the users. Your mission is to generate recipe in basic HTML and seperate each line with a <br/>. Seperate each ingredients with a <br/>. Put recipe name in a <strong></strong> and center it. Recipe at the start includes all the ingredients needed for the recipe. The ingredients must be listed. Use food related emoji at the start of each ingredient. The second part should be instructions how to make this food. ";
  let prompt = `Generate a recipe for ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="blink">Generating ${instructionsInput.value} recipe for You...</div>`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
