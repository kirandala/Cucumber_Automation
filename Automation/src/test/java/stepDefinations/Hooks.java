package stepDefinations;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {

	//Before tag will run for every scenario 
	// when tag is also included like @smoke this will help to specify to add this prerequisite for only few testcases.
	// We cannot use hooks and background together it will be used for the same purpose so it depends on application how its build
	@Before("@smoke")
	public void beforeValidation() {
		System.out.println("inside hooks and before validation steps has to be added.");
	
	}
	
	@After("@smoke")
	public void afterrun() {
		
	}

	@Before("@regression")
	public void openbrowser() {
		System.out.println("inside hooks and before validation steps has to be added.");
	
	}
	
	@After("@regression")
	public void closebrowser() {
		
	}
}
