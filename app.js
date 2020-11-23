const app = new Vue({
    el: '#app',
    data: {
        nuevaTarea: "",
        tareas: []
    },
    methods: {
        agregarTarea(){
            this.tareas.push({
                titulo: this.nuevaTarea,
                hecho: false
            })
            this.nuevaTarea=""
        },

        eliminarTarea(tarea){
            const todoIndex = this.tareas.indexOf(tarea);

            if (tarea.hecho == false){
                var s = prompt("¿Estas seguro que desa eliminar esta tarea incompleta? (S/N)");

                if (s.toLowerCase() == "s"){
                    this.tareas.splice(todoIndex, 1);
                }
            }
            else{
                this.tareas.splice(todoIndex, 1);
            }
        },

        marcarTodas(){
            this.tareas.forEach(tarea =>{
                tarea.hecho = true;
            })
        },

    }
})