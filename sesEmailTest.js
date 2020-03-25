let AWS = require('aws-sdk');
const ses = new AWS.SES();

exports.handler = async (event) => {
    try {
        let data = await ses.sendEmail({
            Source: "welcome@biocanic.com",
            Destination: {
                ToAddresses: ['andy@biocanic.com']
            },
            Message: {
                Subject: {
                    Data: "SES test subject"
                },
                Body: {
                    Html: {
                        Data: "SES body"
                    }
                }
            }
        }).promise();

    } catch (err) {
        // error handling goes here
    };

    return { "message": "Successfully executed" };
};