function Start_game({toggle}){
    return(
        <container>
            <div>
            <img src="./img/dice.jfif"></img>

            </div>
           <div className="content"> 
                <h1>DICE GAME</h1>
                <button onClick={toggle}>PLAY NOW</button>
            </div> 
        </container>
    )
}
export default Start_game;