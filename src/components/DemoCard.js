import React from 'react'

const DemoCard = ({ name, url, description, type, login, docs }) => (
  <div>
    <h4>{name}</h4>
    <a href="{url}">{url}</a>
    <p>{description}</p>
    <p>{type}</p>
    <a href={login}>login</a>
    <a href={docs}> docs</a>
  </div>
)

export default DemoCard