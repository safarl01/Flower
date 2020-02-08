$(document).ready(function () {
    new WOW().init();

    let elementWidth = $(".toggleSide").width() + "px";

    $(".bucket").click(function () {
        $(".toggleSide").animate({
            right: '0'
        });
    });

    $(".cancel-icon-side").click(function () {
        $(".toggleSide").animate({
            right: `-${elementWidth}`
        });
    });

    $(".arrowLeft").click(function () {
        $(".toggleSide").animate({
            right: `-${elementWidth}`
        });
    });

    $(".toggleButtonSide").click(function () {
        $(".listChildSide .lists").toggle();

        $(".mobileNavbar").css({
            "position": "absolute",
            "display": "block",
            "z-index": "2"
        });
    });


    $(".btnRight").click(function () {
        $(".toggleSide").animate({
            right: `-${elementWidth}`
        });

        $(".popUpSide").show();

        $(".contact-form").animate({
            marginBottom: '5%'
        });

    });

    $(".cancelIconSide i").click(function () {
        $(".popUpSide").hide();
    });


    let inputs = $(".contact-form input");

    for (let s = 0; s < inputs.length; s++) {

        $("#popUp-button").on('click', function () {

            if (inputs[s].value == "") {
                inputs[s].classList.add("borderRed");
            } else {
                inputs[s].classList.remove("borderRed");
            }

            if ($(".sizeForm .text-form").val() == "") {
                $(".sizeForm .text-form").addClass("borderRed");
            } else {
                $(".sizeForm .text-form").removeClass("borderRed");

                $(".sizeForm .text-form").val("");

                $(".popUpHide").show();

                $(".contact-form").animate({
                    marginBottom: '-100%'
                });

                setTimeout(function () {
                    $(".popUpHide").hide();
                    $(".popUpSide").hide();
                }, 2000);

                $(".appendTop .totalOnSide").empty();
                $(".toggleCenterSide .totalOnSide").empty();

                $(".contact-form input").val("");

            }
        });
    };


    $("#basketShop").click(function () {
        $(".popUpSide").show();

        $(".contact-form").animate({
            marginBottom: '5%'
        });
    });




    let productBucket = $(".productBucket");
    let photosTextOne = $(".photosTextOne h4");
    let photosTextTwo = $(".photosTextTwo");
    let photos = $(".photosSideOnWalpaper .testTwo");



    // let totalMoney = $("#totalText");
    // let a = 0;

    for (let i = 0; i < productBucket.length; i++) {

        productBucket[i].onclick = function () {
            // let moneyNumber = photosTextTwo[i].innerText.split(" ");

            // totalMoney.text(`Ümumi: ${moneyNumber[0]} AZN`);



            $(".totalNone").css({
                "display": "block"
            });

            $(".toggleSide").animate({
                right: '0'
            });

            $(".toggleCenterSide #disNone").hide();

            $(".toggleCenterSide").css({
                "padding": "0 25px"
            });

            $(".totalOnSide").append(`
                <div class="product-info d-flex justify-content-between align-items-center w-100">
                    <div class="prod-image">
                        <img src="${photos[i].src}" alt="">
                    </div>

                    <div class="prod-details d-flex flex-column align-items-center justify-content-center">
                        <div class="prod-title">${photosTextOne[i].innerText}</div>
                            <ul>
                                <li>${photosTextTwo[i].innerText}</li>
                            </ul>
                    </div>

                    <div class="prod-del" id="prod-delete">
                        <i class="far fa-trash-alt"></i>
                    </div>
                </div>
            `);

            {
                /* <img src="img/garbage.png" alt="delete"></img> */
            }


            let prodDel = $(".product-info .prod-del");

            for (let j = 0; j < prodDel.length; j++) {

                prodDel[j].addEventListener('click', prodDelete);
            };
        };

        // $("#prod-delete").on("click", prodDelete);

        function prodDelete() {
            $(this).parent().remove();

            // totalMoney.text(`Ümumi: 0,00 AZN`);
        };
    };





    let hoverButtonOne = $(".hoverOnButtonOne");
    let heart = $(".hoverOnButtonOne #heart");

    for (let a = 0; a < hoverButtonOne.length; a++) {
        heart[a].onclick = function () {

            $("#snackbar").css({
                "visibility": "visible",
                "bottom": "30%"
            });

            setTimeout(function () {
                $("#snackbar").css({
                    "visibility": "hidden",
                    "bottom": "0"
                });
            }, 2000);


        };
    };



    let numberIncrement = $(".ctrl-counter-num").text();
    let numTwo = Number(numberIncrement);

    $(".ctrl-button-decrement").on('click', function () {
        if ($(".ctrl-counter-num").text() == 1) {
            this.text() == 1;
            !numTwo--
        } else {
            $(".ctrl-counter-num").text(numTwo-- - 1);
        }
    });

    $(".ctrl-button-increment").on('click', function () {
        if ($(".ctrl-counter-num").text() == 10) {
            this.text() == 10;
            !numTwo++
        } else {
            $(".ctrl-counter-num").text(numTwo++ + 1);
        }
    });



    let formControl = $(".contactForm .form-control");

    for (let i = 0; i < formControl.length; i++) {
        $("#submit").click(function () {
            if (formControl[i].value == "") {
                formControl[i].classList.add("border-red");

                return false
            } else {
                formControl[i].classList.remove("border-red");

                // $("#snackbar").css({
                //     "visibility": "visible",
                //     "bottom": "30%"
                // });

                // setTimeout(function () {
                //     $("#snackbar").css({
                //         "visibility": "hidden",
                //         "bottom": "0"
                //     });
                // }, 2000);

                // $(".contactForm .form-control").val("");

            }


        });

    };

});