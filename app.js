new Vue({
    el: '#app',
    data: {
        playerLife: 30,
        monsterLife: 19,
    },
    computed: {
        hasResult() {
            return this.playerLife == 0 || this.monsterLife == 0;
        }
    },
    methods: {},
    watch: {}
});
