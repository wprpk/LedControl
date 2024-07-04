<?php
// Check if 'state' is set in the URL query string
if (isset($_GET['state'])) {
    $state = $_GET['state'];
    // Save the state to a file (or a database)
    file_put_contents('led-state.txt', $state);
    echo "LED state set to: " . $state;
} else {
    // If no state is set, read the current state from the file (or a database)
    if (file_exists('led-state.txt')) {
        $state = file_get_contents('led-state.txt');
        echo $state;
    } else {
        echo "off"; // Default state
    }
}
