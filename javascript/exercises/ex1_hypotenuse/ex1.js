window.onload = function() {
    document.getElementById("submitButton").onclick = function() {
        // Get values from input fields
        var a = document.getElementById("aTextBox").value;
        var b = document.getElementById("bTextBox").value;

        // Convert values to numbers
        a = Number(a);
        b = Number(b);

        // Calculate the hypotenuse
        var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
        c= Math.round(c);
        
        // Display the result
        document.getElementById("cLabel").innerHTML = "Side C: " + c;
    }
};