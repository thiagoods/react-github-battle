var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;
var UserDetails = require('../components/UserDetails');
var UserDetailsWrapper = require('../components/UserDetailsWrapper');

function ConfirmBattle(props) {
  return props.isLoading === true
    ? <p>LOADING!</p>
    : <div className='jumbotron col-sm-12 text-center'>
      <h1>Confirm Players</h1>
      <div className='col-sm-8 col-sm-offset-2'>
        <UserDetailsWrapper header='Player 1'>
          <UserDetails info={props.playersInfo[0]}/>
        </UserDetailsWrapper>
        <UserDetailsWrapper header='Player 2'>
          <UserDetails info={props.playersInfo[1]}/>
        </UserDetailsWrapper>
      </div>
      <div className='col-sm-8 col-sm-offset-2'>
        <div className='col-sm-12'>
          <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>
            Initiate Battle!
          </button>
        </div>
        <div className='col-sm-12'>
          <Link to='/playerOne'>
            <button type='button' className='btn btn-lg btn-danger'>
              Reselect Players
            </button>
          </Link>
        </div>
      </div>
    </div>
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired
}
module.exports = ConfirmBattle;
