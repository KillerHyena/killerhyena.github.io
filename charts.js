const socket = io();

// Setup the line chart
const ctx = document.getElementById('lineChart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Real-time Data',
            data: [],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'second'
                }
            }
        }
    }
});

// Listen for new data from WebSocket
socket.on('newData', (data) => {
    chart.data.labels.push(data.timestamp);
    chart.data.datasets[0].data.push(data.value);
    chart.update();
});

// Filter data based on user selection
document.getElementById('dataFilter').addEventListener('change', (e) => {
    const filterValue = e.target.value;
    socket.emit('filterData', filterValue);
});
