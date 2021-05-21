//Adding an activity
const usage = [];
function addActivity(date,activity,duration)
{
    usage.push({date: date, activity: activity, duration:duration});
}
addActivity("22/5-20", "facebook", 10);
addActivity("22/5-20", "twitter", 15);
addActivity("22/5-20", "linked-in", 20);
addActivity("22/5-20", "youtube", 30);
addActivity("22/5-20", "gaana", 25);
addActivity("22/5-20", "whatsapp", 16);
console.log(usage);

//Show my status
function showStatus(activities)
{
    let totalDuration  = 0;
    for(let i = 0; i < usage.length; i++)
    {
         totalDuration = totalDuration + usage[i].duration;
    }
    return totalDuration;
}

let totalDuration = showStatus(usage);
console.log(`\nYou have added ${usage.length} activities. They amount to ${totalDuration} min. of usage`);

//Usage limit

function maxUsage(timeLimit)
{
    if(totalDuration > timeLimit)
    {
        console.log("\nYou have reached your limit, no more smartphoning for you!");
    }
}
 maxUsage(60);

//improve add activity
function addTodayActivity(activity,duration)
{
    let today = new Date();
    date = today.toLocaleDateString();
    usage.push({date: date, activity: activity, duration:duration});
}
addTodayActivity("instagram", 20);
console.log(usage);


