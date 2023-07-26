const msgs = [
    "Hello, Nostr",
    "Hola, Nostr",
    "Ciao, Nostr", 
    "こんにちは, Nostr"
]

var index = 0

function changeMessage() {
    // Refresh DIV with new content.
    index = (index+1) % msgs.length
    document.getElementById("msg").innerHTML = msgs[index]
}

let reload = window.setInterval('changeMessage()', 1000);