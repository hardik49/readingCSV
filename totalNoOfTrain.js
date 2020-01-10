//const fs = require('fs');
const csv = require("csv");
const train = [];
const obj = csv();

function MyCsv(con1) {
  this.tno = con1;
}

var arr = [];

obj.from.path("isl_wise_train_detail_03082015_v1.csv").to.array(function(data) {
  for (let i = 0; i < data.length; i++) {
    arr.push(new MyCsv(data[i][1]));
  }
  //console.log(arr)
  arr.forEach(ele => {
	console.log(ele.tno);
  });
});


