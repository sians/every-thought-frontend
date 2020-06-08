import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { selectors as authSelectors } from '../../../store/reducers/auth'

import Wysiwyg from  '../../../components/Wysiwyg'
import Button from '../../../components/Button'


function ThoughtEditor({ thought }) {

    return (
        <div>
            <h2>{thought.title}</h2>
            <Wysiwyg object={thought} />
        </div>
    );
}

export default ThoughtEditor;

