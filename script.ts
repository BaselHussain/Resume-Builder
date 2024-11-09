

document.getElementById("form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form submitted!")
    // Get the input values
    const firstName = document.getElementById("firstName") as HTMLInputElement;
    const lastName = document.getElementById("lastName") as HTMLInputElement;
    const email = document.getElementById("email") as HTMLInputElement;
    const phone = document.getElementById("number") as HTMLInputElement;
    const llink = document.getElementById("llink") as HTMLInputElement;
    const glink = document.getElementById("glink") as HTMLInputElement;
    const summary = document.getElementById("summary") as HTMLTextAreaElement;
    const institute = document.getElementById("institute") as HTMLInputElement;
    const city = document.getElementById("city") as HTMLInputElement;
    const field = document.getElementById("field") as HTMLInputElement;
    const degreeSelect = document.getElementById("degree") as HTMLSelectElement
    const date = document.getElementById("date") as HTMLInputElement
    const institute2 = document.getElementById("institute2") as HTMLInputElement;
    const city2 = document.getElementById("city2") as HTMLInputElement;
    const field2 = document.getElementById("field2") as HTMLInputElement;
    const degreeSelect2 = document.getElementById("degree2") as HTMLSelectElement
    const date2 = document.getElementById("date2") as HTMLInputElement
    const employer = document.getElementById("employer") as HTMLInputElement
    const job = document.getElementById("job") as HTMLInputElement
    const city3 = document.getElementById("city3") as HTMLInputElement
    const state = document.getElementById("state") as HTMLInputElement
    const startDate = document.getElementById("startdate") as HTMLInputElement
    const endDate = document.getElementById("enddate") as HTMLInputElement
    const employer2 = document.getElementById("employer2") as HTMLInputElement
    const job2 = document.getElementById("job2") as HTMLInputElement
    const city32 = document.getElementById("city3-2") as HTMLInputElement
    const state2 = document.getElementById("state2") as HTMLInputElement
    const startDate2 = document.getElementById("startdate2") as HTMLInputElement
    const endDate2 = document.getElementById("enddate2") as HTMLInputElement
    const employer3 = document.getElementById("employer3") as HTMLInputElement
    const job3 = document.getElementById("job3") as HTMLInputElement
    const city33 = document.getElementById("city3-3") as HTMLInputElement
    const state3 = document.getElementById("state2") as HTMLInputElement
    const startDate3 = document.getElementById("startdate3") as HTMLInputElement
    const endDate3 = document.getElementById("enddate3") as HTMLInputElement

    const skills = document.getElementById("skills") as HTMLTextAreaElement;

  

    if (firstName && lastName && email && phone && institute && city && field && degreeSelect && date && summary && skills) {
        const name = firstName.value + " " + lastName.value;
        const emailValue = email.value;
        const phoneValue = phone.value;
        const llinkValue = llink.value;
        const glinkValue = glink.value;
        const summaryValue = summary.value;
        const instituteValue = institute.value;
        const cityValue = city.value;
        const fieldValue = field.value;
        const degreeValue = degreeSelect.value
        const dateOfGraduation = date.value;
        const instituteValue2 = institute2.value;
        const cityValue2 = city2.value;
        const fieldValue2 = field2.value;
        const degreeValue2 = degreeSelect2.value
        const dateOfGraduation2 = date2.value;
        const employerValue = employer.value;
        const jobValue = job.value;
        const city3Value = city3.value;
        const stateValue = state.value;
        const startDaterValue = startDate.value;
        const endDateValue = endDate.value;
        const employer2Value = employer2.value;
        const job2Value = job2.value;
        const city32Value = city32.value;
        const state2Value = state2.value;
        const startDater2Value = startDate2.value;
        const endDate2Value = endDate2.value;
        const employer3Value = employer3.value;
        const job3Value = job3.value;
        const city33Value = city33.value;
        const state3Value = state3.value;
        const startDater3Value = startDate3.value;
        const endDate3Value = endDate3.value
        const skillsValue = skills.value;
      
       
        
        generateResume(
            name,
            emailValue,
            phoneValue,
            summaryValue,
            instituteValue,
            cityValue,
            fieldValue,
            degreeValue,
            dateOfGraduation,
            employerValue,
            jobValue,
            city3Value,
            stateValue,
            startDaterValue,
            endDateValue,
            skillsValue,
            employer2Value,
            job2Value,
            city32Value,
            state2Value,
            startDater2Value,
            endDate2Value,
            employer3Value,
            job3Value,
            city33Value,
            state3Value,
            startDater3Value,
            endDate3Value,
            instituteValue2,
            cityValue2,
            fieldValue2,
            degreeValue2,
            dateOfGraduation2,
            llinkValue,
            glinkValue
        );

    } else {
        console.error("Please fill out every detail.");
    }
});






