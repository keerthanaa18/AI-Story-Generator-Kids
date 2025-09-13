function generateStory() {
    const characters = document.getElementById("characters").value;
    const setting = document.getElementById("setting").value;
    const moral = document.getElementById("moral").value;

    fetch('/generate-story', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            characters,
            setting,
            moral
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('story').innerText = data.story;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('story').innerText = "Error generating story.";
    });
}
story = "Once upon a time, {characters} were in {setting}. They learned: {moral}."