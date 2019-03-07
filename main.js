// Global variables ftw
const userInputArr = [];
const completedArr = [];

let isStack = true;

// Set init to run when the window loads.
window.onload = init;

function init() {

    // Set event handlers.
    document.querySelector('#submit')
        .addEventListener('click', addNewItem)

    document.querySelector('#remove')
        .addEventListener('click', removeItem);

    document.querySelector('#toggle')
        .addEventListener('click', toggleQueueAndStack);
}
//code for when elements are removed from list via stack or queue
function printRemoveScript() {
    
    if(isStack && userInputArr.length === 0) {
        
        document.querySelector('#next-item').innerText ='Next item on your list is: ' + 'Nothing!!! ADD MORE THINGS PLEASE!!';
        document.querySelector('#newest-item').innerText ="Let's add things to fulfill your dreams!";
        document.querySelector('#number-of-items').innerText ='Such Empty, Much Wow';

    } else if(isStack && userInputArr.length > 0) {
    
        document.querySelector('#next-item').innerText ='Next item on your list is: ' + userInputArr[0];
        document.querySelector('#newest-item').innerText ="Most recently added item is: " + userInputArr[userInputArr.length - 1];
        document.querySelector('#number-of-items').innerText ="Your list is shrinking! It now has " + userInputArr.length + ' items on it!';

    } else if(!isStack && userInputArr.length === 0) {
    
        document.querySelector('#next-item').innerText ='Next item on your list is: ' + 'Nothing! You have successfully completed your list. Good Job!';
        document.querySelector('#newest-item').innerText ="Your dreams have been fulfilled!";
        document.querySelector('#number-of-items').innerText = "Ermahgerd! Furr mah up!!";

    } else if(!isStack && userInputArr.length > 0) {
   
        document.querySelector('#next-item').innerText ='Next item on your list is: ' + userInputArr[0];
        
        document.querySelector('#newest-item').innerText ="You've just completed: " +  completedArr[completedArr.length - 1] + ';' + ' your previously added item is: ' + userInputArr[userInputArr.length - 1];
        
        document.querySelector('#number-of-items').innerText ='Your list is shrinking! It now has ' + userInputArr.length + ' items on it!';
    }
}
//code for script when items are added either in stack or queue
function printAddScript() {

    if(isStack && userInputArr.length === 0) {
        
        document.querySelector('#next-item').innerText ='Next item on your list is: ' + 'Nothing!!! ADD MORE THINGS PLEASE!!';
        document.querySelector('#newest-item').innerText ="Let's add things to fulfill your dreams!";
        document.querySelector('#number-of-items').innerText ='Such Empty, Much Wow';

    } else if(isStack && userInputArr.length > 0) {
    
        document.querySelector('#next-item').innerText ='Next item on your list is: ' + userInputArr[0];
        document.querySelector('#newest-item').innerText ="Most recently added item is: " + userInputArr[userInputArr.length - 1];
        document.querySelector('#number-of-items').innerText ="Your list is growing! It now has " + userInputArr.length + ' items on it!';

    } else if(!isStack && userInputArr.length === 0) {
    
        document.querySelector('#next-item').innerText ='Next item on your list is: ' + 'Nothing!!! ADD MORE THINGS PLEASE!!';
        document.querySelector('#newest-item').innerText ="Let's add things to fulfill your dreams!";
        document.querySelector('#number-of-items').innerText = "Ermahgerd! Furr mah up!!";

    } else if(!isStack && userInputArr.length > 0) {
   
        document.querySelector('#next-item').innerText ='Next item on your list is: ' + userInputArr[0];
        document.querySelector('#newest-item').innerText ="You've just added: " + userInputArr[userInputArr.length - 1];
        document.querySelector('#number-of-items').innerText ="Your list is growing! It now has " + userInputArr.length + ' items on it!';
    }
}

function addNewItem(event) {
    // Prevent page reload.
    event.preventDefault();
    printAddScript();
    
    // Get the value from the input field.
    const newItem = document.querySelector('#new-item').value;

    // Set the input field back to blank.
    resetInput();

    // Add the item to the <ul>.
    // Now comes your part: add the item to the list.
    // Display it in next-item if it's the first item:
    const i = 0;
    
    if(newItem !== '') { // definitely change that condition!
        displayItem(newItem);
        userInputArr.push(newItem);
    }
    printAddScript();
}

function removeItem(event) {
    // Prevent page reload.
    event.preventDefault();
    printRemoveScript();
    
    if(isStack) {
        removeLastFromPage();
        // Your code to remove it from the array  goes here!
        userInputArr.pop();

    } else if(!isStack && userInputArr.length > 0) {
        removeFirstFromPage();
        // Your code to remove it from the array goes here!
        const removedItem = userInputArr.shift();
        completedArr.push(removedItem);
        displayCompleted(removedItem);
    }
    printRemoveScript();
}

function toggleQueueAndStack(event) {
    // Prevent page reload.
    event.preventDefault()
    // How can we toggle whether it's a stack or a queue?
    // Your code below!
    // When we're currently in "stack mode", let's have it show "Toggle to Queue" as the button.
    // Put this code wherever you know you're in stack mode!

    // When we're currently in "queue mode", let's have it show "Toggle to Stack" as the button.
    // Put this code wherever you know you're in queue mode!
    isStack = !isStack;
    if(isStack) {
    document.querySelector('#toggle').innerText = 'Toggle to Queue';
    } else {
    document.querySelector('#toggle').innerText = 'Toggle to Stack';
    }
}

/*

No need to touch anything below!
Feel free to check it out though.

*/

function removeLastFromPage() {
    const items = document.querySelectorAll('#items > li');
    const lastItem = items[items.length - 1];
    lastItem.parentNode.removeChild(lastItem);
}

function removeFirstFromPage() {
    const items = document.querySelectorAll('li');
    const firstItem = items[0];
    firstItem.parentNode.removeChild(firstItem);
}

function resetInput() {
    // Resets input field to blank. No need to add anything here!
    document.querySelector('#new-item').value = '';
}

function displayItem(itemText) {
    // Displays item on list. No need to add anything here!
    const newItem = document.createElement('li');
    newItem.innerText = itemText;
    document.querySelector('#items').appendChild(newItem);
}

function displayCompleted(itemText) {
    // Displays item on list. No need to add anything here!
    const newItem = document.createElement('li');
    newItem.innerText = itemText;
    document.querySelector('#completed-bucket').appendChild(newItem);
} 