import { useState, useEffect } from 'react';

import Variable from '../Variable/Variable';
import './Temperatures.css';

function Temperatures() {
    const [celsius, setCelsius] = useState(0);
    const [fahrenheit, setFahrenheit] = useState(32); // F = (0C * 9/5) + 32
    const [kelvin, setKelvin] = useState(273.15); // K = 0C + 273.15


    const convertFromCelsius = (celsius) => {
        setFahrenheit((celsius * 9/5) + 32);
        setKelvin(celsius + 273.15);
    };


    const convertFromFahrenheit = (fahrenheit) => {
        const celsiusValue = (fahrenheit - 32) * 5/9;
        setCelsius(celsiusValue);
        setKelvin(celsiusValue + 273.15);
    };


    const convertFromKelvin = (kelvin) => {
        const celsiusValue = kelvin - 273.15;
        setCelsius(celsiusValue);
        setFahrenheit((celsiusValue * 9/5) + 32);
    };

    // ใช้ useEffect เพื่อคอยติดตามการเปลี่ยนแปลงของค่าแต่ละตัว
    useEffect(() => {
        convertFromCelsius(celsius);
    }, [celsius]);

    useEffect(() => {
        convertFromFahrenheit(fahrenheit);
    }, [fahrenheit]);

    useEffect(() => {
        convertFromKelvin(kelvin);
    }, [kelvin]);

    return (
        <div className='temperatures-container'>
            <h3 className='temperatures-title'>Temperatures</h3>
            <h3 className='temperatures-display'>
                <span className='badge bg-primary'>{celsius.toFixed(2)}°C</span>
                <span className='badge bg-primary'>{fahrenheit.toFixed(2)}°F</span>
                <span className='badge bg-primary'>{kelvin.toFixed(2)}K</span>
            </h3>
            <div className='temperatures-variables'>
                <Variable name={'Celsius'} value={celsius} setValue={setCelsius} />
                <Variable name={'Fahrenheit'} value={fahrenheit} setValue={setFahrenheit} />
                <Variable name={'Kelvin'} value={kelvin} setValue={setKelvin} />
            </div>
        </div>
    );
}

export default Temperatures;
