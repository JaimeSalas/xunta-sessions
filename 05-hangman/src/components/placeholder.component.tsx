import React from "react";

interface Props {
  letter: string;
  show: boolean;
}

export const PlaceholderComponent: React.FC<Props> = (props: Props) => {
  return (
    <div style={{ width: "16px", height: '16px', borderBottom: "solid 3px black" }}>
      {props.show && <span>{props.letter}</span>}
    </div>
  );
};
