import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to='/profiles'>
          개발자(developers)
        </Link>
      </li>
      <li>
        <Link to='/posts'>
          게시글
        </Link>
      </li>
      <li>
        <Link to='/dashboard'>
          <i className='fas fa-user' />{' '}
            <span className="hide-sm">Dashboard(대시보드)</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href="#!">
          <i className='fas fa-sign-out-alt' />{' '}
            <span className="hide-sm">로그아웃</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
    <li><Link to="/profiles">개발자(developers)</Link></li>
    <li><Link to="/register">등록</Link></li>
    <li><Link to="/login">로그인</Link></li>
  </ul>
  );

    return (
        <nav className="navbar bg-dark">
        <h1>
          <Link to="/"><i className="fas fa-code"></i> Social Network</Link>
        </h1>
        { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks}</Fragment>) }
      </nav>
    )
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar)
