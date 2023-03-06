function Bilgi(props){
    return(
        <>
        <form>
            <h4>{props.bilgi_ismi}</h4>
            <input type="text"  value={props.deger}/>
        </form>

        </>
    );
}
export default Bilgi; 