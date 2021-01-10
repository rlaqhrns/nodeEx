import PropTypes from 'prop-types';
import React from 'react';
import Moment from 'react-moment';

const ProfileExperience = ({ experience: { company, title, location, current, to, from, description} }) =>
    <div>
        <h3 className="text-dark">{company}</h3>
            <p>
            <Moment format='YYYY/MM/DD'>{from}</Moment> - {!to ? 'Now' : <Moment format='YYYY/MM/DD'>{to}</Moment>}
            </p>
            <p>
                <strong>직위: </strong>{title}
            </p>
            <p>
                <strong>설명: </strong>{description}
            </p>
    </div>

ProfileExperience.propTypes = {
    experience: PropTypes.array.isRequired
}

export default ProfileExperience
