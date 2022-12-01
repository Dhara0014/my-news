import React from 'react'

const MyNewsDetails = (props) => {
    let style={
        color: props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode === 'dark'? '#212529': 'white',
        width: '24.88rem'
      }
  return (
    <div style={style}>
    <div className="card" style={{width : "25rem"}} >

      <div className="container" style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
      <span className="badge rounded-pill bg-danger">
      {props.source}
      </span>
      </div>
    
    <img src={props.img} className="card-img-top" alt="..." style={style}/>
    <div className="card-body" style={style}>
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <p className="card-text"><small className="text-muted">By {props.author} on {props.date}</small></p>
        <a href={props.read} target='_blank' rel="noreferrer" className="btn btn-sm btn-danger">Read More ..</a>
    </div>
</div>
    </div>
  )
}

export default MyNewsDetails;