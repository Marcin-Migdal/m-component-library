import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { useState } from "react";

import { fontAwesomeIconsList, Icon } from "../../ImageField/fontawesome-icons-list";
import { Textfield } from "../../Textfield";

import "./IconFieldPopup.scss";

type IconFieldPopupContentProps = {
  value: IconName | null;
  onChange: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, icon: string) => void;
  autoFocusPopupInput: boolean;
};

export const IconFieldPopupContent = ({ value, onChange, autoFocusPopupInput }: IconFieldPopupContentProps) => {
  const [icons, setIcons] = useState(fontAwesomeIconsList);

  const filterIcons = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: filterValue } = event.target;

    if (filterValue.trim().length === 0) {
      setIcons(fontAwesomeIconsList);
    }

    const filteredIcons = fontAwesomeIconsList.filter((icon) => icon.label.toLowerCase().includes(filterValue));
    setIcons(filteredIcons);
  };

  const handleIconChange = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, icon: Icon) => {
    onChange(event, icon.value as string);
  };

  return (
    <div className="m-icon-field-popup-content">
      <Textfield autoFocus={autoFocusPopupInput} placeholder="Filter icon" onDebounce={filterIcons} />
      <div className="m-icon-grid-container m-scroll slim-scroll">
        {icons.map((icon) => (
          <div
            key={icon.value}
            className={classNames("m-icon-tile", { selected: icon.value === value })}
            onClick={(event) => handleIconChange(event, icon)}
          >
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
