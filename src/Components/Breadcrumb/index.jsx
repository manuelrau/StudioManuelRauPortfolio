import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Crumb, CurrentCrumb, Separator } from './styles.js';

// items: [{ label, to }] - das letzte Element gilt als aktuelle Seite (kein Link, kein Hover)
const Breadcrumb = ({ items }) => {
    if (!Array.isArray(items) || items.length === 0) return null;

    return (
        <Wrapper aria-label="Breadcrumb">
            {items.map((item, index) => {
                const isLast = index === items.length - 1;
                return (
                    <React.Fragment key={`${item.label}-${index}`}>
                        {isLast ? (
                            <CurrentCrumb>{item.label}</CurrentCrumb>
                        ) : (
                            <Crumb as={Link} to={item.to}>{item.label}</Crumb>
                        )}
                        {!isLast && <Separator>/</Separator>}
                    </React.Fragment>
                );
            })}
        </Wrapper>
    );
};

export default Breadcrumb;