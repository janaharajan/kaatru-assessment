var canvas = document.getElementById('line-chart');

    var data = {
        labels: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'],
        datasets: [{
            label: "Temperature",
            data: [18, 20, 22, 24, 26, 28, 30, 32, 31, 29, 27, 25],
            borderColor: 'blue',
            fill: true
        }]
    };

    var options = {
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Time'
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Temperature (°C)'
                }
            }
        }
    };

    // Create the chart
    var lineChart = new Chart(canvas, {
        type: 'line',
        data: data,
        options: options
    });