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

    const colorPalette = [
        '#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9', '#92A8D1',
        '#955251', '#B565A7', '#009B77', '#DD4124', '#D65076',
        '#45B8AC', '#EFC050', '#5B5EA6', '#9B2335', '#DFCFBE',
        '#55B4B0', '#E15D44', '#7FCDCD', '#BC243C', '#C3447A',
        '#98B4D4', '#C4A000', '#2E4A62', '#E94B3C', '#6C4F3D',
    ];

    const backgroundColors = Object.keys(dataByBrand).map((_, index) => colorPalette[index % colorPalette.length]);

    const data = {
        labels: Object.keys(dataByBrand),
        datasets: [{
            data: Object.values(dataByBrand),
            backgroundColor: backgroundColors,
        }]
    };

    const options = {
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return (
        <div className="container mt-4">
            <h5 className="text-center mb-4">Brand Distribution Chart</h5>
            <div className="row">
                <div className="col-md-9">
                    <div className="chart-container" style={{ height: '500px' }}>
                        <Pie data={data} options={options} />
                    </div>
                </div>
                <div className="col-md-3 d-flex justify-content-end">
                    <div className="legend-scrollable" style={{ maxHeight: '500px', overflowY: 'auto', borderLeft: '1px solid #dee2e6', paddingLeft: '10px', width: '100%' }}>
                        {Object.keys(dataByBrand).map((brand, index) => (
                            <div key={index} className="d-flex align-items-center mb-2">
                                <div
                                    style={{
                                        width: '12px',
                                        height: '12px',
                                        backgroundColor: backgroundColors[index % backgroundColors.length],
                                        marginRight: '8px',
                                    }}
                                ></div>
                                <span className="text-muted" style={{ fontSize: '14px' }}>{brand}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PieChart;
