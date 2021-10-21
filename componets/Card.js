app.component('Card', {
    template: `
    <div v-for="happy in happys" class="card">
        <h3>{{happy.cardNum}}</h3>
        <h2>{{happy.cardTitle}}</h2>
        <img :src="happy.imageUrl">
        <Counter></Counter>
    </div>
    `,
    data() {
        return {
            happys: null
        }
    },
    methods: {},
    computed: {},
    mounted() {
        fetch('https://demo1api.herokuapp.com/api/happy')
            .then(res => res.json())
            .then(data => this.happys = data["happy"])
    }
})
