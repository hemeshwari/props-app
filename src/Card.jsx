import react from "react";
import card from "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Card(props){
return <>

  <div className="container ">
      
<div className="card shadow my-3">
    <img src={props.imgsrc} alt="sign" className="" height="" width="" />
  <div className="text-center p-3">
    <h4 className=""><b>{props.title}</b></h4>
    <p className="">{props.description}</p>
    <a href={props.link} target="_blank" className=" btn btn-primary">watch now</a>
</div>
</div>
</div>
</>
}

export default Card;