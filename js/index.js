var estudiantes=[];/* es para almacenar estudiantes */


function registro_notas(){
    var nombre=document.getElementById('nombre').value;
    var nota1=document.getElementById('nota1').value;
    var nota2=document.getElementById('nota2').value;
    var nota3=document.getElementById('nota3').value;

    estudiantes.push(
        {
            "nombre":nombre,"nota1":nota1,"nota2":nota2,"nota3":nota3
        }
    );
    listar_notas();/* es para listar los estudiantes */
    document.getElementById('nombre').value="";
    document.getElementById('nota1').value="";
    document.getElementById('nota2').value="";
    document.getElementById('nota3').value="";
}

function listar_notas(){
    var listado='<tr>'

        for(var i=0;i<estudiantes.length;i++){
            listado +="<td>"+i+"</td>";
            listado +="<td>"+estudiantes[i].nombre+"</td>";
            listado +="<td>"+estudiantes[i].nota1+"</td>";
            listado +="<td>"+estudiantes[i].nota2+"</td>";
            listado +="<td>"+estudiantes[i].nota3+"</td>";
            listado +="</tr>";
        }
        document.getElementById('tabla').innerHTML=listado;
}