import PropTypes from 'prop-types';
import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addExperience } from '../../actions/profile';

const AddExperience = ({ addExperience, history }) => {
    const [formData, setFormData] = useState({
        company: '',
        title: '',
        location: '',
        from: '',
        to: '',
        current: false,
        description: ''
    });

    const [toDateDisabled, toggleDisabled] = useState(false);

    const { company, title, location, from, to, current, description } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    return (
        <Fragment>
        <h1 class="large text-primary">
            Add An Experience
            </h1>
            <p class="lead">
                <i class="fas fa-code-branch"></i> 과거에 당신의 개발자/프로그래밍의 직위를 추가하세요
            </p>
            <small>* = required field</small>
            <form class="form" onSubmit={e => {
                e.preventDefault();
                addExperience(formData, history)
            }} >
                <div className="form-group">
                <input type="text" placeholder="* 직업 제목" name="title" value={title} onChange={e => onChange(e)} required />
                </div>
                <div className="form-group">
                <input type="text" placeholder="* 회사" name="company" value={company} onChange={e => onChange(e)} required />
                </div>
                <div className="form-group">
                <input type="text" placeholder="위치" name="location" value={location} onChange={e => onChange(e)} />
                </div>
                <div className="form-group">
                <h4>From Date</h4>
                <input type="date" name="from" value={from} onChange={e => onChange(e)} />
                </div>
                <div className="form-group">
                <p><input type="checkbox" name="current" value={current} onChange={e => {
                    setFormData({ ...formData, current: !current });
                    toggleDisabled(!toDateDisabled);
                }}  /> {' '}Current Job</p>
                </div>
                <div className="form-group">
                <h4>To Date</h4>
                <input type="date" name="to" value={to} onChange={e => onChange(e)} disabled={toDateDisabled ? 'disabled' : ''} />
                </div>
                <div className="form-group">
                <textarea
                    name="description"
                    value={description}
                    onChange={e => onChange(e)}
                    cols="30"
                    rows="5"
                    placeholder="직업 설명"
                ></textarea>
                </div>
                <input type="submit" className="btn btn-primary my-1" />
                <a className="btn btn-light my-1" href="dashboard.html">뒤로 가기</a>
            </form>
        </Fragment>
    )
}

AddExperience.propTypes = {
    addExperience: PropTypes.func.isRequired
}

export default connect(null, { addExperience })(withRouter(AddExperience))
