"use client";

import { Button } from "@styles/components/ui/button";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { MenuCategory, MenuSection } from "../../typings";
import { categories } from "../../constants";
import FilteredMenu from "@styles/components/filteredMenu";
const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory | string>(
    "starters"
  );

  const menuSections: MenuSection[] = [
    {
      category: "starters",
      items: [
        {
          name: "Pan-Seared Foie Gras",
          description: "With fig compote and brioche",
          price: "32",
          imageUrl: "/hotel-banner-1.jpg",
        },
        {
          name: "Oysters Rockefeller",
          description: "Half dozen with spinach and hollandaise",
          price: "28",
          imageUrl: "/hotel-banner-2.jpg",
        },
        {
          name: "Truffle Risotto",
          description: "Aged parmesan, wild mushrooms",
          price: "24",
          imageUrl: "/hotel-banner-2.jpg",
        },
      ],
    },
    {
      category: "mains",
      items: [
        {
          name: "Wagyu Beef Tenderloin",
          description: "With pomme purée and red wine jus",
          price: "65",
          imageUrl: "/photo.jpg",
        },
        {
          name: "Dover Sole Meunière",
          description: "Lemon butter sauce, capers",
          price: "58",
          imageUrl: "/hotel1.jpg",
        },
        {
          name: "Rack of Lamb",
          description: "Herb-crusted, seasonal vegetables",
          price: "52",
          imageUrl: "/photo.jpg",
        },
      ],
    },
    {
      category: "desserts",
      items: [
        {
          name: "Crème Brûlée",
          description: "Madagascar vanilla, fresh berries",
          price: "16",
          imageUrl: "/hotel-banner-2.jpg",
        },

        {
          name: "Chocolate Soufflé",
          description: "Grand Marnier, crème anglaise",
          price: "18",
          imageUrl: "/hotel-banner-2.jpg",
        },
        {
          name: "Cheese Selection",
          description: "Artisanal cheeses, honey, nuts",
          price: "22",
          imageUrl: "/hotel-banner-1.jpg",
        },
      ],
    },
  ];

  // active menu items

  const activeMenuItems =
    menuSections.find((section) => section.category === activeCategory)
      ?.items || [];

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-center mb-8">Our Menu</h1>
        <Button className="" variant={"outline"}>
          <Link href={"/"}>
            <ChevronLeft className="size-7" />
          </Link>
        </Button>
        <p className="text-gray-600 text-center max-w-2xl mx-auto">
          Indulge in our exquisite selection of dishes crafted with the finest
          ingredients and prepared by our award-winning chefs.
        </p>
      </div>

      <div className="space-x-3 ">
        {categories.map((category: MenuCategory | string) => (
          <Button
            key={category}
            onClick={() => {
              console.log("Clicked category:", category);
              setActiveCategory(category);
            }}
            variant={activeCategory === category ? "default" : "outline"}
            className={
              activeCategory === category
                ? "bg-orange-500 capitalize"
                : "capitalize"
            }
          >
            {category}
          </Button>
        ))}
      </div>

      <FilteredMenu menuItems={activeMenuItems} />
    </div>
  );
};

export default Menu;
