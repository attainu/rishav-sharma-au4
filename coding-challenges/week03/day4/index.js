//prints players with rank less than or equal to 10
var players = [
    { name: "Roger Federer", rank: 1 },
    { name: "Rafel Nadal", rank: 2 },
    { name: "Nalbandian", rank: 12 },
    { name: "Andy Murray", rank: 14 },
    { name: "Andy Roddick", rank: 4 },
    { name: "Pete Sampras", rank: 3 },
    { name: "Rod Laver", rank: 190 },
    { name: "Andre Agassi", rank: 11 },
    { name: "Novak Djokovic", rank: 5 },
    { name: "Arthur Ashe", rank: 8 },
    ];
    const team = players.filter(players => (players.rank >=0 && players.rank < 11));
    console.log(team);
    for(var i = 0; i<=10; i++)
    {
        if(players[i].rank<=10)
        console.log("players[i].name"+ "players[i].rank")
    }


    //Using for loop prints players with rank less than or equal to 10
    var players = [
        { name: "Roger Federer", rank: 1 },
        { name: "Rafel Nadal", rank: 2 },
        { name: "Nalbandian", rank: 12 },
        { name: "Andy Murray", rank: 14 },
        { name: "Andy Roddick", rank: 4 },
        { name: "Pete Sampras", rank: 3 },
        { name: "Rod Laver", rank: 190 },
        { name: "Andre Agassi", rank: 11 },
        { name: "Novak Djokovic", rank: 5 },
        { name: "Arthur Ashe", rank: 8 },
        ];for(var i = 0; i<10; i++)
            {
                if(players[i].rank<=10){
                console.log("Name:" + " " + players[i].name +" "+"And"+ " " + "Rank:" + " " + players[i].rank);}
            }
        