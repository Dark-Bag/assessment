const { Builder, By, until, Select  } = require('selenium-webdriver');
const assert = require('assert');
const { describe, it, before, after } = require('mocha');


// describe block

describe("Automation Test", function(){
  
  let driver;

  before(async function () {

    driver = await new Builder().forBrowser('firefox').build();

    await driver.get('https://rahulshettyacademy.com/AutomationPractice/');
});


  async function isOnlyOneRadioButtonChecked(radioButtons) {
    let checkedCount = 0;
    for (let radioButton of radioButtons) {
        const isSelected = await radioButton.isSelected();
        if (isSelected) {
            checkedCount++;
        }
    }
    return checkedCount === 1;
}

// it block
it("should check radio button 3 and validate only one is checked", async function(){
 

  const radioButton = await driver.findElement(By.css('#radio-btn-example > fieldset:nth-child(1) > label:nth-child(4) > input:nth-child(1)'));
  await radioButton.click();

  const radioButtons = await driver.findElements(By.name('radioButton'));
  const isOnlyOneChecked = await isOnlyOneRadioButtonChecked(radioButtons);
  assert.strictEqual(isOnlyOneChecked, true, 'Only one radio button should be checked');

  const isThirdChecked = await radioButton.isSelected();
  assert.strictEqual(isThirdChecked, true, 'The third radio button should be checked');

});

it("should check radio button 2 and validate only one is checked", async function(){
 

  const radioButton = await driver.findElement(By.css('#radio-btn-example > fieldset:nth-child(1) > label:nth-child(3) > input:nth-child(1)'));
  await radioButton.click();

  const radioButtons = await driver.findElements(By.name('radioButton'));
  const isOnlyOneChecked = await isOnlyOneRadioButtonChecked(radioButtons);
  assert.strictEqual(isOnlyOneChecked, true, 'Only one radio button should be checked');

  const isSecondChecked = await radioButton.isSelected();
  assert.strictEqual(isSecondChecked, true, 'The second radio button should be checked');

});

it('should type "South" and select "South Africa" from suggestions', async function () {

 

  // Type "South" into the suggestion field
  const suggestionField = await driver.findElement(By.css('#autocomplete'));
  await suggestionField.sendKeys('South');

  // Wait for suggestions to appear and select "South Africa"
  await driver.wait(until.elementLocated(By.css('#ui-id-1')), 5000);
  
  const suggestions = await driver.findElements(By.xpath('//*[@id="ui-id-3"]'));

  if (suggestions.length > 0) {
    // Find and click "South Africa"
    for (let suggestion of suggestions) {
        const text = await suggestion.getText();
        if (text === 'South Africa') {
          await suggestion.click();
          break;
      }
    }

    // Validate the selection
    const selectedValue = await suggestionField.getAttribute('value');
    assert.strictEqual(selectedValue, 'South Africa', 'The selected suggestion should be "South Africa"');
} else {
    throw new Error('No suggestions found');
}
 
});

it('should check all checkboxes and validate they are all checked', async function () {

    

  const checkboxes = await driver.findElements(By.xpath('//input[@type="checkbox" and starts-with(@id,"checkBoxOption")]'));
        // Check all checkboxes
        for (let checkbox of checkboxes) {
            if (!(await checkbox.isSelected())) {
                await checkbox.click();
            }
        }

        for (let checkbox of checkboxes) {
          assert.strictEqual(await checkbox.isSelected(), true, 'Checkbox should be checked');
      }
});

it('should uncheck the first checkbox and validate the other two remain checked', async function () {
  
 
  // Find all checkboxes matching the XPath selector
  const checkboxes = await driver.findElements(By.xpath('//input[@type="checkbox" and starts-with(@id,"checkBoxOption")]'));

  // Uncheck the first checkbox
  if (await checkboxes[0].isSelected()) {
      await checkboxes[0].click();
  }

  // Validate the first checkbox is unchecked
  assert.strictEqual(await checkboxes[0].isSelected(), false, 'First checkbox should be unchecked');

  // Validate the other checkboxes are still checked
  for (let i = 1; i < checkboxes.length; i++) {
      assert.strictEqual(await checkboxes[i].isSelected(), true, `Checkbox ${i + 1} should be checked`);
  }
});

it('should hide the element when the hide button is clicked', async function () {

 
  // Find the hide button and the element to be hidden
  const hideButton = await driver.findElement(By.css('#hide-textbox'));
  const elementToHide = await driver.findElement(By.css('#displayed-text'));

  // Click the hide button
  await hideButton.click();

  // Validate that the element is hidden
  await driver.wait(until.elementIsNotVisible(elementToHide), 5000);
  const isDisplayed = await elementToHide.isDisplayed();
  assert.strictEqual(isDisplayed, false, 'The element should be hidden');
});

it('should show the element when the show button is clicked', async function () {

  
  // Find the show button and the element to be shown
  const showButton = await driver.findElement(By.css('#show-textbox')); 
  const elementToShow = await driver.findElement(By.css('#displayed-text')); // Replace with the actual ID or selector

  // Click the show button
  await showButton.click();

  // Validate that the element is shown
  await driver.wait(until.elementIsVisible(elementToShow), 5000);
  const isDisplayed = await elementToShow.isDisplayed();
  assert.strictEqual(isDisplayed, true, 'The element should be shown');
});

it("should validate that the amount for 'Joe Postman' from 'Chennai' is 46", async function () {


  // Locate the row for Joe Postman from Chennai
  const row = await driver.findElement(By.xpath("/html/body/div[3]/div[2]/fieldset[2]/div[1]/table/tbody/tr[6]/td[2]"));
  
  // Get the amount from the located row
  const amountCell = await row.findElement(By.xpath("/html/body/div[3]/div[2]/fieldset[2]/div[1]/table/tbody/tr[6]/td[4]"));
  const amount = await amountCell.getText();
  
  // Validate the amount
  assert.strictEqual(amount, '46', "The amount for 'Joe Postman' from 'Chennai' should be 46");
});

it('should validate that the total amount collected is 296', async function () {

  
  // Get the total amount element
  const totalAmountCell = await driver.findElement(By.css('.totalAmount'));
  const totalAmount = await totalAmountCell.getText();
  
  // Validate the total amount
  assert.strictEqual(totalAmount, 'Total Amount Collected: 296', 'The total amount collected should be 296');
});

it('should validate that the page has an iframe', async function () {

 
  // Find the iframe
  const iframe = await driver.findElement(By.tagName('iframe'));
  
  // Validate that the iframe is present
  assert.ok(iframe, 'The page should have an iframe');
});

});

