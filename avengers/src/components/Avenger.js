import React, { Fragment } from 'react';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import AvengerInfo from './AvengerInfo';
import AvengerMovies from './AvengerMovies';

function Avenger(props) {
    const avenger = props.avengersList.find(avenger=> avenger.id === parseInt(props.match.params.avengerId, 10));

   function handleDelete() {
        props.handleDeleteAvenger(avenger.id);
        props.history.push('/avengers');
    }

    if(props.isLoading || props.avengersList.length === 0) return <h2>Loading Data</h2>;

    return(
        <Fragment>
            <img className='characterImg' src={avenger.img} alt={avenger.name}/>
            <div className='characterInfoWrapper'>
                <h1>{avenger.name}</h1>
                <h4>{avenger.nickname}</h4>
                <nav>
                    <Link to={`/avengers/${avenger.id}/info`}>Info</Link>
                    <Link to={`/avengers/${avenger.id}/movies`}>Movies</Link>
                </nav>
                 <Route 
                    path='/avengers/:avengerId/info'
                    render={props=> <AvengerInfo {...props} avenger={avenger}/>}
                 />
                <Route 
                    path='/avengers/:avengerId/movies'
                    render={props=> <AvengerMovies {...props} avenger={avenger}/>}
                 />
            </div>
            <button
                className='materialButtonRaised'
                onClick={event => {
                    event.preventDefault();
                    props.goToUpdateAvengerForm(event, avenger.id)
                  }}
            >
                Update Avenger
            </button>
            <button className="material-button-raised" onClick={handleDelete}>Delete Avenger</button>
        </Fragment>
    );
}

Avenger.propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        avengerId: PropTypes.string
      })
    }),
    avengersList: PropTypes.array,
    handleDeleteAvenger: PropTypes.func,
    goToUpdateAvengerForm: PropTypes.func,
  };
  
export default Avenger;
  