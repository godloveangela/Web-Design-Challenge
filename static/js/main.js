
function getCsvFileData(filePath) {
  let result = []
  var xhr = new XMLHttpRequest();
  xhr.open("GET", filePath, false);
  xhr.onload = function (e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        result = csvDataToJon(xhr.responseText)
      } else {
        console.error(xhr.statusText);
      }
    }
  };
  xhr.send(null);
  return result
}

function csvDataToJon(csv) {
  var lines = csv.split("\n");

  var result = [];

  var headers = lines[0].split(",");

  for (var i = 1; i < lines.length; i++) {
    var obj = {};
    var currentline = lines[i].split(",");

    for (var j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }
    result.push(obj);
  }
  return result;
}

var tableNeedData=getCsvFileData('../../static/file/cities.csv')
var tableHeader=tableNeedData[tableNeedData.length-1]
var theaderDom=document.querySelector('.table thead tr')
var tbodyDom=document.querySelector('.table tbody')
var theaderInner=''
var tbodyInner=''
for(var key in tableHeader){
	theaderInner='<th>'+key+'</th>'
	theaderDom.innerHTML+=theaderInner
}
var tbodyShowInner=document.querySelectorAll('.table tbody tr')

var needUseData=tableNeedData.length-1
for(var i=0;i<needUseData;i++){
	tbodyInner+='<tr><td>'+tableNeedData[i].City_ID+'</td><td>'+tableNeedData[i].City+'</td><td>'+tableNeedData[i].Cloudiness+'</td><td>'+tableNeedData[i].Country+'</td><td>'+tableNeedData[i]['Date']+'</td><td>'+tableNeedData[i].Humidity+'</td><td>'+tableNeedData[i].Lat+'</td><td>'+tableNeedData[i].Lng+'</td><td>'+tableNeedData[i]['Max Temp']+'</td><td>'+tableNeedData[i]['Wind Speed']+'</td></tr>'
	
}
tbodyDom.innerHTML=tbodyInner