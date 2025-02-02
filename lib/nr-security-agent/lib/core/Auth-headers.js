/*
 * Copyright 2023 New Relic Corporation. All rights reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

const API = require('../../../nr-security-api');
const commonUtils = require('./commonUtils');
const appInfo = require('./applicationinfo').getInstance();
const logs = require('./logging');
const logger = logs.getLogger();
const initLogger = logs.getInitLogger();


/* eslint-disable camelcase */
let authHeaders;
/**
 * constructor to create Authentication Headers
 */
function AuthHeaders() {
    try {
        const NRAgent = API.getNRAgent();
        authHeaders = {}
        authHeaders['NR-CSEC-CONNECTION-TYPE'] = 'LANGUAGE_COLLECTOR';
        authHeaders['NR-AGENT-RUN-TOKEN'] =  NRAgent.config.run_id;
        const COLLECTOR_VERSION = appInfo.collectorVersion || '';
        authHeaders['NR-CSEC-VERSION'] = COLLECTOR_VERSION.trim();
        authHeaders['NR-CSEC-COLLECTOR-TYPE'] = 'NODE';
        authHeaders['NR-CSEC-MODE'] = commonUtils.getCSECmode();
        authHeaders['NR-CSEC-APP-UUID'] = commonUtils.getUUID();
        authHeaders['NR-CSEC-JSON-VERSION'] = appInfo.jsonVersion;
        authHeaders['NR-CSEC-BUILD-NUMBER'] = appInfo.buildNumber;
        authHeaders['NR-ACCOUNT-ID'] =  NRAgent.config.account_id;
        authHeaders['NR-LICENSE-KEY'] = NRAgent ? NRAgent.config.license_key : '';
    } catch (error) {
        logger.error("Exception in preparing auth headers:", error);
    }

    return authHeaders;
}
AuthHeaders.prototype.constructor = AuthHeaders;

/**
 * Returns the current instanceof AuthHeaders,
 * creates one if not already created.
 *
 * @returns {AuthHeaders} instance
 */
function getInstance() {
    if (!authHeaders) {
        authHeaders = new AuthHeaders();
    }
    return authHeaders;
}

module.exports = {
    getInstance
};