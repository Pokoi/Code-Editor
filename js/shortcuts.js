/*
 * CREATED BY
 *
 * Jesus 'Pokoi' Villar
 * © pokoidev 2019 (pokoidev.com)
 *
 * Creative Commons License:
 * Attribution 4.0 International (CC BY 4.0)
 *
 */

$(window).bind("keydown", function (event) {

    if (event.ctrlKey) {

        switch (String.fromCharCode(event.which).toLowerCase()) {
            case 'n':
                event.preventDefault();
                createNewFile();
                break;
        }
    }
})
