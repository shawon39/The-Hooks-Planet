import React from 'react'
import NavigationComponent from './NavigationComponent/NavigationComponent'
import DisplayItemComponent from './DisplayItemComponent/DisplayItemComponent'
import './MainComponent.css';

function MainComponent() {
  return (
    <div className="row mainBody">
      <div className="col-md-3">
        <NavigationComponent/>
      </div>
      <div className="col-md-9">
        <DisplayItemComponent/>
      </div>
    </div>
  )
}

export default MainComponent
