import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useSelector } from 'react-redux';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    const cars = useSelector(state => state.cars.cars);

    const dataByBrand = cars.reduce((acc, car) => {
        acc[car.MkID] = (acc[car.MkID] || 0) + 1;
        return acc;
    }, {});

    const data = {
        labels: Object.keys(dataByBrand),
        datasets: [{
            data: Object.values(dataByBrand),
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        }]
    };

    return <Pie data={data} />;
};

export default PieChart;
