var app = new Vue({
  el: '#app',
  data: {
    buzzwordCounter: 0,
    buzzwords: [
      "distributed",
      "secure",
      "reliable",
      "transparent",
      "decentralized"
    ],
    show: {
      mobilenav: false
    }
  },
  methods: {
    test: function () {
      console.log('hi');
    }
  },
  computed: {
    currentBuzzword: function () {
      if (this.buzzwordCounter >= this.buzzwords.length) {
        this.buzzwordCounter = 0;
      }
      return this.buzzwords[this.buzzwordCounter]
    }
  },
  mounted: function () {
    setInterval(function () {
      this.buzzwordCounter += 1
    }.bind(this), 2000)
  }
})
