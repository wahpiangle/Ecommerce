'use client'
import { Chart as Chartjs, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'

Chartjs.register(CategoryScale, LinearScale , BarElement, Title, Tooltip, Legend);

const RevenueChart = ({dataValue}) => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Total Revenue',
                color: '#EFEFEF',
                align: 'start',
                font:{
                    size: 20,
                },
                padding:{
                    bottom: 30,
                }
            },
            labels:{
                titleColor: '#EFEFEF',
            },
        },
        scales: {
            y:{
                ticks:{
                    font:{
                        size: 14,
                    },
                    color: '#EFEFEF',
                },
                grid:{
                    display:false
                }
            },
            x:{
                ticks:{
                    font:{
                        size: 14,
                    },
                    color: '#EFEFEF',
                },
                grid:{
                    display: false,
                }
            }
        }
    }

    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', "Nov", "Dec"]

    const data = {
        labels,
        datasets: [
            {
                data: dataValue,
                backgroundColor: '#475BE8',
                borderRadius: 3
            }
        ]
    }
    return (
        <div className='bg-primary p-6 h-[300px] justify-center flex w-full lg:w-fit rounded-xl'>
            <Bar data={data} options={options} />
        </div>
    )
}

export default RevenueChart