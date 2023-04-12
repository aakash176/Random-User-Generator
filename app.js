const app = new Vue({
    el: '#app',
    data(){
        return {
            firstName: "John",
            lastName: "Doe",
            email:"john.doe@gmail.com",
            gender:'male',
            image:'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },
    methods:{
        async changeUser(){
            const obj = await fetch('https://randomuser.me/api')
            const {results} = await obj.json()
            this.firstName = results[0].name.first
            this.lastName = results[0].name.lastName
            this.email = results[0].email
            this.gender = results[0].gender
            this.image = results[0].picture.large
            
        }
    }
    
})
