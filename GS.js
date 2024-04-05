$eval

//
// google search
//
// made by npxcd (voix)
//
// enable phrase
//

msg = "$messageAfterCommand"
search = msg.split(" ").join("+")

site = "https://www.google.com/search?q=" + search

reply = "[" + msg + " - Google Search](" + site + ")"

$halt $get(reply)