// Function to generate the resume
function generateResume(
    name: string,
    email: string,
    phone: string,
    summary: string,
    institute: string,
    city: string,
    field: string,
    degree: string,
    date: string,
    employer: string,
    job: string,
    city3: string,
    state: string,
    startDate: string,
    endDate: string,
    skills: string,
    employer2?: string,
    job2?: string,
    city32?: string,
    state2?: string,
    startDate2?: string,
    endDate2?: string,
    employer3?: string,
    job3?: string,
    city33?: string,
    state3?: string,
    startDate3?: string,
    endDate3?: string,
    institute2?: string,
    city2?: string,
    field2?: string,
    degree2?: string,
    date2?: string,
    llink?:string,
    glink?:string // Add uniquePath as a parameter
) {

    let secondEducationHTML = "";
    if (institute2 && city2 && date2 && degree2) {
        
        secondEducationHTML = `
    <div id="field-degree-output2">
            <span>${degree2} in ${field2}</span>
            <span>${date2}</span>
            </div>
            <p>${institute2} ${city2}</p>
            <button class="section-edit" onclick="makeEditable('educationSection')">Edit</button>
    `
    }else {
        console.log("Second education fields are not filled correctly.");
    }

    let secondExperienceHTML = "";
    if (employer2 && job2 && city32 && state2 && startDate2 && endDate2) {
        
        secondExperienceHTML  = `
    <div id="job-employer-output2">
            <span>${job2} , ${employer2}</span>
            <span>From ${startDate2} to ${endDate2}</span>
            </div>
            <p>${city32} ${state2}</p>
            <button class="section-edit" onclick="makeEditable('educationSection')">Edit</button>
            <button class="section-edit" onclick="makeEditable('experienceSection')">Edit</button>
           
           
    `
    }else {
        console.log("Second education fields are not filled correctly.");
    }
    let thirdExperienceHTML = "";
    if ( employer3 && job3 && city33 && state3 && startDate3 && endDate3) {
        
        thirdExperienceHTML  = `
        <div id="job-employer-output3">
            <span>${job3} , ${employer3}</span>
            <span>From ${startDate3} to ${endDate3}</span>
            </div>
            <p>${city33} ${state3}</p>
            <button class="section-edit" onclick="makeEditable('educationSection')">Edit</button>
           
    `
    }




    const finalOutput = `
    <link rel="stylesheet" href="style.css">
    <style>
    #resumeContainer{
    color:black
    background-color: #2f73b8;
    }
    </style>
    <div id="resumeContainer">
    <div class="header">
        <h2 class="name">${name}</h2>
<p class="phone-email">${phone} | ${email} | ${llink} | ${glink}</p>
</div>
        <div id="personalDetails">
            <h3>Summary</h3><hr/>
            <p> ${summary}</p>
           
            <button class="section-edit" onclick="makeEditable('personalDetails')">Edit</button>
        </div>

 <div id="experienceSection">
            <h3>Experience</h3><hr/>
            <div id="job-employer-output">
            <span>${job} , ${employer}</span>
            <span>From ${startDate} to ${endDate}</span>
            </div>
            <p>${city3} ${state}</p>
            <button class="section-edit" onclick="makeEditable('experienceSection')">Edit</button>
      ${secondExperienceHTML}
      ${thirdExperienceHTML}
            </div>

        <div id="educationSection">
            <h3>Education</h3><hr/>
            <div id="field-degree-output">
            <span>${degree} in ${field}</span>
            <span>${date}</span>
            </div>
            <p>${institute} ${city}</p>
            <button class="section-edit" onclick="makeEditable('educationSection')">Edit</button>
            
           ${secondEducationHTML}
        </div>

       

        <div id="skillsSection">
            <h3>Skills</h3><hr/>
            <p>${skills}</p>
            <button class="section-edit" onclick="makeEditable('skillsSection')">Edit</button>
        </div>
        </div>
    `;
   

// const encodedUri = 'data:text/html;charset=utf-8,' + encodeURIComponent(downloadContent);

document.getElementById("download")?.addEventListener("click", () => {
    function printDiv(divId) {
        var printContents = document.getElementById(divId)?.innerHTML;
        var originalContents = document.body.innerHTML;

        if (printContents !== undefined) {
            document.body.innerHTML = printContents;
            window.print();
            document.body.innerHTML = originalContents;
        } else {
            console.error("Element with ID '" + divId + "' not found.");
        }
    }
    printDiv("resumeContainer");
});





    const resumeFinal = document.getElementById("output") as HTMLElement;
    if (resumeFinal) {
        resumeFinal.innerHTML = finalOutput;
        resumeFinal.style.display = "flex";// Show the resume    
        document.getElementById('download')?.addEventListener('click', function () {
            
            
          
          
          });
           

        // Show the edit/save buttons for the resume
        const editSaveButtons = document.getElementById("edit-save-buttons") as HTMLElement;
        if (editSaveButtons) {
            editSaveButtons.style.display = "block";
        }
    } else {
        console.error("Output element not found.");
    }

    
}








