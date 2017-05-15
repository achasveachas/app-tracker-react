import React from 'react'

const ApplicationRow = (props) =>
        <tr>
          <td>{props.application.company}</td>
          <td>{props.application.date}</td>
          <td>{props.application.action}</td>
          <td>{props.application.completed ? 	<span>&#x2713;</span> :	<span>&#x2717;</span> }</td>
        </tr>

export default ApplicationRow
