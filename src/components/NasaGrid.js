import React, {useEffect, useState} from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";

export default function NasaGrid() {
    const [photoData, setPhotoData] = useState([]);
    const [date, setDate] = useState("");
    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=t3F5j6ddCIh7btoXDgbTFmLp5COSAOfvqvQ03bUd`)
        .then(response => {
            console.log(response);
            setPhotoData(response.data);
        });
    }, []);

    return (
        <div>
            <PhotoCard title={photoData.title} url={photoData.url} date={photoData.date} explanation={photoData.explanation} />
        </div>
    );
}