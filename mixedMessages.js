const today = new Date();
const date = today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear();
const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
const hours = today.getHours();

const generateRandomNumber = num => {
    Math.floor(Math.random() * num);
};

const message = {
    greetings: ['Hi', 'Hey', 'Hello', 'Greetings', "What's up", 'Howdy', 'Welcome', 'Bonjour', 'Nǐn hǎo', 'Guten Tag', 'Hola', 'Konnichiwa'],
    greetings2: ['good morning', 'good afternoon', 'good evening', "I hope you're having a good night", "you're on late tonight"],
    famousQuotes: ['Love For All, Hatred For None. – Khalifatul Masih III', 'Change the world by being yourself. – Amy Poehler', 'Every moment is a fresh beginning. – T.S Eliot', 'Never regret anything that made you smile. – Mark Twain', 'What we think, we become. – Buddha', 'All limitations are self-imposed. – Oliver Wendell Holmes', 'Tough times never last but tough people do. – Robert H. Schiuller', 'Problems are not stop signs, they are guidelines. – Robert H. Schiuller', 'Be so good they can’t ignore you. – Steve Martin'],
};
