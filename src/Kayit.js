function sifreKontrol() {

    const kullanici =
        [(document.getElementById("email").value), (document.getElementById("sifre").value)];


    const sifre2 = document.getElementById("reSifre").value;



    const yazi = document.getElementById("sonuc");

    if (kullanici[1] == sifre2) {

        yazi.innerHTML = "Hesap Oluşturuldu!";
        yazi.style.color = "green";

        sessionStorage.setItem("user", kullanici);

    }
    else {
        yazi.innerHTML = "Şifreler Eşleşmiyor.";
        yazi.style.color = "red";
    }
}
function Kayit(){
    return(
        <>
        <div className="row justify-content-center row justify-content-center shadow-lg p-3 mb-5  rounded lead mb-4 m-5 py-5 justify-content-center align-content-center align-center text-center" 
        style={{ 
        backgroundColor:"none",
        borderRadius:"25px",
        fontFamily:'Droid Sans',
        color:"white"}}>
        
            <div className="col-5">

                <form>
                    <i className="fa-solid fa-pen-nib fa-4x"></i>
                    <h1 className="h3 mb-3 fw-normal">Hesap Oluşturma</h1>

                    <div className="form-floating py-2">
                        <input type="email" className="form-control input-group-text" id="email" placeholder="name@example.com"/>
                        <label for="floatingInput">Email adresi</label>
                    </div>
                    <div className="form-floating py-2">
                        <input type="password" className="form-control input-group-text" id="sifre" placeholder="Şifrenizi Giriniz"/>
                        <label for="floatingPassword">Şifrenizi Giriniz</label>
                    </div>
                    <div className="form-floating py-2">
                        <input type="password" className="form-control" id="reSifre" placeholder="Tekrar Şifrenizi Giriniz"/>
                        <label for="floatingPassword">Tekrar Şifrenizi Giriniz</label>
                    </div>

                </form>
                <p id="sonuc"></p>
                <button className="w-100 btn btn-lg btn-primary" onClick={()=>sifreKontrol()}>Hesap Oluştur</button>

            </div>
        </div>
        
        </>
    );
}
export default Kayit;
