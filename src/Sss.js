
function Sss(props){
    return(
        <>
        <div className="lead mb-4 m-5 py-5 justify-content-center align-content-center align-center text-center" style={{ 
        backgroundColor:"#3584",
        borderRadius:"25px",
        fontFamily:'Droid Sans'}}>
            <h5>{props.soru}</h5>
            <ul>
                <li>
                    {props.cevap}
                </li>
            </ul>
        </div>
        </>
    );
}
export default Sss;