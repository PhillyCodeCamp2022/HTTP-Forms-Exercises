// first, we listen for the window the load
window.addEventListener("load", function () {
    // Now, we have to add an event listener for when the form gets submitted!
    // So, we select then we add an event listener
    // querySelector is AWESOME! But instead of bogging us down too much with its 
    // versatility, I just use it here to select the form. Read documentation if you want to know more!
    // It is the best!
    const form = document.querySelector("form");
    // we also make sure to pass in event to the callback function so that we can preventDefault!
    form.addEventListener("submit", function (event) {
        // based on the format of some inputs, and using a few HTML validation tricks
        // we won't need to validate multiple inputs
        // the select input: since there's no way to not choose one of the options
        // the radio buttons, since we made one of them checked by default
        // the production servers, since it is just on or off
        // So for the number input, the text input, and the date, we need to make sure the form does not submit
        // if they are left blank or anything
        // Let's select those 3 elements first
        // To make it easier on us for now, we go ahead and give all of the HTML inputs
        // an id so we can select them in JS using document.getElementById("someId")
        const nameInput = document.getElementById("name");
        const dateInput = document.getElementById("date");
        const boosterInput = document.getElementById("boosters");
        // Now, we simply use if statements to check to make sure there is a value present for each input!
        // If this is confusing, try console.log(nameInput.value) and try different inputs for it and see the outcome
        if (!nameInput.value || !dateInput.value || !boosterInput.value) {
            // Now, we can even throw an alert to the user to say "Hey, you did something wrong!"
            // In the future, you may instead opt to show new HTML on the screen that tells the user what they did wrong.
            // For now, we can just alert them.
            alert("Heyo! You did bad on the form (╯°□°）╯︵ ┻━┻");
            // Finally, we use event.preventDefault() to stop the form submit from happening, keeping the user on the page.
            // To test this, try commenting event.preventDefault() in and out to see the difference.
            event.preventDefault();
        }
    })
})