// Toggle Edit functionality
document.getElementById("editResume")?.addEventListener("click", () => {
    // Show all "Edit" buttons for sections
    document.querySelectorAll('.section-edit').forEach((button) => {
        const btn = button as HTMLElement;
        btn.style.display = 'inline';
    });

    // Show the bottom "Save Resume" button
    const saveResumeButton = document.getElementById("saveResume") as HTMLElement;
    if (saveResumeButton) {
        saveResumeButton.style.display = "inline";
    }

    // Hide the "Edit Resume" button
    const editResumeButton = document.getElementById("editResume") as HTMLElement;
    if (editResumeButton) {
        editResumeButton.style.display = "none";
    }
});

// Function to make a section editable
function makeEditable(sectionId: string) {
    const section = document.getElementById(sectionId) as HTMLElement;
    const button = section?.querySelector('button') as HTMLElement;

    if (section && button) {
        section.contentEditable = "true";
        section.focus();
        button.textContent = "Save";
        button.setAttribute('onclick', `saveSection('${sectionId}')`);
    }
}

// Function to save a section
function saveSection(sectionId: string) {
    const section = document.getElementById(sectionId) as HTMLElement;
    const button = section?.querySelector('button') as HTMLElement;

    if (section && button) {
        section.contentEditable = "false";
        button.textContent = "Edit";
        button.setAttribute('onclick', `makeEditable('${sectionId}')`);
    }
}

// Save all sections and finalize the resume
document.getElementById("saveResume")?.addEventListener("click", () => {
    // Hide all "Edit" buttons for sections
    document.querySelectorAll('.section-edit').forEach((button) => {
        const btn = button as HTMLElement;
        btn.style.display = 'none';
    });

    // Hide the "Save Resume" button
    const saveResumeButton = document.getElementById("saveResume") as HTMLElement;
    if (saveResumeButton) {
        saveResumeButton.style.display = "none";
    }

    // Show the "Edit Resume" button again
    const editResumeButton = document.getElementById("editResume") as HTMLElement;
    if (editResumeButton) {
        editResumeButton.style.display = "inline";
    }

    // Set all sections to not be editable
    document.querySelectorAll('[contenteditable="true"]').forEach((section) => {
        const sec = section as HTMLElement;
        sec.contentEditable = "false";
    });
});
