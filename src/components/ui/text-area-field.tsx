import React from 'react';
import FormField from './form-field';
import { Textarea } from '@/components/ui/textarea';

interface TextareaFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  error?: string;
  maxLength?: number;
}

const TextareaField: React.FC<TextareaFieldProps> = ({
  label,
  value,
  onChange,
  placeholder,
  error,
  maxLength = 250
}) => (
  <FormField label={label} error={error}>
    <Textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="resize-none"
      rows={7}
    />
    <span className='absolute bottom-3 right-3 font-medium'>
      {maxLength - value.length}
    </span>
  </FormField>
);

export default TextareaField;
