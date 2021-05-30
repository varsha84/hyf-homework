
//max usage of activity in day
const usage = [];
const activityUsage = [];
const usageNew = [];
const durationArr = [];

function addActivity(activity, duration) 
{
    const today = new Date();
    usage.push({
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
console.log(usage);

function aggrigateActivities() 
{
    const uniqueActivity = [];
    for (let i = 0; i < usage.length; i++) 
    {
        let activity = usage[i].activity;
        let duration = usage[i].duration;
        if (! uniqueActivity.includes(activity))
        {
            uniqueActivity.push(activity);
            for (let j = i + 1; j < usage.length; j++) 
            {
                if (activity === usage[j].activity)
                {
                    duration = duration + usage[j].duration;
                }
            }
            activityUsage.push({activity, duration});
        }
    }
    console.log(uniqueActivity);
    console.log(activityUsage);
}

function maxUsage()
{
    let maxkey = "";
    let maxValue = 0
    for (let i = 0; i < activityUsage.length; i++) 
    {
        if (activityUsage[i].duration > maxValue)
        {
            maxkey = activityUsage[i].activity;
            maxValue = activityUsage[i].duration;
        }
    }
    return `The maximum used of ${maxkey} and you used ${maxValue} min`;
}

aggrigateActivities();
const arr = maxUsage();
console.log(arr);



