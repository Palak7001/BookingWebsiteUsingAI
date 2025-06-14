Feature: Appointment Booking

  As a user of the BookingPro app
  I want to be able to book appointments
  So that I can manage client meetings efficiently

  Background:
    Given I am on the BookingPro appointment page

  Scenario: Booking a new appointment with valid details
    When I enter "Alice Walker" in the client name field
    And I enter "alice@example.com" in the email field
    And I select "Consultation" from the service dropdown
    And I select date "14-12-2024"
    And I select time "9:00 AM"
    And I enter "First-time consultation" in the notes field
    And I click on the Book Appointment button
    Then I should see the appointment listed under Today's Appointments for "Alice Walker"

  Scenario: Booking an appointment with a missing required field
    When I leave the client name field empty
    And I enter "bob@example.com" in the email field
    And I select "Follow-up" from the service dropdown
    And I select date "14-12-2024"
    And I select time "10:00 AM"
    And I click on the Book Appointment button
    Then I should see a validation message saying "Client name is required"

  Scenario: Booking an appointment and verifying it appears in Today's Appointments
    When I enter "Charlie Green" in the client name field
    And I enter "charlie@example.com" in the email field
    And I select "Consultation" from the service dropdown
    And I select date "14-12-2024"
    And I select time "2:30 PM"
    And I enter "Repeat session" in the notes field
    And I click on the Book Appointment button
    Then I should see the appointment listed under Today's Appointments for "Charlie Green" 