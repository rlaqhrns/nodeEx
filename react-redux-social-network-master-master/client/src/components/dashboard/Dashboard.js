import PropTypes from 'prop-types';
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteAccount, getCurrentProfile } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import Education from './Education';
import Experience from './Experience';

const Dashboard = ({ getCurrentProfile, deleteAccount, auth: { user }, profile: { profile, loading } }) => {
    useEffect(() => {
        getCurrentProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getCurrentProfile]);

    return loading && profile === null ? (<Spinner />) : (<Fragment>
        <h1 className="large text-primary">Dashboard</h1>
        <p className="lead">
            <i className="fas fa-user"></i> {user && user.name} 님 환영합니다.
        </p>
        {profile !== null ? (
            <Fragment>
                <DashboardActions />
                <Experience experience={profile.experience} />
                <Education education={profile.education} />
                <div className="my-2">
                    <button className="btn btn-danger" onClick={()=> deleteAccount()}>
                         <i className="fas fa-user-minus"></i>계정 삭제 
                    </button>
                </div>
            </Fragment>
        ) : (
            <Fragment>
                <p>프로파일을 아직 입력하지 않으셨으면 ,정보를 추가해주세요 </p>
                <Link to='/create-profile' className="btn btn-primary my-1">
                    프로파일 생성 
                </Link>
            </Fragment>
        )}
    </Fragment>
    );
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    deleteAccount: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard)

