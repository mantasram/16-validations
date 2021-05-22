class Validation {
  isValidFirstName(FirstName) {
    if (FirstName === null || FirstName === '') {
      return false;
    }
  }

  isValidLastName() {
    return true;
  }

  isValidEmail() {
    return true;
  }

  isValidMessage(message) {
    if (typeof message !== 'string' || message === null || message === '') {
      return false;
    }
    return true;
  }

  isValidPhoneNumber() {
    return true;
  }

  isValidMonthName() {
    return true;
  }

  isValidWeekdayName() {
    return true;
  }

  isValidPersonID() {
    return true;
  }
}

module.exports = Validation;
