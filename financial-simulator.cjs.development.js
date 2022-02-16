'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('uuid');

function isObject(value) {
  return typeof value === 'object' && value !== null;
}
function isNumber(value) {
  return typeof value === 'number';
}
function padLeft(s, pad) {
  var length = Math.max(s.length, pad.length);
  return ("" + pad + s).slice(pad.length + s.length - length);
}

(function (Currency) {
  Currency["USD"] = "USD";
})(exports.Currency || (exports.Currency = {}));
/**
 * Relative to a person's net worth, so positive added money to an
 * account, and negative removed it from a person's net worth.
 */


var Amount = /*#__PURE__*/function () {
  function Amount(currency, value) {
    this.currency = currency;
    this.value = value;

    if (!Number.isInteger(value)) {
      throw new Error("Amount value \"" + value + "\" must be an integer");
    }
  }

  Amount.fromJSON = function fromJSON(value) {
    if (!isObject(value)) {
      throw new Error('Amount JSON value must be an object');
    }

    if (!isNumber(value.value)) {
      throw new Error('Amount JSON value.value must be a number');
    }

    return new Amount(toCurrency(value.currency), value.value);
  };

  Amount.zero = function zero(currency) {
    return new Amount(currency, 0);
  };

  var _proto = Amount.prototype;

  _proto.add = function add(amount) {
    if (this.currency !== amount.currency) {
      throw new Error("Account does not support multiple currencies, found \"" + this.currency + "\" and \"" + amount.currency + "\"");
    }

    return new Amount(this.currency, this.value + amount.value);
  };

  _proto.subtract = function subtract(amount) {
    if (this.currency !== amount.currency) {
      throw new Error("Account does not support multiple currencies, found \"" + this.currency + "\" and \"" + amount.currency + "\"");
    }

    return new Amount(this.currency, this.value - amount.value);
  };

  _proto.toJSON = function toJSON() {
    return {
      currency: this.currency,
      value: this.value
    };
  };

  _proto.toString = function toString() {
    switch (this.currency) {
      case exports.Currency.USD:
        return Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(this.value / 100);

      default:
        throw new Error("Amount currency \"" + this.currency + "\" has no serializer");
    }
  };

  return Amount;
}();
var currencyValues = /*#__PURE__*/new Set( /*#__PURE__*/Object.values(exports.Currency));
function toCurrency(value) {
  if (!currencyValues.has(value)) {
    throw new Error("Currency value \"" + value + "\" is invalid");
  }

  return value;
}

var DAYS_PER_YEAR = 365.25;

(function (Month) {
  Month[Month["January"] = 1] = "January";
  Month[Month["February"] = 2] = "February";
  Month[Month["March"] = 3] = "March";
  Month[Month["April"] = 4] = "April";
  Month[Month["May"] = 5] = "May";
  Month[Month["June"] = 6] = "June";
  Month[Month["July"] = 7] = "July";
  Month[Month["August"] = 8] = "August";
  Month[Month["September"] = 9] = "September";
  Month[Month["October"] = 10] = "October";
  Month[Month["November"] = 11] = "November";
  Month[Month["December"] = 12] = "December";
})(exports.Month || (exports.Month = {}));

