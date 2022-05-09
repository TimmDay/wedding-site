import { TIMINGS } from '../data/locationData';


const { utcToZonedTime, zonedTimeToUtc, format } = require('date-fns-tz');
import differenceInSeconds from 'date-fns/differenceInSeconds';
import { parse } from 'date-fns';


const DEFAULT_TIME_ZONE = 'Australia/Melbourne';
const DEFAULT_EVENT_START = TIMINGS.ceremonyStart;

export type TimingsType = {
    ceremonyStart: string,
    ceremonyEnd: string,
    photosStart: string,
    photosEnd: string,
    ngvStart: string,
    ngvEnd: string,
    lunaStart: string,
    lunaEnd: string,
    dinnerStart: string
};

export const getUserMachineTZ = () => Intl.DateTimeFormat().resolvedOptions().timeZone ?? DEFAULT_TIME_ZONE;

export const getHrsMinSecUntilTarget = (
    targetDateTime: string = DEFAULT_EVENT_START,
    formatString: string = 'yyyy-MM-dd HH:mm'
) => {
    const dateNow = new Date();
    const dateTarget = parse(targetDateTime, formatString, new Date());
    const duration = differenceInSeconds(dateTarget, dateNow);

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
    const newTimings = Object.keys(timings).reduce(
        (acc, key) => {
            const formatString: string = key.includes('End') ? 'h:mm bbb (z)' : 'h:mm bbb';
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
    const resultTimeString = format(localDateTime, formatString, { timeZone: tz });
    return resultTimeString;
};

//https://date-fns.org/docs/Getting-Started
