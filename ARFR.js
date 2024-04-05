$eval

// enable phrase please

title = "HUH"
botid = "$botID"
mID = "$mentionedID"
Id = "$ID"
mac = "$messageAfterCommand"

if (mID === botid) {reply = "nahhhh bros gonna roast myself💀"}
else if (mID === Id) {reply = "nahhhh bros gonna roast yourself💀"}
else if (mac === " <@" + mID + ">") {title = "Roasting $mentionedName🔥🔥🔥🔥", reply = "$random{If $mentionedName's life was a movie, I'd probably leave before the end credits|$mentionedName You're the reason the gene pool needs a lifeguard.I'd roast you, but I'm pretty sure nature already did|$mentionedName is a human equivalent of a participation award|$mentionedName like Mondays, nobody likes you, but you just keep showing up|I'd call $mentionedName a tool, but even that would be an insult to useful things|$mentionedName is the reason aliens won't talk to us|$mentionedName Are you always this awkward, or is it just when you're breathing?|If brains were dynamite, $mentionedName wouldn't have enough to blow your nose|$mentionedName's family tree must be a cactus because everybody on it is a prick.}"}
else {reply = "NAHHH WHO THE FREAK IS " + mac}

msg = "# " + title + "\n" + reply

$halt $get(msg)