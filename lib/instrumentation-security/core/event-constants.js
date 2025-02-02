
/*
 * Copyright 2023 New Relic Corporation. All rights reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

const EVENT_TYPE = {
    SYSTEM_COMMAND: 'SYSTEM_COMMAND',
    SYSTEM_EXIT: 'SYSTEM_EXIT',
    FILE_OPERATION: 'FILE_OPERATION',
    FILE_INTEGRITY: 'FILE_INTEGRITY',
    DB_COMMAND: 'SQL_DB_COMMAND',
    NOSQL_DB_COMMAND: 'NOSQL_DB_COMMAND',
    HTTP_REQUEST: 'HTTP_REQUEST',
    CODE_INJECTION: 'CODE_INJECTION',
    XXE: 'XXE',
    CIPHER: 'CIPHER',
    HASH: 'HASH',
    RANDOM: 'RANDOM',
    UNVALIDATED_REDIRECT: 'UNVALIDATED_REDIRECT',
    REFLECTED_XSS: 'REFLECTED_XSS',
    XPATH: 'XPATH',
    LDAP: 'LDAP'
}
const  EVENT_CATEGORY =  {
    MYSQL: 'MYSQL',
    POSTGRES: 'POSTGRES',
    ORACLE: 'ORACLE',
    MONGO: 'MONGO',
    MSSQL: 'MSSQL',
    SQLITE: 'SQLITE',
    FILE: 'FILE',
    SYS: 'SYSTEM',
    HTTP: 'HTTP',
    CODE_INJECTION: 'CODE_INJECTION',
    XXE: 'XXE',
    CRYPTO: 'CRYPTO',
    HASH: 'HASH',
    WEAKRANDOM: 'WEAKRANDOM',
    UNVALIDATED_REDIRECT: 'UNVALIDATED_REDIRECT',
    REFLECTED_XSS: 'REFLECTED_XSS',
    XPATH: 'XPATH',
    LDAP: 'LDAP'
}

module.exports = {
    EVENT_CATEGORY,
    EVENT_TYPE
}
