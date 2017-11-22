(function () {
    var easingFunction;
    $("td").click(function () {
        easingFunction = $(this).parent().find("th").html();
    });
    (function () {
        $(".stop").click(function () {
            $(".animation-container img").stop();
        });
    })();
    (function () {
        $("td").click(function () {
            $(this).css("background-color", "#a21b5d");
        });
    })();
    (function () {
        $(".opacityOn").click(function () {
            $(".animation-container img").css("opacity", "1");
        });
    })();
    (function () {
        $(".displayOn").click(function () {
            $(".animation-container img").show(1, "swing");
        });
    })();
    (function () {
        $(".displayOff").click(function () {
            $(".animation-container img").hide(1, "swing");
        });
    })();
    //    animations
    (function () {
        $("tr td:nth-of-type(1)").click(function () {
            $(".animation-container img").toggle(1500, easingFunction);
        });
    })();
    (function () {
        $("tr td:nth-of-type(2)").click(function () {
            $(".animation-container img").show(1500, easingFunction);
        });
    })();
    (function () {
        $("tr td:nth-of-type(3)").click(function () {
            $(".animation-container img").hide(1500, easingFunction);
        });
    })();
    (function () {
        $("tr td:nth-of-type(4)").click(function () {
            $(".animation-container img").slideToggle(1500, easingFunction);
        });
    })();
    (function () {
        $("tr td:nth-of-type(6)").click(function () {
            $(".animation-container img").slideDown(1500, easingFunction);
        });
    })();
    (function () {
        $("tr td:nth-of-type(5)").click(function () {
            $(".animation-container img").slideUp(1500, easingFunction);
        });
    })();
    (function () {
        $("tr td:nth-of-type(7)").click(function () {
            $(".animation-container img").fadeToggle(1500, easingFunction);
        });
    })();
    (function () {
        $("tr td:nth-of-type(8)").click(function () {
            $(".animation-container img").fadeIn(1500, easingFunction);
        });
    })();
    (function () {
        $("tr td:nth-of-type(9)").click(function () {
            $(".animation-container img").fadeOut(1500, easingFunction);
        });
    })();
    (function () {
        $("tr td:nth-of-type(10)").click(function () {
            if ($(".animation-container img").css("opacity") == "1") {
                $(".animation-container img").fadeTo(1500, 0.3);
            }
            else {
                $(".animation-container img").css("opacity", "1")
            }
        });
    })();
})();