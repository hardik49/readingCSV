const csv = require("csv");
const obj = csv();
let MyData = [],
  findTrain = [],
  distance = [],
  finalDitance = [];
function MyCSV(
  data0,
  data1,
  data2,
  data3,
  data4,
  data5,
  data6,
  data7,
  data8,
  data9,
  data10,
  data11
) {
  (this.trainno = data0),
    (this.trainname = data1),
    (this.islno = data2),
    (this.stationCode = data3),
    (this.stationName = data4),
    (this.arrivaltime = data5),
    (this.departureTime = data6),
    (this.distance = data7),
    (this.sourceStationCode = data8),
    (this.sourceStationName = data9),
    (this.destinationStationCode = data10),
    (this.destinationStationName = data11);
}

function Distance(arrayDistance) {
  arrayDistance.forEach(ele => {
    distance.push(ele.distance);
  });
  finalDitance = distance.slice(1).map(function(x) {
    return parseInt(x, 10);
  });
}

function maxDistance(arrMaxDistance) {
  console.log(JSON.stringify(arrMaxDistance));
}

function minDistace(arrMinDistance) {
  console.log(JSON.stringify(arrMinDistance));
}

function getUnique(array) {
  let uniqueArray = [];
  //   console.log(array);
  for (let value of array) {
    if (uniqueArray.indexOf(value) === -1) {
      //   uniqueArray.push();
      console.log("VALUE" + value);
    }
  }
  return uniqueArray;
}

function process() {
  obj.from
    .path("isl_wise_train_detail_03082015_v1.csv")
    .to.array(function(data) {
      for (let index = 0; index < data.length; index++) {
        MyData.push(
          new MyCSV(
            data[index][0],
            data[index][1],
            data[index][2],
            data[index][3],
            data[index][4],
            data[index][5],
            data[index][6],
            data[index][7],
            data[index][8],
            data[index][9],
            data[index][10],
            data[index][11]
          )
        );
      }
      MyData.forEach(items => {
        findTrain.push(items["trainno"]);
	  });
	  
      var uniqueNames = getUnique(findTrain);
     
      console.log("Total number of Trains : " + uniqueNames.length);
      Distance(MyData);
      console.log("Maximum distance is:");
      maxDistance(
        MyData[finalDitance.indexOf(Math.max.apply(Math, finalDitance))]
      );
      console.log("Maximum distance is:");
      minDistace(
        MyData[finalDitance.indexOf(Math.min.apply(Math, finalDitance))]
      );
    });
}

process();
