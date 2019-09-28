new Vue({
  el: '#exercise',
  data: {
    effectClasses: {
      highlight: false,
      shrink: true,
    },
    blue: 'blue',
    isVisible: true,
    userClass: '',
    myStyle: {
      height: '100px',
      backgroundColor: 'black'
    },
    progressBar:{
      backgroundColor: 'red',
      width: '0px'
    }
  },
  methods: {
    startEffect: function() {
      let vm = this;
      setTimeout(() => {
        vm.effectClasses.highlight = !vm.effectClasses.highlight;
        vm.effectClasses.shrink = !vm.effectClasses.shrink;
      }, 500);
    },

    startProgress: function(){
      let vm = this;
      let width = 0;
    
      let interval = setInterval(()=>{
        width += 10;
        vm.progressBar.width = width + 'px';
        if(width == 240) clearInterval(interval);
      }, 100);
    }
  }
});
