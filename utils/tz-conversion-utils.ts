const { utcToZonedTime, zonedTimeToUtc, format } = require('date-fns-tz');


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
}

export const convertToUserTZ = (timings: TimingsType) => {
    // get users tz if available, else assume Melbourne
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone ?? 'Australia/Melbourne';

    const newTimings = Object.keys(timings).reduce(
        (acc, key) => {
            // @ts-ignore
            const localDateTime = utcToZonedTime(zonedTimeToUtc(timings[key], 'Australia/Melbourne'), tz);
            const formatString: string = key.includes('End') ? 'h:mm bbb (z)' : 'h:mm bbb';

            const resultTimeString = format(
                localDateTime,
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

export const convertOneToUserTZ = (timing: string) => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone ?? 'Australia/Melbourne';
    const localDateTime = utcToZonedTime(zonedTimeToUtc(timing, 'Australia/Melbourne'), tz);
    const formatString: string = 'h:mm';
    const resultTimeString = format(localDateTime, formatString, { timeZone: tz });
    return resultTimeString;
}
