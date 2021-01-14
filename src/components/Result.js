import React from 'react';

const Result = (props) => {
    const {error, city} = props.information;
    const info = (props.information.info.main)
    console.log(info)
    console.log(info.temp)

    return (
        <div>
            {String(error)}
            {/*{temp}*/}
            {/*{pressure}*/}
        </div>
    );
};

export default Result;
