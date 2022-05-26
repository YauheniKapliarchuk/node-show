// ReadLine Part with main logic for task_1
import { createInterface } from 'readline';

const description = 'Hello from this App. To try the feature enter the text in CONSOLE: ';
const emptyLine = 'This string is empty.Try again!';
const successfulMessage = '\n Try again!) Input string: ';
const ioInterface = createInterface({
    input: process.stdin,
    output: process.stdout
});

// process.stdout.write(description);
console.log(description);

const reverseString = (inputString: string) => {
    return (inputString === ' ') ? emptyLine : inputString.split('').reverse().join('') + successfulMessage;
};

ioInterface.on('line', (inputMessage: string) => {
    // process.stdout.write(reverseString(inputMessage));
    console.log(reverseString(inputMessage));
});
