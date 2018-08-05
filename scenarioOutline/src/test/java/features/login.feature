Feature: Check login variation 

Scenario Outline: Login with various credentials 

	Given user navigates to url "<url>" 
	When user clicks on the login portal 
	And the username is "<username>" 
	And the password is "<password>" 
	And user clicks on login button 
	Then the message test is "<message>" 
	
	Examples: 
	
		|url								|username|password|message|
		|http://www.webdriveruniversity.com | webdriver3 |inchhigh |validation failed|
		|http://www.webdriveruniversity.com | webdriver |webdriver123 |validation succeeded|