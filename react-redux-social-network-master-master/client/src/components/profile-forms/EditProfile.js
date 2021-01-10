import PropTypes from 'prop-types';
import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const initialState = {
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: ''
  };

const EditProfile = ({ profile: { profile, loading }, createProfile, history, getCurrentProfile }) => {

    const [formData, setFormData] = useState(initialState);

    const [displaySocialInputs, toggleSocialInputs] = useState(false);

    useEffect(() => {
            if (!profile) getCurrentProfile();
            if (!loading) {
              const profileData = { ...initialState };
              for (const key in profile) {
                if (key in profileData) profileData[key] = profile[key];
              }
              setFormData(profileData);
            }
      }, [loading, getCurrentProfile, profile]);

      const {
        company,
        website,
        location,
        status,
        skills,
        githubusername,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram
      } = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        createProfile(formData, history, true)
    }

    return (
        <Fragment>
            <h1 className="large text-primary">
            당신의 프로필 생성
        </h1>
        <p className="lead">
            <i className="fas fa-user"></i> 당신의 프로필이 다른 개발자에게 두드러지게 정보를 입력해주세요 
        </p>
        <small>* = 필수 항목</small>
        <form className="form" onSubmit={e => onSubmit(e)}>
            <div className="form-group">
            <select name="status" value={status} onChange={e => onChange(e)}>
                <option value="0">* 분야 선택</option>
                <option value="Developer">개발자</option>
                <option value="Junior Developer">주니어 개발자</option>
                <option value="Senior Developer">시니어 개발자</option>
                <option value="Manager">부장</option>
                <option value="Student or Learning">학생 또는 수강생</option>
                <option value="Instructor">교수 또는 강사</option>
                <option value="Intern">인턴</option>
                <option value="Other">기타</option>
            </select>
            <small className="form-text"
                >경력에 속한 분야는?</small
            >
            </div>
            <div className="form-group">
            <input type="text" placeholder="Company" name="company" value={company} onChange={e => onChange(e)} />
            <small className="form-text"
                >현재 직장이나 하고 있는 일은?</small
            >
            </div>
            <div className="form-group">
            <input type="text" placeholder="Website" name="website" value={website} onChange={e => onChange(e)} />
            <small className="form-text"
                >회사의 웹사이트는 ?</small
            >
            </div>
            <div className="form-group">
            <input type="text" placeholder="Location" name="location" value={location} onChange={e => onChange(e)} />
            <small className="form-text"
                >City & state suggested (eg. Boston, MA)</small
            >
            </div>
            <div className="form-group">
            <input type="text" placeholder="* Skills" name="skills" value={skills} onChange={e => onChange(e)} />
            <small className="form-text"
                >기술 분야를 콤마로 구분해서 입력해주세요  (eg.
                HTML,CSS,JavaScript,PHP)</small
            >
            </div>
            <div className="form-group">
            <input
                type="text"
                placeholder="Github Username"
                name="githubusername"
                value={githubusername}
                onChange={e => onChange(e)}
            />
            <small className="form-text"
                >If you want your latest repos and a Github link, include your
                username</small
            >
            </div>
            <div className="form-group">
            <textarea placeholder="A short bio of yourself" name="bio" value={bio}
                onChange={e => onChange(e)}></textarea>
            <small className="form-text">Tell us a little about yourself</small>
            </div>

            <div className="my-2">
            <button onClick={() => toggleSocialInputs(!displaySocialInputs)} type="button" className="btn btn-light">
                소셜네트워크 링크 추가
            </button>
            <span>선택사항</span>
            </div>

            {displaySocialInputs && (<Fragment>
                <div className="form-group social-input">
                <i className="fab fa-twitter fa-2x"></i>
                <input type="text" placeholder="Twitter URL" name="twitter" value={twitter} onChange={e => onChange(e)} />
                </div>

                <div className="form-group social-input">
                <i className="fab fa-facebook fa-2x"></i>
                <input type="text" placeholder="Facebook URL" name="facebook" value={facebook} onChange={e => onChange(e)}  />
                </div>

                <div className="form-group social-input">
                <i className="fab fa-youtube fa-2x"></i>
                <input type="text" placeholder="YouTube URL" name="youtube" value={youtube} onChange={e => onChange(e)} />
                </div>

                <div className="form-group social-input">
                <i className="fab fa-linkedin fa-2x"></i>
                <input type="text" placeholder="Linkedin URL" name="linkedin" value={linkedin} onChange={e => onChange(e)}  />
                </div>

                <div className="form-group social-input">
                <i className="fab fa-instagram fa-2x"></i>
                <input type="text" placeholder="Instagram URL" name="instagram" value={instagram} onChange={e => onChange(e)}  />
                </div>
                </Fragment>)}

            <input type="submit" className="btn btn-primary my-1" />
            <a className="btn btn-light my-1" href="dashboard.html">Go Back</a>
        </form>
      </Fragment>
    )
}

EditProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps, {getCurrentProfile, createProfile})(withRouter(EditProfile));