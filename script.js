
function hfVue (){

  new Vue({

        el: '#app',
        data:{
          headers: [
            'HOME',
            'ABOUT US',
            'FACILITIES',
            'MEMBERSHIP',
            'TESTIMONIALS'],
          footers: [
            '© Copyright 2012 - 2021',
            'Avada Theme by Theme Fusion',
            'All Right reserved',
            'Powered by WordPress'
          ]

        }

  })


}


function init() {

    console.log('hello world');

    hfVue()
}
$(init);
