var ctx = document.getElementById('myChart').getContext('2d');    
var chart = new Chart(ctx, {
// The type of chart we want to create
type: 'line',


// The data for our dataset
data: {
    labels: [13,14,15,16,17,18],
    datasets: [{
        label: "Trasacoes x Hora",
        //backgroundColor: 'rgb(255, 99, 132)', 
        borderColor: 'rgb(0,128,0)',
        label: "Chamados Enviado por hora",
        //backgroundColor: 'rgb(60,179,113',
        borderColor: 'rgb(0,128,0)',
        data: [100,200,300,400,500,600]
    }]
},

// Configuration options go here
options: {
    responsive: true
}
});
