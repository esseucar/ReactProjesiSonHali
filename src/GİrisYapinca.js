import { BasvuruYap } from "./Functions";
function GirisYapinca(){
    return(
        <>
        
        <div className="row m-2">
            <div className=" col-12">
            <div className="row lead mb-4 m-5 py-5 justify-content-center align-content-center align-center text-center shadow-lg rounded lead mb-4 m-5 py-5" style={{
                backgroundColor: "none",
                borderRadius: "25px",
                fontFamily: 'Droid Sans',
                color: "whitesmoke"
            }}>
                <div class="col-12 d-flex justify-content-center">
                    <hr />                    
                    <p class="lead mb-4">Erasmus programı kapsamında Almanya, Avusturya, Belçika, Bulgaristan, Çek Cumhuriyeti, Danimarka, Finlandiya, Fransa, Hırvatistan, Hollanda, İngiltere, İspanya, İtalya, Macaristan, Letonya, Litvanya, Polonya, Portekiz, Romanya, Sırbistan, Slovakya, Slovenya ve Yunanistan gibi 20’yi aşkın Avrupa ülkesindeki 106 üniversite ile Erasmus ikili anlaşmamız mevcuttur. Bu üniversitelerden bazıları:</p>                    
                </div>
                <div>
                    <input  class="btn btn-primary mx-3" value="Başvuru Yap" onClick={() => BasvuruYap()} />
                </div>
            </div>
            </div>
        </div>
            
        
        </>
    );
}
export default GirisYapinca;