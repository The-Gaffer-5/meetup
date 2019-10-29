Feature: Specify the number of events to be shown

Scenario: By default, when user hasn’t specified an amount show the default of 32
    Given user hasn’t changed the event amount
    When the user opens the app
    Then the user should see the list of 32 upcoming events 

Scenario: User changes the amount of events seen
    Given user opens the app
    When user changes the number in the events shown box
    Then the user should receive the same number of events specified 