# Form-Validation-Tips
Form Validation Tips Every Web Developer should know!

1. Use the correct HTML input types
   1. Email should be of type email
   2. Password should be of type password
   3. Confirm Password should be of type password

2. Built in HTML Validators
   1. For Username, we marked this as required, once you try to submit, the browser
  will asks for "Please fill out this field".
   2. You can put minlength="5" characters.

3. Using Regex pattern matching
    1. For now, we can assume that our username must contain a number so that the pattern attribute would look like this: **pattern="^[0-9]+$"**.
    2. If you enter a string instead of a number, then an HTML tooltip will pop up and say: "Please match the request format"

4. Custom tooltip Validation Message
    1. We can provide a title attribute to show the custom tooltip message.
    2. Let's provide a title attribute on username field, which will look like: title="Username must be of 5 charachter and include a number."

5. Create a custom tooltip message using Javascript methods
    1. `reportValidity()` is a method available on form elements (<form>, <input>, <select>, <textarea>, etc.) that triggers the browser's built-in HTML5 form validation and reports the validity of the form or an individual input element.
    2. `setCustomValidity(message)` is a method available on input elements (<input>, <select>, <textarea>) that allows you to set a custom validation message for that input. This method overrides the browser's default validation message for specific validation constraints (like required, pattern, etc.).
    3. Together, they provide a robust mechanism for client-side form validation in web applications.

6. Don't validate too early.
    1. Instead we should wait for user to tab to the next input or when the current input is not focused i.e user tab away from the current input
      -> We can do that by replacing onInput event handler to onChange event handler.
