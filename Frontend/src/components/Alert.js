import React from 'react'

export default function Alert(props) {
  return (
    props.Alert && <div className={`alert alert-${props.Alert.tpe} alert-dismissible fade show sticky-top fixed`} style={{marginTop:"110px",marginBottom:"-140px"}} role="alert">
  <strong>{props.Alert.msg}</strong>
  
</div>
  )
}
