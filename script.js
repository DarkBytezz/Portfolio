const constantText = "I am a ";
const dynamicTexts = ["B.E. CSE (AIML) student ", "Web Developer ", "UI\\UX Designer"];
const typingSpan = document.getElementById('typingSpan');
const cursor = document.getElementById('cursor');

let currentIndex = 0;
let currentTextIndex = 0;
let isTyping = true; // Flag to track typing or backspacing

function typeAndBackspaceDynamic() {
    const currentDynamicText = dynamicTexts[currentTextIndex];
    
    if (isTyping) {
        typingSpan.textContent = constantText + currentDynamicText.substring(0, currentIndex);
        currentIndex++;

        if (currentIndex > currentDynamicText.length) {
            currentIndex = 0;
            isTyping = false;
            setTimeout(typeAndBackspaceDynamic, 500); // Pause before backspacing
        } else {
            setTimeout(typeAndBackspaceDynamic, 100); // Type next character
        }
    } else {
        const newText = constantText + currentDynamicText.substring(0, currentDynamicText.length - currentIndex);
        typingSpan.textContent = newText;

        if (currentIndex > currentDynamicText.length) {
            currentIndex = 0;
            isTyping = true;
            currentTextIndex = (currentTextIndex + 1) % dynamicTexts.length; // Move to next dynamic text
            setTimeout(typeAndBackspaceDynamic, 500); // Pause before typing again
        } else {
            currentIndex++;
            setTimeout(typeAndBackspaceDynamic, 100); // Backspace next character
        }
    }
}

typeAndBackspaceDynamic(); // Start the animation

