import Flat from '../../dist/flat';

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

it('test', ()=>{

    expect(Flat.Parameters(expectation, '_', 'DATABASE',(keys, value) => {

        if(keys.pop() === 'port') {

            return (value as string|number).toString();
        }

        return value;

    })).toEqual(environment);

});
