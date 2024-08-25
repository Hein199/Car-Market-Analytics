import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/CarTable.css';

const CarTable = () => {
    const cars = useSelector(state => state.cars.cars);

    const extractBrand = (nameMMT) => {
        const match = nameMMT.match(/^[^\s]+/);
        return match ? match[0] : 'Unknown';
    };

    const carsWithBrandModel = cars.map(car => ({
        ...car,
        brand: extractBrand(car.NameMMT),
        model: car.Model
    }));

    const dataByBrandModel = carsWithBrandModel.reduce((acc, car) => {
        const key = `${car.brand}-${car.model}`;
        if (!acc[key]) {
            acc[key] = { count: 0, value: 0 };
        }
        acc[key].count += 1;
        acc[key].value += parseFloat(car.Prc.replace(',', ''));
        return acc;
    }, {});

    return (
        <div className="car-table container mt-4">
            <table className="table table-striped table-bordered table-hover">
                <thead className="thead-dark table-primary">
                    <tr>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Number of Cars</th>
                        <th>Total Value (Baht)</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(dataByBrandModel).map(([key, value]) => {
                        const [brand, model] = key.split('-');
                        return (
                            <tr key={key}>
                                <td>{brand}</td>
                                <td>{model}</td>
                                <td>{value.count}</td>
                                <td>{value.value.toLocaleString()}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default CarTable;
