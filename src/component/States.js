import React from 'react';
import StateHooksConcept from './StateHooksConcept';
import RefHookConcepts from './RefHookConcept';
import PropDriling from './PropDriling';


export default function States() {
    return (
        <>
        <h1>Concept: States</h1>
    <h4>useState Hook Concept</h4>
    <StateHooksConcept/>
    <h4>useRef Hook Concept</h4>
    <RefHookConcepts/>
    <h4>PropDriling Concept</h4>
    <PropDriling msg="Hello"/>
        </>);
}