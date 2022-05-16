import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getHrsMinSecUntilTarget } from '../../utils/tz-conversion-utils';


type CountdownProps = {
    targetDateTime?: string
};

const Countdown = ({ targetDateTime }: CountdownProps) => {
    const [[hrs, mins, secs], setTime] = useState([0, 0, 10]);
    const [isFinished, setIsFinished] = useState(false);

    const tick = () => {
        if (hrs === 0 && mins === 0 && secs === 0) setIsFinished(true);
        else if (mins === 0 && secs === 0) setTime([hrs - 1, 59, 59]);
        else if (secs === 0) setTime([hrs, mins - 1, 59]);
        else setTime([hrs, mins, secs - 1]);
    };

    useEffect(() => {
        const { hours, minutes, seconds } = getHrsMinSecUntilTarget(targetDateTime);
        setTime([hours, minutes, seconds]);
    }, []);

    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    return (
        <StyledCountdown>
            {!isFinished &&
                <p>
                    {`${hrs / 24 > 0 ? `${Math.floor(hrs / 24)} days ` : ''}${(hrs % 24).toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}
                </p>
            }
            {isFinished && <p>{'The ring is on it!'}</p>}
        </StyledCountdown>
    );
};

const StyledCountdown = styled.div`
  p {
    color: var(--color-contrast);
    font-family: monospace;
  }
`;

export default Countdown;
