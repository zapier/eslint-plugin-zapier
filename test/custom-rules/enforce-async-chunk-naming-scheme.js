"use strict";

const rule = require("../../custom-rules/enforce-async-chunk-naming-scheme");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester({
  parser: "babel-eslint"
});

ruleTester.run("enforce-async-chunk-naming-scheme", rule, {
  valid: [
    {
      code:
        "import(/* webpackChunkName: 'app-team-asyncRoute' */ 'app/team/asyncRoute')"
    },
    {
      code:
        "import('app/team/asyncRoute'/* webpackChunkName: 'app-team-asyncRoute' */)"
    }
  ],

  invalid: [
    {
      code:
        "import(/* webpackChunkName: 'team-route' */ 'app/team/asyncRoute')",
      errors: [
        {
          message: "Expected: app-team-asyncRoute Received: team-route.",
          type: "Import"
        }
      ]
    },
    {
      code:
        "import('app/team/asyncRoute' /* webpackChunkName: 'team-route' */)",
      errors: [
        {
          message: "Expected: app-team-asyncRoute Received: team-route.",
          type: "Import"
        }
      ]
    },
    // With no spaces inside the webpackChunkName comment
    {
      code: "import(/*webpackChunkName:'team-route'*/ 'app/team/asyncRoute')",
      errors: [
        {
          message: "Expected: app-team-asyncRoute Received: team-route.",
          type: "Import"
        }
      ]
    },
    {
      code: "import(/* webpackChunkName:'team-route' */ 'app/team/asyncRoute')",
      errors: [
        {
          message: "Expected: app-team-asyncRoute Received: team-route.",
          type: "Import"
        }
      ]
    },
    {
      code:
        "import(/* webpackChunkName:     'team-route' */ 'app/team/asyncRoute')",
      errors: [
        {
          message: "Expected: app-team-asyncRoute Received: team-route.",
          type: "Import"
        }
      ]
    }
  ]
});
