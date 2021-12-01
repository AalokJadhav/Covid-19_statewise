import React, { useState, useEffect } from "react";
import '../StateWiseData/statewise.css';
import { Icon } from '@iconify/react';

const Statewise = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json').catch(error => console.log(error));;
        const OriginalData = await res.json();
        console.log('OriginalData :', OriginalData);
        setData(OriginalData.statewise);
    }

    useEffect(() => {

        getCovidData();
    }, []);

    return (
        <>
            <div className="container-fluid mt-5">
                <div className="main-heading">
                    <h1 className="mb-5 text-center text-white">
                        <span className="font-weight-bold">
                            <Icon icon="emojione:flag-for-india" />&nbsp;INDIA</span> COVID-19 DASHBOARD (State-Wise)</h1>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover text-white">

                        <thead className="thead-dark" style={{ color: 'darkviolet' }}>
                            <tr>
                                <th> State</th>
                                <th> Comfirmed</th>
                                <th> Recovered</th>
                                <th> Total Death</th>
                                <th>Delta confirmed</th>
                                <th>Delta Death</th>
                                <th>Delta Recovered</th>
                                <th> Active</th>
                                <th> Last Updated Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((curElem, index) => {
                                    return (
                                        <tr key={index} style={{ textAlign: 'center' }}>
                                            <td> {curElem.state}</td>
                                            <td> {curElem.confirmed}</td>
                                            <td> {curElem.recovered}</td>
                                            <td> {curElem.deaths}</td>
                                            <td> {curElem.deltaconfirmed}</td>
                                            <td> {curElem.deltadeaths}</td>
                                            <td> {curElem.deltarecovered}</td>
                                            <td> {curElem.active}</td>
                                            <td> {curElem.lastupdatedtime}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>

                    </table>
                </div>
            </div>
            <footer className="footer text-center text-white">
                <p>Made With <span style={{ color: 'red' }}>❤️</span> By Alok Jadhav</p>
            </footer>
        </>
    )
}

export default Statewise;