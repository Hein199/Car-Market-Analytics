import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCars } from '../redux/carSlice';
import CarTable from '../components/CarTable';
import PieChart from '../components/PieChart';
import StackedBarChart from '../components/StackedBarChart';
import CarCard from '../components/CarCard';
import carsData from '../taladrod-cars.json';

const Dashboard = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCars(carsData.Cars));
    }, [dispatch]);

    return (
        <div>
            <h1>Dashboard</h1>
            <CarTable />
            <PieChart />
            <StackedBarChart />
            <div className="car-cards">
                {carsData.Cars.map(car => <CarCard key={car.Cid} car={car} />)}
            </div>
        </div>
    );
};

export default Dashboard;
