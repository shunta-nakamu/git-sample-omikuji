(function(){
    'use strict';

    var btn = document.getElementById('btn');

    btn.addEventListener('click', function(){
        var n = Math.random();

        if(n < 0.05){
            this.textContent = '大吉';
        }else if(n < 0.2){
            this.textContent = '中吉';
        }else{
            this.textContent = '吉';
        }
    });

    btn.addEventListener('mousedown', function(){
        this.className = 'pushed';
    });

    btn.addEventListener('mouseup', function(){
        this.className = '';
    });

})();