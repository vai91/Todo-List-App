// Check of specific todos by clicking
//following code says 'when an li is clicked inside this ul, run this code' 
//otherwise we would only be listening to the li's that are clicked inside of that the wrapping ul.
//this we we are sure to be listening to the element that was on the page when first loaded.
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

//click on x to delete todo
$("ul").on("click", "span", function (event) {
// it stops event bubbling. Otherwise this click event on the span element would fire the click event of the li after its execution.
    event.stopPropagation(); 
// to fade out and delete the parent of the element. 
//In this case deleting span is not enough, we want the whole li to disappear.
// fadeout does not delete the li. just hides them.
//if i chain the remove() after fadeOut() it will start fading out, then before it can finish, will be deleted.
//So, I set a fadeOut time, and pass an anonymous function which will be executed after time has passed.
    $(this).parent().fadeOut(500, function(){
    //this next $(this) refers to the li, not to the span any longer.
        $(this).remove();
    }); 
});

//in this app selecting only input would suffice, but to be more specific, i choose text input.
$("input[type='text']").on("keypress", function (event) {
//13 is code of enter key, so i'm checking if the enter is pressed here 
    if(event.which === 13){
    //grabbing new todo text from the input after enter key is pressed.
        var todoText = $(this).val();
        $(this).val("");
    //create a new li and add to ul.
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus").click(function (params) {
//fadeToggle keeps track of if it should be faded in or out. 
    $("input[type='text']").fadeToggle();
})