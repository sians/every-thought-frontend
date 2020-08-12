import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from 'react-redux'


import { TrixEditor } from "react-trix";
import "trix/dist/trix";

import { actions as thoughtActions, selectors as thoughtsSelectors } from '../../store/reducers/thoughts'

const  Wysiwyg = ({ object }) => {
    const dispatch = useDispatch()

    const handleSave = useCallback((text, thoughtId) =>
        dispatch(thoughtActions.updateThought(text, thoughtId)), [dispatch])
  
    const [lastTextValue, setLastTextValue] = useState('')
    const [textValue, setTextValue] = useState(object.text.body)

    useEffect(() => {
        if (object.text.body) setTextValue(object.text.body)
        else setTextValue("")
    }, [object])

    const AUTOSAVE_INTERVAL = 3000;
    useEffect(() => {
        const timer  = setTimeout(() => {
            if (textValue != lastTextValue) {
                handleSave(textValue, object.id)
                setLastTextValue(textValue)
            }
            console.log('same')
        }, AUTOSAVE_INTERVAL);
        return () =>  clearTimeout(timer);
    })    

    const handleChange = (html, text) => {
        setTextValue(html)      
    }


    return (
        <div>
            <TrixEditor 
                input="trix"
                autoFocus={true}
                onChange={handleChange}
                value={textValue}
            />
            
        </div>
    );
}

export default Wysiwyg;