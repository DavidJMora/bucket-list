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

function addNewItem(event) {
    // Prevent page reload.
    event.preventDefault()
    
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
    
        document.querySelector('#next-item').innerText = 'Next item on your list is: ' + userInputArr[0]; // Replace that empty string with the actual item!
    }

    document.querySelector('#newest-item').innerText ="You've just added: " + userInputArr[userInputArr.length - 1]; // Replace that empty string with the actual item!

    document.querySelector('#number-of-items').innerText = userInputArr.length; // Replace that with the number of items!
}

function removeItem(event) {
    // Prevent page reload.
    event.preventDefault()
    

    if(isStack) {
        removeLastFromPage();
        // Your code to remove it from the array  goes here!
        userInputArr.pop(userInputArr);

    } else if(isStack === false && userInputArr.length > 0) {
        removeFirstFromPage();
        // Your code to remove it from the array goes here!
        const removedNumber = userInputArr.shift();
        completedArr.push(removedNumber);
        displayCompleted(removedNumber);
        // document.querySelector('#next-item').innerText ='Nefxt item on your list is: ' + userInputArr[0];
    }
    if(isStack && userInputArr.length === 0) {
        
        document.querySelector('#next-item').innerText ='Next item on your list is: ' + 'Nothing!!! ADD MORE THINGS PLEASE!!';
       document.querySelector('#newest-item').innerText ="Let's add things to fulfill your dreams!";

    } else if(isStack && userInputArr.length > 0) {
       
        document.querySelector('#next-item').innerText ='Next item on your list is: ' + userInputArr[0];
        document.querySelector('#newest-item').innerText ="You've just added: " + userInputArr[userInputArr.length - 1];

    } else if(!isStack && userInputArr.length === 0) {
        
        document.querySelector('#next-item').innerText ='Next item on your list is: ' + 'Nothing!!! ADD MORE THINGS PLEASE!!';
        document.querySelector('#newest-item').innerText ="Let's add things to fulfill your dreams!";

    } else if(!isStack && userInputArr.length > 0) {
        
        document.querySelector('#next-item').innerText ='Next item on your list is: ' + userInputArr[0];
        document.querySelector('#newest-item').innerText ="You've just added: " + userInputArr[userInputArr.length - 1];

    }
    document.querySelector('#newest-item').innerText = userInputArr[userInputArr.length - 1];
    document.querySelector('#number-of-items').innerText = userInputArr.length;
    // document.querySelector('#completed-bucket').innerText = completedArr;
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