'use strict';
let dataLoader = require('./dataFileLoader');
let scheduler = require('./droneScheduler');
let view = require('./view');
let fileName = __dirname + '/../data/dataSource.csv';

dataLoader.loadDataFromFile(fileName, (err, drones, locations) => {
  if (err) { throw err; }
  view.render(
    scheduler.generate(drones, locations)
  );
});
