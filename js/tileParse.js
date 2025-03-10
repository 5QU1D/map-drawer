function tileParse(){
    for (let row = 0; row < tilesArray.length ; row++) {
        for (let col = 0; col < tilesArray[row].length ; col++) {
            let type = tilesArray[row][col][0];
            let extremeness = tilesArray[row][col][1];

            switch(type) {
                case 'R':
                    drawRiver(row,col);
                    break;
                case 'M':
                    drawMountain(row,col);
                    break;
                case 'V':
                    drawValley(row,col);
                    break;
                case 'C':
                    drawSettlement(row,col);
                    break;
                case 'F':
                    drawForest(row,col);
                    break;
                default:
                    //leave blank
            }
        }
    }
}