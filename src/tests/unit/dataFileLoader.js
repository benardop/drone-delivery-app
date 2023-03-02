'use strict';
let dataLoader = require(APP_DIR + '/dataFileLoader');

describe('dataFileLoader', () => {
  describe('loadDataFromFile()', () => {
    it ('should load drones & locations from file', done => {
      /* Given data file*/
      let filename = APP_DIR + '/../data/dataSource.csv';

      /* When data is read*/
      dataLoader.loadDataFromFile(filename, (err, drones, locations) => {
        /* Then */
        expect(err).to.be.null;
        expect(drones).to.have.lengthOf(10);
        expect(locations).to.have.lengthOf(100);
        done();
      });
    });

    it ('should return error if file is not found', done => {
      /* Given not found*/
      let filename = 'unknown';

      /* When loading data*/
      dataLoader.loadDataFromFile(filename, err => {
        /* Then */
        expect(err).not.to.be.null;
        done();
      });
    });
  });
});
