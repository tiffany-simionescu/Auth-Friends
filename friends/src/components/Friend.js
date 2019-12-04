import React from 'react';

const Friend = props => {
  return (
    <div className="card">
      <h3>Name: {props.name}</h3>
      <p>Age: {props.age}</p>
      <p>Email: {props.email}</p>
    </div>
  )
}

export default Friend;