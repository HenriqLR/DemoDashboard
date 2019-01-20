var ctx = document.getElementById('myPieChart').getContext('2d');
var myPieChart = new Chart(ctx,{
    type: 'pie',
    data: {
            datasets: [{
        data: [40, 30, 30],
        backgroundColor: ['rgb(47,79,47)', 'rgb(255,0,0)', 'rgb(217,217,25)']
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Sucesso',
        'Falha',
        'Espera'
    ]
    },
    options: {
        responsive: true
    }
});