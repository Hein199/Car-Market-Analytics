import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeHighlightedCar } from '../redux/carSlice';
import '../styles/HighlightedCars.css'; // Ensure this CSS file is updated

const HighlightedCars = () => {
    const highlightedCars = useSelector(state => state.cars.highlightedCars);
    const dispatch = useDispatch();

    const handleRemove = (Cid) => {
        dispatch(removeHighlightedCar(Cid));
    };

    return (
        <div className="highlighted-cars-container">
            <h1 className="page-title">Highlighted Cars</h1>
            <div className="highlighted-cars">
                {highlightedCars.map(car => (
                    <div key={car.Cid} className="car-card card mb-4 shadow-sm">
                        <img src={car.Img300} alt={car.Model} className="card-img-top" />
                        <div className="card-body">
                            <p className="card-title">{car.NameMMT}</p>
                            <p className="card-text">Model: {car.Model}</p>
                            <p className="card-text">Year: {car.Yr}</p>
                            <p className="card-text">Price: {car.Prc} {car.Currency}</p>
                            <button className="btn btn-danger" onClick={() => handleRemove(car.Cid)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HighlightedCars;
