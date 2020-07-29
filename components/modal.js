import React from 'react'

const Modal = ({title, body, buttonText, buttonFunction}) => {
  return (
    <div class="modal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{title}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>{body}</p>
          </div>
          <div class="modal-footer">
            <button type="button" onClick={buttonFunction} class="btn btn-primary">{buttonText || "Save changes"}</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal