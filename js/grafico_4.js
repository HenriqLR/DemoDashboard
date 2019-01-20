var ctx = document.getElementById("myBarChart").getContext('2d');
var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Sucesso", "Falha", "Espera"],
        datasets: [{
            label: "",
            data: [40, 30, 30],
            backgroundColor: [
                'rgb(47,79,47)',
                'rgb(255,0,0)',
                'rgb(217,217,25)'                
            ],
            borderColor: [
                'rgb(47,79,47)',
                'rgb(255,0,0)',
                'rgb(217,217,25)'                
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});