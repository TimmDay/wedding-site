import { TIMINGS, TimingsType } from '../data/locationData';
import differenceInSeconds from 'date-fns/differenceInSeconds';
const { utcToZonedTime, zonedTimeToUtc, format } = require('date-fns-tz');


const DEFAULT_TIME_ZONE = 'Australia/Melbourne';
const DEFAULT_EVENT_START = TIMINGS.ceremonyStart;

export const getUserMachineTZ = () => Intl.DateTimeFormat().resolvedOptions().timeZone ?? DEFAULT_TIME_ZONE;

export const getHrsMinSecUntilTarget = (
    targetDateTime: string = DEFAULT_EVENT_START,
) => {
    const userTz = getUserMachineTZ();
    const targetInUserTZ = convertDateTimeToLocalTZ(targetDateTime, userTz);
    const dateNow = new Date();
    const duration = differenceInSeconds(targetInUserTZ, dateNow);

    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor(duration % 3600 / 60);
    const seconds = Math.floor(duration % 3600 % 60);

    return {
        hours,
        minutes,
        seconds
    };
};

/**
 *
 * @param time eg: '2022-06-19 11:15'
 * @param tz eg: 'Australia/Melbourne'
 * @return string localDateTime eg: Sun Jun 19 2022 11:15:00 GMT+1000 (Australian Eastern Standard Time)
 */
const convertDateTimeToLocalTZ = (time: string, tz: string = DEFAULT_TIME_ZONE) => {
    return utcToZonedTime(zonedTimeToUtc(time, 'Australia/Melbourne'), tz);
};

export const convertTimesToUserTZ = (timings: TimingsType) => {
    const tz = getUserMachineTZ();
    let newTimings = {};
    if (!timings) return newTimings;

    newTimings = Object.keys(timings).reduce(
        (acc, key) => {
            const formatString: string = key.includes('End') ? 'h:mm bbb (z)' : 'E h:mm bbb';
            const resultTimeString = format(
                // @ts-ignore
                convertDateTimeToLocalTZ(timings[key], tz),
                formatString,
                { timeZone: tz }
            );
            // @ts-ignore
            acc[key] = resultTimeString;
            return acc;
        }, {}
    );
    return newTimings;
};

export const convertTimeToUserTZ = (timing: string) => {
    const tz = getUserMachineTZ();
    const localDateTime = convertDateTimeToLocalTZ(timing, tz);
    const formatString: string = 'h:mm bbb';
    return format(localDateTime, formatString, { timeZone: tz });;
};

export const convertTimeToUserTZWithDay = (timing: string) => {
    const tz = getUserMachineTZ();
    const localDateTime = convertDateTimeToLocalTZ(timing, tz);
    const formatString: string = 'E h:mm bbb';
    return format(localDateTime, formatString, { timeZone: tz });
};

//https://date-fns.org/docs/Getting-Started
