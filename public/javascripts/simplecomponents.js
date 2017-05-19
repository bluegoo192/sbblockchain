Vue.component('nav-hamburger', {
  template: '<div id="hamburger" class="vcentercontainer" @click="togglenav">\
              <div class="flex">\
                <a class="vcentercontainer" href="#">\
                  <img src="/images/hamburger.svg" />\
                </a>\
                <a class="centerhelper">a</a>\
              </div>\
            </div>',
  methods: {
    togglenav: function () {
      this.$emit('togglenav');
    }
  }
})
