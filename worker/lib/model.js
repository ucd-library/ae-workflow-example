const pg = require('./pg.js');
const storage = require('./storage.js');

class TestModel {

  async runTest(id) {
    console.log(`Running test for user id ${id}`);

    let userData = await pg.query('select * from test_users where id = $1', [id]);
    if( !userData.rows.length ) throw new Error(`User id ${id} not found`);
    let user = userData.rows[0];

    let jsonld = {
      '@context' : 'https://schema.org/',
      '@type' : 'Person',
      '@id' : '',
      'name' : user.name,
      'email' : user.email,
      'identifier' : user.id
    }

    await storage.save('/user/'+id, jsonld);

    process.exit(0);
  }

}

module.exports = new TestModel();