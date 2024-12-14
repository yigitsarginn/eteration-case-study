import { Platform, TouchableOpacity } from 'react-native';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { styles } from './Checkbox.styles';
import { CheckIcon } from '@/assets/icons/CheckIcon';
import { normalize } from '@/utils/layout-utils';

interface CheckboxProps {
  options: string[];
  selected: string[];
  onChange: (value: string) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  options,
  selected,
  onChange,
}) => {
  return (
    <Box>
      {options.map((option, index) => (
        <TouchableOpacity
          key={`${option}_${index}`}
          style={styles.checkboxOption}
          onPress={() => onChange(option)}
        >
          <Box
            center
            style={[
              styles.checkboxSquare,
              selected.includes(option) && styles.checkboxSquareSelected,
            ]}
          >
            {selected.includes(option) && (
              <CheckIcon width={normalize(10)} height={normalize(10)} />
            )}
          </Box>
          <Text
            numberOfLines={1}
            variant="xSmall"
            weight={Platform.OS === 'android' ? 'bold' : 'regular'}
          >
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </Box>
  );
};
