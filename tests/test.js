

// Example of a test
/**
'Google Test': function(browser) {
	browser
		.url('http://www.google.com')
		.waitForElementVisible('body', 1000)
		.setValue('input[type=text]', 'nightwatch')
		.waitForElementVisible('button[name=btnG]', 1000)
		.click('button[name=btnG]')
		.pause(1000)
		.assert.containsText('#main', 'Night Watch')
		.end();
},
**/

module.exports = {

	// guest checkout
	'HB Guest Checkout': function(browser) {
		browser
			.url('http://development.web.henribendel.demandware.net/s/HB/handbags/')
			.waitForElementVisible('body', 1000)
			.waitForElementVisible('.product', 10000)
			.click('.product')
			.pause(2000)
			.waitForElementVisible('.addtocartbutton', 5000)
			.click('.addtocartbutton')
			.waitForElementVisible('a.linkminicart', 5000)
			.verify.containsText('a.linkminicart', '(1)')
			.click('a.linkminicart')
			.pause(2000)
			.waitForElementVisible('.formcheckout ', 25000)
			.pause(5000)
			.moveToElement('.formcheckout .cartCheckout', 10, 10)
			.click('.formcheckout .cartCheckout')
			.waitForElementVisible('button[name="dwfrm_login_unregistered"]', 15000)
			.moveToElement('.continuecheckoutbutton button', 10, 10)
			.click('.continuecheckoutbutton button')
			.pause(2000)
			.waitForElementVisible('#dwfrm_singleshipping_shippingAddress', 15000)
			.pause(2000)
			.setValue('#dwfrm_singleshipping_shippingAddress_addressFields_firstName', 'Example')
			.setValue('#dwfrm_singleshipping_shippingAddress_addressFields_lastName', 'Test')
			.setValue('#dwfrm_singleshipping_shippingAddress_addressFields_address1', '315 E Eisenhower Pkwy')
			.setValue('#dwfrm_singleshipping_shippingAddress_addressFields_city', 'Ann Arbor')
			.setValue('#dwfrm_singleshipping_shippingAddress_addressFields_states_state', 'MI')
			.setValue('#dwfrm_singleshipping_shippingAddress_addressFields_zip', '48108')
			.setValue('#dwfrm_singleshipping_shippingAddress_addressFields_phone', '7344187928')
			.verify.attributeEquals('#dwfrm_singleshipping_shippingAddress_useAsBillingAddress', 'checked', 'true')
			.verify.attributeEquals('#shipping-method-00004463660193', 'checked', 'true')
			.waitForElementVisible('button[name=dwfrm_singleshipping_shippingAddress_save]', 15000, false)
			.click('button[name=dwfrm_singleshipping_shippingAddress_save]')
			.pause(2000)
			.waitForElementVisible('#dwfrm_billing_billingAddress_email_emailAddress', 15000)
			.setValue('#dwfrm_billing_billingAddress_email_emailAddress', 'exampletester@example.com')
			.moveToElement('#is-CREDIT_CARD', 3, 3)
			.click('#is-CREDIT_CARD')
			.waitForElementVisible('#dwfrm_billing_paymentMethods_creditCard_owner', 15000)
			.setValue('#dwfrm_billing_paymentMethods_creditCard_owner', 'Example Test')
			.setValue('#dwfrm_billing_paymentMethods_creditCard_type', 'Visa')
			.setValue('#dwfrm_billing_paymentMethods_creditCard_number', '4111111111111111')
			.setValue('#dwfrm_billing_paymentMethods_creditCard_year', '2017')
			.setValue('#dwfrm_billing_paymentMethods_creditCard_cvn', '123')
			.moveToElement('button.continuecheckoutbutton', 10, 10)
			.click('button.continuecheckoutbutton')
			.pause(2000)
			.waitForElementVisible('button.placeOrder', 15000)
			.moveToElement('button.placeOrder', 10, 10)
			.click('button.placeOrder')
			.pause(2000)
			.waitForElementVisible('.thankyoumessage', 15000)
			.end();
	}
};
