Feature: Facebook Website

    Scenario Outline: As a user, I can log into the secure area

        Given I am on the facebook login page
        When I  login with username and password for facebook
        Then I should check url for facebook