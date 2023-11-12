import React from "react";

interface ApiDescriptionProps {
  description: string;
}

const ApiDescriptionComponent: React.FC<ApiDescriptionProps> = ({
  description,
}) => {
  const createMarkup = () => {
    return { __html: description };
  };

  return <div dangerouslySetInnerHTML={createMarkup()} />;
};

export default ApiDescriptionComponent;
