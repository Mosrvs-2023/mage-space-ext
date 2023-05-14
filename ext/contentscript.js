// Get the prompt from the user.
var prompt = prompt("Enter a prompt:");

// Get the model names from the mage.space website.
var models = [];
fetch("https://www.mage.space/models")
  .then(response => response.json())
  .then(data => {
    for (var i = 0; i < data.length; i++) {
      models.push(data[i].name);
    }
  });

// Run the prompt on all of the models.
for (var i = 0; i < models.length; i++) {
  mage.space.generate(prompt, models[i]);
}
