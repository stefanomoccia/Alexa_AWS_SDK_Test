// AWS_SDK 2.398.0
var AWS = require('aws-sdk');
var deviceName = "SmartHomePi";   //thing name from AWS IoT
var host = "ahmugwdjfy1w4-ats.iot.eu-west-1.amazonaws.com"; //host address
//var app_id = "amzn1.ask.skill.2b38790d-905a-4005-ad73-908f63e1622f" //app id from Alexa skill

var iotdata = new AWS.IotData({endpoint: host});

var ctx = null;

function testPublish()
{
	var params = {
	    topic: 'smartHomeTest',
    	payload: 'provaprova',
    	qos: 0
	};
	
	iotdata.publish(params, function(err, data) {
		if(err){
			console.log(err);
		}
		else{
			console.log("Success, I guess.");
			var cardTitle = "TEST IOT DATA";
			var sessionAttributes = {};
			var shouldEndSession = false;
			var speechOutput = "The test publish was successful";
			var repromptText = "The test publish was successful";
			var shouldEndSession = false;
			ctx.succeed(buildResponse(sessionAttributes, buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession)));
		}
	});
}
function handleCustomIntents(intentName)
{
	// Dispatch to your skill's intent handlers
    var retValue = false;
	// ############################ TESTING ################################
	//retValue = testPublish();
	//updateReportedTestValuesToShadow();
	//updateDesiredTestValuesToShadow();
	//retValue = true;
	// ############################ END TESTING ################################

	if ("GetTemperature" === intentName) {
		getValuesFromShadow('temp');
		/*thingShadows.publish('taifur/test/pi/voice', 'Bedlighton', function(){
			var cardTitle = "Bedroom Lamp on";
			var repromptText = "";
			var sessionAttributes = {};
			var shouldEndSession = false;
			var speechOutput = "Your bedroom light is on. ";
			repromptText = "Your bedroom light is on. ";
			var shouldEndSession = false;
			ctx.succeed(buildResponse(sessionAttributes, buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession)));
		});*/
		retValue = true;
	
    }else if ("GetHumidity" === intentName) {
		getValuesFromShadow('humd');
		/*thingShadows.publish('taifur/test/pi/voice', 'Bedlightoff', function(){
			var cardTitle = "Lamp on";
			var repromptText = "";
			var sessionAttributes = {};
			var shouldEndSession = false;
			var speechOutput = "Your bedroom light is off. ";
			repromptText = "Your bedroom light is off. ";
			var shouldEndSession = false;
			ctx.succeed(buildResponse(sessionAttributes, buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession)));
		});*/
		retValue = true;
	
    }else if ("KitchenLightOn" === intentName) {
		/*thingShadows.publish('taifur/test/pi/voice', 'Kitchenlighton', function(){
			var cardTitle = "Lamp on";
			var repromptText = "";
			var sessionAttributes = {};
			var shouldEndSession = false;
			var speechOutput = "Your kitchen light is on. ";
			repromptText = "Your kitchen light is on. ";
			var shouldEndSession = false;
			ctx.succeed(buildResponse(sessionAttributes, buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession)));
		});*/
		retValue = true;
	
    }else if ("KitchenLightOff" === intentName) {
		/*thingShadows.publish('taifur/test/pi/voice', 'Kitchenlightoff', function(){
			var cardTitle = "Lamp on";
			var repromptText = "";
			var sessionAttributes = {};
			var shouldEndSession = false;
			var speechOutput = "Your kitchen light is off. ";
			repromptText = "Your kitchen light is off. ";
			var shouldEndSession = false;
			ctx.succeed(buildResponse(sessionAttributes, buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession)));
		});*/
		retValue = true;
	
    }else if ("BathroomLightOn" === intentName) {
		/*thingShadows.publish('taifur/test/pi/voice', 'Bathroomlighton', function(){
			var cardTitle = "Lamp on";
			var repromptText = "";
			var sessionAttributes = {};
			var shouldEndSession = false;
			var speechOutput = "Your bathroom light is on. ";
			repromptText = "Your bathroom light is on. ";
			var shouldEndSession = false;
			ctx.succeed(buildResponse(sessionAttributes, buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession)));
		});*/
		retValue = true;
	
    }else if ("BathroomLightOff" === intentName) {
        /*thingShadows.publish('taifur/test/pi/voice', 'Bathroomlightoff', function(){
			var cardTitle = "Lamp off";
			var repromptText = "";
			var sessionAttributes = {};
			var shouldEndSession = false;
			var speechOutput = "Your bathroom light is off. ";
			repromptText = "Your bathroom light is off. ";
			var shouldEndSession = false;
			ctx.succeed(buildResponse(sessionAttributes, buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession)));
		});*/
		retValue = true;
		
    }else if ("BedroomFanOn" === intentName) {
		/*thingShadows.publish('taifur/test/pi/voice', 'Bedroomfanon', function(){
			var cardTitle = "Lamp on";
			var repromptText = "";
			var sessionAttributes = {};
			var shouldEndSession = false;
			var speechOutput = "Your bedroom fan is on. ";
			repromptText = "Your bedroom fan is on. ";
			var shouldEndSession = false;
			ctx.succeed(buildResponse(sessionAttributes, buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession)));
		});*/
		retValue = true;
	
    }else if ("BedroomFanOff" === intentName) {
        /*thingShadows.publish('taifur/test/pi/voice', 'Bedroomfanoff', function(){
			var cardTitle = "Lamp off";
			var repromptText = "";
			var sessionAttributes = {};
			var shouldEndSession = false;
			var speechOutput = "Your bedroom fan is off. ";
			repromptText = "Your bedroom fan is off. ";
			var shouldEndSession = false;
			ctx.succeed(buildResponse(sessionAttributes, buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession)));
		});*/
		retValue = true;
		
    }else if ("IncreaseSpeed" === intentName) {
		  /*var speedLevelSlotInc = intent.slots.Speed;
		  var speedLevelInc = speedLevelSlotInc.value;
	      thingShadows.publish('taifur/test/pi/voice', 'Inc' +speedLevelInc, function(){
		    var cardTitle = "Fan Speed";
		    var repromptText = "";
		    var speechOutput = "Fan speed is adjusted to " + speedLevelInc + " percent. ";
			var sessionAttributes = {};
			var shouldEndSession = false;
			ctx.succeed(buildResponse(sessionAttributes, buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession)));			
	    });*/
		retValue = true;
	
	}else if ("DecreaseSpeed" === intentName) {
          /*var speedLevelSlot = intent.slots.Speed;
		  var speedLevel = speedLevelSlot.value;
	      thingShadows.publish('taifur/test/pi/voice', 'Dec' +speedLevel, function(){
		    var cardTitle = "Fan Speed";
		    var repromptText = "";
		    var speechOutput = "Fan speed is adjusted to " + speedLevel + " percent. ";
			var sessionAttributes = {};
			var shouldEndSession = false;
			ctx.succeed(buildResponse(sessionAttributes, buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession)));			
	    });*/
		retValue = true;
	}

	return retValue;
}


