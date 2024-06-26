const generatedQuestions = document.getElementById('questions');

const questions = [
    'How do I typically cope with stress, and are these methods truly helping me?',
    'What are my common triggers for anxiety or depression, and how can I better manage them?',
    'How do I feel about my current level of social connection and support?',
    'What are my core values, and how aligned is my current life with them?',
    'When do I feel most at peace, and how can I incorporate more of that into my life?',
    'What negative thoughts frequently recur, and how can I challenge or reframe them?',
    'How do I handle failure or setbacks, and what can I learn from my responses?',
    'In what ways do I nurture my mental well-being on a daily basis?',
    'How do I communicate my emotional needs to others, and what can I improve in this area?',
    'What steps can I take to create a healthier balance between work, leisure, and rest?'
]

const newQuestion = () => {
    const randomNum = Math.floor(Math.random() * questions.length);
    generatedQuestions.innerText = questions[randomNum];
}