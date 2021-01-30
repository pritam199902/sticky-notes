import {useState} from 'react';
import './App.css';
import Add from './components/AddNew';
import List from './components/List';
import Nav from './components/Nav';



const  App = () => {

  // const arr =[
  //   {
  //     id : 1,
  //     text : "weak up at 5 a.m.",
  //     isDone : false
  //   },
  //   {
  //     id : 2,
  //     text : "tooth brash",
  //     isDone : true
  //   },
  //   {
  //     id : 3,
  //     text : "excercise for 30 munite ",
  //     isDone : false
  //   },
  //   {
  //     id : 4,
  //     text : "let start HackerRanck",
  //     isDone : false
  //   },

   
  // ]

  // data
  const [data, setData] = useState([])
  const [msg, setMsg] = useState()
  // actions //
  // add 
  const addNewNote =(note)=>{
    // console.log("ADDED : ", note);
    setData([...data, note])
    setMsg({
      type : "alert alert-success alert-dismissible fade show",
      text : "New note added!"
    })
  }

  // update
  const updateNote =(note)=>{
    // console.log("UPDATED : ", note);
    // console.log(data[data.indexOf(data.filter(ele=>ele.id === note.id)[0])]);
    data[data.indexOf(data.filter(ele=>ele.id === note.id)[0])]=note;
    // console.log(data[data.indexOf(data.filter(ele=>ele.id === note.id)[0])]);
    setData([...data])
    setMsg({
      type : "alert alert-success alert-dismissible fade show",
      text : "Note updated!"
    })
  }

  //delete
  const deleteNote = (id) =>{
    // console.log("DELETED ", id );
    setData(data.filter(d => d.id !== id))
    setMsg({
      type : "alert alert-danger alert-dismissible fade show",
      text : "Note deleted!"
    })
  }

  const handleTogle =(id)=>{
    console.log(data[data.indexOf(data.filter(d => d.id === id)[0])].isDone);
    data[data.indexOf(data.filter(d => d.id === id)[0])].isDone = ! data[data.indexOf(data.filter(d => d.id === id)[0])].isDone 
    setData([...data])
  }

  const resetMsg=()=>{
    setMsg()
  }


  return (
    <div className="App">
      <Nav/>
      <Add action={ {addnew: addNewNote.bind(this)}} />
      <List data={data} 
        message={msg}
        action={{
          update: updateNote.bind(this),
          delete : deleteNote.bind(this),
          resetMsg : resetMsg.bind(this),
          togle : handleTogle.bind(this)
        }} 
      />
    </div>
  );
}

export default App;
