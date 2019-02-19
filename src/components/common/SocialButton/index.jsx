import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'semantic-ui-react';

const ButtonComponent = (props) => {
  const {
    provider,
    providerName,
    type,
    className,
    icon,
    loading,
    retrieveSocialData,
  } = props;
  return (
    <Button
      circular
      type={type}
      className={className}
      icon={icon}
      loading={loading}
      onClick={() => retrieveSocialData(provider, providerName, type)}
    />
  );
};
ButtonComponent.propTypes = {
  provider: PropTypes.string,
  providerName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  retrieveSocialData: PropTypes.func.isRequired,
};

ButtonComponent.defaultProps = {
  provider: null,
};
export default ButtonComponent;
