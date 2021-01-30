import React,{useState } from 'react'

const AddNew = ({action}) => {
    // data
    const [note, setNote] = useState("");
    
    //handleChangeText
    const handleChangeText =(e)=>{
        // console.log(e.target.value);
        setNote(e.target.value)
    }

    // handleSubmit
    const handleSubmit =(e)=>{
        e.preventDefault();
        // console.log(e);
        if (note !== "" && note !== " " ){
            const obj = {
                id : Math.floor(Math.random(10)*10000)+1,
                text : note,
                isDone : false
            }
            action.addnew(obj);
            setNote('')
        }else{
            alert("Note must have some text. It should not be blank")
        }
        
    }

   
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-lg-7 col-md-7 col-sm-8 m-auto">
          <div className="card shadow">
            <div className="card-body py-2">
              <h4 style={{color : '#888'}} > <i className="fa fa-pen"></i> New Note</h4>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-11 col-md-11 col-sm-11 m-auto">
                    <div className="form-group">
                      <textarea
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="My note..."
                        style={{fontSize : 20}}
                        value={note}
                        onChange={handleChangeText}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group mb-1">
                    <button type="submit" className="btn btn-info px-4" >
                      <i className="fa fa-plus"></i>  ADD
                    </button>
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default AddNew;
