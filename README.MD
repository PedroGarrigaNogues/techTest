This is a technical test.

 Before starting to explain the test I wanna say thanks for providing me the oportunity of doing this test, that said, I'll start the explanation.

Part 1:

The automated cypress task done required the search of images of dogs via google.

Part 2:

Enviroment: https://punkapi.com/documentation/v2

Scenario: Validating the Punk API
Given I call the punk api with beer id 192
Then I expect a 200 status response
And The malt is “Extra Pale”
And The malt value is 5.3 and the unit is “kilograms”

Due some technical issues I had with JAVA SE when installing cucumber in my PC and me not having any experience with cucumber I'll just do a quick explanation of how I'd manually do the test and explain my comprehension of it instead automating the test since I don't have the tools to do it right now.

The gherkin scenario being described is a GET scenario where the purpose is retrieving information from the server from the endpoint in order to gain information from it.

The scenario is made of 4 steps that would be inside a feature file where the first one calls the "https://api.punkapi.com/v2/beers/192" endpoint, the next one would check that it recieves a server status 200, an ok status, and finally, the remaining ones, check “Extra Pale”, malt value is 5.3 and the unit is “kilograms” among the information the endpoint provides us and the way to achieve that would be via calling the steps in a diferent file that describe how the feature works.

Going to the URL "https://api.punkapi.com/v2/beers/192" we can manually check via POSTMAN (or google) that the conditions described in the scenario are indeed happening and the test would return positive.



