let area;
let width;
let height;

width = window.prompt("Enter width");
height = window.prompt("Enter height");
 
area= getArea(width,height); 

function getArea(width,height){
   return width * height;
}
document.write('the area is = ',area);

