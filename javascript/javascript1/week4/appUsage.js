//max usage of activity in day
const activities = [];

function addActivity(activity, duration) 
{
    const today = new Date();
    activities.push({
        date: today.toLocaleDateString("en-US"),
        activity: activity,
        duration: duration
    })
}
addActivity("facebook", 10);
addActivity("twitter", 15);
addActivity("linked-in", 20);
addActivity("youtube", 30);
addActivity("twitter", 25);
addActivity("whatsapp", 16);
addActivity("youtube", 20);
addActivity("twitter", 5);
console.log(activities);

function aggregateActivities(activities) 
{
    const aggrActivities = [];
    const uniqueActivity = [];
    for (let i = 0; i < activities.length; i++) 
    {
        let activity = activities[i].activity;
        let duration = activities[i].duration;
        if (! uniqueActivity.includes(activity))
        {
            uniqueActivity.push(activity);
            for (let j = i + 1; j < activities.length; j++) 
            {
                if (activity === activities[j].activity)
                {
                    duration = duration + activities[j].duration;
                }
            }
            aggrActivities.push({activity, duration});
        }
    }
    console.log(uniqueActivity);
    console.log(aggrActivities);
    return aggrActivities;
}

function getActivityWithHighestDuration(activities)
{
    let maxkey = "";
    let maxValue = 0
    for (let i = 0; i < activities.length; i++) 
    {
        if (activities[i].duration > maxValue)
        {
            maxkey = activities[i].activity;
            maxValue = activities[i].duration;
        }
    }
    return {activity: maxkey, duration: maxValue}
}

function getMostFrequentActivity(activities)
{
    let aggregatedActivities = aggregateActivities(activities);
    let activityWithHighestDuration  = getActivityWithHighestDuration(aggregatedActivities);
    return activityWithHighestDuration;
}

const mostFrequentActivity = getMostFrequentActivity(activities);
console.log(`The maximum used of ${mostFrequentActivity.activity} and you used ${mostFrequentActivity.duration} min`);

