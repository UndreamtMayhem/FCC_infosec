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

            var celsiusValue = $(this).parent().get(0).firstChild.firstChild;
            if (!isNaN(celsiusValue)) {
                var displayValue = $(this).parent().find("p");

                $.post("/api/ctof", {
                    celsius: $(celsiusValue).val(),

                }).done(function(data) {
                    displayValue.text($(celsiusValue).val() + "°C to " + data.Farenheit + " °F")
                })

            } else {
                // add field error 
                // create check something
                alert("bad boy");
            }

        })
    });