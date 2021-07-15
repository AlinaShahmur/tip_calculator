import React from 'react';

export default function OutputData(props) {

    let Res = props.result ? <p>{props.result}</p>:<p>...סכום</p>
    return (
        <React.Fragment>
            <h3 className = 'title-h3'>הסכום המומלץ להשארת טיפ:</h3>
            {Res}
        </React.Fragment>
    )
}
