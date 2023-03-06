import { gonder, onizle } from "./Functions";
function Basvur() {
    return (
        <>
            <div className="lead mb-4 m-5 py-5 justify-content-center align-content-center align-center text-center shadow-lg rounded lead mb-4 m-5 py-5" style={{
                backgroundColor: "none",
                borderRadius: "25px",
                fontFamily: 'Droid Sans',
                color: "whitesmoke"
            }}>
                <form >
                    <div class="row justify-content-center">
                        <div class=" col-6" style={{ textDecorationColor: "white", borderRadius: "25px", backgroundColor: "none", width: "80rem", height: "38rem", overflowX: "hidden", overflowY: "scroll", msOverflowStyle:"none", scrollbarWidth:"none"}}>
                            <div class="row">
                                <div class="col-12">
                                    <h1 class="text-center">Erasmus Başvuru Formu</h1>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <span class="col-form-label">Ad:</span>
                                    <input type="text" class="form-control" id="inputName" />
                                </div>

                                <div class="col-6">
                                    <span class="col-form-label">Soyad:</span>
                                    <input type="text" class="form-control" id="inputSurname"/>
                                </div>

                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <hr />
                                    <span class="col-form-label">Cinsiyet:</span>
                                    <div class="form-check" id="gender">
                                        <input class="form-check-input" type="radio" name="cinsiyet" value="female" id="cinsiyetK" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Kadın
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="cinsiyet" value="male" id="cinsiyetE" />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            Erkek
                                        </label>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <hr />
                                    <span class="col-form-label">Doğum Tarihi:</span>
                                    <input type="date" class="form-control" id="Dtarih" name="Dtarih" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <hr />
                                    <span class="col-form-label">Uyruk:</span>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="uyruk" id="tc" value="tc" checked />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Türk Vatandaşı
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="uyruk" id="diger" value="diger" />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            Diğer
                                        </label>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <hr />
                                    <span class="col-form-label">Tc Numarası:</span>
                                    <input type="number" id="tcnum" class="form-control" />
                                </div>
                            </div>
                            
                            <div class="row">
                                <div class="col-6">
                                    <hr />
                                    <span class="col-form-label">Mezuniyet Durumu:</span>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="mezuniyet" id="cinsiyetK" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Mezunum
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="mezuniyet" id="cinsiyetE" />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            Devam Ediyorum
                                        </label>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <hr />
                                    <span class="col-form-label">Mezuniyet Tarihi:</span>
                                    <input type="date" class="form-control" id="Dtarih" name="Dtarih" />
                                </div>
                            </div>
                            
                            <div class="row">
                                <div class="col-12">
                                    <hr />
                                    <div class="d-flex justify-content-center">
                                        <h3>İletişim Bilgileri</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <hr />
                                    <span class="col-form-label">Telefon:</span>
                                    <input type="number" class="form-control" />
                                </div>
                                <div class="col-6">
                                    <hr />
                                    <span class="col-form-label">Adres:</span>
                                    <input type="text" class="form-control" />
                                </div>

                            </div>

                        </div>
                    </div>
                
                    <div className="row lead mb-4 m-5 py-5 justify-content-center align-content-center align-center text-center shadow-lg rounded lead mb-4 m-5 py-5" style={{
                        backgroundColor: "none",
                        borderRadius: "25px",
                        fontFamily: 'Droid Sans',
                        color: "whitesmoke"
                    }}>
                        <div class="col-12">
                            <hr />
                            <div class="d-flex justify-content-center">

                                <input  type="reset" class="btn btn-primary mx-3" value="Gönder" onClick={() => gonder()} />
                                <input  class="btn btn-outline-secondary mx-3" value="Önizle" onClick={() => onizle()}/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
export default Basvur;