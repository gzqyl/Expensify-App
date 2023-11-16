import React from 'react';
import Text from '@components/Text';
import DisplayNamesProps from './types';
import StringUtils from '../../libs/StringUtils';

// As we don't have to show tooltips of the Native platform so we simply render the full display names list.
function DisplayNames({accessibilityLabel, fullTitle, textStyles = [], numberOfLines = 1}: DisplayNamesProps) {

    const displayTitle = (numberOfLines == 1) && StringUtils.escapeSpecialCharWithUnicode(fullTitle) || fullTitle;

    return (
        <Text
            accessibilityLabel={accessibilityLabel}
            style={textStyles}
            numberOfLines={numberOfLines}
        >
            {displayTitle}
        </Text>
    );
}

DisplayNames.displayName = 'DisplayNames';

export default DisplayNames;
