$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("loginduplicate.feature");
formatter.feature({
  "line": 1,
  "name": "Application login",
  "description": "",
  "id": "application-login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 346960,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User login into applicaion with username \"kiran\" and password \"pass\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "logo is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Title is displayed \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.user_is_on_landing_page()"
});
formatter.result({
  "duration": 241038452,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kiran",
      "offset": 42
    },
    {
      "val": "pass",
      "offset": 63
    }
  ],
  "location": "stepDefination.user_login_into_applicaion_with_username_and_password(String,String)"
});
formatter.result({
  "duration": 8218013,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.Naviated_homepage()"
});
formatter.result({
  "duration": 7330971,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.logo_validation()"
});
formatter.result({
  "duration": 227872,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 20
    }
  ],
  "location": "stepDefination.title_is_displayed_something(String)"
});
formatter.result({
  "duration": 140125,
  "status": "passed"
});
formatter.after({
  "duration": 30702,
  "status": "passed"
});
formatter.before({
  "duration": 234060,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Home page login failed",
  "description": "",
  "id": "application-login;home-page-login-failed",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User is on landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User login into applicaion with username \"kiran\" and password \"pass\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Home page should not be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "error message should be displayed",
  "keyword": "But "
});
formatter.step({
  "line": 17,
  "name": "Title is displayed \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.user_is_on_landing_page()"
});
formatter.result({
  "duration": 407179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kiran",
      "offset": 42
    },
    {
      "val": "pass",
      "offset": 63
    }
  ],
  "location": "stepDefination.user_login_into_applicaion_with_username_and_password(String,String)"
});
formatter.result({
  "duration": 382315,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.home_page_should_not_be_displayed()"
});
formatter.result({
  "duration": 89438,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.error_message_should_be_displayed()"
});
formatter.result({
  "duration": 505221,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 20
    }
  ],
  "location": "stepDefination.title_is_displayed_something(String)"
});
formatter.result({
  "duration": 130167,
  "status": "passed"
});
formatter.after({
  "duration": 24383,
  "status": "passed"
});
formatter.before({
  "duration": 1194631,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User sign up",
  "description": "",
  "id": "application-login;user-sign-up",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User is on landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User clicks on signup button",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user enter the details",
  "rows": [
    {
      "cells": [
        "kiran",
        "detail 1",
        "detail 2",
        "details 3"
      ],
      "line": 24
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user account should be created",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.user_is_on_landing_page()"
});
formatter.result({
  "duration": 216253,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_clicks_on_signup_button()"
});
formatter.result({
  "duration": 29678,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_enter_the_details(DataTable)"
});
formatter.result({
  "duration": 2293558,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_account_should_be_created()"
});
formatter.result({
  "duration": 76866,
  "status": "passed"
});
formatter.after({
  "duration": 12333,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "User loain",
  "description": "",
  "id": "application-login;user-loain",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "User is on landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "User login into applicaion with usernames \u003cusername\u003e and passwords \u003cPassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "logo is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Title is displayed \"true\"",
  "keyword": "And "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "application-login;user-loain;",
  "rows": [
    {
      "cells": [
        "username",
        "Password"
      ],
      "line": 36,
      "id": "application-login;user-loain;;1"
    },
    {
      "cells": [
        "user1",
        "pass1"
      ],
      "line": 37,
      "id": "application-login;user-loain;;2"
    },
    {
      "cells": [
        "user2",
        "pass2"
      ],
      "line": 38,
      "id": "application-login;user-loain;;3"
    },
    {
      "cells": [
        "user3",
        "pass3"
      ],
      "line": 39,
      "id": "application-login;user-loain;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 139381,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "User loain",
  "description": "",
  "id": "application-login;user-loain;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "User is on landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "User login into applicaion with usernames user1 and passwords pass1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "logo is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Title is displayed \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.user_is_on_landing_page()"
});
formatter.result({
  "duration": 91380,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 42
    },
    {
      "val": "pass1",
      "offset": 62
    }
  ],
  "location": "stepDefination.user_login_into_applicaion_with_usernames_and_passwords(String,String)"
});
formatter.result({
  "duration": 204830,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.Naviated_homepage()"
});
formatter.result({
  "duration": 178118,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.logo_validation()"
});
formatter.result({
  "duration": 7070615,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 20
    }
  ],
  "location": "stepDefination.title_is_displayed_something(String)"
});
formatter.result({
  "duration": 983026,
  "status": "passed"
});
formatter.after({
  "duration": 20541,
  "status": "passed"
});
formatter.before({
  "duration": 94828,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "User loain",
  "description": "",
  "id": "application-login;user-loain;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "User is on landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "User login into applicaion with usernames user2 and passwords pass2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "logo is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Title is displayed \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.user_is_on_landing_page()"
});
formatter.result({
  "duration": 194942,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 42
    },
    {
      "val": "pass2",
      "offset": 62
    }
  ],
  "location": "stepDefination.user_login_into_applicaion_with_usernames_and_passwords(String,String)"
});
formatter.result({
  "duration": 824353,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.Naviated_homepage()"
});
formatter.result({
  "duration": 186634,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.logo_validation()"
});
formatter.result({
  "duration": 64394,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 20
    }
  ],
  "location": "stepDefination.title_is_displayed_something(String)"
});
formatter.result({
  "duration": 134391,
  "status": "passed"
});
formatter.after({
  "duration": 16506,
  "status": "passed"
});
formatter.before({
  "duration": 2411330,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "User loain",
  "description": "",
  "id": "application-login;user-loain;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "User is on landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "User login into applicaion with usernames user3 and passwords pass3",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "logo is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Title is displayed \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.user_is_on_landing_page()"
});
formatter.result({
  "duration": 83745,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user3",
      "offset": 42
    },
    {
      "val": "pass3",
      "offset": 62
    }
  ],
  "location": "stepDefination.user_login_into_applicaion_with_usernames_and_passwords(String,String)"
});
formatter.result({
  "duration": 4688231,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.Naviated_homepage()"
});
formatter.result({
  "duration": 179294,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.logo_validation()"
});
formatter.result({
  "duration": 70155,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 20
    }
  ],
  "location": "stepDefination.title_is_displayed_something(String)"
});
formatter.result({
  "duration": 623550,
  "status": "passed"
});
formatter.after({
  "duration": 14172,
  "status": "passed"
});
});