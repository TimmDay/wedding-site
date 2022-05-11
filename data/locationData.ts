// noted in Australia/Melbourne
export const TIMINGS = {
    ceremonyStart: '2022-06-19 11:15',
    ceremonyEnd: '2022-06-19 11:45',
    photosStart: '2022-06-19 12:00',
    photosEnd: '2022-06-19 13:30',
    ngvStart: '2022-06-19 13:30',
    ngvEnd: '2022-06-19 14:30',
    lunaStart: '2022-06-19 14:30',
    lunaEnd: '2022-06-19 18:00',
    dinnerStart: '2022-06-19 18:00',
};

export const locationData = [
    {
        eventTitle: 'Ceremony',
        location: 'Margaret Craig Room, Old Treasury Building',
        address: '20 Spring st, East Melbourne 3000',
        lat: -37.813,
        lng: 144.974,
        start: TIMINGS.ceremonyStart,
        end: TIMINGS.ceremonyEnd,
        primaryLoc: true
    },
    {
        eventTitle: 'Photos',
        location: 'Treasury Gardens',
        address: '2-18 Spring St, East Melbourne VIC 3002',
        lat: -37.8134,
        lng: 144.9762,
        start: TIMINGS.photosStart,
        end: TIMINGS.photosEnd,
        primaryLoc: true
    },
    // {
    //     eventTitle: 'Picnic Lunch',
    //     location: 'South Beach Reserve',
    //     address: '26 Jacka Blvd, St Kilda 3182',
    //     lat: -37.8665,
    //     lng: 144.9743,
    //     start: TIMINGS.picnicStart,
    //     end: TIMINGS.picnicEnd,
    //     primaryLoc: true
    // },
    // {
    //     eventTitle: 'Relationship Rollercoaster',
    //     location: 'Luna Park',
    //     address: '18 Lower Esplanade St Kilda 3182',
    //     lat: -37.8677,
    //     lng: 144.9773,
    //     start: TIMINGS.lunaStart,
    //     end: TIMINGS.lunaEnd,
    //     primaryLoc: true
    // },
    //TODO:
    {
        eventTitle: 'Toasts',
        location: 'Garden State Hotel',
        address: ' Melbourne 3002',
        lat: -37.8225,
        lng: 144.9691,
        start: TIMINGS.lunaStart,
        end: TIMINGS.lunaEnd,
        primaryLoc: true
    },
    {
        eventTitle: 'Art and Tea',
        location: 'National Gallery of Victoria',
        address: '180 St Kilda Rd, Melbourne 3006',
        lat: -37.8225,
        lng: 144.9691,
        start: TIMINGS.lunaStart,
        end: TIMINGS.lunaEnd,
        primaryLoc: true
    },
    {
        eventTitle: 'Dinner',
        location: 'Donovans',
        address: '40 Jacka Blvd, St Kilda VIC 3182',
        lat: -37.8684,
        lng: 144.9751,
        start: TIMINGS.dinnerStart,
        end: '',
        primaryLoc: true
    },
    {
        eventTitle: 'Photo Op 2',
        location: 'Albert Park Lake',
        address: 'Village Green Dr, St Kilda VIC 3182',
        lat: -37.8530,
        lng: 144.9777,
        start: '',
        end: '',
        primaryLoc: false
    },
    {
        eventTitle: 'Photo Op 3',
        location: 'Catani Gardens',
        address: 'Beaconsfield Parade, St Kilda West VIC 3182',
        lat: -37.8614,
        lng: 144.9715,
        start: '',
        end: '',
        primaryLoc: false
    },
    {
        eventTitle: 'Photo Op 4',
        location: 'St Kilda Pier',
        address: '14 Jacka Blvd, St Kilda 3182',
        lat: -37.8637,
        lng: 144.9713,
        start: '',
        end: '',
        primaryLoc: false
    },
    {
        eventTitle: 'Where we live',
        location: 'Our Apartment',
        address: '610 St Kilda Rd Melbourne 3004',
        lat: -37.8518,
        lng: 144.9806,
        start: '',
        end: '',
        primaryLoc: false
    },
    {
        eventTitle: 'our fav Pub',
        location: 'Windsor Alehouse',
        address: '42 Punt Rd, Windsor VIC 3181',
        lat: -37.8547,
        lng: 144.9841,
        start: '',
        end: '',
        primaryLoc: false
    },
    {
        eventTitle: 'A nice place to visit',
        location: 'Royal Botantical Gardens',
        address: 'Gate D, Tan Track, Melbourne VIC 3004',
        lat: -37.8335,
        lng: 144.9822,
        start: '',
        end: '',
        primaryLoc: false
    },
];
