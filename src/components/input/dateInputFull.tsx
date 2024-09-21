import React, { useState, useEffect } from 'react';

interface DateInputProps {
    value: string;
    setValue: (value: string) => void;
}

const DateInputFull: React.FC<DateInputProps> = ({ value, setValue }) => {
  const [error, setError] = useState<string>('');

  const validateDate = (dateString: string) => {
    const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
    if (!regex.test(dateString)) {
      setError('Invalid date format. Use MM/DD/YYYY');
      return false;
    }

    const [month, day, year] = dateString.split('/').map(Number);
    const date = new Date(year, month - 1, day);

    if (
      date.getFullYear() !== year ||
      date.getMonth() !== month - 1 ||
      date.getDate() !== day
    ) {
      setError('Invalid date. Please enter a valid date.');
      return false;
    }

    setError('');
    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (newValue.length === 10) {
      validateDate(newValue);
    } else {
      setError('Invalid Date');
    }
  };

  useEffect(() => {
    if (value.length === 10) {
      validateDate(value);
    }
  }, [value]);

  return (
    <div className="flex flex-col w-full">
      <input
        type="text"
        id="date"
        value={value}
        onChange={handleChange}
        placeholder="MM/DD/YYYY"
        className="w-full bg-transparent border border-[#3f3b45] rounded-[8px] p-[16px] mt-[10px]"
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default DateInputFull;