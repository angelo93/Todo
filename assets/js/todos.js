// Check off specific todo by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});
// Click on X to delete todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});
// Create new todos
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        // grabbing new todo from input
        var todoText = $(this).val();
        //create new li and add to ul
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
        // clear input
        $(this).val("");
    }
});
// Toggle form to add new todos
$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});
