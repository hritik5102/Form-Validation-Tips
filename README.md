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

