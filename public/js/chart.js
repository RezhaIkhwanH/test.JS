// const myChart1 = document.getElementById('myChart1').getContext('2d');
// const chart = document.getElementById('speedChart').getContext('2d');

// const Chart2 = new Chart(chart, {
//     type: 'line',
//     data: {
//         labels: ['Januari', 'Febuari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September',
//             'Oktober', 'November', 'Desember'],
//         datasets: [{
//             label: 'trafic money',
//             data: [122, 194, 157, 234, 134, 544, 234, 455, 345, 178, 235, 456],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//         }]
//     },
//     options: {
//         responsive: true,

//     }

// });

// // setup
// const data = {
//     labels: ['Januari', 'Febuari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September',
//         'Oktober', 'November', 'Desember'],
//     datasets: [{
//         color: 'red',
//         label: 'trafic money',
//         data: [122, 194, 157, 234, 134, 544, 234, 455, 345, 178, 235, 456],
//         backgroundColor: [
//             'rgba(255, 99, 132, 1)',
//             'rgba(54, 162, 235, 1)',
//             'rgba(255, 206, 86, 1)',
//             'rgba(75, 192, 192, 1)',
//             'rgba(153, 102, 255, 1)',
//             'rgba(255, 206, 86, 1)',
//             'rgba(75, 192, 192, 1)',
//             'rgba(153, 102, 255, 1)',
//             'rgba(255, 206, 86, 1)',
//             'rgba(75, 192, 192, 1)',
//             'rgba(153, 102, 255, 1)',
//             'rgba(255, 159, 64, 1)'
//         ],

//     }]
// };

// // plugin
// // Note: changes to the plugin code is not reflected to the chart, because the plugin is loaded at chart construction time and editor changes only trigger an chart.update().
// const plugin = {
//     id: 'custom_canvas_background_color',
//     beforeDraw: (chart) => {
//         const ctx = chart.canvas.getContext('2d');
//         ctx.save();
//         ctx.globalCompositeOperation = 'destination-over';
//         ctx.fillStyle = '#ffffff17';
//         ctx.fillRect(0, 0, chart.width, chart.height);
//         ctx.restore();
//     }
// };
// // confing
// const config = {
//     type: 'line',
//     data: data,
//     plugins: [plugin],
//     responsive: true,
// };

// // rendering
// const myChart = new Chart(
//     document.getElementById('myChart'),
//     config

// );

// dnjasiodvar 
const colors = {
    purple: {
        default: "rgba(149, 76, 233, 1)",
        half: "rgba(149, 76, 233, 0.5)",
        quarter: "rgba(149, 76, 233, 0.25)",
        zero: "rgba(149, 76, 233, 0)"
    },
    indigo: {
        default: "rgba(55,41,255,1)",
        half: "rgba(55,41,255, 0.5)",
        quarter: "rgba(55,41,255, 0.25)",
        zero: "rgba(55,41,255, 0)"
    }
};

const weight = [
    [60.0, 60.2, 59.1, 61.4, 59.9, 60.2, 59.8, 58.6, 59.6, 59.2],
    [60.2, 59.8, 58.6, 59.6, 59.2]
];

const labels = [
    "januari",
    "febuari",
    "maret",
    "april",
    "mei",
    "juni",
    "juli",
    "agustus",
    "september",
    "oktober",
    "november",
    "desember",
];

const ctx = document.getElementById("canvas").getContext("2d");
ctx.canvas.height = 100;

gradient1 = ctx.createLinearGradient(0, 25, 0, 300);
gradient1.addColorStop(0, colors.purple.half);
gradient1.addColorStop(0.35, colors.purple.quarter);
gradient1.addColorStop(1, colors.purple.zero);

gradasi = ctx.createLinearGradient(0, 25, 0, 300);
gradasi.addColorStop(0, colors.indigo.half);
gradasi.addColorStop(0.35, colors.indigo.quarter);
gradasi.addColorStop(1, colors.indigo.zero);

const options = {
    type: "line",
    data: {
        labels: labels,
        datasets: [
            {
                label: "year",
                fill: true,
                backgroundColor: gradient1,
                pointBackgroundColor: colors.purple.default,
                borderColor: colors.purple.default,
                data: weight[0],
                lineTension: 0.2,
                borderWidth: 2,
                pointRadius: 3
            },
            {
                label: 'bulan',
                fill: true,
                backgroundColor: gradasi,
                pointBackgroundColor: colors.indigo.default,
                borderColor: colors.indigo.default,
                data: weight[1],
                lineTension: 0.2,
                borderWidth: 2,
                pointRadius: 3
            }

        ]
    },
    options: {
        layout: {
            padding: 10
        },
        responsive: true,
        legend: {
            display: false
        },

        scales: {
            xAxes: [
                {
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        padding: 10,
                        autoSkip: false,
                        maxRotation: 15,
                        minRotation: 15
                    }
                }
            ],
            yAxes: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: "Weight in KG",
                        padding: 10
                    },
                    gridLines: {
                        display: true,
                        color: colors.indigo.quarter
                    },
                    ticks: {
                        beginAtZero: false,
                        max: 63,
                        min: 57,
                        padding: 10
                    }
                }
            ]
        }
    }
};

window.onload = function () {
    window.myLine = new Chart(ctx, options);
    Chart.defaults.global.defaultFontColor = colors.indigo.default;
    Chart.defaults.global.defaultFontFamily = "Fira Sans";
};


