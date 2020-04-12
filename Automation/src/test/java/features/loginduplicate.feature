Feature: Application login 

@regression
Scenario: Home page default login  
Given User is on landing page 
When User login into applicaion with username "kiran" and password "pass"
Then Home page is displayed
And logo is displayed
And Title is displayed "true"

@smoke
Scenario: Home page login failed
Given User is on landing page
When User login into applicaion with username "kiran" and password "pass"
Then Home page should not be displayed
But error message should be displayed
And Title is displayed "false"

@smoke
Scenario: User sign up
Given User is on landing page
When User clicks on signup button
And user enter the details  
| kiran | detail 1 | detail 2 | details 3 |
Then user account should be created

@regression
Scenario Outline: User loain 
Given User is on landing page 
When User login into applicaion with usernames <username> and passwords <Password>
Then Home page is displayed
And logo is displayed
And Title is displayed "true"

Examples:
|username|Password|
|user1 | pass1 |
|user2 | pass2 |
|user3 | pass3 |
 

