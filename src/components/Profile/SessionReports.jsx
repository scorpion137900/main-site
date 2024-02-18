import React from 'react'

const SessionReports = () => {
  return (
    <>
      {
        [1, 1, 1, 1, 1, 1, 1, 1, 1,].map(() => <div key={Math.random()}>Session Reports</div >)

      }
    </>
  )
}

export default SessionReports