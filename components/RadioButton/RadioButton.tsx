import { Platform, TouchableOpacity } from 'react-native';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { styles } from './RadioButton.styles';

interface RadioButtonProps {
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  options,
  selected,
  onSelect,
}) => {
  return (
    <Box>
      {options.map((option) => (
        <TouchableOpacity
          accessibilityRole="button"
          key={option}
          style={styles.radioOption}
          onPress={() => onSelect(option)}
        >
          <Box style={[styles.radioCircle]}>
            <Box
              style={
                selected === option ? styles.radioCircleSelected : undefined
              }
              testID={
                selected === option
                  ? `radio-circle-selected-${option}`
                  : undefined
              }
            />
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
