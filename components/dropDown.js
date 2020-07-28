import React from 'react';

const Dropdown = (items, dividedItems) => {
  if(dividedItems) {
    return (
      <div class="dropdown-menu" style="">
        {Object.entries(items).forEach((label, link) => {
          return (<a class="dropdown-item" href={link}>{label}</a>)
        })}
        <div class="dropdown-divider"></div>
        {Object.entries(items).forEach((label, link) => {
          return (<a class="dropdown-item" href={link}>{label}</a>)
        })}
        
      </div>
    )
  }
  else {
    return (
      <div class="dropdown-menu" style="">
        {Object.entries(items).forEach((label, link) => {
          return (<a class="dropdown-item" href={link}>{label}</a>)
        })}
      </div>
    )
  }
}