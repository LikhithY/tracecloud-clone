import React, { Fragment } from 'react'

const SavedReleases = ({notes}) => {
    
  return (
    <Fragment>
    {notes.map((noteItem) => {
        return (
          <div className="saved-release">
            <h3>{noteItem.name}</h3>
            <p>{noteItem.description}</p>
            <p className='owner'>{noteItem.owner}</p>
          </div>
        );
      })}
      </Fragment>
  )
}

export default SavedReleases