var items = document.querySelectorAll('.circle a');
var k = 50;
for(var i = 0, l = items.length; i < l; i++) {
  items[i].style.left = (50 - k*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";

  items[i].style.top = (50 + k*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
}


