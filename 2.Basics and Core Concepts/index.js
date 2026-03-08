const app = Vue.createApp({
    data() {
        return {
            courseGoal : 'Finish the course and learn Vue!',
            vueLink : 'https://www.google.com'
        }
    },
    methods : {
        outputGoal(){
            const randomNumber = Math.random()
            if(randomNumber < 0.5){
                return "Breaking Bad"
            } else {
                return "Better call saul"
            }
        }
    }
});

app.mount('#user-goal')

