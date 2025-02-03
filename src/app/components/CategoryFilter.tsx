import React from "react";

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  "All",
  "Burger",
  "Chocolate Muffin",
  "Chicken Chup",
  "Pizza",
  "Fresh Lime"
];

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onCategoryChange
}) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3">Category</h3>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category}>
            <label className="flex items-center">
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={() => onCategoryChange(category)}
                className="mr-2"
              />
              {category}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
