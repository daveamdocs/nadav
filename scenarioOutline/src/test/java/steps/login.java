package steps;

import static org.testng.Assert.assertEquals;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class login {

	WebDriver driver;
	
	@Before
	public void setup() throws IOException {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\davidbro\\Desktop\\ScenarioOutline\\scenarioOutline\\src\\test\\java\\resources\\chromedriver.exe");
		this.driver = new ChromeDriver();
		this.driver.manage().window().maximize();
		this.driver.manage().timeouts().pageLoadTimeout(120, TimeUnit.SECONDS);
	}
	
	
	@Given("^user navigates to url \"([^\"]*)\"$")
	public void user_navigates_to_url(String url) throws Throwable {
	    driver.get(url);
	}

	@When("^user clicks on the login portal$")
	public void user_clicks_on_the_login_portal() throws Throwable {
	    driver.findElement(By.id("login-portal")).click();
	    	}

	@And("^the username is \"([^\"]*)\"$")
	public void the_username_is(String username) throws Throwable {
	    // tab code
		for (String windHandle : driver.getWindowHandles()) {
		driver.switchTo().window(windHandle);
		}
		driver.findElement(By.id("text")).sendKeys(username);
	    
	}

	@And("^the password is \"([^\"]*)\"$")
	public void the_password_is(String password) throws Throwable {
	    driver.findElement(By.id("password")).sendKeys(password);
	    
	}

	@And("^user clicks on login button$")
	public void user_clicks_on_login_button() throws Throwable {
	    driver.findElement(By.id("login-button")).click();
	    
	}

	@Then("^the message test is \"([^\"]*)\"$")
	public void the_message_test_is(String message) throws Throwable {
	   Alert alert =  driver.switchTo().alert();
	 
	   assertEquals (alert.getText().toString().toLowerCase().replaceAll("\\s", ""), message.toLowerCase().replaceAll("\\s",""));

	    alert.accept();
	    
	}


	@After
	public void tearDown() {
		driver.manage().deleteAllCookies();
		driver.close();
		driver.quit();
	}

}
