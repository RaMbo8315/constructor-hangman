var Letter = function(let){
    this.letter = let;
    this.present = false;
    this.buildWord = function(){
        if(!this.present){
            return " _ ";
        }else{
            return this.letter;
        }
        // console.log(this.display)
    }
}




module.exports = Letter;