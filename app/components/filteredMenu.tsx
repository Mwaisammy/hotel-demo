"use client";

import Image from "next/image";
import React from "react";
import { MenuItem } from "../../typings";

interface FilteredMenuProps {
  menuItems: MenuItem[];
}

const FilteredMenu: React.FC<FilteredMenuProps> = ({ menuItems }) => {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            {item.imageUrl && (
              <div className="h-48 overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <span className="text-orange-500 font-bold">${item.price}</span>
              </div>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-8">
        <div className="flex flex-wrap gap-2"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              {item.imageUrl && (
                <div className="h-48 overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <span className="text-orange-500 font-bold">
                    ${item.price}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilteredMenu;
