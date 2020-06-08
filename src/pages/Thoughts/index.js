import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { actions as collectionActions, selectors as collectionsSelectors } from '../../store/reducers/collections'
import { actions as thoughtActions, selectors as thoughtsSelectors } from '../../store/reducers/thoughts'
import { selectors as authSelectors } from '../../store/reducers/auth'

import ThoughtEditor from  './ThoughtEditor'

function Thoughts({ }) {
    const dispatch = useDispatch()
    
    const [selectedThought, setSelectedThought] = useState(undefined)
  
    const getThoughts = useCallback(() => dispatch(thoughtActions.getThoughts()), [dispatch])
    const thoughts = useSelector(thoughtsSelectors.getThoughts)

    const thoughtsLoading = useSelector(thoughtsSelectors.getThoughtsLoading)
    
    useEffect(() => {
        getThoughts()
    }, [])

    useEffect(() => {
        if (selectedThought === undefined) setSelectedThought(thoughts[0])
    }, [thoughts])

    const handleThoughtSelect = (thought) => {
        const d = document.querySelector("trix-editor")
        d.innerHTML = thought.text.body

        setSelectedThought(thought)
    }

    const saveThought = useCallback((text, thoughtId) =>
        dispatch(thoughtActions.updateThought(text, thoughtId)), [dispatch])

    return (
        <div className="main-content">
            <div className="thought-list">
                <div className="header">
                    Title
                </div>
                <div className="thought-list-content">
                    <ul>
                        {
                            thoughts.map((thought) => {
                                return <li onClick={() => handleThoughtSelect(thought)} className={`${selectedThought && thought.id===selectedThought.id ? 'selected' : ''}`}>{thought.title}</li>
                            })
                        }
                        <li>Reply to Niall's email</li>
                        <li>Order potting mix</li>
                    </ul>
                </div>
            </div>

            <div className="thought-content">
                {!(selectedThought===undefined) ?
                    <div>
                        <ThoughtEditor thought={selectedThought} />
                    </div>
                    :
                    <p>loading</p>
                }
            </div>
        </div>
    );
}

export default Thoughts;

