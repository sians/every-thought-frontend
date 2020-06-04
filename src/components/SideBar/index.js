import React, { useMemo } from 'react'

import thoughtIcon from '../../assets/icons/thought.svg'
import listIcon from '../../assets/icons/checklist.svg'
import tagIcon from '../../assets/icons/tag.svg'
import trashIcon from '../../assets/icons/trash.svg'
import noteIcon from '../../assets/icons/notes.svg'

const SideBar = () => {

  return (
    <div className="sidebar">
      <div  className="recent-thoughts">
        <h4>Recent Thoughts</h4>
        <ul>
          <li>
            <img src={noteIcon} alt="Note Icon" className="recent-icon"/>
            Reply to Niall's email
          </li>
          <li>
            <img src={noteIcon} alt="Note Icon" className="recent-icon"/>
            Order potting mix
          </li>

        </ul>
      </div>
      <ul className="nav-menu">
          <li>
            <img src={thoughtIcon} alt="Thought Icon" className="menu-icon"/>
            Thoughts
          </li>

          <li>
            <img src={listIcon} alt="List Icon" className="menu-icon"/>
            Lists
          </li>

          <li>
            <img src={tagIcon} alt="Tag Icon" className="menu-icon"/>
            Tags
          </li>

          <li>
            <img src={trashIcon} alt="Trash Icon" className="menu-icon"/>
            Trash
          </li>
      </ul>
    </div>
  )
}

export default SideBar
