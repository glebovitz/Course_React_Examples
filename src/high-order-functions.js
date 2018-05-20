import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return  (props) => (
    <div>
      {props.isAdmin && <p>This is private info, please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  )
};

// requireAuthentication
const requireAuthentication = (WrappedComponent) => {
  return  (props) => (
    <div>
      {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>User is NOT Authenticated</p>}
    </div>
  )
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo info="these are the details" isAuthenticated={true}/>, document.getElementById('app'));
