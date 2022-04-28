// click on the button and increase the counter
    let c=0;
    let div=$("#counter");
    

    function counter(){
        c++;
       div.text(c);
    }

function init(){
    //setting
    $("#div-info2").hide();
    //hook event
    $("#btn-counter").on(`click`,counter);
    $("#btn-counter").on(`mouseover`,function(){
        console.log("The user attemps a click");
        
    });

    $("#link-info1").on("click",function(){
        $("#div-info2").hide();
        $("#div-info1").show();
        $(this).css(`color`,`blue`);
        
    });
    $("#link-info2").on("mouseover",function(){
        $("#div-info1").hide();
        $("#div-info2").show();
    });

}
window.onload=init;

//fuction
    //variable counter
    //display the var into the id=counter