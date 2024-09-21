import React, { useState } from 'react';

interface DateInput {
    value: string,
    setValue: (num: number) => void
}

const DateInput: React.FC = ({isHeader=true}: {isHeader?: boolean}) => {
  const [date, setDate] = useState<string>('');
  const [error, setError] = useState<string>('');

  const validateDate = (value: string) => {
    const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])$/;
    if (regex.test(value)) {
      setError('');
    } else {
      setError('Invalid date format. Use MM/DD');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setDate(v);
    validateDate(v);
  };

  return (
    <div className="flex flex-col w-full mt-[20px]">
      {
        isHeader && <label htmlFor="date" className="mb-2 text-lg">Enter Date (MM/DD):</label>
      } 
      <input
        type="text"
        id="date"
        value={date}
        onChange={handleChange}
        placeholder="MM / DD"
        className="w-full bg-transparent border border-[#3f3b45] rounded-[8px] p-[16px]"
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default DateInput;
