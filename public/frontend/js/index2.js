function lineChart1() {
	/* Chart-js (#lineChart1) */
	var myCanvas = document.getElementById("lineChart1");
	var myCanvasContext = myCanvas.getContext("2d");
	var gradientStroke1 = myCanvasContext.createLinearGradient(0, 0, 0, 200);
	gradientStroke1.addColorStop(0, hexToRgba(myVarVal, 0.3) || 'rgba(0, 20, 142 ,0.3)');

	var gradientStroke2 = myCanvasContext.createLinearGradient(0, 0, 0, 190);
	gradientStroke2.addColorStop(0, hexToRgba(myVarVal1, 0.3) || 'rgba(255, 136, 25,0.3)');
	var myChart = new Chart(myCanvas, {
		type: 'line',
		data: {
			labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
			type: 'line',
			datasets: [
				{
					label: "Total Listings",
					data: [2, 7, 3, 5, 4, 5, 2, 8, 4, 6, 5, 2, 8, 4, 7, 2, 4, 6, 4, 8, 4,],
					backgroundColor: gradientStroke1,
					borderColor: myVarVal,
					pointBackgroundColor: '#fff',
					pointHoverBackgroundColor: gradientStroke1,
					pointBorderColor: gradientStroke1,
					pointHoverBorderColor: gradientStroke1,
					pointBorderWidth: 0,
					pointRadius: 0,
					pointHoverRadius: 0,
					labelColor: gradientStroke1,
					borderWidth: 2,

				}, {
					label: "New Listings",
					data: [5, 9, 5, 9, 5, 9, 7, 3, 5, 2, 5, 3, 9, 6, 5, 9, 7, 3, 5, 2, 7, 10],
					backgroundColor: gradientStroke2,
					borderColor: myVarVal1,
					pointBackgroundColor: '#fff',
					pointHoverBackgroundColor: gradientStroke2,
					pointBorderColor: gradientStroke2,
					pointHoverBorderColor: gradientStroke2,
					pointBorderWidth: 0,
					pointRadius: 0,
					pointHoverRadius: 0,
					borderWidth: 2,

				}
			]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			legend: {
				labels: {
					fontColor: '#c6c9d3'
				}
			},
			tooltips: {
				show: true,
				showContent: true,
				alwaysShowContent: true,
				triggerOn: 'mousemove',
				trigger: 'axis',
				axisPointer:
				{
					label: {
						show: false,
						color: '#c6c9d3',
					},
				}
			},

			scales: {
				xAxes: [{
					gridLines: {
						color: 'rgba(0,0,0,0.1)',
						zeroLineColor: 'rgba(0,0,0,0.5)'
					},
					ticks: {
						fontSize: 12,
						fontColor: '#c6c9d3',
						beginAtZero: true,
						padding: 0
					}
				}],
				yAxes: [{
					gridLines: {
						color: 'transparent',
						zeroLineColor: 'rgba(0,0,0,0.5)'
					},
					ticks: {
						fontSize: 12,
						fontColor: '#c6c9d3',
						beginAtZero: false,
						padding: 0
					}
				}]
			},
			title: {
				display: false,
			},
			elements: {
				line: {
					borderWidth: 2
				},
				point: {
					radius: 0,
					hitRadius: 10,
					hoverRadius: 4
				}
			}
		}
	})
}
/* Chart-js (#lineChart1) closed */


function survey() {
	/* Chartjs (#survey) */
	var myCanvas = document.getElementById("survey");
	myCanvas.height = "335";

	var myCanvasContext = myCanvas.getContext("2d");
	var gradientStroke1 = myCanvasContext.createLinearGradient(0, 0, 0, 380);
	gradientStroke1.addColorStop(0, hexToRgba(myVarVal, 0.8));

	var gradientStroke2 = myCanvasContext.createLinearGradient(0, 0, 0, 300);
	gradientStroke2.addColorStop(0, hexToRgba(myVarVal1, 0.8));
	var myChart = new Chart(myCanvas, {
		type: 'bar',
		data: {
			labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
			datasets: [{
				label: 'Total Users',
				data: [15, 18, 12, 14, 10, 15, 7, 14],
				backgroundColor: gradientStroke1,
				hoverBackgroundColor: gradientStroke1,
				hoverBorderWidth: 2,
				hoverBorderColor: 'gradientStroke1'
			}, {

				label: 'New Users',
				data: [10, 14, 10, 15, 9, 14, 15, 20],
				backgroundColor: gradientStroke2,
				hoverBackgroundColor: gradientStroke2,
				hoverBorderWidth: 2,
				hoverBorderColor: 'gradientStroke2'
			}
			]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			tooltips: {
				mode: 'index',
				titleFontSize: 12,
				titleFontColor: 'rgba(225,225,225,0.9)',
				bodyFontColor: 'rgba(225,225,225,0.9)',
				backgroundColor: 'rgba(0,0,0,0.7)',
				cornerRadius: 3,
				intersect: false,
			},
			legend: {
				display: true,
				labels: {
					display: true,
					usePointStyle: true,
					fontColor: '#c6c9d3'
				},
			},
			scales: {
				xAxes: [{
					barPercentage: 0.5,
					ticks: {
						fontColor: "#c6c9d3",

					},
					display: true,
					gridLines: {
						display: true,
						color: 'rgba(0,0,0,0.1)',
						drawBorder: false
					},
					scaleLabel: {
						display: false,
						labelString: 'Month',
						fontColor: '#c6c9d3'
					}
				}],
				yAxes: [{
					ticks: {
						fontColor: "#c6c9d3",
					},
					display: true,
					gridLines: {
						display: true,
						color: 'rgba(0,0,0,0.1)',
						drawBorder: false
					},
					scaleLabel: {
						display: false,
						labelString: 'sales',
						fontColor: '#c6c9d3'
					}
				}]
			},
			title: {
				display: false,
				text: 'Normal Legend'
			}
		}
	});
}
/* Chartjs (#survey) closed */


function morrisBar18() {
	new Morris.Donut({
		element: 'morrisBar18',
		data: [
			{ value: 95, label: 'Chrome' },
			{ value: 30, label: 'Firefox' },
			{ value: 45, label: 'Opera' },
			{ value: 20, label: 'IE' },
		],
		colors: [
			myVarVal, myVarVal1, '#00e682', '#ff382b'

		],
		formatter: function (x) { return x + "%" }
	}).on('click', function (i, row) {
		console.log(i, row);
	});
}
