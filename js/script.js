const { createApp } = Vue;

createApp({

    data() {
        return {
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

    }

}).mount("#app");