const pg = require('pg');
const {Pool} = pg;

class PG {

  constructor() {
    this.pgLib = pg;
  }

  _initClient() {
    if( this.client ) return;

    this.client = new Pool({
      host : process.env.PG_HOST || 'localhost', 
      user : process.env.PG_USER || 'postgres',
      password : process.env.PG_PASSWORD || 'postgres', 
      port : process.env.PG_PORT || 5432,
      database : process.env.PG_DATABASE || 'postgres',
      max : 3
    });

    this.client.on('end', async () => {
      console.log('Postgresql client end event');
    });
    this.client.on('error', async e => {
      console.error('Postgresql client error event', e);
    });
  }

  async connect() {
    if( this.connected ) return;

    if( this.connecting ) {
      await this.connecting;
    } else {
      this._initClient();

      console.log('Connecting to postgresql');

      this.connecting = this.client.connect();
      this._client = await this.connecting;
      console.log('Connected to postgresql');
      
      this.connecting = null;
      this.connected = true;
    }
  }

  async query(query, params) {
    await this.connect();
    return this.client.query(query, params);
  }

}

module.exports = new PG();