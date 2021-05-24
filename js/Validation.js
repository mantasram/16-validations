class Validation {
  isValidFirstName(firstName) {
    if (typeof firstName !== 'string' || firstName === '') {
      return false;
    }
    if (firstName.length < 2) {
      return false;
    }
    if (firstName[0].toLowerCase() === firstName[0]) {
      return false;
    }
    if (firstName.slice(1).toLowerCase() !== firstName.slice(1)) {
      return false;
    }
    return true;
  }

  isValidLastName(lastName) {
    if (typeof lastName !== 'string' || lastName === '') {
      return false;
    }
    if (lastName.length < 2) {
      return false;
    }
    return true;
  }

  isValidEmail(email) {
    var mailformat = /^[^@]+@\w+(\.\w+)+\w$/;
    if(typeof email !== 'string')
      return false;  
    if (email.match(mailformat)) {
      return true;
    } else {
    return false;
  }
}

  isValidMessage(message) {
    if (typeof message !== 'string' || message === '') {
      return false;
    }
    return true;
  }

  isValidPhoneNumber(number) {
    if (typeof number !== 'number') {
      return false
    }
    return true;
  }

  /*isValidMonthName(month, lang) {
    const monthName = {
      lt: ['sausis', 'vasaris'],
      en: ['jan', 'fab']
    }
    if (!monthName[lang].includes(month)) {
      return false
    }
    return true ;
  }*/

  isValidWeekdayName() {
    return true;
  }

  isValidPersonID() {
    return true;
  }
}

module.exports = Validation;
