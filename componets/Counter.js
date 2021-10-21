app.component('Counter', {
    template: `
    <button class="counter" ref="counter" @click="Incrementer">{{count}}</button>
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
})
