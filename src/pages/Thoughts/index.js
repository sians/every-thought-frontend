import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { actions as collectionActions, selectors as collectionsSelectors } from '../../store/reducers/collections'
import { actions as thoughtActions, selectors as thoughtsSelectors } from '../../store/reducers/thoughts'
import { selectors as authSelectors } from '../../store/reducers/auth'


function Thoughts({ }) {
    const dispatch = useDispatch()

    // const getCollections = useCallback(() => dispatch(collectionActions.getCollections()), [dispatch])
    // const collections = useSelector(collectionsSelectors.getCollections)

    // const collectionsLoading = useSelector(collectionsSelectors.getCreateCollectionLoading)
    // const collectionsError = useSelector(collectionsSelectors.getCreateCollectionError)
  
    const getThoughts = useCallback(() => dispatch(thoughtActions.getThoughts()), [dispatch])
    const thoughts = useSelector(thoughtsSelectors.getThoughts)

    const thoughtsLoading = useSelector(thoughtsSelectors.getCreateThoughtLoading)
    const thoughtsError = useSelector(thoughtsSelectors.getCreateThoughtError)

    console.log(thoughts)


    // useEffect(() => {
    //     getCollections()
    //   }, [])    

      useEffect(() => {
        getThoughts()
      }, [])    


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
                                return <li>{thought.title}</li>
                            })
                        }
                        <li>Reply to Niall's email</li>
                        <li>Order potting mix</li>
                    </ul>
                </div>
            </div>

            <div className="thought-content">
                
            </div>
        </div>
    );
}

export default Thoughts;

