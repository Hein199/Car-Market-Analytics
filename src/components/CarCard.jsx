import React from 'react';
import { useDispatch } from 'react-redux';
import { addHighlightedCar } from '../redux/carSlice';

const CarCard = ({ car }) => {
    const dispatch = useDispatch();

    const handleHighlight = () => {
        dispatch(addHighlightedCar(car));
    };

    return (
        <div className="car-card">
            <img src={car.Img300} alt={car.Model} />
            <h3>{car.NameMMT}</h3>
            <p>Price: {car.Prc} {car.Currency}</p>
            <p>Year: {car.Yr}</p>
            <button onClick={handleHighlight}>Highlight</button>
        </div>
    );
};

export default CarCard;
