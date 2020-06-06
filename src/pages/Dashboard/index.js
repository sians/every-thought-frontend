import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { actions as collectionActions, selectors as collectionsSelectors } from '../../store/reducers/collections'
import { selectors as authSelectors } from '../../store/reducers/auth'

import SideBar from '../../components/SideBar'
import Thoughts from '../Thoughts'
import Lists from '../Lists'

function Dashboard({ }) {
    const dispatch = useDispatch()

    const getCollections = useCallback(() => dispatch(collectionActions.getCollections()), [dispatch])
    const collections = useSelector(collectionsSelectors.getCollections)

    const collectionsLoading = useSelector(collectionsSelectors.getCreateCollectionLoading)
    const collectionsError = useSelector(collectionsSelectors.getCreateCollectionError)
  

    useEffect(() => {
        getCollections()
      }, [])    

    return (
        <div className="main-content">
            {/* <Thoughts /> */}
            <Lists />
        </div>
    );
}

export default Dashboard;

