// Login form functionality
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
});

// Simulate a WebSocket connection with dummy data for demonstration
function startSimulatedWebSocket(callback) {
    setInterval(() => {
        const dataPoint = {
            timestamp: new Date().toLocaleTimeString(),
            value: Math.floor(Math.random() * 100) + 1 // Random value between 1 and 100
        };
        callback(dataPoint);
    }, 1000); // Emit data every second
}

// Set up the Chart.js line chart
const ctx = document.getElementById('myChart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Real-time Data',
            data: [],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 2,
            fill: true
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Value'
                }
            }
        }
    }
});

// Update the chart with real-time data from the simulated WebSocket
startSimulatedWebSocket((dataPoint) => {
    if (chart.data.labels.length > 20) {
        chart.data.labels.shift();
        chart.data.datasets[0].data.shift();
    }
    chart.data.labels.push(dataPoint.timestamp);
    chart.data.datasets[0].data.push(dataPoint.value);
    chart.update();
});
