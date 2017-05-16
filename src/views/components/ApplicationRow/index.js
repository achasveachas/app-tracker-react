import React from 'react'

function ApplicationRow(props){
  const handleClick = () => props.onClick(props.application.id)
  return (
        <tr onClick={handleClick}>
          <td>{props.application.company}</td>
          <td>{props.application.date}</td>
          <td>{props.application.action}</td>
          <td>{props.application.complete ? 	<span>&#x2713;</span> :	<span>&#x2717;</span> }</td>
        </tr>)
}
export default ApplicationRow
