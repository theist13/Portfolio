function function1() {
    console.log("Function 2 called.");
}
function showLoading() {
  const loadingElement = document.getElementById('loading');
  loadingElement.style.display = 'block';
  console.log('Loading....');
}

// Function to hide loading message
function hideLoading() {
  const loadingElement = document.getElementById('loading');
  loadingElement.style.display = 'none';
    console.log('Finish.....');
}

function SetLanguge(language) {
  console.log('Start set language...');
  if (language === "eng") {
    SetHomeData('json/english/title_eng.json');
    SetDropdownData('json/english/title_eng.json');
    SetEmploymentData('json/english/employment_eng.json');
    SetEducationData('json/english/education_eng.json');
    SetSkillData('json/english/skill_eng.json');
  }
  if (language === "th") {
    SetHomeData('json/thai/title_th.json');
    SetDropdownData('json/thai/title_th.json');
    SetEmploymentData('json/thai/employment_th.json');
    SetEducationData('json/thai/education_th.json');
    SetSkillData('json/thai/skill_th.json');
  }
}

function SetHomeData(jsonFileName) {
  // showLoading();

   fetch(jsonFileName)
    .then(response => response.json())
    .then(data => {
     // hideLoading();
      const outputElement = document.getElementById('home');
      outputElement.innerHTML = `<h1 style="font-size: 250%">${data.name}</h1>
      <h2 style="font-size: 200%">${data.position}</h2>
    `;
    const aboutElement = document.getElementById('about');
    aboutElement.innerHTML = `   <h2 class="w3-border-bottom w3-border-amber" style="border-width: 3px !important;">${data.about}</h2>
            <p class="w3-margin-top-2"> 
            ${data.aboutDetail}
            </p>`;
    const resumeElement = document.getElementById('resume');
    resumeElement.innerHTML = ` 
            <h2 class="w3-border-bottom w3-border-amber" style="border-width: 3px !important;">${data.resume}</h2>
            `;
     const contactElement = document.getElementById('contact');
    contactElement.innerHTML = ` 
     <h2 class="w3-border-bottom w3-border-amber" style="border-width: 3px !important;">${data.contact}</h3>
      `;
    })
    .catch(error => {
      console.error('Error loading JSON:', error);
    });

}
function SetDropdownData(jsonFileName) {

  fetch(jsonFileName)
    .then(response => response.json())
    .then(data => {
     // hideLoading();
     console.log(JSON.stringify(data));
      const outputElement = document.getElementById('dropdown');
      outputElement.innerHTML = `<a class="dropbtn">${data.dropdown}</a>
     <div class="dropdown-content">
     <!-- Dropdown Item Section -->
     <a onclick="SetLanguge('th')">TH</a>
     <a onclick="SetLanguge('eng')">ENG</a>
    `;
    })
    .catch(error => {
      console.error('Error loading JSON:', error);
    });
}
function SetEmploymentData(jsonFileName) {
  
     fetch(jsonFileName)
    .then(response => response.json())
    .then(data => {
     // hideLoading();
     var companyList = "";
     for(var i = 0 ; i < data.employment.length ; i++)
     {
        companyList += `<h4>${data.employment[i].company}</h4>
                <h5>${data.employment[i].time}</h5>`;
                for(var j = 0; j < data.employment[i].detail.length ; j++)
                {
                 companyList += `<p>${data.employment[i].detail[j]}</p>`
                }
     };
      const outputElement = document.getElementById('employment');
      outputElement.innerHTML = `
     <h3 class="w3-border-amber">${data.title}</h3>
              <div class="" >
                 ${companyList}
              </div>    
            </div>
    `;
    })
    .catch(error => {
      console.error('Error loading employment JSON:', error);
    });
}
function SetEducationData(jsonFileName) {
  
     fetch(jsonFileName)
    .then(response => response.json())
    .then(data => {
     // hideLoading();
     var educationList = "";
     for(var i = 0 ; i < data.education.length ; i++)
     {
        educationList += `<h4>${data.education[i].place}</h4>
                <p>${data.education[i].time}</p>`;
     };
      const outputElement = document.getElementById('education');
      outputElement.innerHTML = `
        <div class="w3-container w3-margin-top-2 w3-cursive">
              <h3 class="w3-border-amber">${data.title}</h3>
                   ${educationList}
            </div>
    `;
    })
    .catch(error => {
      console.error('Error loading employment JSON:', error);
    });
}
function SetSkillData(jsonFileName) {
  
     fetch(jsonFileName)
    .then(response => response.json())
    .then(data => {
     // hideLoading();
     var skillList = "";
     for(var i = 0 ; i < data.skill.length ; i++)
     {
        skillList += `<li>${data.skill[i]}</li>`;
     };
      const outputElement = document.getElementById('skill');
      outputElement.innerHTML = `
            <div class="w3-container w3-margin-top-2 w3-cursive">
              <h4>${data.title}</h4>
                <ul class="w3-ul" style="font-weight: 500;">
                  ${skillList}
                </ul>
            </div>
    `;
    })
    .catch(error => {
      console.error('Error loading employment JSON:', error);
    });
}

  /*var blog = document.getElementById("resume");
  var innerHTML = "";
  //for (let i = 0; i < myBlog.length; i++) {
  var data = language;
  innerHTML +=`
    <h2 class="w3-border-bottom w3-border-amber" style="border-width: 3px !important;">RESUME</h2>
            <div class="w3-container w3-margin-top-2 w3-cursive">

              <!--EMPLOYMENT HISTORY SECTION-->
              <h3 class="w3-border-amber">${data.employment}</h3>
              <div class="">
                <h4>Unity Developer at BlueoceanTechnology</h4>
                <p>September 2021 - Present</p>
                <ul class="w3-ul" style="font-weight: 500;">
                  <li>Develop VR(occulus quest2) program for touring kubota farm</li>
                  <li>Develop minigame (racing game with steering wheel)for kubota game booth</li>
                  <li>Develop 3D website for project Housematerial phaseII</li>
                  <li>กำลังทำเคออส กับไฟล์เจสัน</li>
                </ul>
              </div>

            <div class="w3-container w3-margin-top-2 w3-cursive">
              <h3 class="w3-border-amber">${data.education}</h3>
                <h4>Silpakorn University Faculty of information and Communication Technology</h4>
                <p>University 2016-2020 </p>
                <h4>Kanchanapisek Wittayalai Nakhon Pathom Math-Eng</h4>
                <p>Highschool 2009-2015 </p>
            </div> 

            <div class="w3-container w3-margin-top-2 w3-cursive">
              <h3 class="w3-border-amber">${data.skill}</h3>
              <h4>Technical skills</h4>
                <ul class="w3-ul" style="font-weight: 500;">
                  <li>I have experience with Unity engine for 1 year</li>
                </ul>
            </div>

            <div id="contact" class="w3-container w3-margin-top-20-percent w3-cursive">
            <h2 class="w3-border-bottom w3-border-amber" style="border-width: 3px !important;">MY CONTACT DETAILS</h3>
            <div class="w3-margin-top-2" style="font-weight: 500;">
              <p>Name: Arayan Khumngoen</p>
             <!-- <p>Adress: Street name 99, 77001 Houston, Texas</p>-->
              <p>Phone number: 061-4536653</p>
              <p>E-mail:arayan.khumngoen@gmail.com</p>
            </div>
          </div>
    `;

  //}
  blog.innerHTML = innerHTML;*/