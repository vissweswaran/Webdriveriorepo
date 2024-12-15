const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $, browser } = require('@wdio/globals')
const FBLoginPage = require('../pageobjects/facebookloginpage.js');

Given(/^I am on the facebook login page$/, async() => {
    await browser.url('https://www.facebook.com/');
});


When(/^I  login with username and password for facebook$/, async() => {
    await FBLoginPage.login();
});

Then(/^I should check url for facebook$/, async() => {
	let url = await browser.getUrl()
    console.log(url)
});

