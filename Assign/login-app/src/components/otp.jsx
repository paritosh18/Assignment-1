import React, { useState } from 'react';
import '../css/otp.css'; // Assuming you're adding external CSS for styling

const Otp = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus on the next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <div className="otp-container">
      <div className="otp-box">
        <h2>Please enter OTP</h2>
        <div className="otp-inputs">
          {otp.map((data, index) => {
            return (
              <input
                className="otp-input"
                type="text"
                name="otp"
                maxLength="1"
                key={index}
                value={data}
                onChange={e => handleChange(e.target, index)}
                onFocus={e => e.target.select()}
              />
            );
          })}
        </div>
        <button className="verify-btn">Verified</button>
        <p className="resend-text">
          Didn't receive OTP? <a href="#">Resend OTP</a>
        </p>
      </div>
    </div>
  );
};

export default Otp;
