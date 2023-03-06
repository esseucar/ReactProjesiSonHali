import React from "react";
import ReactDOM from "react-dom/client";
import Sol from "./Sol";
import Sss from "./Sss";
import Giris_form from "./Giris_form";
import Kayit from "./Kayit";
import Basvur from "./Basvur";
import Bilgi from "./Bilgi";
import GirisYapinca from "./GİrisYapinca";


import { basliklar, icerikler, cevaplar, sorular} from "./Icerik.js";

export const girisKontrol = ()=>{

    var kullanici = sessionStorage.getItem("user");

    if(kullanici==null){sessionStorage.setItem("user","");}
    var isLogin = false;

    kullanici = sessionStorage.getItem("user");
    const kullanici_ayrik=kullanici.split(",");
    const mail = document.getElementById("email").value;
    const sifre = document.getElementById("sifre").value;

    const yazi = document.getElementById("sonuc");

    if (mail == kullanici_ayrik[0] && sifre == kullanici_ayrik[1]) {

        yazi.innerHTML = "Giriş bilgileri doğru!"; 
        yazi.style.color = "green";

        document.getElementById("btn_div").style.display = "none";
        document.getElementById("header_sag").innerHTML = "Kullanıcı: " + kullanici[0];

        isLogin = true;

        sessionStorage.setItem("isLogin",isLogin);
        document.getElementById("logout_Btn").style.display="block";
        
        const sol = ReactDOM.createRoot(document.getElementById("sol"));
        const sag = ReactDOM.createRoot(document.getElementById("sag"));
        sol.render(<GirisYapinca/>);
        sag.render();
        }

    
    else {
        yazi.innerHTML = "Girilen bilgiler hatalı.";
        yazi.style.color = "red";
    }
}
export const logout= ()=> {

    var isLogin = sessionStorage.getItem("isLogin");

    isLogin = false;

    
    sessionStorage.setItem("isLogin", isLogin);
    document.getElementById("logout_Btn").style.display ="none";
    document.getElementById("btn_div").style.display = "block";
    document.getElementById("header_sag").innerHTML ="";
    
    const sol = ReactDOM.createRoot(document.getElementById("sol"));
    sol.render();

    
}
export const goster = (eleman,eleman_index) => {

    const sol = ReactDOM.createRoot(document.getElementById("sol"));
    const sag = ReactDOM.createRoot(document.getElementById("sag"));

    if(eleman=="Eğitimler"){

        sol.render(
        <Sol 
        baslik={basliklar[eleman_index]}
        icerikler={icerikler[eleman_index]}
        />
        )
    }
    
    else if(eleman=="Hemen Başvur"){
        var kosul=sessionStorage.getItem("isLogin");
        if(kosul=="true"){
        sol.render(<Basvur/>
        )}
        else{alert("Önce giriş yapınız");
            sag.render(<Giris_form/>)}

    }
    else if(eleman=="s.s.s."){
        const sol = ReactDOM.createRoot(document.getElementById("sol"));
        sol.render(
            <>
            <div className="lead mb-4 m-5 py-5 justify-content-center align-content-center align-center text-center" style={{ 
            backgroundColor:"#3584",
            borderRadius:"25px",
            fontFamily:'Droid Sans'}}>
                <h4>{basliklar[eleman_index]}</h4>
                {sorular.map((i,soru_index) =>
                (<Sss                
                    soru={i}
                    cevap={cevaplar[soru_index]}/>)
                    )}
            </div>
            </>
        )
    }
    else if(eleman=="giris"){
        sag.render(
            <>
            <Giris_form/>
            </>
        )
    }
    else if(eleman=="kayit"){
        sag.render(
            <>
            <Kayit />
            </>
        )
    }    
}
export const gonder=()=>{
    var name=document.getElementById("inputName").value;
    var soyad=document.getElementById("inputSurname").value;
    
    var dtarih=document.getElementById("Dtarih").value;
    var tc=document.getElementById("tcnum").value;
    var mtarih=document.getElementById("Dtarih").value;

    
    var user_info=[name,soyad,dtarih,tc,mtarih];
    sessionStorage.setItem("user_info", user_info);

}
export const onizle=()=>{
    const sag = ReactDOM.createRoot(document.getElementById("sag"));

    var info_name = ["Ad", "Soyad","Doğum tarihi","TC No:","Mezuniyet tarihi"];
    var user_info=sessionStorage.getItem("user_info");
    user_info=user_info.split(",");
    sag.render(
        <>
        <div className="lead mb-4 m-5 py-5 justify-content-center align-content-center align-center text-center" style={{ 
        backgroundColor:"#3584",
        borderRadius:"25px",
        fontFamily:'Droid Sans'}}>
            
            {info_name.map((e,index) => 
        (<Bilgi 
            bilgi_ismi={info_name[index]} 
            deger={user_info[index]}
        />)
        )}
        <br></br>
        <br></br>
        <button  class="btn btn-primary mx-3" value="Düzenle" onClick={() => duzenle()}>Düzenle</button>
        </div>
        
        </>
        )
}
export const BasvuruYap=()=>{
    const sol = ReactDOM.createRoot(document.getElementById("sol"));
    sol.render(<Basvur/>)

}
export const duzenle=()=>{

    var bilgi = sessionStorage.getItem("user_info");
    bilgi= bilgi.split(",");

    document.getElementById("inputName").value=bilgi[0];
    document.getElementById("inputSurname").value=bilgi[1];
    
    document.getElementById("Dtarih").value=bilgi[2];
    document.getElementById("tcnum").value=bilgi[3];
    document.getElementById("Dtarih").value=bilgi[4];   
    const sag = ReactDOM.createRoot(document.getElementById("sag"));
    sag.render()

}
    


