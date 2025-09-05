import React from "react";
import DocumentIcon from "./DocumentIcon";


export default function Marquee({ items }: { items: string[]}) {
  return (
    <div className=" relative flex w-full overflow-x-hidden bg-secondary-background text-foreground font-base">
      <div
        className={`${
          "animate-marquee"
        } whitespace-nowrap py-4`}
      >
        {items.map((item, index) => {
          return (
            <div className="inline-flex items-center" key={`${item}-${index}`}>
              <span className="px-2 py-1  mx-4 text-4xl font-bold italic rounded-lg">
                {item}
              </span>
              
            </div>
          )
        })}
      </div>

      <div
        className={`absolute top-0 ${
         "animate-marquee2" 
        } whitespace-nowrap py-4`}
      >
        {items.map((item, index) => {
          return (
            <div className="inline-flex items-center" key={`${item}-${index}-2`}>
              <span className="px-2 py-1 mx-4 text-4xl font-bold italic rounded-lg">
                {item}
              </span>
             
            </div>
          )
        })}
      </div>
    </div>
  )
}