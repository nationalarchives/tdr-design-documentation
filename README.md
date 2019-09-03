# TDR Design Documentation (ALPHA)
Design decisions and wireframe changes



We are using the GOV.UK Design System: https://design-system.service.gov.uk/  
Edit: We are going to use the new TNA Design System that is going to be created for Legislation and all TNA digital services.  



We are focusing (for now) on Persona Robert, the transferring body in other government departments.  



The user journey is divided in three phases:  
1 Login + Upload  
2 Processing  
3 Transfer  




#### Overall design decisions:
- Registration of user accounts will be done by us (for now)
- ‘Consignment’ replaces ‘batch’ in TDR as language used
- The users will need to comply with a list of things before using TDR
- The users will not have to use DROID for TDR
- The users will not have to fill out the digital transfer form for TDR (relevant questions will be covered by TDR)
- Collaboration between users will not be possible for now


#### Challenges:
- Series ID / number
- IE 11 does not allow folder upload



## MVP

#### MVP design decisions:
Upload: 
- The user needs to be able to resume a transfer
- Both bulk upload and the ability to select individual files is a requirement

Processing/Transfer:
- There is a business need to capture as much descriptive/contextual data as possible - on file and consignment level

Transfer:
- The user will need to confirm warnings before transferring




## P.O.C.

#### P.O.C. design decisions:

Upload:
- Unlike MVP, we will not offer to resume or view history on dashboard
- Free text input field for series ID

Processing/Transfer:
- Unlike MVP, we will not capture any additional data

Transfer:
- The user only needs to confirm his/her selection of records before transferring






