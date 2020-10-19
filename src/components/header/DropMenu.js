import React, {Component} from 'react';
import ChildDropMenu from './ChildDropMenu';
import './DropMenu.css';

class DropMenu extends Component {

  upTriangle = '\u25B2';
  downTriangle = '\u25BC';
  bullSign = '\u2022';
  childSignLeft = '\u261B';

  render() {

    const { index, nestLevel, childIndex, secondChildIndex, navMenuState, onMenuStateChange } = this.props;

    let menuName, parentIsOpen, hasChildren, nrChildren, childrenNestLevel, menuLink;

    switch (nestLevel) {
      case 1:
            menuName = navMenuState[index].menuName;
            parentIsOpen = navMenuState[index].isOpen;
            hasChildren = navMenuState[index].menuItems.length > 0;
            nrChildren = navMenuState[index].menuItems.length;
            menuLink = navMenuState[index].link;
            break;
      case 2:
            menuName = navMenuState[index].menuItems[childIndex].menuName;
            parentIsOpen = navMenuState[index].menuItems[childIndex].isOpen;
            hasChildren = navMenuState[index].menuItems[childIndex].menuItems.length > 0;
            nrChildren = navMenuState[index].menuItems[childIndex].menuItems.length;
            menuLink = navMenuState[index].menuItems[childIndex].link;
            break;
      case 3:
            menuName = navMenuState[index].menuItems[childIndex].menuItems[secondChildIndex].menuName;
            parentIsOpen = navMenuState[index].menuItems[childIndex].menuItems[secondChildIndex].isOpen;
            hasChildren = navMenuState[index].menuItems[childIndex].menuItems[secondChildIndex].menuItems.length > 0;
            nrChildren = navMenuState[index].menuItems[childIndex].menuItems[secondChildIndex].menuItems.length;
            menuLink = navMenuState[index].menuItems[childIndex].menuItems[secondChildIndex].link;
            break;
      default:
    };

    childrenNestLevel = ( hasChildren ? nestLevel + 1 : nestLevel );

    return (
      <div className='drop-menu' onMouseEnter={(e) =>
                  {onMenuStateChange(e, index, nestLevel, childIndex, secondChildIndex, true, menuLink )}}
                                 onMouseLeave={(e) =>
                  {onMenuStateChange(e, index, nestLevel, childIndex, secondChildIndex, false, menuLink)}}
      >
        <div className='item-nav-bar'
           onClick={(e) => {onMenuStateChange(e, index, nestLevel, childIndex, secondChildIndex, !parentIsOpen, menuLink)}}
           onTouchEnd={(e) => {onMenuStateChange(e, index, nestLevel, childIndex, secondChildIndex, !parentIsOpen, menuLink)}} >
           <a className = 'linked-none' href = {menuLink} >
            { hasChildren ? this.bullSign : this.childSignLeft} {menuName}
            { hasChildren ? (parentIsOpen ? this.upTriangle : this.downTriangle) : " " }
          </a>
        </div>

            <ChildDropMenu
              nrChildren = {nrChildren}
              parentIsOpen = {parentIsOpen}
              index = {index}
              childIndex = {childIndex}
              childrenNestLevel = {childrenNestLevel}
              navMenuState = {navMenuState}
              onMenuStateChange = {onMenuStateChange}
            />

      </div>
    )

  }
}

export default DropMenu;
