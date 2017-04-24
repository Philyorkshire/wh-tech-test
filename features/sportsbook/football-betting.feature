Feature: Placing a bet on football from Sportsbook Home
    As a William Hill member interested in football
    I want to place a bet on football
    So that I win money

Background:
    Given I am logged in

@mobile @desktop
Scenario: Place bet on an upcoming match
     When I am on a football event page
      And I place a bet on a match
     Then my bet is shown in my open bets slip