const seriesDurations = [
    {
        title: "Game of thrones",
        days: 3,
        hours: 1,
        minutes: 0,
    },
    {
        title: "Sopranos",
        days: 3,
        hours: 14,
        minutes: 0,
    },
    {
        title: "The Wire",
        days: 2,
        hours: 12,
        minutes: 0,
    },
    {
        title: "Friends",
        days: 4,
        hours: 2,
        minutes: 20,
    },
    {
        title: "How i met your mother",
        days: 7,
        hours: 6,
        minutes: 36,
    },
    {
        title: "House of cards",
        days: 7,
        hours: 10,
        minutes: 16,
    },
    {
        title: "Money heist",
        days: 8,
        hours: 22,
        minutes: 26,
    },
];
const totalMinutes = 365.25 * 80 * 24 * 60;

function logOutSeriesText(seriesDurations) {
    let totalTimeSpend = 0;
    for (let i = 0; i < seriesDurations.length; i++) 
    {
        const minutes = seriesDurations[i].days * 24 * 60 + seriesDurations[i].hours * 60 + seriesDurations[i].minutes;
        const timeSpend = minutes * 100 / totalMinutes;
        console.log(`${seriesDurations[i].title} took ${timeSpend.toFixed(3)}% of my life`);
        totalTimeSpend = totalTimeSpend + timeSpend;
    }
    console.log(`\nIn total that is ${totalTimeSpend.toFixed(3)}% of my life `);
}
logOutSeriesText(seriesDurations);

