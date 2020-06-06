import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { actions as thoughtActions, selectors as thoughtsSelectors } from '../../../store/reducers/thoughts'
import { selectors as authSelectors } from '../../../store/reducers/auth'


function ThoughtEditor({ thought }) {

    return (
        <div>
            <h2>{thought.title}</h2>
            <p>editor</p>
        </div>
    );
}

export default ThoughtEditor;

