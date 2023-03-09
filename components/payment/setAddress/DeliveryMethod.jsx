import React from "react";

export default function DeliveryMethod() {
  return (
    <div className="bg-white my-2 lg:my-3 px-5 lg:px-12 py-4 lg:py-8 rounded-[15px] lg:rounded-[25px]">
      <p>
        <bdi>روش ارسال:</bdi>
      </p>
      <div className="grid grid-cols-2 ">
        {delieverMethod.map((item, index) => (
          <div key={index} className="flex items-center">
            <input
              id={`kind${index}`}
              type="checkbox"
              className="h-4 w-4 text-primary border-primary focus:ring-transparent rounded-[4px]"
            />
            <label htmlFor={`kind${index}`} className="mr-2">
              {item.title}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
