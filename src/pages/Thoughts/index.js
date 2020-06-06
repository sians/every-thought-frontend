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

    console.log(thoughts[0])
    
    useEffect(() => {
        getThoughts()
    }, [])

    useEffect(() => {
        setSelectedThought(thoughts[0])
    }, [thoughts])

    const handleThoughtSelect = (thought) => {
        console.log(thought)
        setSelectedThought(thought)
    }

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
                                return <li onClick={() => handleThoughtSelect(thought)} className={`${thought===selectedThought ? 'selected' : ''}`}>{thought.title}</li>
                            })
                        }
                        <li>Reply to Niall's email</li>
                        <li>Order potting mix</li>
                    </ul>
                </div>
            </div>

            <div className="thought-content">
                {!(selectedThought===undefined) ?
                    <ThoughtEditor thought={selectedThought} />
                    :
                    <p>loading</p>
                }
            </div>
        </div>
    );
}

export default Thoughts;

