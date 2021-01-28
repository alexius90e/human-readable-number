module.exports = function toReadable (number) {
  if (number === 0) return 'zero';
  let oneNineteen = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let decs = ['' , '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  let hundreds = number / 100 >= 1 ? oneNineteen[Math.floor(number / 100)] + ' hundred' : '';
  if (number > 100 && number % 100 !== 0){
      hundreds += ' ';
  }
  let tenth = number % 100;
  if (tenth === 0){
      tenth = '';
  } else if (tenth < 20){
      tenth = oneNineteen[tenth];
  } else {
    tenth = `${decs[Math.floor(tenth/10)]}${tenth%10>0 ? (' ' + oneNineteen[tenth%10]) : (oneNineteen[tenth%10])}`
  }
  return hundreds + tenth;
}
