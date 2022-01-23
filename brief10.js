
$(document).ready(function(){
    $.getJSON('produits.json',function(data){
    var mdata = '';
    
        $.each(data,function(key,value){
            
            mdata+='<tr>';
            mdata+='<td>'+value.id+'</td>';
            mdata+='<td>'+value.désignation+'</td>';
            mdata+='<td>'+value.prix+" DH "+'</td>';
            mdata+='<td>'+value.catégorie+'</td>';
            mdata+='<td>'+value.disponibilité+'</td>';
            mdata+='<td>'+value.fournisseur["nom social"]+" ,"+value.fournisseur["adresse"] +'</td>';
            
            mdata+='</tr>';
            console.log(mdata)
        });
        $('#tbody').append(mdata)
    });


});
$(document).ready(function(){
    $("#search").on("keyup",function(){
        var value = $(this).val().toLowerCase();
        $("#tbody tr").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value)>-1);
        })
    })
})





