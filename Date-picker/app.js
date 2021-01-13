$(function (){
   
    $('.date').focus(function() {
        $('ul').empty();
  
    var odddays =0;
    var odddays1=0;
    window.month = 'jan';   
    let months ={jan:31,feb:29,march:31,april:30,may:31,june:30,july:31,aug:31,sep:30,oct:31,nov:30,dec:31};
    var baseyear = 2000;
    var year = 2000;
//change in year in dropdown
$('#year').change(function(){
    year=$(this).children("option:selected").text();
    console.log(year);
   $('ul').empty();
   odddays =0;
    if(year > baseyear){
        var yearsCount = year - baseyear;
        if(year%4!=0){
            months.feb = 28;
        }      
        for(let i=1; i<yearsCount;i++){
            if((baseyear+i)%4 == 0){
                odddays = odddays+2;
                // months.feb = 29;
            }
            else{
                odddays = odddays+1;
                // months.feb = 28;
            }
        }
        console.log(odddays);
        shuffle();
    }
})
    //years in dropdown
    for(let i=baseyear;i<=2040;i++){
        $('#year').append(`
    <option value="0">${i}</option>
   `)
    }
    //months in dropdown
   for(i in months){
    $('#month').append(`
    <option value="0">${i}</option>
   `)
    }
//change in month in dropdown
   $('#month').change(function(){
   window.month=$(this).children("option:selected").text();
   console.log(window.month);
  $('ul').empty();
  shuffle();
    })
    //functionality for calendar
   function shuffle(){  
    var value = 0;   
   let days =['M', 'T','W','Th','F','S','Su']
   for(let i in months){
   value = value+months[i]; 
   if(i==month){
   value=value-months[i]+1
   break;
   }
   }
   value=value%7;  
   odddays1 =(odddays+value)%7;
   if(odddays1==0){
           odddays1=7;
   }  
   for(let i=0;i<7;i++){
           $('ul').append(` 
           <li class="weeks">${days[i]}</li>
          `) 
   }
   for(let i=1;i<odddays1;i++){
           $('ul').append(` 
           <li class="weeks"></li>
          `)
   }
 for(let i=1;i<months[month]+1;i++){       
     $('ul').append(`
     <li class="weeks">${i}</li>  
      `);
   }
   $('li').on('click',function(){
$('.date').val($(this).text()+'/'+window.month+'/'+year);
$('ul').empty();
   })
   }
 shuffle();
})
})