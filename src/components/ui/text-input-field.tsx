import FormField from './form-field';
import { Input } from '@/components/ui/input';

interface TextInputFieldProps {
  type?: string;
  label: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  infoText?: string;
  id?: string;
  children?: React.ReactNode;
  maxLength?: number;
}

const TextInputField: React.FC<TextInputFieldProps> = ({
  label, value, maxLength, placeholder, onChange, children, error, infoText, id, type='text'
}) => (
  <FormField label={label} error={error} infoText={infoText}>
    <Input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      id={id}
      maxLength={maxLength}
      className="py-6 mt-2 w-full"
    />
    { children }
  </FormField>
);

export default TextInputField;
