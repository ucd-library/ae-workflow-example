const {Storage} = require('@google-cloud/storage');
const storage = new Storage();

class GcsStorage {

  async save(path, jsonld) {
    let gcsFile = 'gs://'+process.env.GCS_BUCKET+'/'+path.replace(/^\//, '');

    if( !gcsFile.endsWith('.jsonld.json') ) gcsFile += '.jsonld.json';

    if( typeof jsonld === 'object' ) {
      jsonld = JSON.stringify(jsonld, null, 2);
    }

    await this.getGcsFileObjectFromPath(gcsFile).save(jsonld, {
      contentType : 'application/ld+json',
      metadata : {
        metadata : {
          'pg_host' : process.env.PG_HOST || 'localhost'
        }
      }
    });
  }

  getGcsFileObjectFromPath(gcsFile) {
    return storage.bucket(gcsFile.split('/')[2])
      .file(gcsFile.split('/').slice(3).join('/'));
  }

}

module.exports = new GcsStorage();