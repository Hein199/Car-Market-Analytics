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

    const colorPalette = [
        '#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9', '#92A8D1',
        '#F6C6C6', '#FFCC5C', '#D5AAFF', '#61C0BF', '#F3B0C3',
        '#F2A72C', '#6D6E71', '#B6D7A8', '#BF5B00', '#7D4C9A'
    ];

    const datasets = models.map((model, index) => {
        return {
            label: model,
            data: brands.map(brand => dataByBrandModel[brand][model]?.count || 0),
            backgroundColor: colorPalette[index % colorPalette.length],
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
            legend: { display: false },
        },
    };

    return (
        <div className="container mt-4">
            <h5 className="text-center mb-4">Models By Brand Distribution Chart</h5>
            <div className="row">
                <div className="col-md-10">
                    <div className="chart-container" style={{ height: '500px' }}>
                        <Bar data={data} options={options} />
                    </div>
                </div>
                <div className="col-md-2 d-flex justify-content-end">
                    <div className="legend-scrollable" style={{ maxHeight: '500px', overflowY: 'auto', borderLeft: '1px solid #dee2e6', paddingLeft: '10px', width: '100%' }}>
                        {datasets.map((dataset, index) => (
                            <div key={index} className="d-flex align-items-center mb-2">
                                <div
                                    style={{
                                        width: '12px',
                                        height: '12px',
                                        backgroundColor: dataset.backgroundColor,
                                        marginRight: '8px',
                                    }}
                                ></div>
                                <span className="text-muted" style={{ fontSize: '14px' }}>{dataset.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StackedBarChart;
