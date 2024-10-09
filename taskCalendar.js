function dayPlan() {
    let day = prompt("Enter a day of the week: ");
    switch (day) {
        case "Monday":
            alert("Your task for Monday is: Go to school.");
            break;
        case "Tuesday":
            alert("Your task for Tuesday is: Go to school again.");
            break;
        case "Wednesday":
            alert("Your task for Wednesday is: No classes.");
            break;
        case "Thursday":
            alert("Your task for Thursday is: Go to school.");
            break;
        case "Friday":
            alert("Your task for Friday is: Go to school.");
            break;
        case "Saturday":
            alert("Your task for Saturday is: Play Football.");
            break;
        case "Sunday":
            alert("Your task for Sunday is: Family time/LABA DAY."); 
            break;
        default:
            alert("Please only enter a day of a week, Example: Monday..")
    }
}    