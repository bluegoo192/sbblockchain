Vue.component('nav-hamburger', {
  template: '<div id="hamburger" class="vcentercontainer" @click="togglenav">\
              <div class="flex">\
                <a class="centerhelper">a</a>\
                <a class="vcentercontainer" href="#">\
                  <img src="/images/hamburger.svg" />\
                </a>\
              </div>\
            </div>',
  methods: {
    togglenav: function () {
      this.$emit('togglenav');
    }
  }
})

var app = new Vue({
  el: '#app',
  data: {
    show: {
      mobilenav: false
    }
  },
  methods: {
    test: function () {
      console.log('hi');
    }
  }
})
