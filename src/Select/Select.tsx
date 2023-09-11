import { forwardRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import SelectOption from './SelectOption';

export type Option = {
  value: string;
  label: string;
};

export type SelectProps = {
  options: Option[];
  onSelect: (option: Option) => void;
};

const Select = forwardRef<HTMLDivElement, SelectProps>(
  ({ className, onSelect, options, ...rest }, ref): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: Option) => {
      setSelectedOption(option);
      onSelect(option);
      setIsOpen(false);
    };

    return (
      <div className="relative inline-block text-left">
        <div>
          <span
            onClick={toggleDropdown}
            className="cursor-pointer rounded-md border border-gray-300 px-4 py-2 inline-block"
          >
            {selectedOption ? selectedOption.label : 'Select an option'}
          </span>
        </div>
        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {options.map((option) => (
                <div
                  key={option.value}
                  onClick={() => handleOptionClick(option)}
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  {option.label}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;
