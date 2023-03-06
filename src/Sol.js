
function Sol(props){
    return(
    <>
    <div className="lead mb-4 m-5 py-5 justify-content-center align-content-center align-center text-center" style={{ 
        backgroundColor:"#3584",
        borderRadius:"25px",
        fontFamily:'Droid Sans'}}>
        <div className="row m-2">
            <div className=" col-12">
                <h4>{props.baslik}</h4>
            </div>
        </div>
        <div className="row m-2">
            <div className="col-12">
                <p className="lead">{props.icerikler}</p>
            </div>
        </div>
    </div>
    </>
    );
}
export default Sol;