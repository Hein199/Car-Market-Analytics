import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { useSelector } from 'react-redux';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const StackedBarChart = () => {
    const cars = useSelector(state => state.cars.cars);

    const dataByBrandModel = cars.reduce((acc, car) => {
        const brand = car.NameMMT.split(' ')[0];
        const model = car.Model;
        const price = parseFloat(car.Prc.replace(',', ''));

        if (!acc[brand]) {
            acc[brand] = {};
        }
        if (!acc[brand][model]) {
            acc[brand][model] = { count: 0, totalValue: 0 };
        }
        acc[brand][model].count += 1;
        acc[brand][model].totalValue += price;
        return acc;
    }, {});

    const brands = Object.keys(dataByBrandModel);
    const models = Array.from(new Set(brands.flatMap(brand => Object.keys(dataByBrandModel[brand]))));

    const datasets = models.map((model, index) => {
        return {
            label: model,
            data: brands.map(brand => dataByBrandModel[brand][model]?.count || 0),
            backgroundColor: `hsl(${index * 360 / models.length}, 70%, 50%)`,
        };
    });

    const data = {
        labels: brands,
        datasets: datasets,
    };

    const options = {
        scales: {
            x: { stacked: true },
            y: { stacked: true },
        },
        plugins: {
            legend: { position: 'top' },
        },
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title text-center">Models By Brand Distribution Chart</h5>
                <div style={{ height: '600px', width: '100%' }}>
                    <Bar data={data} options={options} />
                </div>
            </div>
        </div>
    );
};

export default StackedBarChart;
