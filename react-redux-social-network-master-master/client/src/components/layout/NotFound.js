import React, { Fragment } from 'react';

const NotFound = () => {
    return (
        <Fragment>
            <h1 className="x-large text-primary">
                <i className="fas fa-exclamation-triangle"></i>Page Not Found
            </h1>
            <p className="large">죄송합니다만 이페이지는 존재하지 않습니다.</p>
        </Fragment>
    )
}

export default NotFound;