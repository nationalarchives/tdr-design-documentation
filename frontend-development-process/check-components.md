# Check components on consistency and completeness

Checklists for each component

### Paragraphs
* uses class govuk-body
```
<p class="govuk-body">govuk-body</p>
```

### Buttons
* have attribute 'data-prevent-double-click' if you are working in production and research shows that users are frequently sending information twice
* have data-module=govuk-button
* using a button group when two or more buttons are placed together}

Example 2 buttons:
```
<div class="govuk-button-group">
  <button class="govuk-button" data-module="govuk-button">
    Save and continue
  </button>

  <button class="govuk-button govuk-button--secondary" data-module="govuk-button">
    Save as draft
  </button>
</div>
```

Example 1 button 1 link:
```
<div class="govuk-button-group">
  <button class="govuk-button" data-module="govuk-button">
    Continue
  </button>

  <a class="govuk-link" href="#">Cancel</a>
</div>
```

### Checkboxes
* are aligned left
* are not pre-selected
* are grouped together in a <fieldset>
*  small version used when made less visually prominent
*  error message is above the checkboxes
  
### Details
* only used for information only some users will need
  
### Error messages
* only used for validation errors
* show in 2 places: by the input field and in error summary
* consists of: (1) message in red and underneath question and hint text (2) red border to connect with question (3) red border of input field
* has hidden 'Error' for screen readers
* don't use: form post error / unspecified error / forbidden / illegal / you forgot / prohibited / please / sorry / valid / invalid / oops
* don't be generic: an error occurred / answer the question / select an option / fill in the field / the field is required
* used instruction like " Enter your name " OR description like " Name must be XX characters "
* used existing template https://design-system.service.gov.uk/components/error-message/#use-error-message-templates 
  
### Error summary
* located at the top of the page (at the top of main container above <h1> but below breadcrumbs/back link)
* summarised all errors made on a page, even if it is just one
* has keyboard focus
* includes the heading "there is a problem"
* links to answer that caused error
 
### Fieldset
* used when you need to show a relationshio between multiple form inputs
  
### File upload
* only used if it is critical to the delivery of your service
* error message templates: Select a report / The selected file must be a PDF // smaller than 2MB / The selected file is empty / The selected file contains a virus / The selected file is password protected / The selected file could not be uploaded - try again / You can only select up to 10 files at the same time / The selected file must use the template
  
### Inset text
* used to differentiate a block of text from the content that surrounds it
* don't use for highlighting very important information (use warning text instead)
* use sparingly
* <div class="govuk-inset-text">...</div>
  
### Radio buttons
* used if users can only select one option from a list
* positioned left to their labels
* might need hint text telling user "Select one option"
* don't preselect
* includes 'none of the above' or 'i don't know' if they are valid options
* ordered alphabetically or most-to-least common
* grouped together in a <fieldset>
* displayed as inline when question has only two options which are short
* can have a text divider if an option is different from the others
* can have conditionally revealing content if short (fails WCAG but research showed success)
* small version used when made less visually prominent
  
### Select (Dropdown)
* used as last resort
* keep list as short as possible by asking question up front
* don't preselect
  
### Summary list
* used to present pairs of related information in a list
* don't use if a simple list or tabular data
* add actions like 'Change' but add visually hidden text to links for screen readers like 'Change name' to give context
=> action 'Change' should bring user to page with their answer pre-populated, let them change it, then return to 'Check answers' page
* use the govuk-summary-list__row--no-border class if you don't have actions and don't want borders
* part of 'Check answers' pattern which increases users' confidence and reduces error rates
* use full width (instead of 2/3) layout if answers are long and detailed
  
### Text input
* single line - don't use for longer answers (use textarea instead)
* has visible label (don't use placeholder)
* width is fluid and will fit to width of container by default but can be overwritten
* can use short hint text for majority of users
* for number input, set the inputmode attribute to numeric and the pattern attribute to [0-9]*
* turn off HTML5 validation by adding ‘novalidate’ to your form tags
* Do not add ‘required’ to your input fields
* for decimal numbers, use input type="text" without inputmode or pattern attributes (as inputmode decimal brings up keypad without decimal separator)
* Do not use <input type="number"> unless your user research shows that there’s a need for it
* Use prefixes and suffixes to help users enter things like currencies and measurements https://design-system.service.gov.uk/components/text-input/#prefixes-and-suffixes 
* Use the autocomplete attribute on text inputs to help users complete forms more quickly
* don't disable copy and paste
* for input that is not appropriate to spellcheck (like name/ref number), set the spellcheck attribute to false OR to true if it would be useful
  
### Textarea
* use to let users enter text that is longer than one line
* use a label (not a placeholder)
* make height of textarea proportional to the amount of text you expect users to enter by specifiying the rows attribute
* don't disable copy and paste
* use the character count component to limit the number of characters
* error message templates: Enter summary / Summary must be 400 characters or fewer // 10 characters or more // between 10 and 400 characters / Summary must not include ß and ü // letters a to z, hyphens, ...
  
# Warning text
* used to warn users about something important (like legal consequences)
* has hidden text 'Warning' that can be changed to something appropriate for your context
