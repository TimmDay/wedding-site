import styled from 'styled-components';
import {
    ComposableMap,
    Geographies,
    Geography,
} from "react-simple-maps";

type MapProps = {};


const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"


const ReactSimpleMap = ({}: MapProps) => {
    return (
        <StyledMap>
            <ComposableMap>
                <Geographies geography={geoUrl}>
                    {({geographies}) => geographies.map((geo) =>
                        <Geography key={geo.rsmKey} geography={geo} />
                    )}
                </Geographies>
            </ComposableMap>
        </StyledMap>
    );
};

const StyledMap = styled.div`
  color: red;
`;

export default ReactSimpleMap;

//https://www.npmjs.com/package/react-simple-maps
//https://www.react-simple-maps.io/examples/map-chart-with-tooltip/
//https://www.react-simple-maps.io/examples/custom-markers/