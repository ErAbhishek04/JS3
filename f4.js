var total = 0;
for (var i=0 ;i<5; i++)
{
var j= prompt("Please enter the 5 Numbers")
document.write("The numbers are  : "+j)
total = total +parseInt(j)

}
document.getElementById("a").innerHTML = "The total Marks Stored are "+total;

