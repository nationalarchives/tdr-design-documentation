# TDR Design Documentation (ALPHA & PRIVATE BETA)
2022: We created several prototypes using the prototype kit.
Success journey: (moved from https://tna-tdr-interactive-prototype.herokuapp.com/ to https://tdr-interactive-prototype.herokuapp.com/ to finally) https://interactive-tdr-prototype.herokuapp.com/dashboard with username and password 'tdr'.
Metadata: https://tdr-metadata-prototype.herokuapp.com/ with username 'tdr' and password 'testing'.
Court judgment: https://interactive-court-judgment.herokuapp.com/ with username 'court' and password 'judgment'.

2021: We use the GOVUK Prototype Kit for developing ideas, testing them out and also for user testing: https://tna-tdr-interactive-prototype.herokuapp.com/

2019/2020: We created two HTML prototypes (1: TDR in TNA Design and 2: TDR in a Hybrid Design) as well as wireframes for MVP and POC and a few separate pages that you can find in this repository. Wireframes are built in Sketch and kept updated with a git plugin (see **workflow.md** for how it works). You can either clone this repository and keep working with git or you can download these files from here or Objective (Digital Archiving - Projects and products - Transfer Digital Records - Documentation - Design) and keep working locally on your computer and decide for yourself how you want to share your files with others.


Below, design notes are taken to keep track of what is important for the designs and what decisions have been made.


## Design
2021: We decided to use the GOVUK Design System. However, we are not using the GDS Transport font. We are using Arial font instead. We mostly use components from the design system and if we modify them or create our own, we document it in the section 'Design Components'.

2019: We worked on 3 brand designs:
- GOV.UK Design System: https://design-system.service.gov.uk/  
- TNA Design System (one that is just being created for Legislation and all TNA digital services): http://nationalarchives.gov.uk/design-guide/
- Hybrid
The working prototype is in the GOV.UK design but no final decisions have been made.
(The decision will be a result of business requirements, senior stakeholders and users responses to the designs.)
We want to do user research to establish feelings of trust and security in using the new TNA design.

The hybrid design is not the most favoured option but might still be worth being tested with users.


## Design Components
We are using the following components from the GOVUK Design System:
- Button
- Checkboxes
- Error message
- Error summary
- Footer
- Header
- Inset text
- Notification banner
- Panel
- Phase banner
- Select
- Summary list
- Text input
- Warning text

#### Modified components
- Beta banner

We use the beta banner and changed the wording slightly. It says "This is a new service – your feedback will help us to improve it. Please get in touch (opens in new tab)." instead of "This is a new service – your feedback will help us to improve it.". The link is on "get in touch (opens in new tab)" rather than on "feedback". It also tells the user it opens in a new tab. Guidance around opening a new tab was found here https://design-system.service.gov.uk/styles/typography/#links. The link leads to our Contact page which is called 'Get in touch'.

- Success summary 

We use a modified error summary to display a success summary. Here is why: The success summary tells the user that the upload and checks were successful. This message does not even need any extra components, we could simply use a paragraph. However, for the majority of users adding a slight extra colour makes it even faster to process that it was a success. And the simplest version of this is to add a green frame. This is also consistent with the error summary which has a red frame. We are aware that there is the notification banner component (which might be the right component to use) but we decided that it is an overload and not suitable for us at this point. On the contrary, it makes it rather difficult to process as it uses a lot of different font styles.

#### Own components
- Drag and drop

## Progressive Enhancement
We use a progressive enhancement approach in our development as described here https://github.com/nationalarchives/front-end-development-guide/blob/master/development-guide.md

## User Journey
The user journey is divided in three stages:  
1. Upload (which includes the login)
2. Processing  
3. Transfer  



## Overall design decisions:
- Registration of user accounts will be done by us (for now)
- ‘Consignment’ replaces ‘batch’ in TDR as language used
- The users will need to comply with a list of things before using TDR (Transfer Agreement)
- The users will not have to fill out the digital transfer form for TDR (relevant questions will be covered by TDR)
- The users will not have to use DROID for TDR
- IE users will have to zip their files so they can upload a zip folder
- Collaboration between users will only be possible later (not in MVP)
- Users will be informed by email when a transfer has been successful and they can delete their copies


## Challenges/Questions:
- Progress indicator bar (with clickable sections) on the top instead of GOV.UK Step indicator? Is that still accessible?
- Guidance specific to the task on each page?
- Series reference needs to be given by the user but it is created by TNA (loop?)
- Do we really need a consignment reference? Can we do without?
- Upload with G Suite
- IE 11 does not allow folder upload => SOLUTION: add instructions for zip file
- Edge performance is slow
- Upload and Processing progress? How do we separate those two since the processing starts with the first uploaded file? How do we show the user? How do we avoid frustration of waiting?



## MVP

### MVP design decisions:
Upload:
- The user needs to be able to resume a transfer
- 'Service Agreements' is now called 'Transfer Agreement' (agreed with Nicki)
For the questions, we will use more direct,  plain language e.g. The records are all in English. (agreed with Sonia)
- Both bulk upload and the ability to select individual files is a requirement

Processing:
- Processing starts with the upload of the first file
- Upload and Processing (meaning the three checks) run parallel
- To show progress in a progressbar (with percentage) is possible
- To display the time remaining to the user is not feasible (because it depends on e.g. how many other users are uploading files at the same time)
- If there is a fail, we let the user know what the fail is related to and suggest an action (the user can only do something about anti-virus or file format errors)
In case of a checksum validation error, we let the user try the upload again and if it fails again, then let the user know that there is a problem with the service.
- There is a business need to capture as much descriptive/contextual data as possible - on file and consignment level.
It is in discussion if we let the user download a template (csv file) that they fill out and upload which is similar to what they have done in the manual process.

Transfer:
- The user will need to confirm warnings before transferring


## P.O.C.

### P.O.C. design decisions:

Upload:
Same as MVP, except
- We will not offer to resume or view history on dashboard
- Free text input field for series ID

Processing:
Same as MVP, except
- If there is a fail, the user has to start again
- We will not capture any additional data

Transfer:
- The user only needs to confirm his/her selection of records before transferring



## User testing results for the design

### 23/09/2019
- Optional fields were not noticed as such => need to be more obvious
- Historic was not clear to users => needs clarification or to be taken out
- Consignment was not familiar to users => needs clarification and maybe moved to the beginning
- Upload with G Suite and other systems are expected => will be integrated later
- Browse is commonly used => Drag and drop can be removed as it only makes this process more complicated
- Processing error message was not clear to users => needs to be helpful for users to be handled on their own
- Processing success message seems a little bit like the end => maybe go straight to Review page
- Review is useful => keep
- ‘Do not delete your copies’ warning is well placed => keep
- User expects to be notified by email about when transfer was safe and copies can be deleted => will be integrated later


## To Dos (as of 31/10/2019)

Improve current prototype
- Check all error messages / error handling
- Series description displayed to help users to choose right series reference?
- Take Consignment information page out
- Add a progress bar and message (do not close browser) in upload page
- Improve processing page and add message about what is happening
- Add message on processing success page that explains that it was saved as consignment XYZ (as soon as we actually save it as such)
- Display content that user has entered on previous pages (in case the user requested a new series reference which extends the review by series description and creating body) and change consignment reference to the automatically generated one
- Decide on message on last page about giving the user confirmation

Add to current prototype
- IE / Edge detection and different handling in the upload page
- Create guidance or help page
- Add additional metadata entry

## Licence

Unless stated otherwise, the codebase is released under the [MIT
License](LICENCE). This covers both the codebase and any sample code in the
documentation.

The documentation is [© Crown copyright][crown-copyright] and available under
the terms of the [Open Government 3.0 licence][ogl].

[crown-copyright]: https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/
[ogl]: http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/
