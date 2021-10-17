class Update{
    constructor(){
        this.optimist=0
        this.realist=0
        this.pessimist=0 
        this.check=createButton("CHECK")
    }
    display(){
Answers.button1.mousePressed(()=>{
     this.optimist=this.optimist+3

})
Answers.button2.mousePressed(()=>{
    this.optimist=this.optimist+1
    this.realist=this.realist+2
})
Answers.button3.mousePressed(()=>{
    this.pessimist=this.pessismist+2
    this.realist=this.realist+1
})
Answers.button4.mousePressed(()=>{
    this.pessimist=this.pessimist+3
})
Answers.answer1.mousePressed(()=>{
    this.optimist=this.optimist+3
})
Answers.answer2.mousePressed(()=>{
    this.optimist=this.optimist+2
})
Answers.answer3.mousePressed(()=>{
    this.realist=this.realist+2
})
Answers.answer4.mousePressed(()=>{
    this.pessimist=this.pessimist+2
})
Answers.ans1.mousePressed(()=>{
    this.optimist=this.optimist+2
})
Answers.ans2.mousePressed(()=>{
    this.realist=this.realist+2
})
Answers.ans3.mousePressed(()=>{
    this.pessimist=this.pessimist+2
})
Answers.click1.mousePressed(()=>{
    this.optimist=this.optimist+2
})
Answers.click2.mousePressed(()=>{
    this.realist=this.realist+2
})
Answers.click3.mousePressed(()=>{
    this.pessimist=this.pessimist+2
})
Answers.sol1.mousePressed(()=>{
    this.pessimist=this.pessimist+2
})
Answers.sol2.mousePressed(()=>{
    this.optimist=this.optimist+2
})
Answers.sol3.mousePressed(()=>{
    this.realist=this.realist+2
})
Answers.solution1.mousePressed(()=>{
    this.optimist=this.optimist+2
    this.check.position(10,1590)   
})
Answers.solution2.mousePressed(()=>{
    this.realist=this.realist+2
    this.check.position(10,1590)   
})
Answers.solution3.mousePressed(()=>{
    this.pessimist=this.pessimist+2
 this.check.position(10,1590)   
})

    }
    result(){
        this.check.mousePressed(()=>{
            console.log("Done!")
            if (this.optimist>this.realist+this.pessimist){
               
                text("Congratulations! You completed the test",10,1620)
                text("It seems as if you are an optimist. Your life is filled with hope and and cheer!",10,1640)
                text("You believe in the good of people. According to you, things can never go bad because whatever happens, it happens for the best. ",10,1660)
                text("And this is a great atitude! So keep it up",10,1680)
               
            }else if(this.optimist>this.realist && this.optimist>this.pessimist){
                console.log("I think you did it ")
                text("Congratulations! you completed the test!",10,1620)
                text("You are definitely in a positive mood today!. You are likely to be an optimist ",10,1640)
                text("There may be times when you feel down, but that's normal! Even though things don't turn out well,",10,1660)
                text("at the end of the day you smile and forget it! That is the atitude!",10,1680)
            }else if(this.realist>this.optimist && this.reealist>this.pessimist){
               
                text("Congratulations! you completed the test!",10,1620)
              text("Based on the options you selected, You are likely a realist. ",10,1640)
                text("You see what you think is the truth. You understand that the truth can be both good and bad. ",10,1660)
                text("It is nice to have people like you in the world! Just remember, it is okay to expect the good once in a while, to cheer you up! ",10,1680)
            }
            else if (this.pessimist>this.optimist && this.pessimist>this.realist){
                
                text("Congratulations! you completed the test!",10,1620)
                text("It seems you are a pessimist. ",10,1640)
                text("You like to look at the grey areas of every thing. You don't like expectations and believe that they never come true. ",10,1660)
                text("Maybe you can try to look on the bright side of things a little bit. But you are the best judge of who you want to be!",10,1680)
            }
        })
    }
}
