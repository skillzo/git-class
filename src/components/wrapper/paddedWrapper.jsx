import React from 'react'

function PaddedWrapper({children}) {
  return (
  <>
    <div className="wrapper">
      {children}
    </div>
  </>
  )
}

export default PaddedWrapper