# Nostr Web Server
A Proof of Concept webserver that loads HTML, JavaScript, Media and CSS from Nostr relays and display as a website

I deployed the [demo](demo/index.html) website inside Nostr on the following events: 

## The CSS Stylesheet as kind 5393

```json
{
  "content": "body {\n  margin:0;\n  width:100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow:hidden;\n  background-size: cover;\n  background-color:#000000;\n  color:white;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-weight: bold;\n}\n.background-text {\n  font-size: 200px;\n  letter-spacing: 20px;\n\n  color:transparent;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n\n  background-image: url(\"3c55892674bd88431fd0d9b611e96e65c91802a128596bf3bcd6ca6c4aa2d5c7\");\n  background-size: 120%;  \n  animation: bg-animation 30s cubic-bezier(0.3,0,0.7,1) infinite;\n}\n@keyframes bg-animation {\n  0% {background-position: 50% 50%;}\n  33% {background-position: 100% 100%;}\n  66% {background-position: 0% 0%;}\n  100% {background-position: 50% 50%;}\n}",
  "created_at": 1690408572,
  "id": "7ccda059f9f4b7ddfe8e39aa4f3a41f2c262bfee9203b5894eff36a8f9499a05",
  "kind": 5393,
  "pubkey": "d8313563e54827bba3826017ce79c400e4b661d098295af6ca6b3dad620d7bea",
  "sig": "7e13d1de11081fbcd5fedfaa68f8172b3335548f33e3b3ecb485d5adf60bc9a9454f1bba536a68ae36f76ccccd4f5a51a8f4bd35393e73746e5b42e29f02e0fb",
  "tags": []
}
```

## The Picture as Kind 1965/1964

```json
{
  "content": "",
  "created_at": 1690408198,
  "id": "3c55892674bd88431fd0d9b611e96e65c91802a128596bf3bcd6ca6c4aa2d5c7",
  "kind": 1065,
  "pubkey": "f8ff11c7a7d3478355d3b4d174e5a473797a906ea4aa61aa9b6bc0652c1ea17a",
  "sig": "c165a741f217b270e9da243f37b2b4091843b470b91c1f2bd51abc4f93a59668285c8af19eae5b73367273dad47c8201a0496f6a4b6b3a1564398f6c3474d826",
  "tags": [
    ["e","844cfc062e21378fd59a00e7153d50b93221f4c9c2019e055365a951238adebe"],
    ["m","image/jpeg"],
    ["x","c1fa31650ed9508eefd8aad7ce97c48e4caceef775d2962123bbd939bcfdd102"],
    ["size","35478"],
    ["dim","600x291"],
    ["blurhash","ZCDQv]NZWAa$S0o4NGS0WWIPfioLa}j@ayxZspa{A8oMs;a_o3bENGjcoL-Cj[WWj?juju$+WnWV"]
  ]
}
```

## The JS JavaScript as kind 5394

```json
{
  "content": "const msgs = [\n    \"Hello, Nostr\",\n    \"Hola, Nostr\",\n    \"Ciao, Nostr\", \n    \"こんにちは, Nostr\"\n]\n\nvar index = 0\n\nfunction changeMessage() {\n    // Refresh DIV with new content.\n    index = (index+1) % msgs.length\n    document.getElementById(\"msg\").innerHTML = msgs[index]\n}\n\nlet reload = window.setInterval('changeMessage()', 1000);",
  "created_at": 1690405834,
  "id": "4885034c358f0f3e57bfa3018685801e49d4a384c828c6ad0f384fbacd19d941",
  "kind": 5394,
  "pubkey": "218550284d467cacc0575e29f9a51b5ffa0aea0caa7d42625a520865c1e217e9",
  "sig": "35b73a45a899c663cd11e38b84f1d7e54fc18c726f504981ca8692bd53997c99eb6a224b29aa320b802c691289b915ccd7f2d6b846c0ba6b5312fb52affb460b",
  "tags": []
}
```

## The HTML WebPage as kind 5392

```json
{
  "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>Nostr Web Test</title>\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"7ccda059f9f4b7ddfe8e39aa4f3a41f2c262bfee9203b5894eff36a8f9499a05\" />\n</head>\n<body>\n    <div class=\"background-text\" id=\"msg\">HELLO, Nostr</div>\n\n    <script src=\"4885034c358f0f3e57bfa3018685801e49d4a384c828c6ad0f384fbacd19d941\"></script>\n</body>\n</html>",
  "created_at": 1690408656,
  "id": "1efc13c6ffbaf60c0347baf89f6ecaad22f74abf82165fcdb55ef7e8cca8a597",
  "kind": 5392,
  "pubkey": "dca7cf1f68f7a37e83343954f6292361b071fde4f0eb33374852892bccb2ac11",
  "sig": "6faf0c63b3b7a9e702013aabc22b8eb8fe8e9e2d91662e2dd5ec73d8ba7db066e09db9135835a41aaab89c9391d02a66ab1c2d55722e37e18e58e3bc3020bd5a",
  "tags": []
}
```


# Deployment Overview

This repo is setup to be automatically deployed to Heroku

# Development Overview

This is a NodeJS + Express app. 

## Running

Install modules:
`npm install`

To run, do:
`node index.mjs`

## Generating new Version

GitHub Actions generates a new [Release](https://github.com/vitorpamplona/nostr-web-server/releases) when npm version is run and pushed to the repo.

```
npm version <version number: x.x.x>
```

## Contributing

[Issues](https://github.com/vitorpamplona/nostr-web-server/issues) and [pull requests](https://github.com/vitorpamplona/nostr-web-server/pulls) are very welcome! :)

