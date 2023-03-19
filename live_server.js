window.onload = function() {;
    function updateData() {
        $.get( "https://nietvanziyaad.pythonanywhere.com/data", function( data ) {
            data = JSON.parse(data);
            var massa = data["massa"]
            var vogels = data["vogels"]
            $(".massa").text(`massa: ${massa}`)
            $(".vogels").text(`vogels: ${vogels}`)
        });
    }

    updateData()
    setInterval(function() {
        updateData();
    }, 1000);
} 