# Form Validation Tips Every Web Developer Should Know!


<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=2 orderedList=false} -->

<!-- code_chunk_output -->

- [Tip 01: Use the Correct HTML Input Types](#tip-01-use-the-correct-html-input-types)
- [Tip 02: Built-in HTML Validators](#tip-02-built-in-html-validators)
- [Tip 03: Using Regex for Pattern Matching](#tip-03-using-regex-for-pattern-matching)
- [Tip 04: Custom Tooltip Validation Messages](#tip-04-custom-tooltip-validation-messages)
- [Tip 05: Create Custom Tooltip Messages with JavaScript](#tip-05-create-custom-tooltip-messages-with-javascript)
- [Tip 06: Avoid Early Validation](#tip-06-avoid-early-validation)
- [Tip 07: Specific Validation Messages](#tip-07-specific-validation-messages)
- [Tip 08: Static Height for Error Messages](#tip-08-static-height-for-error-messages)
- [Tip 09: Highlight Errors with Danger Indicators](#tip-09-highlight-errors-with-danger-indicators)
- [Tip 10: Remove Error Messages When Fixed](#tip-10-remove-error-messages-when-fixed)
- [Tip 11: Indicate Required Fields With Red asterisk](#tip-11-indicate-required-fields-with-red-asterisk)
- [Tip 12: Always Perform Server-side Validation](#tip-12-always-perform-server-side-validation)
- [Tip 13: Ensure your form is not only usable but also accessible](#tip-13-ensure-your-form-is-not-only-usable-but-also-accessible)

<!-- /code_chunk_output -->

## Tip 01: Use the Correct HTML Input Types
If you set the input type as "text" for a password field, the password will not be obscured as you type. Similarly, if you use the "text" input type for an email field, the browser's default email pattern check will not be triggered.

When you use the correct input type, the password field will obscure the characters being typed, which is the desired behavior. Additionally, if you type an incorrect email address in the email field, the browser will notify you with a pop-up because of the built-in validation it provides.

**Use the Correct HTML Input Types**
- Email should use `type="email"`.
- Password should use `type="password"`.
- Confirm Password should also use `type="password"`.

## Tip 02: Built-in HTML Validators
To ensure that the username field contains valid data, mark it as "required." If the user tries to submit the form without filling in this field, the browser will prompt them to complete it. You can also restrict the number of characters by using the `minlength` attribute.

**Built-in HTML Validators**
- For Username, mark it as "required." If empty upon submission, the browser will ask: `"Please fill out this field."`
- Use `minlength="5"` to require a minimum of five characters.

---

## Tip 03: Using Regex for Pattern Matching
   - For instance, to require a number in the username, use the pattern attribute: `pattern="^[0-9]+$"`.
   - If a string is entered instead of a number, an HTML tooltip will appear, prompting: "Please match the requested format."

## Tip 04: Custom Tooltip Validation Messages
   - Use the `title` attribute to display custom tooltips. For example, on the username field, set `title="Username must be at least 5 characters and include a number."`

## Tip 05: Create Custom Tooltip Messages with JavaScript
   - `reportValidity()` is a method available on form elements (`<form>`, `<input>`, `<select>`, `<textarea>`, etc.) that triggers the browser's built-in form validation.
   - `setCustomValidity(message)` is a method on input elements that lets you set a custom validation message, overriding the browser’s default message for specific constraints.

## Tip 06: Avoid Early Validation
   - Wait until the user moves to the next input or loses focus on the current input before validating. Replace the `onInput` event handler with `onChange` for this purpose.

## Tip 07: Specific Validation Messages
   - Suppose validation accepts both letters and numbers and requires a minimum of 8 characters. If the user enters "james," they’ll get an error saying a number is also needed. If they type "james12" but it's too short, they’ll get an error saying it should be a minimum of 8 characters. Show errors when the user moves to the next field.

## Tip 08: Static Height for Error Messages
   - Error messages can shift the UI layout, which may look unappealing. Set a fixed height for error messages to prevent this shifting and maintain the form's appearance.

## Tip 09: Highlight Errors with Danger Indicators
   - Use a red color, danger icon, or tooltip for errors if it fits your UI guidelines. Ensure the tooltip is accessible for screen readers.
   - Highlight the input field with a red border when there’s an error.

## Tip 10: Remove Error Messages When Fixed
   - Clear error messages as soon as the user meets the required conditions.

## Tip 11: Indicate Required Fields With Red asterisk
   - How do you know if a field is required? A visual clue, right? 
   - The red asterisk (*) is one of the most common visual patterns used to indicate that a field is required.
   - It allows users to quickly identify mandatory fields, reducing trial and error and speeding up form completion.

## Tip 12: Always Perform Server-side Validation
   - Frontend validation can be bypassed if someone tampers with the form or submits it via Postman. Server-side validation is crucial for security.

## Tip 13: Ensure your form is not only usable but also accessible
   - Adding validation to improve a form's usability is only half the challenge. The other half is ensuring the form is accessible, meaning that individuals with disabilities can understand whether a field is invalid and know how to correct it.
   - Accessibility ensures everyone can access the content, while usability focuses on how easy it is to use the website. Together, they create the best possible user experience.
   - From an accessibility perspective, we must ensure that everyone not only knows the field is invalid but also understands the error message.


### Medium Article

- [Medium - Form Validation Tips Every Web Developer Should Know!](https://medium.com/helpshift-engineering/form-validation-tips-every-web-developer-should-know-9d966d8fd571)