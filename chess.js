document.addEventListener("DOMContentLoaded", function() {
    const chessboard = document.getElementById("chessboard");

    // Function to create the chessboard
    function createChessboard() {
        for (let i = 0; i < 64; i++) {
            const square = document.createElement("div");
            square.className = "square";
            chessboard.appendChild(square);
        }
    }

    createChessboard();
});


