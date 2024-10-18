// Function to create a Bar chart
const barCtx = document.getElementById('barChart').getContext('2d');
new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['Product A', 'Product B', 'Product C', 'Product D'],
        datasets: [{
            label: 'Sales',
            data: [12000, 19000, 3000, 5000],
            backgroundColor: ['#ff6f61', '#4caf50', '#2196f3', '#9c27b0'],
            borderWidth: 1
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

// Function to create a Line chart
const lineCtx = document.getElementById('lineChart').getContext('2d');
new Chart(lineCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Demand',
            data: [65, 59, 80, 81, 56, 55],
            fill: true,
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 2
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

// Function to create a Pie chart
const pieCtx = document.getElementById('pieChart').getContext('2d');
new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: ['Category A', 'Category B', 'Category C'],
        datasets: [{
            data: [30, 45, 25],
            backgroundColor: ['#ff6f61', '#4caf50', '#2196f3'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});

// Function to create a Bubble chart
const bubbleCtx = document.getElementById('bubbleChart').getContext('2d');
new Chart(bubbleCtx, {
    type: 'bubble',
    data: {
        datasets: [{
            label: 'Bubble Chart',
            data: [
                { x: 20, y: 30, r: 15 },
                { x: 40, y: 10, r: 10 },
                { x: 25, y: 50, r: 20 }
            ],
            backgroundColor: '#2196f3'
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'X-axis'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Y-axis'
                }
            }
        }
    }
});
