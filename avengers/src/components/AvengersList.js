import React from 'react';
import PropTypes from 'prop-types';

function AvengersList(props) {
    if (!props.avengersList || !props.avengersList.length) {
        return <h1>No Avengers data!</h1>
    }
    return (
        <div className='listWrapper'>
            {props.avengersList.map(avenger=> (
                <div className='characterCard' key={avenger.id}>
                    <img src={avenger.thumbnail} alt={avenger.name}/>
                    <h3
                        onClick={()=> props.history.push(`/avengers/${avenger.id}/info`)}
                    >
                        {avenger.name}
                    </h3>
                    <p>{avenger.nickname}</p>
                </div>
            ))};
        </div>
    );
};

export default AvengersList;