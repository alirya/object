import ProcessEnv = NodeJS.ProcessEnv;
import {EnvironmentParameters} from '../../dist/environment.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

let expectation = {
    type: 'postgres',
    replication: {
        master: {
            url: '',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'root',
            database: 'ketikan-client-migration'
        },
        slaves: [
            {
                url: '',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'root',
                database: 'ketikan-client-migration'
            },
            {
                url: '',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'root',
                database: 'ketikan-client-migration'
            }
        ]
    }
};

const environment = {

    DATABASE_TYPE: 'postgres',

    DATABASE_REPLICATION_MASTER_URL : '',
    DATABASE_REPLICATION_MASTER_HOST : 'localhost',
    DATABASE_REPLICATION_MASTER_PORT : '5432',
    DATABASE_REPLICATION_MASTER_USERNAME : 'postgres',
    DATABASE_REPLICATION_MASTER_PASSWORD : 'root',
    DATABASE_REPLICATION_MASTER_DATABASE : 'ketikan-client-migration',

    DATABASE_REPLICATION_SLAVES_0_URL : '',
    DATABASE_REPLICATION_SLAVES_0_HOST : 'localhost',
    DATABASE_REPLICATION_SLAVES_0_PORT : '5432',
    DATABASE_REPLICATION_SLAVES_0_USERNAME : 'postgres',
    DATABASE_REPLICATION_SLAVES_0_PASSWORD : 'root',
    DATABASE_REPLICATION_SLAVES_0_DATABASE : 'ketikan-client-migration',

    database_replication_slaves_1_database : 'ketikan-client-migration',
    database_replication_slaves_1_password : 'root',
    database_replication_slaves_1_username : 'postgres',
    database_replication_slaves_1_port : '5432',
    database_replication_slaves_1_host : 'localhost',
    database_replication_slaves_1_url : '',

};

it('test', ()=>{

    expect(EnvironmentParameters<typeof expectation>(environment, 'DATABASE', (keys, key, value) => {

        if(keys.pop() === 'port') {

            return parseInt(value);
        }

        return value;

    })).toEqual(expectation);
});
