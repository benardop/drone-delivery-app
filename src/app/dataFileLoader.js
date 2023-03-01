'use strict';

let fs = require('fs');

function loadDataFromFile(filename, cb) {
  fs.createReadStream(filename, {
    encoding: 'utf-8'
  }).on('data', data => {
    let dataAsArray = data.split('\n');

    if (!dataAsArray.length) {
      cb(null, [], []);
    }

    let drones = dataAsArray[0].split(',').
          reduce((prev, current, index) => {
            return prev.concat(
              !(index%2) ? { name: current } :
              ((drone) => {
                drone.maxWeight = current * 1;
                return drone;
              })(prev.pop())
            );
          }, []);

    let locations = dataAsArray.slice(1).
          filter(item => item).
          map(item => {
            return item.split(',').
              reduce((name, weight) => ({
                name: name,
                weight: weight * 1
              }));
          });

    cb(null, drones, locations);
  }).on('error', cb);
}

exports.loadDataFromFile = loadDataFromFile;
