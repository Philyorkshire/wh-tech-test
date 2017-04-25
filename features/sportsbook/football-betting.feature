Feature: Placing a bet on football from Sportsbook Home
    As a William Hill member interested in football
    I want to place a bet on football
    So that I win money

Scenario Outline: Place bet on an upcoming sport
    Given I am on a <sport> event page
     When I place a <wager> bet on a match
     Then my bet is shown in my open bets slip

Examples:
	| sport     | wager |
	| football  | 0.05  |
	| tennis    | 0.05  |