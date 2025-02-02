/*
 * Copyright 2023 New Relic Corporation. All rights reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
const path = require('path');

const AGENT_DIR = path.join(__dirname, '../../../');
const uuidv4 = require('uuid/v4');
process.env.applicationUUID = process.env.applicationUUID || uuidv4();

module.exports = {
    AGENT_DIR,
    ENV: process.env.CSEC_ENV,
    APPLICATION_INFO_PUBLISH_MAX_WAIT: 10000, // milliseconds
    HC_INTERVAL_MS: 300000, // milliseconds
    MAX_PENDING_QUEUE_LENGTH: 1000,
    MAX_EVENT_RATE: 1200, // EVENTS/sec
    DEFAULT_LOG_CHANGETIME: 300000 // milliseconds
};
