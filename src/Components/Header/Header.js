import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom'
import Login from '../Login/Login';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/Context';

function Header() {
  const handleSell=()=>{
    history.push('/create')
  }
  const handleLogin = () => {
    history.push('/login')
  }
  const { user } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory()
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          {user ? <button className='login_btn'>Hii,{user.displayName}</button> : <button onClick={handleLogin} className='login_btn'>Login</button>}
        </div>
        {user && <button className='login_btn' onClick={() => {
          firebase.auth().signOut();
          history.push('/')

        }}>Logout</button>}

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span onClick={handleSell}>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