function updateDesiredTestValuesToShadow()
{
	var newStatus = 'ON';
	var update = {
                "state": {
                   "desired" : {
                        "status" : newStatus
                    }
                }
            };
	iotdata.updateThingShadow({
    		payload: JSON.stringify(update),
        	thingName: deviceName
        }, function(err, data) {
			if (err) {
				ctx.fail(err);
			} else {
				console.log(data);
				ctx.succeed('newStatus: ' + newStatus);
			}

		}
	);
	
	
}

function updateReportedTestValuesToShadow()
{
	var newStatus = 'ON';
	var update = {
                "state": {
                   "reported" : {
                        "status" : newStatus
                    }
                }
            };
	iotdata.updateThingShadow({
    		payload: JSON.stringify(update),
        	thingName: deviceName
        }, function(err, data) {
			if (err) {
				ctx.fail(err);
			} else {
				console.log(data);
				ctx.succeed('newStatus: ' + newStatus);
			}

		}
	);
	
	
}

function getValuesFromShadow(req)
{
	var request = req
	console.log(request);
	iotdata.getThingShadow({
        thingName: deviceName
    }, function(err, data) {
        if (err) {
            ctx.fail(err);
        } else {
            console.log(data);
            var jsonPayload = JSON.parse(data.payload);
            console.log(request);
			if(request === 'temp')
			{
				var value = jsonPayload.state.reported.temp;
	            console.log('temp: ' + value);
				var cardTitle = "TEMPERATURA :" + value;
				var sessionAttributes = {};
				var shouldEndSession = false;
				var speechOutput = "La temperatura di casa è:" +value + "gradi centigradi";
				var repromptText = "Vuoi continuare?";
				ctx.succeed(buildResponse(sessionAttributes, buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession)));
            }
			else if (request === 'humd')
			{
				var value = jsonPayload.state.reported.humd;
	            console.log('humidity: ' + value);
				var cardTitle = "UMIDITA' :" + value;
				var sessionAttributes = {};
				var shouldEndSession = false;
				var speechOutput = "L'umidità di casa è del:" +value + "percento";
				var repromptText = "Vuoi continuare?";
				ctx.succeed(buildResponse(sessionAttributes, buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession)));
            }
        }
    });
}


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@ ALEXA STANDARD HANDLING @@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// Route the incoming request based on type (LaunchRequest, IntentRequest, etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function (event, context, callback) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);
        ctx = context;

        // if (event.session.application.applicationId !== app_id) {
        //      ctx.fail("Invalid Application ID");
        //  }
 
        if (event.session.new) {
            onSessionStarted({requestId: event.request.requestId}, event.session);
        }
        if (event.request.type === "LaunchRequest") {
            onLaunch(event.request, event.session);
        }  else if (event.request.type === "IntentRequest") {
            onIntent(event.request, event.session);
        } else if (event.request.type === "SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            ctx.succeed();
        }
    } catch (e) {
        console.log("EXCEPTION in handler:  " + e);
        ctx.fail("Exception: " + e);
    }
};

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    console.log("onSessionStarted requestId=" + sessionStartedRequest.requestId + ", sessionId=" + session.sessionId);
}

