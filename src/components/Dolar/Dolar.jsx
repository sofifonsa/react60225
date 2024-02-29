import React, { useState, useEffect } from "react";
import './Dolar.css';

export const Dolar = () => {
    const [dolar, setDolar] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://criptoya.com/api/dolar')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                if (data && data.mayorista && data.tarjeta && data.oficial) {
                    const molde = (
                        <div>
                            <h3>Dollar Exchange Rate</h3>
                            <p>Dollar Wholesaler: {data.mayorista.price}</p>
                            <p>Dollar Card: {data.tarjeta.price}</p>
                            <p>Dollar Official: {data.oficial.price}</p>
                        </div>
                    );
                    setDolar(molde);
                } else {
                    throw new Error('Invalid data received from API');
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError('Error fetching data. Please try again later.');
            });
    }, []);


    return (
        <>
            {error && <div>{error}</div>}
            {dolar}
        </>
    );
};
