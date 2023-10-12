import React from 'react'

export default function ViewForm() {
  return (
    <form className="row g-3">
    <div className="col-md-6">
      <label for="inputName" className="form-label">Product Name</label>
      <input type="text" className="form-control" id="productname" placeholder="i.e This is product name"/>
    </div>
    <div className="col-md-6">
      <label for="Product-ID" className="form-label">Product ID</label>
      <input  className="form-control" id="productid" placeholder="i.e This is product ID" />
    </div>
    
    
    <div className="col-12">
      <button type="submit" className="btn btn-primary "style={{backgroundColor:"#4C2E9F"}}>View</button>
    </div>
    </form>
  )
}
