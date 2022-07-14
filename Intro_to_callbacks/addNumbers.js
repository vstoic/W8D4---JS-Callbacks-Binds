const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numLeft, completionCallback) {

    if (numLeft > 0) {
        rl.question('Input a number!', function(userInp) {
            sum += parseInt(userInp);
            console.log(sum);
            return addNumbers(sum, numLeft - 1, completionCallback);
        });
    } else {
        completionCallback(sum);
        rl.close();
    }
}

// addNumbers(0, 2)

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));