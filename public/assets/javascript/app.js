$(".submit").on("click", function(event) {
    event.preventDefault();
    var burgerName = $("#burger_name").val();
    $.post("/burger/new", 
        {
            burger_name: burgerName,
            devoured: false
        }, 
        function(data, status) {
            location.reload();
        });
});

$(".devoure").on("click", function(event) {
    event.preventDefault();
    var burgerName = $(this).attr("value");
    $.post("/burger/devoured",
        {
            burger_name: burgerName,
        },
        {
            function(data, status) {
                location.reload();
            }
        });
});