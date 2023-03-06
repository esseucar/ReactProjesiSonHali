import { useState } from "react";
import React from "react";
function Form(){
    const[input,setInput]=useState("");
    

    const degistiginde=(event)=>{
        const input_name= event.target.name;
        const input_value=event.target.value;
        setInput(values=>({...values,[input_name]:input_value}))


    }

    const submitFonk=(event)=>{
        event.preventDefault();
        console.log(input);
    }

    return(
        
        <form onSubmit={submitFonk}>
            <div className="row mt-5 justify-content-center">
                <div className="col-4">
                    <div className="row">                    
                        <div className="col-6" >
                            <label className="col-form-label">İsim girin:</label>
                                <input className="form-control" 
                                type="text"
                                name="isim" 
                                value={input.isim|| ""}  //bos olunca hata vermesin 
                                onChange={degistiginde}/>                            
                        </div>
                        <div className="col-6">
                            <label className="col-form-label">Yaş:</label>
                                <input className="form-control"
                                type="number"
                                name="yas"
                                value={input.yas|| ""}
                                onChange={degistiginde}/>                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label className="col-form-label">Başvuru Amacı:</label>
                            <textarea  className="form-control"              
                            name="amac" 
                            value={input.amac || ""}
                            onChange={degistiginde}/>                           
                        </div>
                        <div className="col-6">
                            <label className="col-form-label">Burs:</label>
                            <select className="form-select"
                            type="text"
                            name="burs" 
                            value={input.burs|| ""}
                            onChange={degistiginde}>
                                <option value="1">istiyorum</option>
                                <option value="0">İstemiyorum</option>
                            </select>                           
                        </div>
                    </div>
                    <div className="row text-end justify-content-end">
                        <div className="col-12">
                            <input className="btn btn-primary" type="submit"/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </form>
        
    );
}
export default Form;