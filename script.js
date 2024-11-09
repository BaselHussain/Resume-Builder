var _a, _b, _c;
(_a = document.getElementById("form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Form submitted!");
    // Get the input values
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var email = document.getElementById("email");
    var phone = document.getElementById("number");
    var llink = document.getElementById("llink");
    var glink = document.getElementById("glink");
    var summary = document.getElementById("summary");
    var institute = document.getElementById("institute");
    var city = document.getElementById("city");
    var field = document.getElementById("field");
    var degreeSelect = document.getElementById("degree");
    var date = document.getElementById("date");
    var institute2 = document.getElementById("institute2");
    var city2 = document.getElementById("city2");
    var field2 = document.getElementById("field2");
    var degreeSelect2 = document.getElementById("degree2");
    var date2 = document.getElementById("date2");
    var employer = document.getElementById("employer");
    var job = document.getElementById("job");
    var city3 = document.getElementById("city3");
    var state = document.getElementById("state");
    var startDate = document.getElementById("startdate");
    var endDate = document.getElementById("enddate");
    var employer2 = document.getElementById("employer2");
    var job2 = document.getElementById("job2");
    var city32 = document.getElementById("city3-2");
    var state2 = document.getElementById("state2");
    var startDate2 = document.getElementById("startdate2");
    var endDate2 = document.getElementById("enddate2");
    var employer3 = document.getElementById("employer3");
    var job3 = document.getElementById("job3");
    var city33 = document.getElementById("city3-3");
    var state3 = document.getElementById("state2");
    var startDate3 = document.getElementById("startdate3");
    var endDate3 = document.getElementById("enddate3");
    var skills = document.getElementById("skills");
    if (firstName && lastName && email && phone && institute && city && field && degreeSelect && date && summary && skills) {
        var name_1 = firstName.value + " " + lastName.value;
        var emailValue = email.value;
        var phoneValue = phone.value;
        var llinkValue = llink.value;
        var glinkValue = glink.value;
        var summaryValue = summary.value;
        var instituteValue = institute.value;
        var cityValue = city.value;
        var fieldValue = field.value;
        var degreeValue = degreeSelect.value;
        var dateOfGraduation = date.value;
        var instituteValue2 = institute2.value;
        var cityValue2 = city2.value;
        var fieldValue2 = field2.value;
        var degreeValue2 = degreeSelect2.value;
        var dateOfGraduation2 = date2.value;
        var employerValue = employer.value;
        var jobValue = job.value;
        var city3Value = city3.value;
        var stateValue = state.value;
        var startDaterValue = startDate.value;
        var endDateValue = endDate.value;
        var employer2Value = employer2.value;
        var job2Value = job2.value;
        var city32Value = city32.value;
        var state2Value = state2.value;
        var startDater2Value = startDate2.value;
        var endDate2Value = endDate2.value;
        var employer3Value = employer3.value;
        var job3Value = job3.value;
        var city33Value = city33.value;
        var state3Value = state3.value;
        var startDater3Value = startDate3.value;
        var endDate3Value = endDate3.value;
        var skillsValue = skills.value;
        generateResume(name_1, emailValue, phoneValue, summaryValue, instituteValue, cityValue, fieldValue, degreeValue, dateOfGraduation, employerValue, jobValue, city3Value, stateValue, startDaterValue, endDateValue, skillsValue, employer2Value, job2Value, city32Value, state2Value, startDater2Value, endDate2Value, employer3Value, job3Value, city33Value, state3Value, startDater3Value, endDate3Value, instituteValue2, cityValue2, fieldValue2, degreeValue2, dateOfGraduation2, llinkValue, glinkValue);
    }
    else {
        console.error("Please fill out every detail.");
    }
});
// Function to generate the resume
function generateResume(name, email, phone, summary, institute, city, field, degree, date, employer, job, city3, state, startDate, endDate, skills, employer2, job2, city32, state2, startDate2, endDate2, employer3, job3, city33, state3, startDate3, endDate3, institute2, city2, field2, degree2, date2, llink, glink // Add uniquePath as a parameter
) {
    var _a, _b;
    var secondEducationHTML = "";
    if (institute2 && city2 && date2 && degree2) {
        secondEducationHTML = "\n    <div id=\"field-degree-output2\">\n            <span>".concat(degree2, " in ").concat(field2, "</span>\n            <span>").concat(date2, "</span>\n            </div>\n            <p>").concat(institute2, " ").concat(city2, "</p>\n            <button class=\"section-edit\" onclick=\"makeEditable('educationSection')\">Edit</button>\n    ");
    }
    else {
        console.log("Second education fields are not filled correctly.");
    }
    var secondExperienceHTML = "";
    if (employer2 && job2 && city32 && state2 && startDate2 && endDate2) {
        secondExperienceHTML = "\n    <div id=\"job-employer-output2\">\n            <span>".concat(job2, " , ").concat(employer2, "</span>\n            <span>From ").concat(startDate2, " to ").concat(endDate2, "</span>\n            </div>\n            <p>").concat(city32, " ").concat(state2, "</p>\n            <button class=\"section-edit\" onclick=\"makeEditable('educationSection')\">Edit</button>\n            <button class=\"section-edit\" onclick=\"makeEditable('experienceSection')\">Edit</button>\n           \n           \n    ");
    }
    else {
        console.log("Second education fields are not filled correctly.");
    }
    var thirdExperienceHTML = "";
    if (employer3 && job3 && city33 && state3 && startDate3 && endDate3) {
        thirdExperienceHTML = "\n        <div id=\"job-employer-output3\">\n            <span>".concat(job3, " , ").concat(employer3, "</span>\n            <span>From ").concat(startDate3, " to ").concat(endDate3, "</span>\n            </div>\n            <p>").concat(city33, " ").concat(state3, "</p>\n            <button class=\"section-edit\" onclick=\"makeEditable('educationSection')\">Edit</button>\n           \n    ");
    }
    var finalOutput = "\n    <link rel=\"stylesheet\" href=\"style.css\">\n    <style>\n    #resumeContainer{\n    color:black\n    background-color: #2f73b8;\n    }\n    </style>\n    <div id=\"resumeContainer\">\n    <div class=\"header\">\n        <h2 class=\"name\">".concat(name, "</h2>\n<p class=\"phone-email\">").concat(phone, " | ").concat(email, " | ").concat(llink, " | ").concat(glink, "</p>\n</div>\n        <div id=\"personalDetails\">\n            <h3>Summary</h3><hr/>\n            <p> ").concat(summary, "</p>\n           \n            <button class=\"section-edit\" onclick=\"makeEditable('personalDetails')\">Edit</button>\n        </div>\n\n <div id=\"experienceSection\">\n            <h3>Experience</h3><hr/>\n            <div id=\"job-employer-output\">\n            <span>").concat(job, " , ").concat(employer, "</span>\n            <span>From ").concat(startDate, " to ").concat(endDate, "</span>\n            </div>\n            <p>").concat(city3, " ").concat(state, "</p>\n            <button class=\"section-edit\" onclick=\"makeEditable('experienceSection')\">Edit</button>\n      ").concat(secondExperienceHTML, "\n      ").concat(thirdExperienceHTML, "\n            </div>\n\n        <div id=\"educationSection\">\n            <h3>Education</h3><hr/>\n            <div id=\"field-degree-output\">\n            <span>").concat(degree, " in ").concat(field, "</span>\n            <span>").concat(date, "</span>\n            </div>\n            <p>").concat(institute, " ").concat(city, "</p>\n            <button class=\"section-edit\" onclick=\"makeEditable('educationSection')\">Edit</button>\n            \n           ").concat(secondEducationHTML, "\n        </div>\n\n       \n\n        <div id=\"skillsSection\">\n            <h3>Skills</h3><hr/>\n            <p>").concat(skills, "</p>\n            <button class=\"section-edit\" onclick=\"makeEditable('skillsSection')\">Edit</button>\n        </div>\n        </div>\n    ");
    // const encodedUri = 'data:text/html;charset=utf-8,' + encodeURIComponent(downloadContent);
    (_a = document.getElementById("download")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        function printDiv(divId) {
            var _a;
            var printContents = (_a = document.getElementById(divId)) === null || _a === void 0 ? void 0 : _a.innerHTML;
            var originalContents = document.body.innerHTML;
            if (printContents !== undefined) {
                document.body.innerHTML = printContents;
                window.print();
                document.body.innerHTML = originalContents;
            }
            else {
                console.error("Element with ID '" + divId + "' not found.");
            }
        }
        printDiv("resumeContainer");
    });
    var resumeFinal = document.getElementById("output");
    if (resumeFinal) {
        resumeFinal.innerHTML = finalOutput;
        resumeFinal.style.display = "flex"; // Show the resume    
        (_b = document.getElementById('download')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
        });
        // Show the edit/save buttons for the resume
        var editSaveButtons = document.getElementById("edit-save-buttons");
        if (editSaveButtons) {
            editSaveButtons.style.display = "block";
        }
    }
    else {
        console.error("Output element not found.");
    }
}
// Toggle Edit functionality
(_b = document.getElementById("editResume")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    // Show all "Edit" buttons for sections
    document.querySelectorAll('.section-edit').forEach(function (button) {
        var btn = button;
        btn.style.display = 'inline';
    });
    // Show the bottom "Save Resume" button
    var saveResumeButton = document.getElementById("saveResume");
    if (saveResumeButton) {
        saveResumeButton.style.display = "inline";
    }
    // Hide the "Edit Resume" button
    var editResumeButton = document.getElementById("editResume");
    if (editResumeButton) {
        editResumeButton.style.display = "none";
    }
});
// Function to make a section editable
function makeEditable(sectionId) {
    var section = document.getElementById(sectionId);
    var button = section === null || section === void 0 ? void 0 : section.querySelector('button');
    if (section && button) {
        section.contentEditable = "true";
        section.focus();
        button.textContent = "Save";
        button.setAttribute('onclick', "saveSection('".concat(sectionId, "')"));
    }
}
// Function to save a section
function saveSection(sectionId) {
    var section = document.getElementById(sectionId);
    var button = section === null || section === void 0 ? void 0 : section.querySelector('button');
    if (section && button) {
        section.contentEditable = "false";
        button.textContent = "Edit";
        button.setAttribute('onclick', "makeEditable('".concat(sectionId, "')"));
    }
}
// Save all sections and finalize the resume
(_c = document.getElementById("saveResume")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
    // Hide all "Edit" buttons for sections
    document.querySelectorAll('.section-edit').forEach(function (button) {
        var btn = button;
        btn.style.display = 'none';
    });
    // Hide the "Save Resume" button
    var saveResumeButton = document.getElementById("saveResume");
    if (saveResumeButton) {
        saveResumeButton.style.display = "none";
    }
    // Show the "Edit Resume" button again
    var editResumeButton = document.getElementById("editResume");
    if (editResumeButton) {
        editResumeButton.style.display = "inline";
    }
    // Set all sections to not be editable
    document.querySelectorAll('[contenteditable="true"]').forEach(function (section) {
        var sec = section;
        sec.contentEditable = "false";
    });
});
