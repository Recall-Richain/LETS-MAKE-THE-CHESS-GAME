document.addEventListener("DOMContentLoaded", function() {
    const chessboard = document.getElementById("chessboard");
    function createChessboard() {
        let chessboardString = ''; 
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                
                if (j % 2 === 0) {
                    chessboardString += '#';
                } else {
                    chessboardString += '0';
                }
            }
            chessboardString += '\n'; 
        }
        console.log(chessboardString); 
    }

    createChessboard();
});


