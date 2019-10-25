# TDR Design Documentation (ALPHA)
Design decisions and wireframe changes


## Design
We are working on 3 brand designs:
- GOV.UK Design System: https://design-system.service.gov.uk/  
- TNA Design System (one that is just being created for Legislation and all TNA digital services)
- Hybrid

The working prototype is in the GOV.UK design but no final decisions have been made.
(The decision will be as a result of business requirements, senior stakeholders and users responses to the designs.)
We want to do user research to establish feelings of trust and security in using the new TNA design.
2019-10-17: We are not going forward with the hybrid design.


## Persona
We are focusing (for now) on Persona Robert, the transferring body in other government departments.  


## User Journey
The user journey is divided in three stages/steps:  
1 Login + Upload  
2 Processing  
3 Transfer  



## Overall design decisions:
- Registration of user accounts will be done by us (for now)
- ‘Consignment’ replaces ‘batch’ in TDR as language used
- The users will need to comply with a list of things before using TDR (Transfer Agreement)
- The users will not have to fill out the digital transfer form for TDR (relevant questions will be covered by TDR)
- The users will not have to use DROID for TDR
- IE users will have to zip their files so they can upload a zip folder
- Collaboration between users will not be possible (for now)


## Challenges/Questions:
- Progress indicator bar (with clickable sections) on the top instead of GOV.UK Step indicator? Is that still accessible?
- Guidance specific to the task on each page?
- Series reference needs to be given by the user but it is created by TNA (loop?)
- Do we really need a consignment reference? Can we do without?
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


