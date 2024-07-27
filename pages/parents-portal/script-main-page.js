function showTab(tabId) {
    var tabs = document.getElementsByClassName('tab-content');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }
    document.getElementById(tabId).classList.add('active');
}

function showCreditCardDetails() {
    var details = document.getElementById('creditCardDetails');
    details.style.display = 'block';
}

function showExamType(classValue) {
    var examTypeGroup = document.getElementById('examTypeGroup');
    if (classValue) {
        examTypeGroup.style.display = 'block';
    } else {
        examTypeGroup.style.display = 'none';
        document.getElementById('reportCard').innerHTML = '';
    }
}

function showReportCard() {
    var classPerformance = document.getElementById('classPerformance').value;
    var examType = document.getElementById('examType').value;
    var reportCard = document.getElementById('reportCard');

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

        if (reportData[classPerformance] && reportData[classPerformance][examType]) {
            var marks = reportData[classPerformance][examType].marks;
            var remarks = reportData[classPerformance][examType].remarks;

            var marksHtml = '<table class="marks-table"><thead><tr><th>Subject</th><th>Marks</th></tr></thead><tbody>';
            for (var subject in marks) {
                marksHtml += `<tr><td>${subject}</td><td>${marks[subject]}</td></tr>`;
            }
            marksHtml += '</tbody></table>';

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
            renderPerformanceChart(); // Render the performance chart
        } else {
            reportCard.innerHTML = '<p>No report card data available.</p>';
        }
    } else {
        reportCard.innerHTML = '';
    }
}

function submitParentComment() {
    var comment = document.getElementById('parentComment').value;
    alert('Your comment: "' + comment + '" has been submitted.');
    document.getElementById('parentComment').value = ''; // Clear the comment box
}

function renderPerformanceChart() {
    var ctx = document.getElementById('performanceChart').getContext('2d');
    var performanceChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['UT1', 'UT2', 'UT3', 'Midterm', 'Finals'], // Example labels
            datasets: [{
                label: 'Math',
                data: [85, 88, 90, 87, 92], // Example data
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)'
            }, {
                label: 'English',
                data: [78, 82, 80, 85, 83], // Example data
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)'
            }, {
                label: 'Science',
                data: [90, 85, 88, 91, 89], // Example data
                borderColor: 'rgba(255, 159, 64, 1)',
                backgroundColor: 'rgba(255, 159, 64, 0.2)'
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
    