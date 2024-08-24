import React from 'react';
import { useDispatch } from 'react-redux';
import { addHighlightedCar } from '../redux/carSlice';
import '../styles/CarCard.css';

const CarCard = ({ car }) => {
    const dispatch = useDispatch();

    const handleHighlight = () => {
        dispatch(addHighlightedCar(car));
    };

    return (
        <div className="car-card card mb-4 shadow-sm">
            <img src={car.Img300} className="card-img-top" alt={car.Model} />
            <div className="card-body">
                <h5 className="card-title">{car.NameMMT}</h5>
                <p className="card-text">Price: {car.Prc} {car.Currency}</p>
                <p className="card-text">Year: {car.Yr}</p>
                <button onClick={handleHighlight} className="btn btn-primary">Highlight</button>
            </div>
        </div>
    );
};

export default CarCard;
