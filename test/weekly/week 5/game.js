// Game Coding Starts
function BattleGround(Username,Level,Weapon) {
    this.Username = Username;
    this.Level=Level;
    this.Weapon=Weapon;
    
    this.LevelOfGame();
    this.SwitchWeapon();
}
BattleGround.prototype.LevelOfGame=function(){
    if(this.Level!="Beginner" && this.Level!="Moderate"&&this.Level!="Expert"){
        throw new Error("Level is not correct");
    }
    
}
BattleGround.prototype.SwitchWeapon = function(){
    if(this.Weapon!="Crossbow" && this.Weapon!="Gun" && this.Weapon!="LaserGun" ){
        throw new error ("correct weapon name");
    }


}
BattleGround.prototype.Attack=function() {
    console.log("Attacking Weapon",this.Weapon);
}
var myBattleGround =new BattleGround("Bahubali","Expert","LaserGun");
console.log(myBattleGround);
myBattleGround.Attack();