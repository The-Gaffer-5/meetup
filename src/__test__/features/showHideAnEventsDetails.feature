  
Feature: Show more information on an event when clicked

Scenario: By default, events are collapsed
    Given user opens the app
    When the user hasn't clicked on anything
    Then the user should see the list of collapsed events

Scenario: User should be able to click an event button to see details
    Given user opens the app
    When the user clicks on an event details button
    Then the user should see more information on that event

Scenario: User should be able to click an event button to see minimize details
    Given user opens the app
    And the event details are already showing
    When the user clicks on an event details button again
    Then the event detail should collapse