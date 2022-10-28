const twilio = require('twilio');

const accountSid = 'ACb8e5245626d15d191ea6a6be4d24745d'; // Your Account SID from www.twilio.com/console
const authToken = '5e995e37bbeb7b8c90c8856c2062a2b3'; // Your Auth Token from www.twilio.com/console

const client = new twilio(accountSid, authToken);
// const VoiceResponse = require('twilio').twiml.VoiceResponse;

// const twiml = new VoiceResponse();
// twiml.say('Hello. Please leave a message after the beep.');

// // Use <Record> to record the caller's message
// twiml.record();

// // End the call with <Hangup>
// twiml.hangup();

// // Render the response as XML in reply to the webhook request
// //   response.type('text/xml');
// console.log(twiml.toString());

// SMS
// client.messages
//   .create({
//     body: 'Olá, Node',
//     to: '+5563999364840', // Text this number
//     from: '+16066172444', // From a valid Twilio number
//   })
//   .then((message) => console.log(message.sid));

// Fazendo uma chamada
http://demo.twilio.com/docs/voice.xml
client.calls
    .create({
        url: 'https://handler.twilio.com/twiml/EH9ac7f0998f7dcee5be0f39664d2a4a73',
        to: '+5563999364840',
        from: '+16066172444',
    })
    .then(call => console.log(call.sid));

// // Get Existing Record
// client
//   .calls('CA87d72c655d99c153835fc22f9ef98ad6')
//   .fetch()
//   .then(call => console.log(call));
