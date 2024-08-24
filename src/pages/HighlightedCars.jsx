import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeHighlightedCar } from '../redux/carSlice';

const HighlightedCars = () => {
    const highlightedCars = useSelector(state => state.cars.highlightedCars);
    const dispatch = useDispatch();

    const handleRemove = (Cid) => {
        dispatch(removeHighlightedCar(Cid));
    };

    return (
        <div>
            <h1>Highlighted Cars</h1>
            <div className="highlighted-cars">
                {highlightedCars.map(car => (
                    <div key={car.Cid} className="car-card">
                        <img src={car.Img300} alt={car.Model} />
                        <h3>{car.NameMMT}</h3>
                        <p>Price: {car.Prc} {car.Currency}</p>
                        <p>Year: {car.Yr}</p>
                        <button onClick={() => handleRemove(car.Cid)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HighlightedCars;
