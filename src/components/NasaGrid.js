import React, {useEffect, useState, Component} from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";
import moment from 'moment';
import Dropdown from 'react-dropdown'
import classNames from 'classnames/bind';
import 'react-dropdown/style.css';

export default function NasaGrid() {
    const [photoData, setPhotoData] = useState([]);

    var today = moment().format("YYYY-MM-DD");
    var yesterday = moment().subtract(1, 'days').format("YYYY-MM-DD");
    var twoDaysAgo = moment().subtract(2, 'days').format("YYYY-MM-DD");
    var threeDaysAgo = moment().subtract(3, 'days').format("YYYY-MM-DD");
    var fourDaysAgo = moment().subtract(4, 'days').format("YYYY-MM-DD");

    const options = [today, yesterday, twoDaysAgo, threeDaysAgo, fourDaysAgo];
    
    

    function changeDate() {
        setTimeout(function(){
            var menu = document.querySelector('.is-selected').innerHTML;
            console.log(menu);
            setDate(menu);
            console.log(date);
            setCurrentOption(menu);
            
            }, 10);
    }

    const [date, setDate] = useState(today);

    const [currentOption, setCurrentOption] = useState(date);

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=t3F5j6ddCIh7btoXDgbTFmLp5COSAOfvqvQ03bUd&date=${date}`)
        .then(response => {
            console.log(response);
            setPhotoData(response.data);
        });
    }, [date]);
    
    

    return (
        <div>
            <Dropdown id="dropdown" options={options} onChange={changeDate} value={currentOption} placeholder="Select an option" />
            <PhotoCard title={photoData.title} url={photoData.url} date={photoData.date} explanation={photoData.explanation} />
        </div>
    );
}