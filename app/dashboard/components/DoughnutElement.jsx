'use client'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutElement = ({ title, totalValue, dataValue, color }) => {
    const data = {
        datasets: [{
            data: [dataValue, totalValue - dataValue],
            backgroundColor: [
                color,
                '#43484c'
            ],
            borderWidth: 0
        }
        ]
    }
    const options = {
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false
            },
        },
    }
    return (
        <div className='bg-primary text-primaryText rounded-xl p-4 min-w-fit flex items-center justify-between flex-1'>
            <div className='flex flex-col gap-2'>
                <h1 className='text-sm text-secondaryText'>{title}</h1>
                <p className='font-bold text-xl'>{dataValue}</p>
            </div>
            <div className='h-[70px] w-[70px]'>
                <Doughnut data={data} options={options}/>
            </div>
        </div>
    )
}

export default DoughnutElement