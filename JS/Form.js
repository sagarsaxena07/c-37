class Form{
    conStructor(){
        this.input = createInput("name");
        this.button = createButton('Play');
        this.greeting = createElements('h2')
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        var title = createElements("h1");
        title.html("Car Racing Game")
        title.position(330,0)

        this.input.position(330,160);
        this.button.position(480,160);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1 ;
            player.index = playerCount;
            player.update()
            player.updateCount(playerCount)
            this.greeting.html(" welcome " + player.name)
            this.greeting.position(330,100)
        })
        
    }
}



