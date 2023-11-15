const {createApp} = Vue;
createApp({
    data(){
        return{
            toDoS: [],
            newToDo: {
                text: "",
                done: false
            }
        }
    },
    methods: {
        addToDo: function() {
            this.toDoS.push({...this.newToDo});
            this.newToDo.text = "";
        },
        removeToDo: function(ind) {
            this.toDoS.splice(ind, 1);
        },
        toDoDone: function(ind) {
            if (this.toDoS[ind].done === false) {
                this.toDoS[ind].done = true;
            } else {
                this.toDoS[ind].done = false;
            }
        }
    }
}).mount("#app");