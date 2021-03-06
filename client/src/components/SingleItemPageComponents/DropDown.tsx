import React, { useState } from 'react';

interface Props {
  title: string;
  text: string;
}

export const DropDown: React.FC<Props> = ({ title, text }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="itemDescription">
      <div className="itemDescriptionText">
        <p>{title}</p>
        <svg
          id="line-angle-down"
          xmlns="http://www.w3.org/2000/svg"
          width="29.108"
          height="15.849"
          viewBox="0 0 29.108 15.849"
          onClick={() => setOpen(!open)}
        >
          <path
            id="Path_4"
            data-name="Path 4"
            d="M2.767.459A1.63,1.63,0,1,0,.493,2.8L13.472,15.381l1.137-1.168-1.137,1.173a1.634,1.634,0,0,0,2.31-.036c.019-.019.036-.038.052-.057L28.614,2.8A1.629,1.629,0,1,0,26.342.459L14.6,11.939,2.767.459Z"
            transform="translate(-0.001 0.003)"
          />
        </svg>
      </div>
      {open ? <div className="dropDownText">{text}</div> : null}
    </div>
  );
};
