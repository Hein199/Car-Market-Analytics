import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../styles/CarTable.css';

const CarTable = () => {
    const cars = useSelector(state => state.cars.cars);
    const [sortOrder, setSortOrder] = useState('asc');

    const extractBrand = (nameMMT) => {
        const match = nameMMT.match(/^[^\s]+/);
        return match ? match[0] : 'Unknown';
    };

    const sanitizePrice = (price) => {
        // Extract only digits and decimal points
        const sanitized = price.replace(/[^0-9.]/g, '');
        return parseFloat(sanitized) || 0;  // Convert to a float or return 0 if conversion fails
    };

    const carsWithBrandModel = cars.map(car => ({
        ...car,
        brand: extractBrand(car.NameMMT),
        model: car.Model,
        sanitizedPrice: sanitizePrice(car.Prc) // Add the sanitized price to the object
    }));

    const dataByBrandModel = carsWithBrandModel.reduce((acc, car) => {
        const key = `${car.brand}|${car.model}`;
        if (!acc[key]) {
            acc[key] = { count: 0, value: 0 };
        }
        acc[key].count += 1;
        acc[key].value += car.sanitizedPrice; // Use sanitized price for value accumulation
        return acc;
    }, {});

    const sortedEntries = Object.entries(dataByBrandModel).sort(([keyA], [keyB]) => {
        const [brandA] = keyA.split('|');
        const [brandB] = keyB.split('|');
        if (sortOrder === 'asc') {
            return brandA.localeCompare(brandB);
        } else {
            return brandB.localeCompare(brandA);
        }
    });

    const toggleSortOrder = () => {
        setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'));
    };

    const renderTableRows = () => {
        let currentBrand = '';
        let brandTotalCars = 0;
        let brandTotalValue = 0;
        const rows = [];

        sortedEntries.forEach(([key, value]) => {
            const [brand, model] = key.split('|');

            if (brand !== currentBrand) {
                if (currentBrand !== '') {
                    rows.push(
                        <tr key={`${currentBrand}-total`} className="table-info">
                            <td colSpan="2">Total for {currentBrand}</td>
                            <td>{brandTotalCars}</td>
                            <td>{brandTotalValue.toLocaleString()}</td>
                        </tr>
                    );
                }
                currentBrand = brand;
                brandTotalCars = 0;
                brandTotalValue = 0;
            }

            brandTotalCars += value.count;
            brandTotalValue += value.value;

            rows.push(
                <tr key={key}>
                    <td>{brand}</td>
                    <td>{model}</td>
                    <td>{value.count}</td>
                    <td>{value.value.toLocaleString()}</td>
                </tr>
            );
        });

        // Add the last brand's total
        if (currentBrand !== '') {
            rows.push(
                <tr key={`${currentBrand}-total`} className="table-info">
                    <td colSpan="2">Total for {currentBrand}</td>
                    <td>{brandTotalCars}</td>
                    <td>{brandTotalValue.toLocaleString()}</td>
                </tr>
            );
        }

        return rows;
    };

    return (
        <div className="car-table container mt-4">
            <button className="btn btn-primary mb-3" onClick={toggleSortOrder}>
                Toggle Sort Order ({sortOrder === 'asc' ? 'A-Z' : 'Z-A'})
            </button>
            <table className="table table-bordered table-hover">
                <thead className="thead-dark table-primary">
                    <tr>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Number of Cars</th>
                        <th>Total Value (Baht)</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTableRows()}
                </tbody>
            </table>
        </div>
    );
};

export default CarTable;
