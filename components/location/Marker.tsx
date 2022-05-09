import { Dispatch, SetStateAction, useEffect, useState } from 'react';


type MarkerPropsType = google.maps.MarkerOptions & {
    markerIndex: number,
    setFocusIndex: Dispatch<SetStateAction<number>>
}

const Marker = (options : MarkerPropsType) => {
    const { markerIndex, setFocusIndex } = options;
    const [marker, setMarker] = useState<google.maps.Marker>();

    useEffect(() => {
        if (!marker) {
            setMarker(new google.maps.Marker());
        }

        if (marker) {
            marker.addListener("click", () => {
                setFocusIndex(markerIndex);
            });
        }

        return () => {
            // remove marker from map on unmount
            if (marker) {
                marker.setMap(null);
            }
        };
    }, [marker]);

    useEffect(() => {
        if (marker) marker.setOptions(options);
    }, [marker, options]);

    return null;
};

export default Marker;
