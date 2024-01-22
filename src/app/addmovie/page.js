import React from 'react'

export default function addpage() {
  return (
    <div className="container my-3 justify-content-center align-items-center mt-5 pt-5 .bg-secondary" style={{color:'white' }}>
    <div className="row justify-content-center mt-5">
      <div className="col-md-6">
        <form>
          <div className="mb-3" >
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" style={{backgroundColor:"#8d9199"}}id="title" />
          </div>
          <div className="mb-3">
            <label htmlFor="rating" className="form-label">Rating</label>
            <input type="text" className="form-control" style={{backgroundColor:"#8d9199"}}id="rating" />
          </div>
          <div className="mb-3">
            <label htmlFor="overview" className="form-label">Overview</label>
            <textarea className="form-control" id="overview" style={{backgroundColor:"#8d9199"}} rows="3"></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="file" className="form-label">Upload File</label>
            <input type="file" className="form-control"  style={{backgroundColor:"#8d9199"}}id="file" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
  )
}
