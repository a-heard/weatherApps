var newYork    = moment.tz("2014-06-01 12:00", "America/New_York");
var losAngeles = newYork.clone().tz("America/Los_Angeles");
var london     = newYork.clone().tz("Europe/London");
newYork.format();    
losAngeles.format(); 
london.format();     
console.log(moment())