var CalendarDate = /*#__PURE__*/function () {
  function CalendarDate(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
    var value = new Date(year, month - 1, day);
    this.year = value.getFullYear();
    this.month = value.getMonth() + 1;
    this.day = value.getDate();
  }

  CalendarDate.fromDate = function fromDate(value) {
    return new CalendarDate(value.getFullYear(), value.getMonth() + 1, value.getDate());
  };

  CalendarDate.fromJSON = function fromJSON(value) {
    if (typeof value !== 'string') {
      throw new Error('CalendarDate JSON value must be a string');
    }

    return CalendarDate.fromString(value);
  }
  /**
   * Requires a "YYYY-MM-DD" format.
   */
  ;

  CalendarDate.fromString = function fromString(value) {
    if (value.length !== 10 || value[4] !== '-' || value[7] !== '-') {
      throw new Error("CalendarDate fromString value \"" + value + "\" is not a valid YYYY-MM-DD format");
    }

    return new CalendarDate(parseInt(value.slice(0, 4), 10), stringToMonth(value.slice(5, 7)), parseInt(value.slice(8, 10), 10));
  }
  /**
   * TODO: Add timezone support.
   */
  ;

  CalendarDate.today = function today() {
    return CalendarDate.fromDate(new Date());
  };

  var _proto = CalendarDate.prototype;

  _proto.addDays = function addDays(days) {
    return CalendarDate.fromDate(new Date(this.year, this.month - 1, this.day + days));
  };

  _proto.addMonths = function addMonths(months) {
    var date = CalendarDate.fromDate(new Date(this.year, this.month - 1 + months, this.day));
    var initialMonth = date.month;

    while (this.day !== date.day) {
      // Could turn to the next month if the destination month doens't
      // have enough days in it.
      date = date.addDays(months > 0 ? -1 : 1);

      if (date.month !== initialMonth) {
        if (months < 0) {
          // Go back to the last day of the previous month.
          return date.addDays(-1);
        }

        return date;
      }
    }

    return date;
  };

  _proto.addYears = function addYears(years) {
    return CalendarDate.fromDate(new Date(this.year + years, this.month - 1, this.day));
  }
  /**
   * For sorting.
   */
  ;

  _proto.compare = function compare(date) {
    return this.toString().localeCompare(date.toString());
  }
  /**
   * Positive means the date is in the past.
   */
  ;

  _proto.daysAfter = function daysAfter(date) {
    var diffMilliseconds = this.toDate().valueOf() - date.toDate().valueOf();
    return Math.floor(diffMilliseconds / MILLISECONDS_PER_DAY);
  }
  /**
   * Positive means the date is forward in time.
   */
  ;

  _proto.daysBefore = function daysBefore(date) {
    var diffMilliseconds = date.toDate().valueOf() - this.toDate().valueOf();
    return Math.floor(diffMilliseconds / MILLISECONDS_PER_DAY);
  }
  /**
   * Calling object is the subject being evaluated against the `target`.
   *
   * If the calling date has less days in it than the target month, then
   * this will return `true`.
   */
  ;

  _proto.isSameDayOfMonthAs = function isSameDayOfMonthAs(target) {
    if (this.day > target.day) {
      return false;
    }

    if (this.day < target.day) {
      var isLastDay = this.addDays(1).month !== this.month;
      return isLastDay;
    }

    return true;
  };

  _proto.toDate = function toDate() {
    return new Date(this.year, this.month - 1, this.day);
  };

  _proto.toJSON = function toJSON() {
    return this.toString();
  };

  _proto.toString = function toString() {
    var year = padLeft(this.year.toString(), '0000');
    var month = padLeft("" + this.month, '00');
    var day = padLeft(this.day.toString(), '00');
    return year + "-" + month + "-" + day;
  };

  return CalendarDate;
}(); // TODO: Fix for leap years.

var MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
var monthValues = /*#__PURE__*/new Set( /*#__PURE__*/Object.values(exports.Month));

function stringToMonth(value) {
  var month = parseInt(value, 10);

  if (!isMonth(month)) {
    throw new Error("Value \"" + value + "\" is not a valid month");
  }

  return month;
}

function isMonth(value) {
  return monthValues.has(value);
}
/**
 * a0 and a1 are the startsOn and endsOn properties of the first range,
 * respectively.
 *
 * b0 and b1 are the startsOn and endsOn properties of the second range,
 * respectively.
 */

function rangesOverlap(a0, a1, b0, b1) {
  if (!a1) {
    if (!a0 || !b1) {
      return true;
    }

    if (b1.daysAfter(a0) > -1) {
      return true;
    }

    return false;
  }

  if (!b1) {
    if (!b0) {
      return true;
    }

    if (a1.daysAfter(b0) > -1) {
      return true;
    }

    return false;
  }

  if (!a0) {
    if (!b0 || !a1) {
      return true;
    }

    if (a1.daysAfter(b0) > -1) {
      return true;
    }

    return false;
  }

  if (!b0) {
    if (!a0 || !b1) {
      return true;
    }

    if (b1.daysAfter(a0) > -1) {
      return true;
    }

    return false;
  }

  if (a0.daysBefore(b1) > -1 && a1.daysAfter(b0) > -1) {
    return true;
  }

  return false;
}

exports.Amount = Amount;
exports.CalendarDate = CalendarDate;
exports.DAYS_PER_YEAR = DAYS_PER_YEAR;
exports.isMonth = isMonth;
exports.rangesOverlap = rangesOverlap;
exports.toCurrency = toCurrency;
//# sourceMappingURL=financial-simulator.cjs.development.js.map
