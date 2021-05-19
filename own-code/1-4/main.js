const app = new Vue({
    el: '#app',
    data()
    {
        return {
            user:{
                title: "hola mundo",
                name: "Douglas",
                age: -17,
                movies: ["Batman", "Flash", "Superman"],
                url: "https://google.com",
                picture: "https://cdn.pixabay.com/photo/2020/12/30/14/26/leopard-5873638_960_720.jpg",
                classValue: "error",
            }
        }
    }
})
