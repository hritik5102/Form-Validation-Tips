## Form Validation Tips Every Web Developer Should Know!

### Problem:
If you set the input type as "text" for a password field, the password will not be obscured as you type. Similarly, if you use the "text" input type for an email field, the browser's default email pattern check will not be triggered.

When you use the correct input type, the password field will obscure the characters being typed, which is the desired behavior. Additionally, if you type an incorrect email address in the email field, the browser will notify you with a pop-up because of the built-in validation it provides.

### Tip:

1. **Use the Correct HTML Input Types**
   - Email should use `type="email"`.
   - Password should use `type="password"`.
   - Confirm Password should also use `type="password"`.

### Problem:
To ensure that the username field contains valid data, mark it as "required." If the user tries to submit the form without filling in this field, the browser will prompt them to complete it. You can also restrict the number of characters by using the `minlength` attribute.

### Tip:

2. **Built-in HTML Validators**
   - For Username, mark it as "required." If empty upon submission, the browser will ask: `"Please fill out this field."`
   - Use `minlength="5"` to require a minimum of five characters.

---

3. **Using Regex for Pattern Matching**
   - For instance, to require a number in the username, use the pattern attribute: `pattern="^[0-9]+$"`.
   - If a string is entered instead of a number, an HTML tooltip will appear, prompting: "Please match the requested format."

4. **Custom Tooltip Validation Messages**
   - Use the `title` attribute to display custom tooltips. For example, on the username field, set `title="Username must be at least 5 characters and include a number."`

5. **Create Custom Tooltip Messages with JavaScript**
   - `reportValidity()` is a method available on form elements (`<form>`, `<input>`, `<select>`, `<textarea>`, etc.) that triggers the browser's built-in form validation.
   - `setCustomValidity(message)` is a method on input elements that lets you set a custom validation message, overriding the browser’s default message for specific constraints.

6. **Avoid Early Validation**
   - Wait until the user moves to the next input or loses focus on the current input before validating. Replace the `onInput` event handler with `onChange` for this purpose.

7. **Specific Validation Messages**
   - Suppose validation accepts both letters and numbers and requires a minimum of 8 characters. If the user enters "james," they’ll get an error saying a number is also needed. If they type "james12" but it's too short, they’ll get an error saying it should be a minimum of 8 characters. Show errors when the user moves to the next field.

8. **Static Height for Error Messages**
   - Error messages can shift the UI layout, which may look unappealing. Set a fixed height for error messages to prevent this shifting and maintain the form's appearance.

9. **Highlight Errors with Danger Indicators**
   - Use a red color, danger icon, or tooltip for errors if it fits your UI guidelines. Ensure the tooltip is accessible for screen readers.
   - Highlight the input field with a red border when there’s an error.

10. **Remove Error Messages When Fixed**
    - Clear error messages as soon as the user meets the required conditions.

11. **Always Perform Server-side Validation**
    - Frontend validation can be bypassed if someone tampers with the form or submits it via Postman. Server-side validation is crucial for security.