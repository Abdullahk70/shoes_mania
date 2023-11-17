import lg1984 from "./img/1984.png"
const Motto=()=>{
    return <div className=" row container-fluid mt-3 rounded-5" style={{padding:"1em",background:"#cfd1d0"}}>
     <div className="col align-self-center text-danger text-lg-center fw-bold fs-5"> <p>WE REDEFINE</p></div>
     <div className="col align-self-center rounded ms-5"><img className="rounded-circle" src={lg1984} alt="" /></div>
     <div className="col align-self-center text-danger text-lg-center fw-bold fs-5"> <p>COMFORT</p></div>

    </div>
}
export default Motto;