import Inflate from '../../dist/inflate.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

const environment = {

    DATABASE_type: 'postgres',

    DATABASE_replication_master_url : '',
    DATABASE_replication_master_host : 'localhost',
    DATABASE_replication_master_port : '5432',
    DATABASE_replication_master_username : 'postgres',
    DATABASE_replication_master_password : 'root',
    DATABASE_replication_master_database : 'ketikan-client-migration',

    DATABASE_replication_slaves_0_url : '',
    DATABASE_replication_slaves_0_host : 'localhost',
    DATABASE_replication_slaves_0_port : '5432',
    DATABASE_replication_slaves_0_username : 'postgres',
    DATABASE_replication_slaves_0_password : 'root',
    DATABASE_replication_slaves_0_database : 'ketikan-client-migration',

    DATABASE_replication_slaves_1_database : 'ketikan-client-migration',
    DATABASE_replication_slaves_1_password : 'root',
    DATABASE_replication_slaves_1_username : 'postgres',
    DATABASE_replication_slaves_1_port : '5432',
    DATABASE_replication_slaves_1_host : 'localhost',
    DATABASE_replication_slaves_1_url : '',
};

const expectation = {
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

const flat = {

    type: 'postgres',

    replicationmasterurl : '',
    replicationmasterhost : 'localhost',
    replicationmasterport : 5432,
    replicationmasterusername : 'postgres',
    replicationmasterpassword : 'root',
    replicationmasterdatabase : 'ketikan-client-migration',
    replicationslaves0url : '',
    replicationslaves0host : 'localhost',
    replicationslaves0port : 5432,
    replicationslaves0username : 'postgres',
    replicationslaves0password : 'root',
    replicationslaves0database : 'ketikan-client-migration',
    replicationslaves1database : 'ketikan-client-migration',
    replicationslaves1password : 'root',
    replicationslaves1username : 'postgres',
    replicationslaves1port : 5432,
    replicationslaves1host : 'localhost',
    replicationslaves1url : '',
};

const original = {

    type: 'postgres',

    replication_master_url : '',
    replication_master_host : 'localhost',
    replication_master_port : 5432,
    replication_master_username : 'postgres',
    replication_master_password : 'root',
    replication_master_database : 'ketikan-client-migration',

    replication_slaves_0_url : '',
    replication_slaves_0_host : 'localhost',
    replication_slaves_0_port : 5432,
    replication_slaves_0_username : 'postgres',
    replication_slaves_0_password : 'root',
    replication_slaves_0_database : 'ketikan-client-migration',

    replication_slaves_1_database : 'ketikan-client-migration',
    replication_slaves_1_password : 'root',
    replication_slaves_1_username : 'postgres',
    replication_slaves_1_port : 5432,
    replication_slaves_1_host : 'localhost',
    replication_slaves_1_url : '',
};


it('test', ()=>{

    expect<Record<string, unknown>>(Inflate.Parameters(environment, 'DATABASE', '_', (key, keys, value) => {

        if(keys.pop() === 'port') {

            return parseInt(value as string);
        }

        return value;

    })).toEqual(expectation);


});

it('insensitive call', ()=>{

    const inflated = Inflate.Parameters(environment, 'DATABASE', '_', (key, keys, value) => {

        if(keys.pop() === 'port') {

            return parseInt(value as string);
        }

        return value;

    });

    expect((inflated as any).replication.slaves[0].host).toEqual('localhost');
    expect((inflated as any).REPLICATION.SLAVES[0].HOST).toEqual('localhost');

    expect((inflated as any).replication.master.host).toEqual('localhost');
    expect((inflated as any).REPLICATION.MASTER.HOST).toEqual('localhost');

});

it('flat', ()=>{

    expect<Record<string, unknown>>(Inflate.Parameters(environment, 'DATABASE', '_', (key, keys, value) => {

        if(keys.pop() === 'port') {

            return parseInt(value as string);
        }

        return value;

    }, undefined,  true)).toEqual(Object.assign({}, expectation, flat));


});

it('original', ()=>{

    expect<Record<string, unknown>>(Inflate.Parameters(environment, 'DATABASE', '_', (key, keys, value) => {

        if(keys.pop() === 'port') {

            return parseInt(value as string);
        }

        return value;

    }, undefined,  false, true)).toEqual(Object.assign({}, expectation, original));


});
