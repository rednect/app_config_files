export const mysqlconfig = {
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'teste123',
    database: 'ads',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: false
}