import streamlit as st
from backend.story_generator import generate_story

st.set_page_config(page_title="AI Story Generator for Kids", page_icon="📖")

st.title("📚 AI Story Generator for Kids")
st.write("Fill out the details below to create a magical story!")

name = st.text_input("👧 Kid's Name")
animal = st.text_input("🐶 Favorite Animal")
setting = st.selectbox("🏞️ Story Setting", ["forest", "space", "village", "castle", "city"])
moral = st.selectbox("🌟 Story Moral", ["honesty", "friendship", "bravery", "kindness"])

if st.button("✨ Generate Story"):
    if name and animal:
        story = generate_story(name, animal, setting, moral)
        st.success("Here's your story!")
        st.text_area("📝 Story", story, height=300)
    else:
        st.warning("Please enter both a name and favorite animal.")
