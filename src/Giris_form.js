import {girisKontrol} from './Functions';

import { cevaplar } from './Icerik.js';


function Giris_form(){
    return(
        <>
        
        <div className="row justify-content-center shadow-lg p-3 mb-5  rounded lead mb-4 m-5 py-5 justify-content-center align-content-center align-center text-center" style={{ 
        backgroundColor:"none",
        borderRadius:"25px",
        fontFamily:'Droid Sans',
        color:"white"}}>
        <div className="col-5">

            <form>
                <i className="fa-solid fa-pen-nib fa-4x"></i>
                <h1 className="h3 mb-3 fw-normal">Giriş Yap</h1>

                <div className="form-floating py-2">
                    <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
                    <label for="floatingInput">Email adresi</label>
                </div>
                <div className="form-floating py-2">
                    <input type="password" className="form-control" id="sifre" placeholder="Şifrenizi Giriniz"/>
                    <label for="floatingPassword">Şifrenizi Giriniz</label>
                </div>

                <p id="sonuc"></p>

            </form>
            <button className="w-100 btn btn-lg btn-primary" onClick={()=>girisKontrol()}>Giriş</button>
        </div>
    </div>
        </>
    );
}
export default Giris_form;