let jokes = [
    "All vampires keep their money in a special place—the blood bank.",
    "What do you call someone who can’t stick to a diet? A desserter.",
    "I only seem to get sick on weekdays. I must have a weekend immune system.",
    "You can tell it's a dogwood tree from its bark.",
    "What do you call a sheep that knows karate? A lamb chop.",
    "What does a dad get in their stocking if they’ve been naughty? Char-coal.",
    "Why did the scarecrow win an award? Because he was outstanding in his field",
    "What do you call a cow with no legs? Ground beef.",
    "What has ears but cannot hear? A cornfield!",
    "I don’t get why Marvel doesn’t use the Hulk to advertise more. He’s basically one big Banner."
];

let jokeText = document.getElementById('joke-text');
let jokeButton = document.getElementById('joke-button');

jokeButton.addEventListener('click', function() {
    let randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    jokeText.textContent = randomJoke;

    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});