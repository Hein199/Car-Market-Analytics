import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useSelector } from 'react-redux';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    const cars = useSelector(state => state.cars.cars);

    const dataByBrand = cars.reduce((acc, car) => {
        const brand = car.NameMMT.split(' ')[0];
        acc[brand] = (acc[brand] || 0) + 1;
        return acc;
    }, {});

    const generateRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const backgroundColors = Object.keys(dataByBrand).map(() => generateRandomColor());

    const data = {
        labels: Object.keys(dataByBrand),
        datasets: [{
            data: Object.values(dataByBrand),
            backgroundColor: backgroundColors,
        }]
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title text-center">Brand Distribution Chart</h5>
                <Pie data={data} />
            </div>
        </div>
    );
};

export default PieChart;