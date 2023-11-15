const {createApp} = Vue;
createApp({
    data(){
        return{
            toDoS: [
                "Pulire camera",
                "Buttare la spazzatura",
                "Fare gli esercizi"
            ],
            newToDo: "",
        }
    },
    methods: {
        addToDo: function() {
            this.toDoS.push(this.newToDo);
            this.newToDo = "";
        },
    }
}).mount("#app");