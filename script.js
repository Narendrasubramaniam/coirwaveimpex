var inquirymodal = document.getElementById("InquiryModal");

var mailmodal = document.getElementById("MailModal");

var product;

function sendInquiry(type) {
  inquirymodal.style.display = "block";
  product = type;
}


function sendMail() {
  mailmodal.style.display = "block";
}


function closeModal() {
  inquirymodal.style.display = "none";
  mailmodal.style.display = "none";
}

function submitMail() {
  mailmodal.style.display = "none";

  var mailId = document.getElementById("txtMail");
  var subject = document.getElementById("txtSubject");
  var message = document.getElementById("txtMessage");

  console.log('mail : ' + mailId.value);
  console.log('subject : ' + subject.value);
  console.log('message : ' + message.value);


  Swal.fire({
    title: "Good job!",
    text: "Inquiry sent successfully!",
    icon: "success"
  });
}


function validateMail() {

}

function validateInquiry() {
  var input = document.getElementById("email");

  var flag;

  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (emailPattern.test(input.value)) {
    flag = true; // Email is valid
  } else {
    flag = false; // Email is invalid

    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Enter a valid Email Id!",
    });
  }

  return flag;

}


function responsiveNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// function hideNav(){
//   var x = document.getElementById("myTopnav");
//   if (x.className !== "topnav") {
//     x.className += "topnav";
//   }
// }



function handleScreenResize() {
  var Icon = document.getElementById("Icon");

  if (window.innerWidth < 1000) {
    // Apply new styles when screen width is less than 1000px
    Icon.style.display = "block";
  } else {
    // Revert back to original styles when screen width is 1000px or more
    Icon.style.display = "none";
  }
}

// Run the function when the page loads
handleScreenResize();

// Add an event listener for when the screen is resized
window.addEventListener('resize', handleScreenResize);
// window.addEventListener('click', hideNav);

var spinner = document.getElementById("spinner");


var msgform = document.getElementById("formMessage");
msgform.addEventListener("submit" , e => {
  e.preventDefault();

  const currentDate = new Date().toISOString();
  document.getElementById("txtDate").value = currentDate;

  spinner.style.display = "flex";

  fetch(msgform.action , {
    method : "POST" ,
    body: new FormData(document.getElementById("formMessage")),
  }).then(
    Response => Response.json
  ).then((html) =>{
    Swal.fire({
      title: "Good job!",
      text: "Message submitted successfully!",
      icon: "success"
    });
    spinner.style.display = "none";
  })
})


var eqForm = document.getElementById("InquiryModal");
eqForm.addEventListener("submit", e => {
  e.preventDefault();

  spinner.style.display = "flex";
  inquirymodal.style.display = "none";

  const currentDate = new Date().toISOString();
  document.getElementById("eqDate").value = currentDate;
  document.getElementById("eqMessage").value = 'Enquiry';
  document.getElementById("eqSubject").value = product;


  fetch(eqForm.action, {
    method: "POST",
    body: new FormData(document.getElementById("InquiryModal")),
  }).then(
    Response => Response.json
  ).then((html) => {
    Swal.fire({
      title: "Good job!",
      text: "Message submitted successfully!",
      icon: "success"
    });
    
    spinner.style.display = "none";
  })
})