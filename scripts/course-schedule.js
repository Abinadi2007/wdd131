let aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,
    sections: [
        {
            section: "001",
            enrolled: 25,
            instructor: "Prof. Smith"
        },
        {
            section: "002",
            enrolled: 30,
            instructor: "Dr. Johnson"
        }
    ]
};

function setCourseInfo(course) {
    document.getElementById("courseTitle").textContent = `${course.code}: ${course.title} (${course.credits} credits)`;
}

function displaySections(course) {
    let table = document.getElementById("sections");
    table.innerHTML = "<tr><th>Section</th><th>Enrolled</th><th>Instructor</th></tr>";
    
    course.sections.forEach(section => {
        let row = table.insertRow();
        row.insertCell(0).textContent = section.section;
        row.insertCell(1).textContent = section.enrolled;
        row.insertCell(2).textContent = section.instructor;
    });
}

document.addEventListener("DOMContentLoaded", function () {
    setCourseInfo(aCourse);
    displaySections(aCourse);
});