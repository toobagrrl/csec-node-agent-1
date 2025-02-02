<a href="https://opensource.newrelic.com/oss-category/#community-plus"><picture><source media="(prefers-color-scheme: dark)" srcset="https://github.com/newrelic/opensource-website/raw/main/src/images/categories/dark/Community_Plus.png"><source media="(prefers-color-scheme: light)" srcset="https://github.com/newrelic/opensource-website/raw/main/src/images/categories/Community_Plus.png"><img alt="New Relic Open Source community plus project banner." src="https://github.com/newrelic/opensource-website/raw/main/src/images/categories/Community_Plus.png"></picture></a>

# New Relic Node.js security agent
[![npm status badge][1]][2] [![Security Agent CI][3]][4]

**Note**: The IAST capability should only be used in pre-production environments as the application is tested for real exploitable vulnerabilities.

The New Relic security agent is in preview and is not generally available. This module enables instrumentation of a Node.js application for interactive application security testing(IAST) and exposes exploitable vulnerabilities. 

## Installation

Typically, most users use the version auto-installed by the [New Relic Node.js agent](https://github.com/newrelic/node-newrelic). You can see agent install instructions [here](https://github.com/newrelic/node-newrelic#installation-and-getting-started).

In some cases, installing a specific version is ideal. For example, new features or major changes might be released via a major version update to this module, prior to inclusion in the main New Relic Node.js Agent.

```sh
npm install @newrelic/security-agent@latest
```

For more information, please see New Relic Node.js agent [installation guide](https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/install-nodejs-agent/)

The `@newrelic/security-agent` must be explicitly enabled in order to perform IAST analysis of the application. In the newrelic.js, set the following parameters

```js
 /**
  * Security Configurations
  */
   security: {
    /**
     * enables/disables security agent functions and generation of events.
     */
    enabled: true,
    /**
      * To completely disable security, set agent.enabled flag to false. If the flag is set to false, the security module is not loaded. This property is read only once at application start.
      */
    agent: {
      enabled: true
    }
  }
```

## Getting Started

The [Developer docs](http://newrelic.github.io/node-newrelic/) for writing instrumentation will be of help. We particularly recommend the [tutorials](https://newrelic.github.io/node-newrelic/tutorial-Instrumentation-Basics.html) and the [shim API](https://newrelic.github.io/node-newrelic/Shim.html) documentation.

### Supported  Node.js Versions
- Node version 14.x and above

### Supported  Modules

- Node.js core modules
    - `http` 
    - `https`
    - `fs`
    - `child_process`
- [mysql](https://www.npmjs.com/package/mysql)(2.16.x and above)
- [mysql2](https://www.npmjs.com/package/mysql2) (2.x and above)
- [pg](https://www.npmjs.com/package/pg)(7.x and above)
- [mongodb](https://www.npmjs.com/package/mongodb)(2.x, 3.x and 4.x)
- [express](https://www.npmjs.com/package/express)(4.x and above)
- [@koa/router](https://www.npmjs.com/package/@koa/router) ((9.x and above)
- [koa-router](https://www.npmjs.com/package/koa-router)(9.x and above)
- [@hapi/hapi](https://www.npmjs.com/package/@hapi/hapi)(19.x and above)
- [fastify](https://www.npmjs.com/package/fastify)(2.x, 3.x and 4.x)
- [restify](https://www.npmjs.com/package/restify)(8.x, 9.x, 10.x and 11.x)
- [director](https://www.npmjs.com/package/director)(1.2.x)
- [ldapjs](https://www.npmjs.com/package/ldapjs)(2.x and above)
- [ldapts](https://www.npmjs.com/package/ldapts)(2.x and above)
- [xpath](https://www.npmjs.com/package/xpath)(0.0.20 and above)
- [xpath.js](https://www.npmjs.com/package/xpath.js)(0.0.1 and above) 

For more information, please see New Relic Node.js agent [compatibility and requirements](https://docs.newrelic.com/docs/apm/agents/nodejs-agent/getting-started/compatibility-requirements-nodejs-agent/).

## Testing

The module includes a suite of unit and functional tests which should be used to
verify that your changes don't break existing functionality.

All tests are stored in `tests/` and are written using
[Tap](https://www.npmjs.com/package/tap) with the extension `.tap.js`.

To run the full suite, run: `npm test`.

## Support

New Relic hosts and moderates an online forum where you can interact with New Relic employees as well as other customers to get help and share best practices.  You can find this project's topic/threads here:  Add the url for the support thread here: https://forum.newrelic.com/s/

## Contribute

Any feedback provided to New Relic about the New Relic security agent, including feedback provided as source code, comments, or other copyrightable or patentable material, is provided to New Relic under the terms of the Apache Software License, version 2. If you do not provide attribution information or a copy of the license with your feedback, you waive the performance of those requirements of the Apache License with respect to New Relic. The license grant regarding any feedback is irrevocable and persists past the termination of the preview license.
Keep in mind that when you submit a pull request or other feedback, you’ll need to sign the CLA via the click-through using CLA-Assistant. You only have to sign the CLA one time per project.
If you have any questions drop us an email at opensource@newrelic.com.

**A note about vulnerabilities**

As noted in our [security policy](https://github.com/newrelic/csec-node-agent/security/policy), New Relic is committed to the privacy and security of our customers and their data. We believe that providing coordinated disclosure by security researchers and engaging with the security community are important means to achieve our security goals.

If you believe you have found a security vulnerability in this project or any of New Relic's products or websites, we welcome and greatly appreciate you reporting it to New Relic through [HackerOne](https://hackerone.com/newrelic).

If you would like to contribute to this project, review [these guidelines](https://github.com/newrelic/csec-node-agent/blob/main/CONTRIBUTING.md).

## License
The New Relic security agent is licensed under the New Relic Pre-Release Software Notice.
The `@newrelic/security-agent` also uses source code from third-party libraries. You can find full details on which libraries are used and the terms under which they are licensed in the third-party notices document.

[1]: https://img.shields.io/npm/v/@newrelic/security-agent.svg 
[2]: https://www.npmjs.com/package/@newrelic/security-agent 
[3]: https://github.com/newrelic/csec-node-agent/workflows/CSEC%20Node%20Agent%20CI/badge.svg
[4]: https://github.com/newrelic/csec-node-agent/actions?query=workflow%3A%22CSEC+Node+Agent+CI%22