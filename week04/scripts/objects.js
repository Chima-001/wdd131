let aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,
    sections: [
        { section: "01", enrolled: 57, instructor: "Diego Mareeq" },
        { section: "02", enrolled: 73, instructor: "Mark Kearl" }
    ]
};

function setCourseInformation(course) {
    document.querySelector("#courseName").innerHTML = `${course.code} - ${course.title}`
}

function renderSections(course) {
    const tbody = document.querySelector("#sections tbody");
    let rows = "";
    for (const section of course.sections) {
    rows += `<tr>
    <td>${section.section}</td>
    <td>${section.enrolled}</td>
    <td>${section.instructor}</td>
    </tr>`;
    }
    tbody.innerHTML = rows;
}

setCourseInformation(aCourse);
renderSections(aCourse);
