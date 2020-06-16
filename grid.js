function Grid() {
    
    this.draw = function() {
        for (let i = 0; i < rows; i += 1) {
            for (let j = i % 2; j < columns; j+= 2) {
                ctx.fillStyle = "#686868";
                ctx.fillRect(j * scale, i * scale, scale, scale);
            }
        }
    }

}