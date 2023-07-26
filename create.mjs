import fs from 'fs'
import NDK, { NDKPrivateKeySigner, NDKEvent } from "@nostr-dev-kit/ndk";

const nip07signer = NDKPrivateKeySigner.generate();

const defaultRelays = [
    'wss://nostr.bitcoiner.social',
    'wss://nostr-pub.wellorder.net',
    'wss://nostr.mom',
    'wss://nos.lol',
    'wss://relay.mostr.pub',
    'wss://relay.damus.io'
]

const ndk = new NDK({ explicitRelayUrls: defaultRelays, signer: nip07signer });
await ndk.connect();

var page = fs.readFileSync('./demo/index.html', 'utf8')
var js = fs.readFileSync('./demo/app.js', 'utf8')
var css = fs.readFileSync('./demo/app.css', 'utf8')
var image = fs.readFileSync('./demo/ostriches.jpeg', 'utf8')

console.log(page)
console.log(js)
console.log(css)
//console.log(image)


//const ndkEvent = new NDKEvent(ndk);
//ndkEvent.kind = 5394;
//ndkEvent.content = js;
//let jsEvent = await ndkEvent.publish(); // This will trigger the extension to ask the user to confirm signing.

//console.log(jsEvent) // -> 4885034c358f0f3e57bfa3018685801e49d4a384c828c6ad0f384fbacd19d941



//const ndkEvent = new NDKEvent(ndk);
//ndkEvent.kind = 5393;
//ndkEvent.content = css;
//let jsEvent = await ndkEvent.publish(); // This will trigger the extension to ask the user to confirm signing.

//console.log(jsEvent) // -> 7ccda059f9f4b7ddfe8e39aa4f3a41f2c262bfee9203b5894eff36a8f9499a05



const ndkEvent = new NDKEvent(ndk);
ndkEvent.kind = 5392;
ndkEvent.content = page;
let jsEvent = await ndkEvent.publish(); // This will trigger the extension to ask the user to confirm signing.

console.log(jsEvent) // -> 1efc13c6ffbaf60c0347baf89f6ecaad22f74abf82165fcdb55ef7e8cca8a597



// Image -> 3c55892674bd88431fd0d9b611e96e65c91802a128596bf3bcd6ca6c4aa2d5c7

