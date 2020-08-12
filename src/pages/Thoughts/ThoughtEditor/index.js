import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux'

import { actions as thoughtActions, selectors as thoughtsSelectors } from '../../../store/reducers/thoughts'

import Wysiwyg from  '../../../components/Wysiwyg'


function ThoughtEditor({ thought }) {
    const dispatch = useDispatch()

    const handleSave = useCallback((text, thoughtId) =>
        dispatch(thoughtActions.updateThought(text, thoughtId)), [dispatch])


    return (
        <div>
            <h2>{thought.title}</h2>
            <Wysiwyg object={thought} />
        </div>
    );
}

export default ThoughtEditor;

