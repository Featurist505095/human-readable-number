let first = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine"
};
let second = {
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen"
};
let third = {
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety"
};

function sorter(number) {
    if (number < 10) {
        return lessThanTen(number);
    }
    if (number < 20) {
        return lessThanTwenty(number);
    }
    if (number < 100) {
        return lessThanHundred(number);
    }
    if (number < 1000) {
        return lessThanThousand(number);
    }
}

function lessThanTen(number) {
    return first[number];
}

function lessThanTwenty(number) {
    return second[number];
}

function lessThanHundred(number) {
    if (number % 10 === 0) {
        return third[number];
    } else {
        return `${third[Math.floor(number / 10) * 10]} ${first[number % 10]}`;
    }
}

function lessThanThousand(number) {
    let result = "";

    result += `${first[Math.floor(number / 100)]} hundred`;

    if (number % 100 !== 0) {
        number = number - Math.floor(number / 100) * 100;
        result += " " + sorter(number);
    }
    return result;
}

module.exports = function toReadable(number) {
    return sorter(number);
};
