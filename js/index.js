let data = document.getElementById("data-api");

function open() {
  $(".main-nav").animate({ left: 0 }, 500);

  $(".open-close").removeClass("fa-solid fa-bars");
  $(".open-close").addClass("fa-solid fa-x");

  $(".links li").animate(
    {
      top: 0,
    },
    500
  );
}

function close() {
  let boxWidth = $(".main-nav .nav-left").outerWidth();
  $(".main-nav").animate(
    {
      left: -boxWidth,
    },
    500
  );

  $(".open-close").removeClass("fa-solid fa-x");
  $(".open-close").addClass(" fa-solid fa-bars");
  $(".links li").animate(
    {
      top: 300,
    },
    500
  );
}

close();
$(".main-nav i.open-close").click(() => {
  if ($(".main-nav").css("left") == "0px") {
    close();
  } else {
    open();
  }
});

async function getCat() {
  data.innerHTML = "";

  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  response = await response.json();

  close();
  displayCat(response.categories);
}

function displayCat(arr) {
  let cartoona = "";

  for (let i = 0; i < arr.length; i++) {
    cartoona += `
          <div class="col-md-3">
                  <div class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                      <img class="w-100" src="${arr[i].strCategoryThumb}" alt="" srcset="">
                      <div class="meal-layer position-absolute text-center text-black p-2">
                          <h3>${arr[i].strCategory}</h3>
                          <p>${arr[i].strCategoryDescription}</p>
                      </div>
                  </div>
          </div>
          `;
  }

  data.innerHTML = cartoona;
}

async function getArea() {
  data.innerHTML = "";

  let respone = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
  );
  respone = await respone.json();
  console.log(respone.meals);
  close();
  displayArea(respone.meals);
}

function displayArea(arr) {
  let cartoona = "";

  for (let i = 0; i < arr.length; i++) {
    cartoona += `
          <div class="col-md-3">
                  <div  class="rounded-2 text-center cursor-pointer">
                          <i class="fa-solid fa-house-laptop fa-4x"></i>
                          <h3>${arr[i].strArea}</h3>
                  </div>
          </div>
          `;
  }

  data.innerHTML = cartoona;
}

async function getIng() {
  data.innerHTML = "";

  let respone = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
  );
  respone = await respone.json();
  console.log(respone.meals);
  close();
  displayIng(respone.meals);

  
}
function displayIng(arr) {
  let cartoona = "";

  for (let i = 0; i < arr.length; i++) {
    cartoona += `
      <div class="col-md-3">
              <div  class="rounded-2 text-center cursor-pointer">
                      <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                      <h3>${arr[i].strIngredient}</h3>
                      <p>${arr[i].strDescription}</p>
              </div>
      </div>
      `;
  }

  data.innerHTML = cartoona;
}

function showCont() {
  close()
  data.innerHTML = `<div class="contact min-vh-100 d-flex justify-content-center align-items-center">
    <div class="container w-75 text-center">
        <div class="row g-4">
            <div class="col-md-6">
                <input id="nameInput" onkeyup="inputsValidation()" type="text" class="form-control" placeholder="Enter Your Name">
                <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Special characters and numbers not allowed
                </div>
            </div>
            <div class="col-md-6">
                <input id="emailInput" onkeyup="inputsValidation()" type="email" class="form-control " placeholder="Enter Your Email">
                <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Email not valid *exemple@yyy.zzz
                </div>
            </div>
            <div class="col-md-6">
                <input id="phoneInput" onkeyup="inputsValidation()" type="text" class="form-control " placeholder="Enter Your Phone">
                <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid Phone Number
                </div>
            </div>
            <div class="col-md-6">
                <input id="ageInput" onkeyup="inputsValidation()" type="number" class="form-control " placeholder="Enter Your Age">
                <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid age
                </div>
            </div>
            <div class="col-md-6">
                <input  id="passwordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Enter Your Password">
                <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid password *Minimum eight characters, at least one letter and one number:*
                </div>
            </div>
            <div class="col-md-6">
                <input  id="repasswordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Repassword">
                <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid repassword 
                </div>
            </div>
        </div>
        <button id="submitBtn" disabled class="btn btn-outline-danger px-2 mt-3">Submit</button>
    </div>
</div> `;
  let submitBtn = document.getElementById("submitBtn");
}

let submitBtn = document.getElementById("submitBtn");

function inputsValidation() {
  if (nameValidation()) {
    document.getElementById("nameAlert").classList.replace("d-block", "d-none");
  } else {
    document.getElementById("nameAlert").classList.replace("d-none", "d-block");
  }

  if (emailValidation()) {
    document
      .getElementById("emailAlert")
      .classList.replace("d-block", "d-none");
  } else {
    document
      .getElementById("emailAlert")
      .classList.replace("d-none", "d-block");
  }

  if (phoneValidation()) {
    document
      .getElementById("phoneAlert")
      .classList.replace("d-block", "d-none");
  } else {
    document
      .getElementById("phoneAlert")
      .classList.replace("d-none", "d-block");
  }

  if (ageValidation()) {
    document.getElementById("ageAlert").classList.replace("d-block", "d-none");
  } else {
    document.getElementById("ageAlert").classList.replace("d-none", "d-block");
  }

  if (passwordValidation()) {
    document
      .getElementById("passwordAlert")
      .classList.replace("d-block", "d-none");
  } else {
    document
      .getElementById("passwordAlert")
      .classList.replace("d-none", "d-block");
  }

  if (repasswordValidation()) {
    document
      .getElementById("repasswordAlert")
      .classList.replace("d-block", "d-none");
  } else {
    document
      .getElementById("repasswordAlert")
      .classList.replace("d-none", "d-block");
  }

  if (
    nameValidation() &&
    emailValidation() &&
    phoneValidation() &&
    ageValidation() &&
    passwordValidation() &&
    repasswordValidation()
  ) {
    submitBtn.removeAttribute("disabled");
  } else {
    submitBtn.setAttribute("disabled", true);
  }
}

function nameValidation() {
  return /^[a-zA-Z ]+$/.test(document.getElementById("nameInput").value);
}

function emailValidation() {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    document.getElementById("emailInput").value
  );
}

function phoneValidation() {
  return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
    document.getElementById("phoneInput").value
  );
}

function ageValidation() {
  return /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(
    document.getElementById("ageInput").value
  );
}

function passwordValidation() {
  return /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(
    document.getElementById("passwordInput").value
  );
}

function repasswordValidation() {
  return (
    document.getElementById("repasswordInput").value ==
    document.getElementById("passwordInput").value
  );
}
