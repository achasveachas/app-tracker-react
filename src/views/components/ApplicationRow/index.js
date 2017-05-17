import React from 'react'

function ApplicationRow(props){
  const handleClick = () => props.onClick(props.application.id)
  const handleDelete = () => props.onDelete(props.user_id, props.application.id)
  let contact = ""
  if (props.application.contact_name && props.application.contact_title) {
    contact = props.application.contact_name + " - " + props.application.contact_title
  } else if (props.application.contact_name) {
    contact = props.application.contact_name
  } else if (props.application.contact_title) {
    contact = props.application.contact_title
  }
  return (
        <tr>
          <td onClick={handleClick}>{props.application.company}</td>
          <td onClick={handleClick}>{props.application.job_title}</td>
          <td onClick={handleClick}>{contact}</td>
          <td onClick={handleClick}>{props.application.date}</td>
          <td onClick={handleClick}>{props.application.action}</td>
          <td onClick={handleClick}>{props.application.notes}</td>
          <td onClick={handleClick}>{props.application.complete ? 	<span>&#x2713;</span> :	<span>&#x2717;</span> }</td>
          <td><button className="uk-button uk-button-danger uk-button-small" onClick={handleDelete}>Delete</button></td>
        </tr>)
}
export default ApplicationRow
