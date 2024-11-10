var _a;
function addLanguage() {
    var languageList = document.getElementById("languageList");
    var newField = document.createElement("div");
    newField.innerHTML = "\n      <input type=\"text\" name=\"language[]\" placeholder=\"Language\" required>\n      <select name=\"proficiency[]\">\n          <option value=\"Fluent\">Fluent</option>\n          <option value=\"Intermediate\">Intermediate</option>\n          <option value=\"Basic\">Basic</option>\n      </select>\n      <button type=\"button\" onclick=\"removeField(this)\">Remove</button>\n  ";
    languageList.appendChild(newField);
}
function addEducationField() {
    var educationList = document.getElementById("educationList");
    var newField = document.createElement("div");
    newField.innerHTML = "\n      <input type=\"text\" name=\"educationLevel[]\" placeholder=\"Education Level\" required>\n      <input type=\"text\" name=\"institution[]\" placeholder=\"Institution\" required>\n      <input type=\"date\" name=\"educationFrom[]\" required>\n      <input type=\"date\" name=\"educationTo[]\" required>\n      <button type=\"button\" onclick=\"removeField(this)\">Remove</button>\n  ";
    educationList.appendChild(newField);
}
function addWorkField() {
    var workList = document.getElementById("workList");
    var newField = document.createElement("div");
    newField.innerHTML = "\n      <input type=\"text\" name=\"company[]\" placeholder=\"Company\" required>\n      <input type=\"text\" name=\"position[]\" placeholder=\"Position\" required>\n      <input type=\"date\" name=\"workFrom[]\" required>\n      <input type=\"date\" name=\"workTo[]\" required>\n      <button type=\"button\" onclick=\"removeField(this)\">Remove</button>\n  ";
    workList.appendChild(newField);
}
function addSkillField() {
    var skillsList = document.getElementById("skillsList");
    var newField = document.createElement("div");
    newField.innerHTML = "\n      <input type=\"text\" name=\"skill[]\" placeholder=\"Skill\" required>\n      <button type=\"button\" onclick=\"removeField(this)\">Remove</button>\n  ";
    skillsList.appendChild(newField);
}
function removeField(button) {
    var _a;
    (_a = button.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
}
function generateResume() {
    // Capture form data
    var objective = document.getElementById("objective").value;
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var linkedin = document.getElementById("linkedin").value;
    var location = document.getElementById("location").value;
    var aboutMe = document.getElementById("aboutMe").value;
    // Capture languages
    var languages = [];
    var languageInputs = document.querySelectorAll('input[name="language[]"]');
    var proficiencyInputs = document.querySelectorAll('select[name="proficiency[]"]');
    for (var i = 0; i < languageInputs.length; i++) {
        languages.push({
            language: languageInputs[i].value,
            proficiency: proficiencyInputs[i].value
        });
    }
    // Capture education
    var education = [];
    var educationInputs = document.querySelectorAll('input[name="educationLevel[]"]');
    var institutionInputs = document.querySelectorAll('input[name="institution[]"]');
    var educationFromInputs = document.querySelectorAll('input[name="educationFrom[]"]');
    var educationToInputs = document.querySelectorAll('input[name="educationTo[]"]');
    for (var i = 0; i < educationInputs.length; i++) {
        education.push({
            level: educationInputs[i].value,
            institution: institutionInputs[i].value,
            from: educationFromInputs[i].value,
            to: educationToInputs[i].value
        });
    }
    // Capture work experience
    var workExperience = [];
    var companyInputs = document.querySelectorAll('input[name="company[]"]');
    var positionInputs = document.querySelectorAll('input[name="position[]"]');
    var workFromInputs = document.querySelectorAll('input[name="workFrom[]"]');
    var workToInputs = document.querySelectorAll('input[name="workTo[]"]');
    for (var i = 0; i < companyInputs.length; i++) {
        workExperience.push({
            company: companyInputs[i].value,
            position: positionInputs[i].value,
            from: workFromInputs[i].value,
            to: workToInputs[i].value
        });
    }
    // Capture skills
    var skills = [];
    var skillInputs = document.querySelectorAll('input[name="skill[]"]');
    skillInputs.forEach(function (input) { return skills.push(input.value); });
    // Now populate the resume section
    var resumeSection = document.getElementById("resumesection");
    // Clear any previous content
    resumeSection.innerHTML = "";
    // Add personal info and objective with improved layout and background
    resumeSection.innerHTML += "\n      <div style=\"display: flex; flex-wrap: wrap; background-color: #f4f4f4; padding: 20px; border-radius: 10px; box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1); height: 100%; max-width: 100%; width: 1000px; margin: 0 auto;\">\n          <div style=\"flex: 1; background-color: #333; color: white; padding: 20px; border-radius: 8px;\">\n              <h2 style=\"font-size: 2rem; margin-bottom: 10px;\">".concat(name, "</h2>\n              <br/>\n              <p><strong>Date of Birth:</strong> <br/>\n              ").concat(age, "</p>\n              <br/>\n              <p><strong>Phone:</strong> \n              ").concat(phone, "</p>\n              <br/>\n              <p><strong>Email:</strong>\n               <a href=\"mailto:").concat(email, "\" style=\"color: #fff; text-decoration: none;\">").concat(email, "</a>\n               </p>\n               <br/>\n              <p><strong>LinkedIn:</strong> <a href=\"").concat(linkedin, "\" target=\"_blank\" style=\"color: #fff; text-decoration: none;\">").concat(linkedin, "</a></p>\n              <br/>\n              <p><strong>Location:</strong> ").concat(location, "</p>\n          </div>\n          <div style=\"flex: 1; background-color: #f0f0f0; color: #333; padding: 20px; margin-left: 20px; border-radius: 8px;\">\n              <h3 style=\"font-size: 1.5rem; margin-bottom: 10px;\">Objective</h3>\n              <p>").concat(objective, "</p>\n              <h3 style=\"font-size: 1.5rem; margin-top: 20px;\">About Me</h3>\n              <p>").concat(aboutMe, "</p>\n\n              <!-- Languages Section -->\n              <h3 style=\"font-size: 1.5rem; margin-top: 20px;\">Languages</h3>\n              <ul style=\"list-style: none; padding: 0;\">\n                  ").concat(languages.map(function (lang) { return "<li><strong>".concat(lang.language, ":</strong> ").concat(lang.proficiency, "</li>"); }).join(''), "\n              </ul>\n\n              <!-- Education Section -->\n              <h3 style=\"font-size: 1.5rem; margin-top: 20px;\">Education</h3>\n              <ul style=\"list-style: none; padding: 0;\">\n                  ").concat(education.map(function (edu) { return "<li><strong>".concat(edu.level, "</strong> in <em>").concat(edu.institution, "</em> (").concat(edu.from, " - ").concat(edu.to, ")</li>"); }).join(''), "\n              </ul>\n\n              <!-- Work Experience Section -->\n              <h3 style=\"font-size: 1.5rem; margin-top: 20px;\">Work Experience</h3>\n              <ul style=\"list-style: none; padding: 0;\">\n                  ").concat(workExperience.map(function (work) { return "<li><strong>".concat(work.position, "</strong> at <em>").concat(work.company, "</em> (").concat(work.from, " - ").concat(work.to, ")</li>"); }).join(''), "\n              </ul>\n\n              <!-- Skills Section -->\n              <h3 style=\"font-size: 1.5rem; margin-top: 20px;\">Skills</h3>\n              <ul style=\"list-style: none; padding: 0;\">\n                  ").concat(skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "\n              </ul>\n          </div>\n      </div>\n  ");
}
(_a = document.getElementById("generateBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", generateResume);
