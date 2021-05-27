
//max usage of activity in day
const usage = [];
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

function calculateActivities() 
{
    for (let i = 0; i < usage.length; i++) 
    {
        for (let j = i + 1; j < usage.length; j++) 
        {
            if (usage[i].activity == usage[j].activity) 
            {
                usage[i].duration = usage[i].duration + usage[j].duration;
                usage.splice(j, 1);
            }
        }
    }
    let maxkey = "";
    let maxValue = 0
    for (let i = 0; i < usage.length; i++) 
    {
        if (usage[i].duration > maxValue)
        {
            maxkey = usage[i].activity;
            maxValue = usage[i].duration;
        }

    }
    return `The maximum used of ${maxkey} and you used ${maxValue} min`;
}
const arr = calculateActivities();
console.log(arr);

