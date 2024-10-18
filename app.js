let socket;

async function fetchData() {
    try {
        const response = await fetch('https://example.com/api/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function createCharts() {
    const data = await fetchData();

    // Bar Chart
    const barCtx = document.getElementById('barChart').getContext('2d');
    new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: data.barChart.labels,
            datasets: [{
                label: 'Sales',
                data: data.barChart.data,
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

    // Line Chart
    const lineCtx = document.getElementById('lineChart').getContext('2d');
    new Chart(lineCtx, {
        type: 'line',
        data: {
            labels: data.lineChart.labels,
            datasets: [{
                label: 'Demand',
                data: data.lineChart.data,
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

    // Pie Chart
    const pieCtx = document.getElementById('pieChart').getContext('2d');
    new Chart(pieCtx, {
        type: 'pie',
        data : {
            labels: data.pieChart.labels,
            datasets: [{
                data: data.pieChart.data,
                backgroundColor: ['#ff6f61', '#4caf50', '#2196f3'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });

    // Bubble Chart
    const bubbleCtx = document.getElementById('bubbleChart').getContext('2d');
    new Chart(bubbleCtx, {
        type: 'bubble',
        data: {
            datasets: [{
                label: 'Bubble Chart',
                data: data.bubbleChart.data,
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
}

// Establish WebSocket connection
socket = io('https://example.com/api');

// Listen for updates from the server
socket.on('update', (data) => {
    // Update KPI cards
    document.getElementById('last-subscribers').textContent = data.lastSubscribers;
    document.getElementById('order-count').textContent = data.orderCount;
    document.getElementById('average-profit').textContent = data.averageProfit;
    document.getElementById('average-users').textContent = data.averageUsers;

    // Update charts
    createCharts();
});

// Call the function to create charts
createCharts();
