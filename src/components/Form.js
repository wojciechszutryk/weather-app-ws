import React from 'react';

const Form = (props) => {
    return (
        <form onSubmit={props.submit}>
            <input type="text" value={props.city} placeholder={'city...'} onChange={props.change}/>
            <button>Search</button>
        </form>
    );
};

export default Form;
