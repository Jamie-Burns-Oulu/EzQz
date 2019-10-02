$(document).ready(function() {
    checkSize();
    $(window).resize(checkSize);
    var desktop;

    function checkSize() {
        if ($(window).width() > 700) {
            desktop = true;
        } else {
            desktop = false;
        }
        if (!desktop) {
            $(".chart-container").css({ "margin-top": "-90px" });
            $(".chart-item").css({ "margin-left": "0px", width: "100%" });
            $("#header").css({ fontSize: "3em", height: "70px" });
            $("#queueMain").css({
                width: "100%",
                padding: "0px",
                lineHeight: "normal",
                height: "35px",
                fontSize: "1.5em",
                position: "fixed",
                top: "70px",
                left: "0"
            });
        } else {
            $(".chart-container").removeAttr("style");
            $("#header").removeAttr("style");
            $("#main_body").removeAttr("style");
            $("#queueMain").removeAttr("style");
            $(".chart-item").removeAttr("style");
        }
    }

    $(function() {
        $("#header").data("size", "big");
    });

    $(window).scroll(function() {
        if (desktop) {
            if ($(document).scrollTop() > 0) {
                if ($("#header").data("size") == "big") {
                    $("#header").data("size", "small");
                    $("#header").stop();
                    $("#header").animate(
                        { fontSize: "3em" },
                        { duration: 600, queue: false }
                    );
                    $("#header").animate(
                        { height: "70px" },
                        { duration: 600, queue: false }
                    );
                    $("#header_q").fadeToggle("slow");
                    $("#queueMain").hide();
                }
            } else {
                if ($("#header").data("size") == "small") {
                    $("#header").data("size", "big");
                    $("#header").stop();
                    $("#header").animate(
                        { fontSize: "4.5em" },
                        { duration: 600, queue: false }
                    );
                    $("#header").animate(
                        { height: "120px" },
                        { duration: 600, queue: false }
                    );
                    $("#header_q").fadeToggle("fast");
                    $("#queueMain").show({ duration: 300, queue: false });
                }
            }
        }
    });

    $("#modal-close").click(function() {
        $("#dialog").hide();
    });

    $("#about").click(function() {
        $("#dialog").show();
    });
    $("#dialog").click(function(e) {
        console.log(e.target);
        if (e.target.id == "dialog") {
            $(this).hide();
        }
    });
});
