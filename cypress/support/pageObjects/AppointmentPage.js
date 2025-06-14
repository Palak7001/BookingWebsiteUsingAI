class AppointmentPage {
  visit() {
    cy.visit('/appointment');
  }

  enterClientName(name) {
    cy.get('[data-cy=client-name]').clear().type(name);
  }

  enterEmail(email) {
    cy.get('[data-cy=email]').clear().type(email);
  }

  selectService(service) {
    cy.get('[data-cy=service]').select(service);
  }

  selectDate(date) {
    cy.get('[data-cy=date]').clear().type(date);
  }

  selectTime(time) {
    cy.get('[data-cy=time]').clear().type(time);
  }

  enterNotes(notes) {
    cy.get('[data-cy=notes]').clear().type(notes);
  }

  bookAppointment() {
    cy.get('[data-cy=book-appointment]').click();
  }

  verifyAppointmentListed(name) {
    cy.get('[data-cy=todays-appointments]').should('contain', name);
  }

  verifyValidationMessage(message) {
    cy.get('[data-cy=validation-message]').should('contain', message);
  }
}

export default AppointmentPage; 