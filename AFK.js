$eval

// made by voixxx \\
// enable phrase \\

var afk$ID = afk$ID
var phrase = "$messageAfterCommand"
var message

cmd = "!afk" // your cmd here

if (phrase == " remove" && afk$ID != undefined) {
    message = "$name AFK Successfully removed"
    afk$ID = undefined
} else if (phrase == " remove" && afk$ID == undefined) {
    message = "Cannot remove. You didn't set the AFK"
} else if (phrase != " remove" && afk$ID == undefined) {
    message = "$name set your AFK:" + phrase + "\n\nTo remove your AFK, type `" + cmd + " remove`"
    afk$ID = phrase
} else if (phrase != " remove" && afk$ID != undefined) {
    message = "$name change your afk:" + phrase + "\n\nTo remove your AFK, type `" + cmd + " remove`"
    afk$ID = phrase
}

$halt
$get(message)