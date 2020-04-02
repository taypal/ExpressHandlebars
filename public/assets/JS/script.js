$(document).ready(function () {
    $('.devour-button').on('click', function () {
        console.log("EAT");

        var devourData = {
            id: $(this).attr('data-id')
        }

        $.ajax("/burger/eat", {
            type: "POST",
            data: devourData
        }).then(function () {
            console.log("ate burger!");
            location.reload();
        });
    });

    $('.delete-button').on('click', function () {

        var deleteData = {
            id: $(this).attr('data-id')
        }

        $.ajax("/burger/delete", {
            type: "POST",
            data: deleteData
        }).then(function () {
            console.log("delete burger!");
            location.reload();
        });
    });
})