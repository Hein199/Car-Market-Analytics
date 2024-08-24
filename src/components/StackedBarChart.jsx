import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { useSelector } from 'react-redux';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const StackedBarChart = () => {
    const cars = useSelector(state => state.cars.cars);

    const dataByBrandModel = cars.reduce((acc, car) => {
        if (!acc[car.MkID]) {
            acc[car.MkID] = {};
        }
        acc[car.MkID][car.Model] = (acc[car.MkID][car.Model] || 0) + 1;
        return acc;
    }, {});

    const data = {
        labels: Object.keys(dataByBrandModel),
        datasets: Object.keys(dataByBrandModel).map(brand => ({
            label: brand,
            data: Object.values(dataByBrandModel[brand]),
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        })),
    };

    return <Bar data={data} options={{ scales: { x: { stacked: true }, y: { stacked: true } } }} />;
};

export default StackedBarChart;
