import React from 'react';
import DropMenu from './DropMenu';
import './ChildDropMenu.css';

const ChildDropMenu = (props) => {

  let arrayChildren = [];
  for (let iy = 0; iy < props.nrChildren; iy++) {
    arrayChildren.push(iy);
  };

  if (props.nrChildren > 0) {
        return (
          <div className={`menu-content ${props.parentIsOpen ? 'opacityTrue' : 'opacityFalse'}`} >
            {
              arrayChildren.map( (ii) => (
                <DropMenu
                          key = {'c'+props.index+props.childIndex+ii}
                          index = {props.index}
                          nestLevel = {props.childrenNestLevel}
                          childIndex = {props.childrenNestLevel < 3 ? ii : props.childIndex}
                          secondChildIndex = {props.childrenNestLevel < 3 ? 0 : ii}
                          navMenuState = {props.navMenuState}
                          onMenuStateChange = {props.onMenuStateChange} />
              ))
            }
          </div>
        )
  } else {
    return null
  }

}

export default ChildDropMenu;
