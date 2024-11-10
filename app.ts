function addLanguage(): void {
  const languageList = document.getElementById("languageList") as HTMLElement;
  const newField = document.createElement("div");
  newField.innerHTML = `
      <input type="text" name="language[]" placeholder="Language" required>
      <select name="proficiency[]">
          <option value="Fluent">Fluent</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Basic">Basic</option>
      </select>
      <button type="button" onclick="removeField(this)">Remove</button>
  `;
  languageList.appendChild(newField);
}

function addEducationField(): void {
  const educationList = document.getElementById("educationList") as HTMLElement;
  const newField = document.createElement("div");
  newField.innerHTML = `
      <input type="text" name="educationLevel[]" placeholder="Education Level" required>
      <input type="text" name="institution[]" placeholder="Institution" required>
      <input type="date" name="educationFrom[]" required>
      <input type="date" name="educationTo[]" required>
      <button type="button" onclick="removeField(this)">Remove</button>
  `;
  educationList.appendChild(newField);
}

function addWorkField(): void {
  const workList = document.getElementById("workList") as HTMLElement;
  const newField = document.createElement("div");
  newField.innerHTML = `
      <input type="text" name="company[]" placeholder="Company" required>
      <input type="text" name="position[]" placeholder="Position" required>
      <input type="date" name="workFrom[]" required>
      <input type="date" name="workTo[]" required>
      <button type="button" onclick="removeField(this)">Remove</button>
  `;
  workList.appendChild(newField);
}

function addSkillField(): void {
  const skillsList = document.getElementById("skillsList") as HTMLElement;
  const newField = document.createElement("div");
  newField.innerHTML = `
      <input type="text" name="skill[]" placeholder="Skill" required>
      <button type="button" onclick="removeField(this)">Remove</button>
  `;
  skillsList.appendChild(newField);
}

function removeField(button: HTMLElement): void {
  button.parentElement?.remove();
}

