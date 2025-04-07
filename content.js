// online HTML form for this logic: https://testpages.herokuapp.com/styled/basic-html-form-test.html


function autofill() {
  console.log("Content script loaded!");

  // --- Logic to check duplicate autofill operations ---
  if (document.hasAutofilled) {
    console.log("Autofill already performed on this page.");
    return;
  }

  document.hasAutofilled = true;

  // --- Autofill Configuration ---
  const usernameValue = "";
  const password = ""
  const commentValue = "";

  // --- Autofill Logic ---
  const usernameInput = document.querySelector();
  if (usernameInput) {
    // Fill the value of the input here
    console.log(`Filled user name with: ${usernameValue}`);
  } else {
    console.log(`User name field not found.`);
  }

  const passwordInput = document.querySelector();
  if (passwordInput) {
    // Fill the value of the input here
    console.log(`Filled password with: ${password}`);
  } else {
    console.log(`Password field not found.`);
  }

  const commentsInput = document.querySelector();
  if (commentsInput) {
    // Fill the value of the input here
    console.log(`Filled comment with: ${commentValue}`);
  } else {
    console.log(`Comment field not found.`);
  }

  // You can add more code here to target and fill other fields
}

autofill()