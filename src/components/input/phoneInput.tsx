import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PhoneInputComponent: React.FC = () => {
  const [phone, setPhone] = useState('');

  const handleChange = (value: string, country: any) => {
    setPhone(value);
    console.log(country); // This will log the selected country data
  };
  return (
    <div className='relative mt-[10px]'>
      <PhoneInput
        country={'us'} // Set the default country
        value={phone}
        onChange={handleChange}
        inputStyle={{
          width: '100%',
          height: '50px',
          fontSize: '16px',
          paddingLeft: '48px', // Make room for the flag
          backgroundColor: 'transparent',
          borderColor: "#3f3b45",
        //   border border-[#3f3b45] rounded-[8px] p-[16px] mt-[10px]
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