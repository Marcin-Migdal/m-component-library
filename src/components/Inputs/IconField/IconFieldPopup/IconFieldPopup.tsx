import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import { fontAwesomeIconsList, Icon } from "../../ImageField/fontawesome-icons-list";
import { Textfield } from "../../Textfield";

import "./IconFieldPopup.css";

type IconFieldPopupContentProps = {
  value?: IconName;
  onChange: (icon: string) => void;
};

export const IconFieldPopupContent = ({ onChange }: IconFieldPopupContentProps) => {
  const [icons, setIcons] = useState(fontAwesomeIconsList);

  const filterIcons = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (value.trim().length === 0) {
      setIcons(fontAwesomeIconsList);
    }

    const filteredIcons = fontAwesomeIconsList.filter((icon) => icon.label.toLowerCase().includes(value));
    setIcons(filteredIcons);
  };

  const handleIconChange = (icon: Icon) => {
    onChange(icon.value as string);
  };

  return (
    <div className="m-icon-field-popup-content">
      <Textfield placeholder="Filter icon" onDebounce={filterIcons} />
      <div className="m-icon-grid-container m-scroll slim-scroll">
        {icons.map((icon) => (
          <div className="m-icon-tile" onClick={() => handleIconChange(icon)}>
            <div className="m-icon-container">
              <FontAwesomeIcon className="m-icon" icon={icon.value} />
            </div>
            <span className="m-icon-name">{icon.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
