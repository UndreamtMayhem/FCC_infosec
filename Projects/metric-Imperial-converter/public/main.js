$(document)
    .ready(function() {

        // fix menu when passed
        $('.masthead')
            .visibility({
                once: false,
                onBottomPassed: function() {
                    $('.fixed.menu').transition('fade in');
                },
                onBottomPassedReverse: function() {
                    $('.fixed.menu').transition('fade out');
                }
            });

        // create sidebar and attach to menu open
        $('.ui.sidebar')
            .sidebar('attach events', '.toc.item');



        $('#ctof').click(function(e) {

            e.preventDefault();
            var form = $(this).parent();
            var celsiusValue = form.get(0).firstChild.firstChild;

            // check for empty input
            if (!isNaN($(celsiusValue).val())) {
                var displayValue = form.find("p");

                $.post("/api/ctof", {
                    celsius: $(celsiusValue).val(),

                }).done(function(data) {
                    displayValue.text($(celsiusValue).val() + "°C to " + data.Farenheit + " °F")
                }).fail(function(data) {
                    // reuse this message
                    console.log(JSON.stringify(data.responseJSON))
                })

            } else {
                // add field error 
                var fieldToAddErrorClass = form.get(0).firstChild;
                $(fieldToAddErrorClass).addClass("error");




                form.find(".ui.error.message").css("display", "block")


            }

        })
    });