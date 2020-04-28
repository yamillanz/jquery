$(document).ready(function () {
    let editando = false;
    $("#resultadoBusqueda").hide();
    obtenerTodas();

    $(document).on('click', ".mybtn-delete", function (e) {
        let idTarea = $($(this)[0].parentElement.parentElement).attr('idTarea');
        borrarTarea(idTarea);
        obtenerTodas();
    });

    function borrarTarea(id) {
        $.post("borrarTarea.php", { id }, function (response) {
            console.log(response);
            obtenerTodas();
        });
    }

  /* $(document).on('click', ".editar-tarea", function (e) {
       console.log("editando!");
    }); */


    //TODO: Terminar el editar
    $(document).on('click', '.editar-tarea' , function (e){
        console.log("eedito!");
        console.log($($(this)[0]).attr("idTarea2"));         
        editando = true;
        //$("#nombre").val();
        //$("#descripcion").val()
    });


    function obtenerTodas() {
        $.get("listadoTareas.php", function (response) {
            let tareas = JSON.parse(response);
            let html = "";
            tareas.forEach(tarea => {
                html += `
                    <tr idTarea=${tarea.id}>
                        <td><a href="#" class="editar-tarea" idTarea2=${tarea.id}>${tarea.id}</a></td>
                        <td>${tarea.nombre}</td>
                        <td>${tarea.descripcion}</td>
                        <td><button class="btn btn-outline-danger btn-sm mybtn-delete">Borrar
                            </button>
                        </td>
                    </tr>
                `;
            })
            $("#bodyTareas").html(html);
        });
    }

    //Busqueda de resultados    
    $('#textoBusqueda').keyup(function (e) {
        if ($("#textoBusqueda").val()) {
            let valor = $('#textoBusqueda').val();
            let htmlResultado = "";
            $("#resultadoBusqueda").show();
            $.post(
                "buscarTareas.php",
                { valor },
                function (response) {
                    let tareas = JSON.parse(response);
                    tareas.forEach(t => {
                        htmlResultado += "<li>" + t.nombre + "</li>";
                    });
                    $("#resultadoBusqueda").html(htmlResultado);
                }
            );
        } else {
            // $("#resultadoBusqueda").html("");
            $("#resultadoBusqueda").hide();
        }
    });



    //Envio de datos
    $("#frmDatos").submit(function (e) {

        let datosPost = {
            nombre: $("#nombre").val(),
            descripcion: $("#descripcion").val(),
            id: ""
        }

        let url = !editando ? "addtarea.php" : "editarTarea.php";

        $.post(url, datosPost, function (response) {
            //console.log(response); 
            $("#frmDatos").trigger("reset");
        });

        editando = false;

        obtenerTodas();
        e.preventDefault();
    });


});