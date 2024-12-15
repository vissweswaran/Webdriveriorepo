const { $ } = require('@wdio/globals')

class FBLoginPage {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('//input[@id="email"]');
    }

    get inputPassword () {
        return $('//input[@id="pass"]');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login() {
        await this.inputUsername.setValue("Vissweswaran");
        await this.inputPassword.setValue("Visswes@27");
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    // open () {
    //     return super.open('login');
    // }
}

module.exports = new FBLoginPage();