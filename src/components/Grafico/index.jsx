import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['Gorda', 'Magra'],
    datasets: [
        {
            label: 'Peso Corporal',
            data: [20, 35],
            backgroundColor: [
                'rgba(0, 92, 4, 1)',
                'rgba(180, 244, 170, 1)',
            ],
            borderColor: [
                'rgba(0, 92, 4, 1)',
                'rgba(180, 244, 170, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
};

const DonaChart = () => {
    return <Doughnut data={data} options={options} />;
}

export default DonaChart;
