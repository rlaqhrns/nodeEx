import PropTypes from 'prop-types';
import React from 'react';
import Moment from 'react-moment';

const ProfileEducation = ({ education: { school, degree, fieldofstudy, current, to, from, description} }) =>
    <div>
        <h3 className="text-dark">{school}</h3>
            <p>
            <Moment format='YYYY/MM/DD'>{from}</Moment> - {!to ? 'Now' : <Moment format='YYYY/MM/DD'>{to}</Moment>}
            </p>
            <p>
                <strong>학위: </strong>{degree}
            </p>
            <p>
                <strong>연구분야: </strong>{fieldofstudy}
            </p>
            <p>
                <strong>설명: </strong>{description}
            </p>
    </div>

ProfileEducation.propTypes = {
    education: PropTypes.array.isRequired
}

export default ProfileEducation
