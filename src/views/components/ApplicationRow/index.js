import React from 'react'

function ApplicationRow(props){
  const handleClick = () => props.onClick(props.application.id)
  const handleDelete = () => props.onDelete(props.user_id, props.application.id)
  return (
        <tr onClick={handleClick}>
          <td>{props.application.company}</td>
          <td>{props.application.job_title}</td>
          <td>{props.application.contact}</td>
          <td>{props.application.date}</td>
          <td>{props.application.action}</td>
          <td>{props.application.notes}</td>
          <td>{props.application.complete ? 	<span>&#x2713;</span> :	<span>&#x2717;</span> }</td>
          <td><button className="uk-button uk-button-danger uk-button-small" onClick={handleDelete}>Delete</button></td>
        </tr>)
}
export default ApplicationRow
