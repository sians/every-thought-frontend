import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { actions as collectionActions, selectors as collectionsSelectors } from '../../store/reducers/collections'
import { actions as listActions, selectors as listsSelectors } from '../../store/reducers/lists'
import { selectors as authSelectors } from '../../store/reducers/auth'


function Lists({ }) {
    const dispatch = useDispatch()

    // const getCollections = useCallback(() => dispatch(collectionActions.getCollections()), [dispatch])
    // const collections = useSelector(collectionsSelectors.getCollections)

    // const collectionsLoading = useSelector(collectionsSelectors.getCreateCollectionLoading)
    // const collectionsError = useSelector(collectionsSelectors.getCreateCollectionError)
  
    const getLists = useCallback(() => dispatch(listActions.getLists()), [dispatch])
    const lists = useSelector(listsSelectors.getLists)

    const listsLoading = useSelector(listsSelectors.getCreateListLoading)
    const listsError = useSelector(listsSelectors.getCreateListError)

    console.log(lists)


    // useEffect(() => {
    //     getCollections()
    //   }, [])    

      useEffect(() => {
        getLists()
      }, [])


    return (
        <div className="main-content">
            <div className="your-lists">
                <div className="header">
                    Title
                </div>
                <div className="list-content">
                    
                </div>
            </div>
        </div>
    );
}

export default Lists;

