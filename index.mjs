import express from 'express'
import bodyparser from 'body-parser'

// Import the package
import NDK from "@nostr-dev-kit/ndk";

const app = express()
app.use(bodyparser.json())

const port = process.env.PORT || 3000

const defaultRelays = [
    'wss://nostr.bitcoiner.social',
    'wss://nostr-pub.wellorder.net',
    'wss://nostr.mom',
    'wss://nos.lol',
    'wss://relay.mostr.pub'
]

const ndk = new NDK({ explicitRelayUrls: defaultRelays });

app.get('/e/:idHex', async (req, res) => {
    let event = await ndk.fetchEvent(req.params.idHex);

    if (event) {
        if (event.kind == 1065) {
            // media content 
            let eventData = await ndk.fetchEvent(event.tagValue("e"));
            if (eventData && eventData != null) {
                var img = Buffer.from(eventData.content, 'base64')
                res.setHeader('content-type', event.tagValue("m"))
                res.send(img)
            } else {
                res.send("Data Event Not Found")
            }
        } else if (event.kind == 5393) {
            res.setHeader('content-type', "text/css")
            res.send(event.content)
        } else if (event.kind == 5392) {
            res.setHeader('content-type', "text/html")
            res.send(event.content)
        } else if (event.kind == 5394) {
            res.setHeader('content-type', "text/javascript")
            res.send(event.content)
        } 
    } else {
        res.send("Event Not Found")
    }
})

app.listen(port, () => {
    console.log("Listening to port" + port)
})

await ndk.connect();