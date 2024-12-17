$(document).ready(function () {
    // Get all the messages
    const messages = $(".message");
    let currentIndex = 0;

    // Function to show messages sequentially
    function showNextMessage() {
        if (currentIndex < messages.length) {
            // Fade in the current message
            $(messages[currentIndex])
                .fadeIn(1000) // Fade in over 1 second
                .delay(2000) // Keep visible for 2 seconds
                .fadeOut(1000, function () { // Fade out over 1 second
                    currentIndex++; // Move to the next message
                    showNextMessage(); // Call the function again
                });
        }
    }

    // Start showing the messages
    showNextMessage();
});
