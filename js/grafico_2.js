var ctx = document.getElementById('myLineChart').getContext('2d');
var myLineChart = new Chart(ctx, {
    type: 'line',    
    data:  {
        labels: [10,11,12,13,14],
        datasets:[{
            label: "Sucesso por hora",
            borderColor: 'rgb(50,205,50)',
            data: [80,90,100,200,300]
        },
        {
            label: "falha por hora",
            borderColor: 'rgb(255,0,0)',
            data: [40,45,50,100,150]            
        }]
    },
    options: {
        responsive: true
    }
});