const app = Vue.createApp({
    data: () => ({
        title: "Formularios",
        datos: {
            name: "",
            age: 15,
            langs: [

            ],
            gener: "M"
        }
    }),
    methods: {
        handleSubmit()
        {
            console.log(this.datos)
        }
    }
})
