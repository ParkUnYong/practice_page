var Body = {
    setColor : function(color){
        //document.querySelector('body').style.color=color;
        $('body').css('color',color);
    },
    setBackgroundColor: function(color){
        //document.querySelector('body').style.backgroundColor=color;
        $('body').css('background-color',color);
    }
}

var Links ={
    setColor:function(color){
        // var i = 0;
        //     var link = document.querySelectorAll('a');
        //     while(i < link.length)
        //     {
        //         link[i].style.color=color;
        //         i = i + 1;
        //     }
        $('a').css('color',color);

    }
}


function nightDayHandler(self){
    if (self.value==='night'){
        self.value='day';
        Body.setBackgroundColor('black')
        Body.setColor('white');
        Links.setColor('powderblue');

    }   else{
            self.value='night';
            Body.setBackgroundColor('white')
            Body.setColor('black');
            Links.setColor('blue');
        }
}