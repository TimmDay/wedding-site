export const svgMarker = (highlight: boolean) => {
    return {
        path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
        fillColor: `#fff`,
        fillOpacity: highlight ? 0.9 : 0.5,
        strokeWeight: 0,
        rotation: 0,
        scale: 2,
        size: {width: 20, height: 32 },
        origin: { x: 0, y: 0 },
        anchor: { x: 10, y: 16 }
    }
};
