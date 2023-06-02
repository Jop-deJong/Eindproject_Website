window.onload = function() {;
    function updateData() {
        $.get( "https://jopdejong.pythonanywhere.com/data", function( data ) {
            data = JSON.parse(data);
            var massa = data["massa"]
            var vogels = data["vogels"]

            if (massa === undefined){massa = 0}
            if (vogels === undefined){vogels = 0}


            console.log(data)
            $(".massa").text(`${massa} gram`)
            $(".vogels").text(`${vogels}`)
        });
    }

    updateData()
    setInterval(function() {
        updateData();
    }, 1000);
}   