function generateResume(): void {
  // Capture form data
  const objective = (document.getElementById("objective") as HTMLInputElement).value;
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const age = (document.getElementById("age") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const linkedin = (document.getElementById("linkedin") as HTMLInputElement).value;
  const location = (document.getElementById("location") as HTMLInputElement).value;
  const aboutMe = (document.getElementById("aboutMe") as HTMLTextAreaElement).value;
  
  // Capture languages
  const languages: { language: string; proficiency: string }[] = [];
  const languageInputs = document.querySelectorAll('input[name="language[]"]') as NodeListOf<HTMLInputElement>;
  const proficiencyInputs = document.querySelectorAll('select[name="proficiency[]"]') as NodeListOf<HTMLSelectElement>;
  for (let i = 0; i < languageInputs.length; i++) {
      languages.push({
          language: languageInputs[i].value,
          proficiency: proficiencyInputs[i].value
      });
  }

  // Capture education
  const education: { level: string; institution: string; from: string; to: string }[] = [];
  const educationInputs = document.querySelectorAll('input[name="educationLevel[]"]') as NodeListOf<HTMLInputElement>;
  const institutionInputs = document.querySelectorAll('input[name="institution[]"]') as NodeListOf<HTMLInputElement>;
  const educationFromInputs = document.querySelectorAll('input[name="educationFrom[]"]') as NodeListOf<HTMLInputElement>;
  const educationToInputs = document.querySelectorAll('input[name="educationTo[]"]') as NodeListOf<HTMLInputElement>;
  for (let i = 0; i < educationInputs.length; i++) {
      education.push({
          level: educationInputs[i].value,
          institution: institutionInputs[i].value,
          from: educationFromInputs[i].value,
          to: educationToInputs[i].value
      });
  }

  // Capture work experience
  const workExperience: { company: string; position: string; from: string; to: string }[] = [];
  const companyInputs = document.querySelectorAll('input[name="company[]"]') as NodeListOf<HTMLInputElement>;
  const positionInputs = document.querySelectorAll('input[name="position[]"]') as NodeListOf<HTMLInputElement>;
  const workFromInputs = document.querySelectorAll('input[name="workFrom[]"]') as NodeListOf<HTMLInputElement>;
  const workToInputs = document.querySelectorAll('input[name="workTo[]"]') as NodeListOf<HTMLInputElement>;
  for (let i = 0; i < companyInputs.length; i++) {
      workExperience.push({
          company: companyInputs[i].value,
          position: positionInputs[i].value,
          from: workFromInputs[i].value,
          to: workToInputs[i].value
      });
  }

  // Capture skills
  const skills: string[] = [];
  const skillInputs = document.querySelectorAll('input[name="skill[]"]') as NodeListOf<HTMLInputElement>;
  skillInputs.forEach(input => skills.push(input.value));

  // Now populate the resume section
  const resumeSection = document.getElementById("resumesection") as HTMLElement;

  // Clear any previous content
  resumeSection.innerHTML = "";

  // Add personal info and objective with improved layout and background
  resumeSection.innerHTML += `
      <div style="display: flex; flex-wrap: wrap; background-color: #f4f4f4; padding: 20px; border-radius: 10px; box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1); height: 100%; max-width: 100%; width: 1000px; margin: 0 auto;">
          <div style="flex: 1; background-color: #333; color: white; padding: 20px; border-radius: 8px;">
              <h2 style="font-size: 2rem; margin-bottom: 10px;">${name}</h2>
              <br/>
              <p><strong>Date of Birth:</strong> <br/>
              ${age}</p>
              <br/>
              <p><strong>Phone:</strong> 
              ${phone}</p>
              <br/>
              <p><strong>Email:</strong>
               <a href="mailto:${email}" style="color: #fff; text-decoration: none;">${email}</a>
               </p>
               <br/>
              <p><strong>LinkedIn:</strong> <a href="${linkedin}" target="_blank" style="color: #fff; text-decoration: none;">${linkedin}</a></p>
              <br/>
              <p><strong>Location:</strong> ${location}</p>
          </div>
          <div style="flex: 1; background-color: #f0f0f0; color: #333; padding: 20px; margin-left: 20px; border-radius: 8px;">
              <h3 style="font-size: 1.5rem; margin-bottom: 10px;">Objective</h3>
              <p>${objective}</p>
              <h3 style="font-size: 1.5rem; margin-top: 20px;">About Me</h3>
              <p>${aboutMe}</p>

              <!-- Languages Section -->
              <h3 style="font-size: 1.5rem; margin-top: 20px;">Languages</h3>
              <ul style="list-style: none; padding: 0;">
                  ${languages.map(lang => `<li><strong>${lang.language}:</strong> ${lang.proficiency}</li>`).join('')}
              </ul>

              <!-- Education Section -->
              <h3 style="font-size: 1.5rem; margin-top: 20px;">Education</h3>
              <ul style="list-style: none; padding: 0;">
                  ${education.map(edu => `<li><strong>${edu.level}</strong> in <em>${edu.institution}</em> (${edu.from} - ${edu.to})</li>`).join('')}
              </ul>

              <!-- Work Experience Section -->
              <h3 style="font-size: 1.5rem; margin-top: 20px;">Work Experience</h3>
              <ul style="list-style: none; padding: 0;">
                  ${workExperience.map(work => `<li><strong>${work.position}</strong> at <em>${work.company}</em> (${work.from} - ${work.to})</li>`).join('')}
              </ul>

              <!-- Skills Section -->
              <h3 style="font-size: 1.5rem; margin-top: 20px;">Skills</h3>
              <ul style="list-style: none; padding: 0;">
                  ${skills.map(skill => `<li>${skill}</li>`).join('')}
              </ul>
          </div>
      </div>
  `;
}

document.getElementById("generateBtn")?.addEventListener("click", generateResume);
