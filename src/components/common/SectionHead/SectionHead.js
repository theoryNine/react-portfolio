import React from 'react';

const h3Styles = {
    textTransform: 'uppercase'
};

export const SectionHead = ({sectionLabel}) => {
    return(
        <h3 style={h3Styles}>{sectionLabel}</h3>
    )
}
