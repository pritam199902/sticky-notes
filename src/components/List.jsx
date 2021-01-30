import React, { useState } from "react";

const List = ({ data, action, message }) => {
  const [editData, setEditData] = useState({});



  // action
  const handleChangeText = (e) => {
    //   if(e.target.value !== "" && e.target.value !== " "){
    setEditData({
      id: editData.id,
      isDone: editData.isDone,
      text: e.target.value,
    });
  };

  const handleDelete = (id) => {
    action.delete(id);
  };

  //COMPONENTS
  const Item = (info, i) => {
    return (
      <div key={i} className="row">
        <div className="col m-auto">
          <div key={i} className="row">
            <div className="col-8 m-auto">
              <h4 className={info.isDone ? "text-left" : "text-left text-info"} style={info.isDone ? {color : "#ddd"} :{} } >
                <span className={ !info.isDone ? "badge badge-pill badge-info mr-3" : "badge badge-pill badge-secondary mr-3"}>
                  {i + 1}
                </span>
                {info.text}
              </h4>
            </div>
            {/*  */}
            
            {/*  */}
            <div className="col-1 m-auto">
              <div className="custom-control custom-switch">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id={`chklabel${i}`}
                  checked={info.isDone}
                  onChange={(e) => {
                    action.togle(info.id);
                  }}
                />
                <label
                  className="custom-control-label"
                  htmlFor={`chklabel${i}`}
                ></label>
              </div>
            </div>
            {/*  */}
            {info.isDone && (
              <div className="col-1 m-auto">
                <i className="fa fa-check text-success"></i>
              </div>
            )}
            {!info.isDone && (
              <div className="col-1 m-auto">
                <a
                  href="#update"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setEditData(info);
                  }}
                >
                  <i
                    className="fa fa-edit"
                    data-toggle="modal"
                    data-target={`#modal${i}`}
                  ></i>
                </a>
              </div>
            )}
            {/* modal */}
            <div
              className="modal fade"
              id={`modal${i}`}
              data-backdrop="static"
              data-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">
                      Update Note
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="form-group">
                      <textarea
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Your note here..."
                        value={editData.text}
                        onChange={(e) => handleChangeText(e)}
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                      onClick={() => {
                        setEditData({});
                      }}
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      data-dismiss="modal"
                      className="btn btn-primary"
                      onClick={() => {
                        editData.text !== " " && editData.text !== ""
                          ? action.update(editData)
                          : alert("Note must not be blank!");
                      }}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* ---- */}

            {/* ----- */}
            <div className="col-1 m-auto">
              <a
                href="#delete"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  handleDelete(info.id);
                }}
              >
                <i className="fa fa-times text-danger"></i>
              </a>
            </div>
          </div>

          <hr />
        </div>
      </div>
    );
  };

  const msg = () => {
    return (
      <div className={message.type} role="alert">
        <strong>{message.text}</strong>
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => {
            action.resetMsg();
          }}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  };

  const noData = () => {
    return (
      <div className="row">
        <div className="col m-auto">
          <h4>-- no note found --</h4>
        </div>
      </div>
    );
  };

  return (
    <div className="container my-3 ">
      <div className="row">
        <div className="col-lg-7 col-md-7 col-sm-8 m-auto">
          <div className="card shadow">
            <div className="card-body pb-1">
              {message && msg()}
              {data.length > 0 ? (
                <>{data.map((info, i) => [Item(info, i)])}</>
              ) : (
                <>{noData()}</>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
