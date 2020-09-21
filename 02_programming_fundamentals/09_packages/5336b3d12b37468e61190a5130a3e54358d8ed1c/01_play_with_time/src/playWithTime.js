import moment from "moment";
export { formatDate, yearsSinceDate, getDayFromDate, daysSinceDate };


// yarn add moment

// moment().format("MMM Do YY");

// Wednesday 31st May 2000
function formatDate(date) {
    return moment(date).format("dddd, MMMM Do YY");
    
}
// 20
function yearsSinceDate(date) {
  return moment(date).format("YY");


}
// 7394
function daysSinceDate(date){
    var a = moment([2000, 06, 31]);
    var b = moment([2000, 05, 31]);
    a.diff(b, 'days');
}



// Wednesday
function getDayFromDate(date){
  return moment(date).format("dddd");
}
  // returns duration object with the duration between x and y 




  



