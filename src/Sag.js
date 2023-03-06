import Header from "./Header";
function Sag(props){
    return(
    <>
    <div className="row">
        <div className="col-4">
            <h1>{props.menu_eleman}</h1>
        </div>
    </div>
    <div className="row">
        <div className="col-12">
            <p>{props.egitim}</p>
        </div>
    </div>
    </>
    );
}
export default Sag;