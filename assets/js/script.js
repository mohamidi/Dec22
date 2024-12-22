$(document).ready(function () {
    // Get all the messages
    const messages = $(".message");
    const timeline = $(".timeline");
    let currentIndex = 0;

    // Function to show messages sequentially
    function showIntroMessages() {
        if (currentIndex < messages.length) {
            $(messages[currentIndex])
                .fadeIn(1000)
                .delay(2000)
                .fadeOut(1000, function () {
                    currentIndex++;
                    showIntroMessages();
                });
        } else {
            // After intro messages, show the timeline
            $(".intro-messages").fadeOut(500, function () {
                $(".timeline").addClass("show"); // Add 'show' class to make the timeline visible
            });
        }
    }

    showIntroMessages(); // Start showing intro messages

    // Handle Timeline
    const items = $(".timeline-item");
    let timelineIndex = 0;

    function showNextItem() {
        const currentItem = $(items[timelineIndex]);

        const video = currentItem.find("video")[0];
        if (video) {
            video.pause();
            video.currentTime = 0; // Reset playback to the beginning
        }

        $(items[timelineIndex]).removeClass("active");
        timelineIndex = (timelineIndex + 1) % items.length;
        $(items[timelineIndex]).addClass("active");
    }

    function showLastItem() {
        const currentItem = $(items[timelineIndex]);

        const video = currentItem.find("video")[0];
        if (video) {
            video.pause();
            video.currentTime = 0; // Reset playback to the beginning
        }

        // Remove the 'active' class from the current item
        $(items[timelineIndex]).removeClass("active");
        
        // Update the index to go back to the previous item
        timelineIndex = (timelineIndex - 1 + items.length) % items.length; // Ensure a positive index
    
        // Add the 'active' class to the new item
        $(items[timelineIndex]).addClass("active");
    }

    $(".next-button").on("click", function () {
        showNextItem();
    });

    $(".back-button").on("click", function () {
        showLastItem();
    });

    // Initialize: Only the first timeline item is active
    $(items[timelineIndex]).addClass("active");
});
