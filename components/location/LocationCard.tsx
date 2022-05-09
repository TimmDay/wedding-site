import styled from 'styled-components';
import { convertTimeToUserTZ } from '../../utils/tz-conversion-utils';
import { useEffect, useState } from 'react';


export type LocationCardProps = {
    focusIndex: number,
    setFocusIndex: (index: number) => void,
    index: number,
    eventTitle: string,
    location: string,
    address: string,
    start: string,
    end: string
};

const LocationCard = ({ focusIndex, setFocusIndex, index, eventTitle, location, address, start, end }: LocationCardProps) => {
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        setSelected(focusIndex == index);
    }, [focusIndex]);

    return (
        <StyledLocationCard
            onClick={() => setFocusIndex(index)}
            key={index}
            selected={selected}
        >
            <h3>{eventTitle}</h3>
            <p>{location}</p>
            <p>{address}</p>

            {start &&
                <div className="time-block">
                    <p>
                        {`${start && convertTimeToUserTZ(start)} - ${end && convertTimeToUserTZ(end)}`}
                    </p>
                </div>
            }
        </StyledLocationCard>
    );
};

const StyledLocationCard = styled.div.attrs((props: {selected: boolean}) => props)`
  background: var(--color-primary-offset);
  border-radius: 8px;
  padding: var(--space-1) var(--space-2);
  margin-bottom: var(--space-2);
  position: relative;
  box-shadow: ${(props) => props.selected ? `0px 0px 0px 3px var(--color-accent-2)` : 'none'};
  transition: box-shadow 0.3s linear;

  h3 {
    font-family: var(--font-emphasis);
  }
  p {
    padding: 0;
    margin: 0;
  }
  .time-block {
    position: absolute;
    top: 0;
    right: 0;
    background: var(--color-accent-2);
    color: var(--color-contrast);
    border-radius: 0 3px 0 22px;
    padding: var(--space-1) var(--space-2);
    font-size: var(--font-size-small);
  }
`;

export default LocationCard;

//https://css-tricks.com/animating-border/
