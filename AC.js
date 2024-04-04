$get(age)
$eval

// Age calculator
// enable phrase please
// By npxcd#0000

var mac = $messageAfterCommand

var currentDate = new Date();
var year = currentDate.getFullYear();

try {
  age = year - mac
} catch(error) {
  age = "`Error please remove space for symbols or a letter`"
}
$halt