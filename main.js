window.onload = function(){
    const WIDTH = 10;
    const GRID_WIDTH = "40px";
    console.log("script working");
    const userBoardContainer = document.querySelector(".user-board");
    const computerBoardContainer = document.querySelector(".computer-board");
    const userBoard = [];
    const computerBoard = [];
    const shipColors = ["#ddd", "#aaa", "#888", "#666"]
    
    initBoard(userBoard, userBoardContainer, 10);
    initBoard(computerBoard, computerBoardContainer, 10);
    randomlyPlaceShip(4, computerBoard);
    randomlyPlaceShip(3, computerBoard);
    randomlyPlaceShip(3, computerBoard);
    randomlyPlaceShip(2, computerBoard);
    randomlyPlaceShip(2, computerBoard);
    randomlyPlaceShip(2, computerBoard);
    randomlyPlaceShip(1, computerBoard);
    randomlyPlaceShip(1, computerBoard);
    randomlyPlaceShip(1, computerBoard);
    randomlyPlaceShip(1, computerBoard);
    startGame();


    function randomlyPlaceShip(shipSize, board){
        const direction = Math.floor(Math.random()*2);
        let head = generateLocation(WIDTH);
        while (!canPlaceShip(shipSize, board, head, direction)){
            head = generateLocation(WIDTH);
        }
        placeShip(shipSize, board, head, direction);
    }


    function generateLocation(width){
        const head = Math.floor(Math.random()*width*width);
        return head;
    }
    function placeShip(shipSize, board, head, direction){
        if(direction == 0){
            for (let i = 0; i < shipSize; i++) {
                fill(board[head+i], shipColors[shipSize-1]);
            }
        }else{
            for (let i = 0; i < shipSize; i++) {
                fill(board[head+WIDTH*i], shipColors[shipSize-1]);
            }
        }
    }
    function canPlaceShip(shipSize, board, head, direction){
        if(direction == 0){
            for (let i = 0; i < shipSize; i++) {
                if(board[head+i].taken) return false;
            }
        }else{
            for (let i = 0; i < shipSize; i++) {
                if(board[head+WIDTH*i].taken) return false;
            }
        }
        return true;
    }
    function initBoard(board, container, numberOfGrid){
        for (let i = 0; i < numberOfGrid*numberOfGrid; i++) {
            const element = document.createElement("div");
            element.classList.add("cell");
            container.appendChild(element);
            board.push(element);
        }
    }
    function fill(element, color){
        // element.style.backgroundColor = color;
        element.taken = true;
    }
    function unfill(element){
        element.style.backgroundColor = "none";
        element.taken = false;
    }
    function startGame(){
        computerBoard.forEach(element => {
            element.addEventListener("click",function(e){
                console.log(e.target)
                if(e.target.taken){
                    e.target.innerHTML = "On";
                }else{
                    e.target.innerHTML = "Miss";
                }
            })
        });
    }
}