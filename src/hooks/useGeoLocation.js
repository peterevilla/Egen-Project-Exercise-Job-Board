import React, { useState, useEffect } from 'react'


const useGeoLocation = () => {
    const [location, setLocation] = useState({ loaded: false, coordinates: { lat: "", long: "" } })


    const onSuccess = location => {
        setLocation({
            loaded: true,
            coordinates: { lat: location.coords.latitude, log: location.coords.longitude },
        })
    }

    const onError = error => {
        setLocation({
            loaded: true,
            error,
        })
    }

    useEffect(() => {
        if (!("geolocation" in navigator)) {

            onError({
                code: 0,
                message: "Geolocation not supported"
            })
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    })

    return location
}


export default useGeoLocation;