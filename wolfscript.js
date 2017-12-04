//set lengths and width
var rLength = 150
var rWidth = 60
//y positioning for rectangles
var yStart = 15
var yDist = 72
//set x and y positioning for lines
var lineStartY = yStart + (rWidth / 2)
var lineX1 = rLength + 15
var lineX2 = 185
//colors 
var colors = {
  wolves: '#666666',
  starks: '#003d4d',
  snow: 'black',
  ghost: '#ffffff'
}
//x positioning
var xs = {
  wolves: 185,
  starks: 15,
  snow: 15,
  ghost: 185
}
var currentlies = 
    {
  Robb: 'killed at the Red Wedding',
  'Grey Wind': 'killed at the Red Wedding',
  Lady: 'sentenced to death by Cersei; killed by Ned',
  Arya: 'alive',
  Nymeria: 'alive',
  Bran: 'alive',
  Summer: 'killed protecting Bran',
  Rickon: 'killed by Ramsay Bolton',
  Sansa: 'alive',
  'Shaggy Dog': 'killed by idr',
  Jon: 'alive',
  Ghost: 'alive'
}
//build svg
var draw = SVG('drawing').size(350, 450)
//rectangle function
function recta(id, species, sequence) {
  var newY = yStart + (sequence * yDist)
  var newColor = colors[species] 
  var newX = xs[species]
  var newName = id
  var n = newName.length
  var currently = currentlies[id]
  draw.rect(rLength, rWidth).x(newX).y(newY)
  .fill(newColor).addClass(id)
    draw.text(function(add) {
    add.tspan(id).attr('font-size', 15).fill('#ebebf1').addClass(species)
  })
    .move(newX + 25 - n, newY + (rWidth * 0.3))
}
//line function
function linez(sequence, id) {
  var newY = lineStartY + (sequence * yDist)
  draw.line(lineX1, newY, lineX2, newY).stroke({width: 7}).stroke("#ff0066").addClass(id)
}
//draw rectangles
recta('Robb','starks', 0)
recta('Grey Wind','wolves', 0)
recta('Sansa', 'starks', 1)
recta('Lady', 'wolves', 1)
recta('Arya', 'starks', 2)
recta('Nymeria', 'wolves', 2)
recta('Bran', 'starks', 3)
recta('Summer', 'wolves', 3)
recta('Rickon', 'starks', 4)
recta('Shaggy Dog', 'wolves', 4)
recta('Jon', 'snow', 5)
recta('Ghost', 'ghost', 5)
//draw lines
linez(0, 'robbWind')
linez(1, 'ladySansa')
linez(2, 'nymerarya')
linez(3, 'sumBran')
linez(4, 'rickDog')
linez(5, 'jhost')
//button1 function
  $(".btn1").click(function() {
    $(this).addClass('clicked');
    $(".btn2").removeClass("clicked");
    $(".nymerarya").delay(500).fadeTo(1000, 0.1);
    $(".Lady").delay(2000).fadeTo(1000, 0.2);
    $(".ladySansa").delay(2000).fadeTo(1000, 0.1);
    $(".Robb").delay(3500).fadeTo(1000, 0.2);
    $(".Grey").delay(3500).fadeTo(1000, 0.2);
    $(".robbWind").delay(3500).fadeTo(1000, 0.1);
    $(".rickDog").delay(5000).fadeTo(1000, 0.2);
    $(".Shaggy").delay(5000).fadeTo(1000, 0.2);
    $(".sumBran").delay(6500).fadeTo(1000, 0.2);
    $(".Summer").delay(6500).fadeTo(1000, 0.2);
    $(".Rickon").delay(8000).fadeTo(1000, 0.2);
    $(".btn2").delay(9500).fadeIn();
  });
//reset button function
$(".btn2").click(function() {
  $(this).addClass('clicked');
  $(".btn1").removeClass("clicked");
  $(".nymerarya").fadeTo(1000, 1);
  $(".Lady").fadeTo(1000, 1);
  $(".ladySansa").fadeTo(1000, 1);
  $(".Robb").fadeTo(1000, 1);
  $(".Grey").fadeTo(1000, 1);
  $(".robbWind").fadeTo(1000, 1);
  $(".rickDog").fadeTo(1000, 1);
  $(".Shaggy").fadeTo(1000, 1);
  $(".sumBran").fadeTo(1000, 1);
  $(".Summer").fadeTo(1000, 1);
  $(".Rickon").fadeTo(1000, 1);
  $(".btn2").delay(1500).fadeOut();
});