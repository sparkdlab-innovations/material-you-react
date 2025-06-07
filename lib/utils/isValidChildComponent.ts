import React from 'react';

export default function isValidChildComponent(
  children: React.ReactNode,
  validTypes: unknown[],
): boolean {
  const validateChildren = (child: React.ReactNode) => {
    if (!React.isValidElement(child)) {
      return false;
    }
    return validTypes.some((type) => child.type === type);
  };

  const filteredChildren =
    React.Children.toArray(children).filter(validateChildren);

  return filteredChildren.length === React.Children.toArray(children).length;
}
