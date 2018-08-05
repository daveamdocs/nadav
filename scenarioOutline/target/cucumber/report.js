$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Check login variation",
  "description": "",
  "id": "check-login-variation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login with various credentials",
  "description": "",
  "id": "check-login-variation;login-with-various-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user navigates to url \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user clicks on the login portal",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the username is \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the password is \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the message test is \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "check-login-variation;login-with-various-credentials;",
  "rows": [
    {
      "cells": [
        "url",
        "username",
        "password",
        "message"
      ],
      "line": 14,
      "id": "check-login-variation;login-with-various-credentials;;1"
    },
    {
      "cells": [
        "http://www.webdriveruniversity.com",
        "webdriver3",
        "inchhigh",
        "validation failed"
      ],
      "line": 15,
      "id": "check-login-variation;login-with-various-credentials;;2"
    },
    {
      "cells": [
        "http://www.webdriveruniversity.com",
        "webdriver",
        "webdriver123",
        "validation succeeded"
      ],
      "line": 16,
      "id": "check-login-variation;login-with-various-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9164587197,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login with various credentials",
  "description": "",
  "id": "check-login-variation;login-with-various-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user navigates to url \"http://www.webdriveruniversity.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user clicks on the login portal",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the username is \"webdriver3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the password is \"inchhigh\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the message test is \"validation failed\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.webdriveruniversity.com",
      "offset": 23
    }
  ],
  "location": "login.user_navigates_to_url(String)"
});
formatter.result({
  "duration": 6935260939,
  "status": "passed"
});
formatter.match({
  "location": "login.user_clicks_on_the_login_portal()"
});
formatter.result({
  "duration": 1098793550,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver3",
      "offset": 17
    }
  ],
  "location": "login.the_username_is(String)"
});
formatter.result({
  "duration": 2080011871,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "inchhigh",
      "offset": 17
    }
  ],
  "location": "login.the_password_is(String)"
});
formatter.result({
  "duration": 290305736,
  "status": "passed"
});
formatter.match({
  "location": "login.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 273477287,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validation failed",
      "offset": 21
    }
  ],
  "location": "login.the_message_test_is(String)"
});
formatter.result({
  "duration": 96785570,
  "status": "passed"
});
formatter.after({
  "duration": 3957647770,
  "status": "passed"
});
formatter.before({
  "duration": 4589532599,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login with various credentials",
  "description": "",
  "id": "check-login-variation;login-with-various-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user navigates to url \"http://www.webdriveruniversity.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user clicks on the login portal",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the username is \"webdriver\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the password is \"webdriver123\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the message test is \"validation succeeded\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.webdriveruniversity.com",
      "offset": 23
    }
  ],
  "location": "login.user_navigates_to_url(String)"
});
formatter.result({
  "duration": 6364326515,
  "status": "passed"
});
formatter.match({
  "location": "login.user_clicks_on_the_login_portal()"
});
formatter.result({
  "duration": 6189185903,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver",
      "offset": 17
    }
  ],
  "location": "login.the_username_is(String)"
});
formatter.result({
  "duration": 1784353535,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver123",
      "offset": 17
    }
  ],
  "location": "login.the_password_is(String)"
});
formatter.result({
  "duration": 636293852,
  "status": "passed"
});
formatter.match({
  "location": "login.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 254961804,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validation succeeded",
      "offset": 21
    }
  ],
  "location": "login.the_message_test_is(String)"
});
formatter.result({
  "duration": 37476137,
  "status": "passed"
});
formatter.after({
  "duration": 4106273448,
  "status": "passed"
});
});