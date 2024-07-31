// Function to show the selected tab content and hide the others
function showTab(tabId) {
    // Get all elements with class 'tab-content'
    var tabs = document.getElementsByClassName('tab-content');
    // Loop through all tabs and remove the 'active' class
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }
    // Add the 'active' class to the selected tab
    document.getElementById(tabId).classList.add('active');
}

// Function to display the credit card details form
function showCreditCardDetails() {
    // Get the element with id 'creditCardDetails'
    var details = document.getElementById('creditCardDetails');
    // Set its display style to 'block' to make it visible
    details.style.display = 'block';
}

// Function to show the exam type dropdown based on the selected class
function showExamType(classValue) {
    // Get the element with id 'examTypeGroup'
    var examTypeGroup = document.getElementById('examTypeGroup');
    // If a class is selected, show the exam type dropdown
    if (classValue) {
        examTypeGroup.style.display = 'block';
    } else {
        // If no class is selected, hide the exam type dropdown and clear the report card
        examTypeGroup.style.display = 'none';
        document.getElementById('reportCard').innerHTML = '';
    }
}

// Function to show the report card based on selected class and exam type
function showReportCard() {
    // Get the selected class and exam type
    var classPerformance = document.getElementById('classPerformance').value;
    var examType = document.getElementById('examType').value;
    // Get the element with id 'reportCard'
    var reportCard = document.getElementById('reportCard');

    // Check if both class and exam type are selected
    if (classPerformance && examType) {
        // Example report card data with marks
        var reportData = {
            "class1": {
                "UT1": {
                    "marks": {
                        "Math": 85,
                        "English": 78,
                        "Science": 90
                    },
                    "remarks": "Good performance overall. Needs to participate more in class."
                },
                "UT2": {
                    "marks": {
                        "Math": 88,
                        "English": 82,
                        "Science": 85
                    },
                    "remarks": "Improved in Science. Keep up the good work."
                }
            },
            // Add more data for other classes and exam types
        };

        // Check if report data exists for the selected class and exam type
        if (reportData[classPerformance] && reportData[classPerformance][examType]) {
            var marks = reportData[classPerformance][examType].marks;
            var remarks = reportData[classPerformance][examType].remarks;

            // Generate HTML for the marks table
            var marksHtml = '<table class="marks-table"><thead><tr><th>Subject</th><th>Marks</th></tr></thead><tbody>';
            for (var subject in marks) {
                marksHtml += `<tr><td>${subject}</td><td>${marks[subject]}</td></tr>`;
            }
            marksHtml += '</tbody></table>';

            // Set the inner HTML of the report card with the generated HTML
            reportCard.innerHTML = `
                <h3>Report Card for Class ${classPerformance} - ${examType}</h3>
                ${marksHtml}
                <div class="remarks">
                    <h4>Teacher's Remarks</h4>
                    <p>${remarks}</p>
                </div>
                <div class="parent-comments">
                    <h4>Parent Comments</h4>
                    <textarea id="parentComment" placeholder="Leave your comments here..."></textarea>
                    <button onclick="submitParentComment()">Submit</button>
                </div>
                <div class="performance-graph">
                    <h4>Performance Trends</h4>
                    <canvas id="performanceChart"></canvas>
                </div>
            `;
            // Render the performance chart
            renderPerformanceChart();
        } else {
            // If no report data is available, display a message
            reportCard.innerHTML = '<p>No report card data available.</p>';
        }
    } else {
        // If class or exam type is not selected, clear the report card
        reportCard.innerHTML = '';
    }
}

// Function to submit the parent comment
function submitParentComment() {
    // Get the value of the parent comment textarea
    var comment = document.getElementById('parentComment').value;
    // Display an alert with the submitted comment
    alert('Your comment: "' + comment + '" has been submitted.');
    // Clear the comment textarea
    document.getElementById('parentComment').value = '';
}

// Function to render the performance chart
function renderPerformanceChart() {
    // Get the context of the canvas element for the chart
    var ctx = document.getElementById('performanceChart').getContext('2d');
    // Create a new chart
    var performanceChart = new Chart(ctx, {
        type: 'line', // Chart type
        data: {
            labels: ['UT1', 'UT2', 'UT3', 'Midterm', 'Finals'], // Example labels
            datasets: [{
                label: 'Math',
                data: [85, 88, 90, 87, 92], // Example data
                borderColor: 'rgba(75, 192, 192, 1)', // Line color
                backgroundColor: 'rgba(75, 192, 192, 0.2)' // Background color
            }, {
                label: 'English',
                data: [78, 82, 80, 85, 83], // Example data
                borderColor: 'rgba(153, 102, 255, 1)', // Line color
                backgroundColor: 'rgba(153, 102, 255, 0.2)' // Background color
            }, {
                label: 'Science',
                data: [90, 85, 88, 91, 89], // Example data
                borderColor: 'rgba(255, 159, 64, 1)', // Line color
                backgroundColor: 'rgba(255, 159, 64, 0.2)' // Background color
            }]
        },
        options: {
            responsive: true, // Make the chart responsive
            scales: {
                y: {
                    beginAtZero: true // Start the y-axis at zero
                }
            }
        }
    });
}
