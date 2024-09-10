import React, { useState, useMemo } from 'react';
import { fetchMutation } from 'convex/nextjs';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { api } from '../../../convex/_generated/api';
import { Input } from "@/components/ui/input";
import { getNames } from 'country-list';
import FormField from './form-field';
import SelectField from './select-field';
import TextInputField from './text-input-field';
import TextareaField from './text-area-field';
import PhoneInputField from './phone-input-field';
import Follow from '@/data/follow';
import FollowRange from '@/data/follow-range';
import { IconCheck } from '@tabler/icons-react';
import { sendVerification } from '@/app/actions';
import { FormDataProps, ValidatinProps } from '@/types';
import { handleValidation } from '@/lib/validation';
import { validateEmail, validateUsername } from '@/lib/validation';

const TalentForm = () => {
  const [follow, setFollow] = useState('');
  const [selected, setSelected] = useState<number | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [errors, setErrors] = useState<ValidatinProps>({});

  const router = useRouter();

  const [formData, setFormData] = useState<FormDataProps>({
    dob: '',
    phone: '',
    email: '',
    username: '',
    displayName: '',
    legalName: '',
    country: '',
    follow: '',
    followUsername: '',
    followRange: '',
    textareaValue: '',
    selected: null,
    referralCode: '',
  });

  const pronouns = ['He/him', 'She/her', 'They/them'];

  const handleSelect = (event: any, index: any) => {
    event.preventDefault();
    setSelected(index);
    setFormData((prev) => ({ ...prev, ['selected']: index }))
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFormData(prev => ({ ...prev, username: value }));
    if (!validateUsername(value)) {
      setErrors(prev => ({ ...prev, username: 'Username must be 3-28 characters long and can only contain letters, numbers, periods, underscores, and hyphens.' }));
    } else {
      setErrors(prev => ({ ...prev, username: undefined }));
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = event.target.value;
    setIsVerified(false);
    setFormData(prev => ({ ...prev, email: emailValue }));
    
    if (validateEmail(emailValue)) {
      setErrors(prev => ({ ...prev, email: undefined }));
      setIsEmailValid(true);
    } else {
      setErrors(prev => ({ ...prev, email: 'Please enter a valid email address.' }));
      setIsEmailValid(false);
    }
  };

  const handleFollowChange = (value: any) => {
    setFollow(value);
    setFormData((prev) => ({ ...prev, ['follow']: value }));
  }

  const handleCountryChange = (value: any) => {
    setFormData((prev) => ({ ...prev, ['country']: value }))
  }

  const handleFollowRangeChange = (value: any) => {
    setFormData((prev) => ({ ...prev, ['followRange']: value }));
  }

  const handleInputChange = (field: any, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleDobChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    let tempErrors: ValidatinProps = {};

    if (value.length > 2 && value.length <= 4) {
      value = value.replace(/(\d{2})(\d+)/, '$1/$2');
    } else if (value.length > 4) {
      value = value.replace(/(\d{2})(\d{2})(\d+)/, '$1/$2/$3');
    }
    setFormData((prev) => ({ ...prev, ['dob']: value }));

    if (!/^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/(19|20)\d{2}$/.test(value) && value.length === 10) {
      tempErrors.dob = "Please enter a valid date in MM/DD/YYYY format.";
    } else {
      tempErrors.dob = "";
    }
  };

  const handleSendVerification = async (e: any) => {
    e.preventDefault();
    setIsVerified(true);
    const result = await sendVerification();
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    const validationErrors = handleValidation(formData);
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length === 0) {
      const res = await fetchMutation(api.talent.signUp, formData);
      sessionStorage.setItem('userInfo', JSON.stringify(res));
      router.push('/influencer')
    } else {
      console.log('Validation errors:', validationErrors);
    }
  };

  const options = useMemo(() => getNames().map(country => ({ label: country, value: country })), []);


  return (
    <form className="mt-8 mb-6" onSubmit={handleSubmit}>
      <TextInputField
        label="Legal name"
        value={formData.legalName}
        onChange={(e) => handleInputChange('legalName', e.target.value)}
        error={errors.legalName}
      />
      <div className='my-6 flex gap-6 '>
        {pronouns.map((label, index) => (
          <button
            key={index}
            className={`px-3 py-1 rounded-full font-medium border ${selected === index ? 'border-purple-500 bg-slate-800' : 'border-gray-500 bg-transparent'
              }`}
            onClick={(e) => handleSelect(e, index)}
          >
            {label}
          </button>
        ))}
      </div>
      <TextInputField
        label="Display name"
        value={formData.displayName}
        infoText="This appears on your profile"
        onChange={(e) => handleInputChange('displayName', e.target.value)}
      />
      
      <FormField
        label="Username"
        infoText="Use only letters, numbers, underscores, hyphens, and periods"
        error={errors.username}

      >
        <Input
          type="text"
          placeholder=""
          className="py-6 mt-2 w-full"
          id="Username"
          aria-label="Username"
          onChange={(e) => handleUsernameChange(e)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {!isFocused && !errors.username && formData.username && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            {<IconCheck className='absolute right-3 bottom-3 text-green-400' />}
          </div>
        )}
      </FormField>
      <TextInputField
        label="Email"
        value={formData.email}
        infoText="Verify your email to continue"
        onChange={(e) => handleEmailChange(e)}
        error={errors.email}
      >
        <button
          className={`absolute flex right-3 bottom-2 px-4 py-1 rounded-full ${!isVerified ? 'bg-purple-600' : 'bg-transparent'} ${!isVerified ? 'text-white' : 'text-green-600'} font-medium disabled:bg-purple-400`}
          onClick={handleSendVerification}
          disabled={!isEmailValid}
        >
          {isVerified && <IconCheck className='mr-2' />}
          Verify
        </button>
      </TextInputField>
      <TextInputField
        label="Date of birth"
        value={formData.dob}
        placeholder="MM/DD/YYYY"
        onChange={(e) => handleDobChange(e)}
        error={errors.dob}
        maxLength={10}
      />
      <PhoneInputField
        value={formData.phone}
        onChange={(value) => handleInputChange('phone', value)}
        error={errors.phone}
      />

      <SelectField
        label="Country"
        error={errors.country}
        options={options}
        onValueChange={handleCountryChange}
        placeholder={""}
      />
      <SelectField
        label="Where is your largest following?"
        error={errors.follow}
        options={Follow}
        onValueChange={handleFollowChange}
        placeholder={follow || ""}
      />
      {
        follow &&
        <TextInputField
          label={follow}
          placeholder="@handle"
          value={formData.followUsername}
          onChange={(e) => handleInputChange('followUsername', e.target.value)}
          error={errors.followUsername}
        />
      }

      <SelectField
        label="What is your largest following?"
        error={errors.followRange}
        options={FollowRange}
        onValueChange={handleFollowRangeChange}
        placeholder={""}
      />
      <TextInputField
        label="Referral code (optional)"
        value={formData.referralCode}
        placeholder=""
        onChange={(e) => handleInputChange('referralCode', e.target.value)}
      />
      <TextareaField
        label="Anything else we should know about you?"
        value={formData.textareaValue}
        onChange={(e) => handleInputChange('textareaValue', e.target.value)}
        maxLength={250}
      />
      <p className="my-8 px-2 text-sm text-gray-300 font-medium text-center">
        By applying to enroll as talent on Cameo, you agree to Cameo's <Link href="/terms" className="underline">Talent Terms of Service </Link> and <Link href="/privacy-policy" className="underline">Privacy Policy</Link>.
      </p>
      <button
        type="submit"
        className="px-12 py-4 rounded-full w-full bg-violet-800 font-medium text-white tracking-widest uppercase transform hover:bg-violet-400 transition-colors duration-200"
      >
        Continue
      </button>
    </form>
  );
};

export default TalentForm;