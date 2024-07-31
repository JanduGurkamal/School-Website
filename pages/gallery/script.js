/**
 * Function to show the selected tab content and hide the others.
 * @param {string} tabId - The ID of the tab to be shown.
 */
function showTab(tabId) {
    // Get all elements with the class name 'tab-content'
    var tabs = document.getElementsByClassName('tab-content');

    // Loop through all the tab contents
    for (var i = 0; i < tabs.length; i++) {
        // Remove the 'active' class from each tab content
        tabs[i].classList.remove('active');
    }

    // Add the 'active' class to the tab content with the specified ID
    document.getElementById(tabId).classList.add('active');
}
