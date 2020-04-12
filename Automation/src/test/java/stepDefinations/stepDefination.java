package stepDefinations;

import java.util.List;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class stepDefination {

	
	@Given("^User is on landing page$")
	public void user_is_on_landing_page()
	{
		System.out.println("User is on landing page");
	}
    @When("^User login into applicaion with username\"([^\"]*)\" and password \"([^\"]*)\"$")
    public void user_login_into_applicaion_with_usernamesomething_and_password_something(String strArg1, String strArg2)  {
       
    }
    
	@Then("^Home page is displayed$")
	public void Naviated_homepage()
	{
		System.out.println("Home page is displayed");
	}
	@And("^logo is displayed$")
	public void logo_validation()
	{
		System.out.println("logo is displayed");
	}
	
    @When("^User login into application without valid username and passord$")
    public void user_login_into_application_without_valid_username_and_passord()  {
        System.out.println("User login into application without valid username and passord");
    }

    @Then("^Home page should not be displayed$")
    public void home_page_should_not_be_displayed()  {
        System.out.println("Home page should not be displayed");
    }

    @But("^error message should be displayed$")
    public void error_message_should_be_displayed()  {
    	System.out.println("error message should be displayed");
 
        
    }	

    @And("^Title is displayed \"([^\"]*)\"$")
    public void title_is_displayed_something(String strArg1)  {
    	System.out.println(strArg1);
     //Single argument with boolean results can be taken in order to check if its true or false so same method can be re used for many keyworddefinitions.
    
    }

    @When("^User clicks on signup button$")
    public void user_clicks_on_signup_button()  {
        
    }

    @Then("^user account should be created$")
    public void user_account_should_be_created()  {
    	System.out.println("Account is created");
    }

    @And("^user enter the details$")
    public void user_enter_the_details(DataTable data)  {
    	// we used Cucumber datatable concept where the data will be stored inside a table as an object and we can check by converting it into a list<list>
    	// and print each of them this will be used when there is lot of data inputs to be given to the particular method.  	
    	List<List<String>> obj=data.raw();
    	System.out.println(obj.get(0).get(0));
    	System.out.println(obj.get(0).get(1));
    	System.out.println(obj.get(0).get(2));
    	System.out.println(obj.get(0).get(3));
    }
    


}
