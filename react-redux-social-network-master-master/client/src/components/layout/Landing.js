import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

const Landing = ({ isAuthenticated }) => {
    if(isAuthenticated) {
        return <Redirect to='/dashboard' />
    }

    return (
        <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">개발자 Connector(연락)</h1>
            <p className="lead">
              개발자 프로파일/포트폴리오 생성하여 다른 개발자분들과 게시글을 공유하거나 도움을 요청하세요
            </p>
            <div className="buttons">
              <Link to="/register" className="btn btn-primary">회원가입</Link>
              <Link to="/login" className="btn btn-light">로그인</Link>
            </div>
          </div>
        </div>
      </section>
    )
}

Landing.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Landing)