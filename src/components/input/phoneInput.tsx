import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PhoneInputComponent: React.FC = () => {
  const [phone, setPhone] = useState('');

  const handleChange = (value: string, country: any) => {
    setPhone(value);
  };
  return (
    <div className='relative mt-[10px]'>
      <PhoneInput
        country={'us'} 
        value={phone}
        onChange={handleChange}
        inputStyle={{
          width: '100%',
          height: '50px',
          fontSize: '16px',
          paddingLeft: '48px',
          backgroundColor: 'transparent', 
          borderColor: "#3f3b45",
        }}
        buttonStyle={{
          backgroundColor: 'transparent',
          border: 'none',
          position: 'absolute',
          left: '0',
          top: '0',
          bottom: '0',
        }}
        dropdownStyle={{
          width: '300px',
        }}
      />
    </div>
  );
};

export default PhoneInputComponent;