var fs = require('fs-extra');

// require('./index').testrun({
require('./index').paginatedTestrun({
    dbhost: 'localhost',
    dbport: 3306,
    dbname: 'vanilla',
    dbuser: 'root',
    dbpass: 'password',
    tablePrefix: 'GDN_'
}, function(err, results) {
    console.log(results.map(function (result) {
        if (result) {
            return Object.keys(result).length;
        }
    }));

    // fs.writeFileSync('./results.json', JSON.stringify(results, undefined, 2));
});
