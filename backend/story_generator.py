import random

def generate_story(name, animal, setting, moral):
    openings = [
        f"Once upon a time in a {setting}, there lived a little {animal} named {name}.",
        f"In a quiet {setting}, there was a curious {animal} called {name}.",
        f"Far away in a magical {setting}, a brave {animal} named {name} was on an adventure."
    ]

    challenges = [
        f"One day, {name} found a mysterious map that led to a hidden treasure.",
        f"Suddenly, {name} heard someone crying for help in the {setting}.",
        f"While exploring, {name} saw a shiny object stuck under a big rock."
    ]

    resolutions = [
        f"With courage and kindness, {name} helped everyone and became a hero.",
        f"Thanks to clever thinking, {name} solved the mystery and made new friends.",
        f"In the end, {name}'s honesty saved the day and brought happiness to all."
    ]

    morals = {
        "honesty": "The story teaches us that honesty is always the best policy.",
        "friendship": "The story shows how true friendship can overcome any obstacle.",
        "bravery": "It reminds us to be brave, even when things are scary.",
        "kindness": "The story highlights the importance of being kind to others."
    }

    story = f"{random.choice(openings)}\n\n{random.choice(challenges)}\n\n{random.choice(resolutions)}\n\n{morals.get(moral.lower(), '')}"
    return story
