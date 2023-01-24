const { createApp } = Vue;

createApp({

    data() {
        return {
            newTask: "",
            taskList: [
                {
                    text: "Completare Milestone 1",
                    done: true
                },
                {
                    text: "Finire l'esercizio",
                    done: false
                },
                {
                    text: "Completare i bonus",
                    done: false
                },
                {
                    text: "Pushare tutto",
                    done: false
                }
            ]
        }
    },
    methods: {
        removeTask (i) {
            console.log (`Rimosso Task "${this.taskList[i].text}"`);

            this.taskList.splice (i, 1);
        },
        addTask() {
            console.log (`Hai inserito: ${this.newTask}`);

            this.taskList.push (
                {
                    text: this.newTask,
                    done: false
                }
            );

            this.newTask = "";
        }
    }
}).mount("#app");