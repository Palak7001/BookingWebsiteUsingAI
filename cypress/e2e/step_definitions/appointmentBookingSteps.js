import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import AppointmentPage from '../../support/pageObjects/AppointmentPage';

const appointmentPage = new AppointmentPage();

Given('I am on the BookingPro appointment page', () => {
  appointmentPage.visit();
});

When('I enter {string} in the client name field', (name) => {
  appointmentPage.enterClientName(name);
});

When('I leave the client name field empty', () => {
  appointmentPage.enterClientName('');
});

When('I enter {string} in the email field', (email) => {
  appointmentPage.enterEmail(email);
});

When('I select {string} from the service dropdown', (service) => {
  appointmentPage.selectService(service);
});

When('I select date {string}', (date) => {
  appointmentPage.selectDate(date);
});

When('I select time {string}', (time) => {
  appointmentPage.selectTime(time);
});

When('I enter {string} in the notes field', (notes) => {
  appointmentPage.enterNotes(notes);
});

When('I click on the Book Appointment button', () => {
  appointmentPage.bookAppointment();
});

Then('I should see the appointment listed under Today\'s Appointments for {string}', (name) => {
  appointmentPage.verifyAppointmentListed(name);
});

Then('I should see a validation message saying {string}', (message) => {
  appointmentPage.verifyValidationMessage(message);
}); 