 
 
 function count(){ 
    for (let i = 0; i < 10; i++) {
      console.log('current count:${i}');
      console.log('loop stoped')
    
 }
}
function table()
{  document.write('<table border="1">');
    for (let i = 1; i <=5; i++){
        document.write('<tr>');
        for(let j=1;j<=3;j++){
            document.write('<td>'+i+","+j+'</td>');
        }
         document.write('</tr>');
     }
     document.write('</table>');
}

