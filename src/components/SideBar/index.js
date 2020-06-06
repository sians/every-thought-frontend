import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link, useLocation } from 'react-router-dom'

import thoughtIcon from '../../assets/icons/thought.svg'
import listIcon from '../../assets/icons/checklist.svg'
import tagIcon from '../../assets/icons/tag.svg'
import trashIcon from '../../assets/icons/trash.svg'
import noteIcon from '../../assets/icons/notes.svg'

import { actions as thoughtActions, selectors as thoughtsSelectors } from '../../store/reducers/thoughts'


import Button from '../Button'

const SideBar = () => {
  const location = useLocation();
  const dispatch = useDispatch()

  const handleNewThought = useCallback(() => {
    dispatch(thoughtActions.createThought())
  },[])

  return (
    <div className="sidebar">
      <div className="header">
        <Button text="New Thought" action={handleNewThought} />
      </div>

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
          <Link to={{pathname: '/'}}>
            <li className={`${location.pathname === '/' ? 'selected' : ''}`}>
                <img src={thoughtIcon} alt="Thought Icon" className="menu-icon"/>
                Thoughts
            </li>
          </Link>

          <Link to={{pathname: '/lists'}}>
            <li className={`${location.pathname === '/lists' ? 'selected' : ''}`}>
                <img src={listIcon} alt="List Icon" className="menu-icon"/>
                Lists
            </li>
          </Link>

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
