import React from "react";

interface Props {
  title: string;
}

export const Item = ({ title }: Props) => {
  return (
    <div>
      <button
        style={{
          // backgroundColor: '#F5F9FF',
          boxShadow: "0px 2px 16px rgba(0, 35, 82, 0.08)",
        }}
      >
        {title}
      </button>
    </div>
  );
};
