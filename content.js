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
  const usernameValue = "Ajeet_Singh";
  const password = "*********"
  const commentValue = "This is a test comment.";

  // --- Autofill Logic ---
  const usernameInput = document.querySelector("input[name='username']"); //Selector for username field
  if (usernameInput) {
    // Fill the value of the input here
    usernameInput.value = usernameValue;
    // Trigger input event to notify the browser of the change
    const event = new Event('input', { bubbles: true });
    usernameInput.dispatchEvent(event);

    console.log(`Filled user name with: ${usernameValue}`);
  } else {
    console.log(`User name field not found.`);
  }

  const passwordInput = document.querySelector("input[name='password']"); //Selector for password field
  if (passwordInput) {
    // Fill the value of the input here
    passwordInput.value = password;
    // Trigger input event to notify the browser of the change
    const event = new Event('input', { bubbles: true });
    passwordInput.dispatchEvent(event);
    console.log(`Filled password with: ${password}`);
  } else {
    console.log(`Password field not found.`);
  }

  const commentsInput = document.querySelector("textarea[name='comments']"); //Selector for comments field
  if (commentsInput) {
    // Fill the value of the input here
    commentsInput.value = commentValue;
    // Trigger input event to notify the browser of the change
    const event = new Event('input', { bubbles: true });
    commentsInput.dispatchEvent(event);

    console.log(`Filled comment with: ${commentValue}`);
  } else {
    console.log(`Comment field not found.`);
  }

  // You can add more code here to target and fill other fields
}

autofill()