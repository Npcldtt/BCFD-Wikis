$eval

//
// how many days????
//
// MADE BY NPXCD (voix)
//
// enabl phrase or else {console.log("your house will be HAUNTED")}
//
// yay im out on the basement
//

var msg = "$messageAfterCommand"
var newer = msg.split("/");

day = newer[1]
month = newer[2]

function daysUntilDate(day, month) {
    currentDate = new Date();
    currentYear = currentDate.getFullYear();

    targetDateThisYear = new Date(currentYear, month - 1, day);
    
    if (targetDateThisYear < currentDate) {
        targetDateNextYear = new Date(currentYear + 1, month - 1, day);
        differenceMilliseconds = targetDateNextYear - currentDate;
        daysDifference = Math.ceil(differenceMilliseconds / (1000 * 60 * 60 * 24));
        return daysDifference;
    } else {
        differenceMilliseconds = targetDateThisYear - currentDate;
        daysDifference = Math.ceil(differenceMilliseconds / (1000 * 60 * 60 * 24));
        return daysDifference;
    }
}

daysUntil = daysUntilDate(day, month);
if (isNaN(daysUntil)) {dayleft = "Error, Please remove symbols or letters you need to type like this: `day/month`"
} else{dayleft = "There are " + daysUntil + " days until " + day + "/" + month;
}
$halt $get(dayleft)
