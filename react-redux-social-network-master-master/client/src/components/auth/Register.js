import PropTypes from 'prop-types';
import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';

// destructure props
const Register = ({ setAlert, register, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;
    // handles input values and sets data in formData based on each input value type
    //각각의 입력 값의 타입에 기반하여 formData에 있는 데이터를 세팅하고 입력 값을 핸들링함 
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        if(password !== password2){
            setAlert('비밀번호가 일치하지 않습니다.', 'danger')
        } else {
            register({ name, email, password })
        }
    };
    if(isAuthenticated) {
        return <Redirect to="/dashboard" />
    }
    return (
        <Fragment>
            <h1 className="large text-primary">회원가입</h1>
                <p className="lead"><i className="fas fa-user"></i> 계정 신규 생성</p>
                <form className="form" onSubmit={e => onSubmit(e)} >
                    <div className="form-group">
                    <input type="text"
                        placeholder="Name"
                        name="name"
                        value={name}
                        onChange={e => onChange(e)}
                    />
                    </div>
                    <div className="form-group">
                    <input type="email"
                        placeholder="Email Address"
                        name="email"
                        value={email}
                        onChange={e => onChange(e)}
                     />
                    <small className="form-text">
                        이사이트는  Gravatar를 사용하고 있으므로 , 프로파일 이미지를 원하시면, Garavatar 이메일을 사용하세요 </small>
                    </div>
                    <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        // minLength="6"
                        value={password}
                        onChange={e => onChange(e)}
                    />
                    </div>
                    <div className="form-group">
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="password2"
                        // minLength="6"
                        value={password2}
                        onChange={e => onChange(e)}
                    />
                    </div>
                    <input type="submit" className="btn btn-primary" value="Register" />
                </form>
                <p className="my-1">
                    이미 계정이 있으신가요? <Link to="/login">회원가입</Link>
                </p>
        </Fragment>
    )
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register)