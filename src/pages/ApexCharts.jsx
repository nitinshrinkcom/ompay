import React, { useState } from 'react'
import Chart from 'react-apexcharts'

const ApexCharts = () => {

    // eslint-disable-next-line no-unused-vars
    const [state, setState] = useState({

        series: [{
            name: 'series1',
            data: [110, 100, 28, 51, 42, 88, 100]
        }, {
            name: 'series1',
            data: [11, 32, 45, 32, 34, 52, 41]
        }],
        options: {
            chart: {
                height: 220,
                type: 'area'
            },
            dataLabels: {
                enabled: false,
                style: {
                    colors: ['#fff', '#fff', '#fff']
                }
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                type: 'datetime',
                categories: ["2022-09-19T00:00:00.000Z", "2022-09-19T03:30:00.000Z", "2022-09-19T06:30:00.000Z", "2022-09-19T09:30:00.000Z", "2022-09-19T12:30:00.000Z", "2022-09-19T15:30:00.000Z", "2022-09-19T18:30:00.000Z"]
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
        },
    })

    return (
        <>

            <div id="chart">
                <Chart
                 options={state.options}
                  series={state.series} 
                  type="area" height={150} width={200} />
            </div>

        </>
    )
}

export default ApexCharts