const app = Vue.createApp({
    data() {
        return {

        }
    }
});
const CardCounterButton = {
    template: `
    <button class="counter" ref="counter" @click="Incrementer">{{count}}</button>
    <slot></slot>
    `,
    data() {
        return {
            count: 0,
            finished: false
        }
    },
    methods: {
        Incrementer() {
            if (this.count < 10)
                this.count += 1
        }
    }
}
app.component('Card', {
    props: {

    },
    components: {CardCounterButton},
    template: `
    <div v-for="happy in happys" class="card">
        <h3>{{happy.cardNum}}</h3>
        <h2>{{happy.cardTitle}}</h2>
        <img :src="happy.imageUrl">
        <CardCounterButton>Nanma</CardCounterButton>
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
            .then(data => this.happys = data)

    }
})


