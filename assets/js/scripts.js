// Activación de modals
    const myModal = document.getElementById('exampleModal');
    const myInput = document.getElementById('myInput');

    myModal.addEventListener('shown.bs.modal', () => {
            myInput.focus();
    });

//Activación de tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => {
        new bootstrap.Tooltip(tooltipTriggerEl)
    })

//Cambia color de fondo de la carta en hover
    $(".card").hover(function () {
        $(this).css({
            "cursor": "pointer",
            "box-shadow": ".1rem .1rem 1rem .1rem #0dcaf0"
        })
    });

//Esconde y muestra el contenido al hacer click en el icono
    $(".icon-secion").click(function () {
        $('.content').toggle();
    })

    $(".icon-secion").hover(function () {
        $(this).css({
            "cursor": "pointer",
        })
    });

//Para hacer que el navbar cambie de color onScroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 150) {  
            $('nav').css({
                'background-color': 'black',
                'transition': 'all ease-in-out .3s'
            });
        } else {
            $('nav').css({
                'background-color': 'transparent',
                'transition': 'all ease-in-out .3s'
            }); 
        }
    });


