function generateStory() {
    const name = document.getElementById("name").value;
    const characters = document.getElementById("characters").value;
    const setting = document.getElementById("setting").value;
    const moral = document.getElementById("moral").value;

    if (!name || !characters || !setting || !moral) {
        alert("Please fill all fields before generating a story.");
        return;
    }

    fetch('http://localhost:3000/generate-story', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, characters, setting, moral })
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