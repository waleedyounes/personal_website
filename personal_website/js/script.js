let course1 = {
    code: "ACIT 1620",
    name: "Fundamental Web Technologies"
}

let course2 = {
    code: "ACIT 1515",
    name: "Scripting For IT"
}

let course3 = {
    code: "MATH 1310",
    name: "Technical Math For IT"
}

function findCourse(CourseInput){
    while (num.length == 4 && num != 'N' && num != 'n') {
        for (n = 0; n < courseList.length - 1; ++n) {
            if (courseList[n].code.includes(num)) {
                console.log("Yes I am taking the course: " + courseList[n].code + " - " + courseList[n].name);
                num = prompt("Enter a Course Number (Enter N to quit)");
            }
            else {
                num = prompt("INVALID INPUT: Enter a Course Number (Enter N to quit)");
            }
        }
    }
}
const courseList = [course1, course2, course3];

let num = prompt("Enter a Course Number (Enter N to quit)");

findCourse(num);
