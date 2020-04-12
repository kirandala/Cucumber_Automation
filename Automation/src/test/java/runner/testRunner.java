package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features= "src/test/java/features" , glue="stepDefinations",
tags="@smoke,@regression",plugin= {"pretty","html:target/cucumber","json:target/cucumber.json","junit:target/cukes.xml"})


//feature file executions should be triggered.
//glue will link the feature file and the step definitions file 
//tags will trigger only the scenarios which have that particular tags
//to add the reports features another tag call plugin also the output report also should be generated should be mentioned.
public class testRunner {
	
	

	

}
