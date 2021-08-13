const CeramicClient = require('@ceramicnetwork/http-client');
const KeyDidResolver = require('key-did-resolver');
const ThreeIdResolver = require('@ceramicnetwork/3id-did-resolver');
const { DID } = require('dids');

const API_URL = 'http://localhost:7007';

const ceramic = new CeramicClient(API_URL);
const resolver = { ...KeyDidResolver.getResolver(), ...ThreeIdResolver.getResolver(ceramic) };
const did = new DID({ resolver });

ceramic.did = did;

browser.runtime.onMessage.addListener(async function (request, sender, sendResponse) {
  if (request.message == 'Auth') {
    ceramic.did.setProvider(request.provider);
    await ceramic.did.authenticate();
  }
});

browser.webNavigation.onCommitted.addListener((e) => {
  // Filter out sub-frame related navigations
  if (e.frameId !== 0) {
    return;
  }

  console.log(e.url, e.timeStamp, e.transitionType);
});

browser.webNavigation.onCompleted.addListener(
  (e) => {
    // Filter out sub-frame related navigations
    if (e.frameId !== 0) {
      return;
    }

    console.log(e.url, e.timeStamp, e.transitionType);
  },
  { url: [{ schemes: ['http', 'https'] }] }
);
