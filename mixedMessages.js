const today = new Date();
const date = today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear();
const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
const hours = today.getHours();

const generateRandomNumber = num => {
    Math.floor(Math.random() * num);
};

const messageParts = {
    greetings: ['Hi', 'Hey', 'Hello', 'Greetings', "What's up", 'Howdy', 'Welcome', 'Bonjour', 'Nǐn hǎo', 'Guten Tag', 'Hola', 'Konnichiwa'],
    greetings2: ['Good morning', 'Good afternoon', 'Good evening', "I hope you're having a good night", "You're on late tonight"],
    famousQuotes: ['Love For All, Hatred For None. – Khalifatul Masih III', 'Change the world by being yourself. – Amy Poehler', 'Every moment is a fresh beginning. – T.S Eliot', 'Never regret anything that made you smile. – Mark Twain', 'What we think, we become. – Buddha', 'All limitations are self-imposed. – Oliver Wendell Holmes', 'Tough times never last but tough people do. – Robert H. Schiuller', 'Problems are not stop signs, they are guidelines. – Robert H. Schiuller', 'Be so good they can’t ignore you. – Steve Martin'],
};

const userFirstName = '';

function enterName(firstName) {
    userFirstName = firstName;
};

const message = [];

for (let part in messageParts) {
    let partIndex = generateRandomNumber(messageParts[part].length);
    let nightIndex = generateRandomNumber(2) + 3;

    switch(part) {
        case 'greetings':
            message.push(`${messageParts[part][partIndex]},`);
            break
        case 'greetings2':
            if (hours >= 4 && hours < 12) {
                message.push(`${messageParts[part][0]} ${userFirstName}.`)
            } else if (hours >= 12 && hours < 17) {
                message.push(`${messageParts[part][1]} ${userFirstName}.`)
            } else if (hours >= 17 && hours < 22) {
                message.push(`${messageParts[part][2]} ${userFirstName}.`)
            } else {
                message.push(`${messageParts[part][nightIndex]} ${userFirstName}.`)
            }
            break
        case 'famousQuotes':
            message.push(`Make sure you remember this:\n${messageParts[part][partIndex]}`)
    }
};

const createMessage = messageArray => message.join('\n');

createMessage(message);