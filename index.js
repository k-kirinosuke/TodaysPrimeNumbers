'use strict';
var Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: このコメント行より下の項目に注目してください。
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.  
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = undefined;

var SKILL_NAME = "今日のラッキー素数";
var GET_FACT_MESSAGE = "あなたのラッキー素数は";
var HELP_MESSAGE = "今日のラッキー素数を聞きたい時は「今日のラッキー素数」と、終わりたい時は「おしまい」と言ってください。どうしますか？";
var HELP_REPROMPT = "どうしますか？";
var STOP_MESSAGE = "さようなら";

//=========================================================================================================================================
//「TODO: ここから下のデータを自分用にカスタマイズしてください。」
//=========================================================================================================================================
var data = [
    "2ですね・・・ふふっ",
    "3ですね・・・ふふっ",
    "5ですね・・・ふふっ",
    "7ですね・・・ふふっ",
    "11ですね・・・ふふっ",
    "13ですね・・・ふふっ",
    "17ですね・・・ふふっ",
    "19ですね・・・ふふっ",
    "23ですね・・・ふふっ",
    "29ですね・・・ふふっ",
    "31ですね・・・ふふっ",
    "37ですね・・・ぐはっ！",
    "41ですね・・・ふふっ",
    "43ですね・・・ふふっ",
    "47ですね・・・ふふっ",
    "53ですね・・・ふふっ",
    "59ですね・・・ふふっ",
    "61ですね・・・ふふっ",
    "67ですね・・・ふふっ",
    "71ですね・・・ふふっ",
    "73ですね・・・ふふっ",
    "79ですね・・・ふふっ",
    "83ですね・・・ふふっ",
    "89ですね・・・ふふっ",
    "97ですね・・・ふふっ",
    "101ですね・・・ふふっ",
    "103ですね・・・美しい・・・"
];

//=========================================================================================================================================
//この行から下のコードに変更を加えると、スキルが動作しなくなるかもしれません。わかる人のみ変更を加えてください。  
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'SessionEndedRequest': function () {
        // Nothing to do
    }
};

