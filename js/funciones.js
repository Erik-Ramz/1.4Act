Vue.component('mis-tareas',{
    props:['tareas'],
    template:`<ul><li v-for="tarea in tareas">{{tarea.title}}</li></ul>`,
});
new Vue({
    el:'#main',
    mounted() {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((respuesta)=>{
                this.tareasAjax=respuesta.data;
            });
    },
    data:{
        tareasAjax:[],
        tareasLocales:[
            {title: 'Hacer la compra'},
            {title: 'Aprender Vue'},
            {title: 'Aprender JavaScript'},
        ]
    }
})