/**
 * Called when the user launches the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
    console.log("onLaunch requestId=" + launchRequest.requestId + ", sessionId=" + session.sessionId);

    // Dispatch to your skill's launch.
    getWelcomeResponse(callback);
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session ) {                  //, callback) {
    console.log("onIntent requestId=" + intentRequest.requestId + ", sessionId=" + session.sessionId);

    var intent = intentRequest.intent,
    intentName = intentRequest.intent.name;

    console.log("REQUEST to string =" + JSON.stringify(intentRequest));

    var callback = null;

	if (handleCustomIntents(intentName))
	{

	}else if ("AMAZON.HelpIntent" === intentName) {
        getHelp(callback);
    }else if ("AMAZON.StopIntent" === intentName || "AMAZON.CancelIntent" === intentName) {
        handleSessionEndRequest(callback);
    }else {
        throw "Invalid intent";
    }

}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {
    console.log("onSessionEnded requestId=" + sessionEndedRequest.requestId + ", sessionId=" + session.sessionId);
    // Add cleanup logic here
}

// --------------- Functions that control the skill's behavior -----------------------

function getWelcomeResponse() {
    // If we wanted to initialize the session to have some attributes we could add those here.
    var sessionAttributes = {};
    var cardTitle = "Benenuto";
    var speechOutput = "Benvenuto a casa Moccia. Io posso controllare le luci e la temperatura di casa. Dimmi cosa vuoi che io faccia.";

    var repromptText = "Sono pronta a ricevere i comandi.";
    var shouldEndSession = false;

    ctx.succeed(buildResponse(sessionAttributes, buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession)));

}

function getHelp() {
	var sessionAttributes = {};
    var cardTitle = "Aiuto";
    var speechOutput = "Benvenuto a casa Moccia. Io posso controllare le luci e la temperatura di casa. Dimmi cosa vuoi che io faccia." + 
    "Mi puoi chiedere che temperatura c'è ora in casa o di accendere o spegnere il riscaldamento o ancora di accendere e spegnere le luci.";
    var repromptText = "Vuoi sapere la temperatura?";
    var shouldEndSession = false;

    ctx.succeed(buildResponse(sessionAttributes, buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession)));
}

function handleSessionEndRequest() {
	var sessionAttributes = {};
    var cardTitle = "Fine";
    var speechOutput = "Grazie per aver deciso di usare Alexa per la tua casa. Buona giornata!";
    var shouldEndSession = true;
	var repromptText = "";
    ctx.succeed(buildResponse(sessionAttributes, buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession)));
}


// --------------- Helpers that build all of the responses -----------------------

function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        card: {
            type: "Simple",
            title: title,
            content: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    }
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    }
}
