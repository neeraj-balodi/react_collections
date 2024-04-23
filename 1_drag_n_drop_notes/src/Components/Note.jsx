import { forwardRef } from "react";

const Note = forwardRef(({ content, initialPosition, ...props }, ref) => {
  return (
    <div
      ref={ref}
      style={{
        left: `${initialPosition?.x}px`,
        top: `${initialPosition?.y}px`,
      }}
      className={`absolute cursor-move bg-gray-200 p-4 rounded-md`}>
      <p className=" text-gray-800 select-none  " {...props}>
        📌 {content}
      </p>
    </div>
  );
});

export default Note;
