import profilePic from './assets/Priyaas.jpeg'
function Card(){
    return(
        <div className="card">
            <img className="card-image"src={profilePic} alt="profile picture"></img>
            <h2 className ="card-title">Priya code</h2>
            <p className="card-text">Many many more happy returns of the day</p>
            </div>
    );

}
export default Card