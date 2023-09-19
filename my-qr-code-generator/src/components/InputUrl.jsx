// import React from 'react';
import PropTypes from 'prop-types';

const InputUrl = ({inputTextValue, handleChange}) => {
  return (
    <div className="inputUrl-wrapper">
      <p>Your Url:</p>
      <input type="text" placeholder="https://" onChange={handleChange} value={inputTextValue} />
    </div>
  );
};

InputUrl.propTypes = {
  inputTextValue: PropTypes.string.isRequired, // inputTextValue harus bertipe string dan wajib ada
  handleChange: PropTypes.func.isRequired, // handleChange harus bertipe fungsi dan wajib ada
};

export default InputUrl;
