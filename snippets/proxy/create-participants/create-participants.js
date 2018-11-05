const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.proxy.services('KSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
            .sessions('KCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
            .participants
            .create({friendlyName: 'Alice', identifier: '+15558675310'})
            .then(participant => console.log(participant.sid))
            .done();
