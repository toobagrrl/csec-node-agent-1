/*
 * Copyright 2023 New Relic Corporation. All rights reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

const _ = require('lodash');

const logger = require('../logging').getLogger();

let lambdaClient;

/**
 * Invokes lambda specified by arn, version with
 * given data
 * @param {String} arn
 * @param {String} version
 * @param {JSON} data
 * @returns Invoke Result Promise
 */
function invokeLambda (arn, version, data) {
    if (!lambdaClient) {
        throw new Error('Cannot invoke lambda, client not initialized');
    }
    if (_.isEmpty(arn) || _.isEmpty(version)) {
        throw new Error('Cannot invoke lambda, invalid ARN specified');
    }
    const dataString = JSON.stringify(data);
    const invokeData = {
        FunctionName: arn,
        ClientContext: Buffer.from('{}').toString('base64'),
        InvocationType: 'Event',
        LogType: 'Tail',
        Payload: Buffer.from(dataString),
        Qualifier: version
    };
    logger.debug('Invoke lambda data:', invokeData);
    return lambdaClient.invoke(invokeData);
}

function init () {
    if (
        !process.csecRuntimeSupportsFunctionGenerators ||
        !process.csecRuntimeSupportsAsyncFunctionGenerators
    ) {
        return;
    }

    const { Lambda } = require('@aws-sdk/client-lambda');
    lambdaClient = new Lambda();
}
init();

module.exports = {
    invokeLambda
};
