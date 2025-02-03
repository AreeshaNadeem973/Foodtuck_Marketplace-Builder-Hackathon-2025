import Image from "next/image";
import Hero from "./Hero";

export default function Menu() {
  return (
    <div className="bg-white text-gray-800">
      <Hero />
      {/* Starter Menu Section */}
      <section className="py-12 px-4 md:px-6 container mx-auto">
        {/* Cup Image on Top */}
        <div className="flex justify-center mb-6">
          <Image
            src="/cup.png"
            alt="Cup Icon"
            width={30} // Adjust width of cup image
            height={30} // Adjust height of cup image
            className="rounded-full relative left-10" // Adjusted class for moving to the right
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image on the Left */}
          <div className="w-full max-w-[250px] mx-auto">
            <Image
              src="/Alder Grid.png"
              alt="Starter Menu"
              width={250}
              height={250}
              className="rounded-lg object-cover w-full h-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            />
          </div>

          {/* Starter Menu Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">
              Starter Menu
            </h2>
            <ul className="space-y-4">
              {[
                {
                  title: "Alder Grilled Chinook Salmon",
                  desc: "Toasted French bread topped with romano, cheddar",
                  calories: "560 CAL",
                  price: "$32",
                },
                {
                  title: "Berries and Creme Tart",
                  desc: "Gorgonzola, ricotta, mozzarella, taleggio",
                  calories: "700 CAL",
                  price: "$43",
                },
                {
                  title: "Tormentoso Bush Pizza Pintoage",
                  desc: "Ground cumin, avocados, peeled and cubed",
                  calories: "1000 CAL",
                  price: "$14",
                },
                {
                  title: "Spicy Vegan Potato Curry",
                  desc: "Spreadable cream cheese, crumbled blue cheese",
                  calories: "560 CAL",
                  price: "$35",
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border-b pb-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <div className="flex-1">
                    <h3 className="font-bold text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                    <span className="text-xs text-gray-400">
                      {item.calories}
                    </span>
                  </div>
                  <span className="font-bold text-orange-500 text-sm">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Main Course Section */}
      <section className="py-12 px-4 md:px-6 container mx-auto">
        {/* Cup Image on Top */}
        <div className="flex justify-start mb-6">
          <Image
            src="/cup.png"
            alt="Cup Icon"
            width={30} // Adjust width of cup image
            height={30} // Adjust height of cup image
            className="rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Main Course Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Main Course</h2>
            <ul className="space-y-4">
              {[
                {
                  title: "Optic Big Breakfast Combo Menu",
                  desc: "Toasted French bread topped with romano, cheddar",
                  calories: "560 CAL",
                  price: "$32",
                },
                {
                  title: "Cashew Chicken with Stir-Fry",
                  desc: "Gorgonzola, ricotta, mozzarella, taleggio",
                  calories: "700 CAL",
                  price: "$43",
                },
                {
                  title: "Vegetables & Green Salad",
                  desc: "Ground cumin, avocados, peeled and cubed",
                  calories: "1000 CAL",
                  price: "$14",
                },
                {
                  title: "Spicy Vegan Potato Curry",
                  desc: "Spreadable cream cheese, crumbled blue cheese",
                  calories: "560 CAL",
                  price: "$35",
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border-b pb-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <div className="flex-1">
                    <h3 className="font-bold text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                    <span className="text-xs text-gray-400">
                      {item.calories}
                    </span>
                  </div>
                  <span className="font-bold text-orange-500 text-sm">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image on the Right */}
          <div className="w-full max-w-[250px] mx-auto">
            <Image
              src="/Burger1.png"
              alt="Main Course"
              width={250}
              height={250}
              className="rounded-lg object-cover w-full h-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section
        className="py-12 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/bg1.png')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative container mx-auto text-center text-white">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              {
                number: "420",
                label: "Professional Chefs",
                icon: "/image9.png",
              },
              {
                number: "320",
                label: "Items Of Food",
                icon: "/image8.png",
              },
              {
                number: "30+",
                label: "Years Of Experience",
                icon: "/image7.png",
              },
              {
                number: "220",
                label: "Happy Customers",
                icon: "/image6.png",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                {/* Icon Image */}
                <div className="flex justify-center mb-4">
                  <Image
                    src={stat.icon}
                    alt={stat.label}
                    width={60}
                    height={60}
                  />
                </div>
                {/* Stat Number */}
                <h2 className="text-4xl font-bold text-orange-500">
                  {stat.number}
                </h2>
                {/* Stat Label */}
                <p className="text-md mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dessert Section */}
      <section className="py-12 px-4 md:px-6 container mx-auto">
        {/* Cup Image on Top */}
        <div className="flex justify-center mb-6">
          <Image
            src="/cup.png"
            alt="Cup Icon"
            width={30} // Adjust width of cup image
            height={30} // Adjust height of cup image
            className="rounded-full relative left-10" // Adjusted class for moving to the right
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image on the Left */}
          <div className="w-full max-w-[250px] mx-auto">
            <Image
              src="/cupcake.png"
              alt="Dessert"
              width={250}
              height={250}
              className="rounded-lg object-cover w-full h-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            />
          </div>

          {/* Dessert Menu Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">
              Dessert
            </h2>
            <ul className="space-y-4">
              {[
                {
                  title: "Fig and lemon cake",
                  desc: "Toasted French bread topped with romano, cheddar",
                  calories: "560 CAL",
                  price: "$32",
                },
                {
                  title: "Creamy mascarpone cake",
                  desc: "Gorgonzola, ricotta, mozzarella, taleggio",
                  calories: "700 CAL",
                  price: "$43",
                },
                {
                  title: "Pastry, blueberries, lemon juice",
                  desc: "Ground cumin, avocados, peeled and cubed",
                  calories: "1000 CAL",
                  price: "$14",
                },
                {
                  title: "Pain au chocolat",
                  desc: "Spreadable cream cheese, crumbled blue cheese",
                  calories: "560 CAL",
                  price: "$35",
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border-b pb-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <div className="flex-1">
                    <h3 className="font-bold text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                    <span className="text-xs text-gray-400">
                      {item.calories}
                    </span>
                  </div>
                  <span className="font-bold text-orange-500 text-sm">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Drinks Section */}
      <section className="py-12 px-4 md:px-6 container mx-auto">
        {/* Cup Image on Top */}
        <div className="flex justify-start mb-6">
          <Image
            src="/cup.png"
            alt="Cup Icon"
            width={30} // Adjust width of cup image
            height={30} // Adjust height of cup image
            className="rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Drinks Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Drinks</h2>
            <ul className="space-y-4">
              {[
                {
                  title: "Caffè macchiato",
                  desc: "Toasted French bread topped with romano, cheddar",
                  calories: "560 CAL",
                  price: "$32",
                },
                {
                  title: "Aperol Spritz Capacianno",
                  desc: "Gorgonzola, ricotta, mozzarella, taleggio",
                  calories: "700 CAL",
                  price: "$43",
                },
                {
                  title: "Caffe Latte Campuri",
                  desc: "Ground cumin, avocados, peeled and cubed",
                  calories: "1000 CAL",
                  price: "$14",
                },
                {
                  title: "Tormentoso BushTea Pintoage",
                  desc: "Spreadable cream cheese, crumbled blue cheese",
                  calories: "560 CAL",
                  price: "$35",
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border-b pb-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <div className="flex-1">
                    <h3 className="font-bold text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                    <span className="text-xs text-gray-400">
                      {item.calories}
                    </span>
                  </div>
                  <span className="font-bold text-orange-500 text-sm">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image on the Right */}
          <div className="w-full max-w-[250px] mx-auto">
            <Image
              src="/drinky.png"
              alt="Drinks"
              width={250}
              height={250}
              className="rounded-lg object-cover w-full h-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            />
          </div>
        </div>
      </section>

   
      {/* Partner Logos Section */}
      <div className="bg-gray-50 py-12">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h3 className="text-lg text-gray-600">Partners & Clients</h3>
          <h1 className="text-3xl font-bold text-gray-800">We work with the best people</h1>
        </div>

        {/* Logos Section */}
        <div className="flex justify-center items-center flex-wrap gap-8">
          {[
            { id: 1, name: "Restaurant", logo: "/Dish1.png" },
            { id: 2, name: "Bakery", logo: "/Bakery.png" },
            { id: 3, name: "Fork & Spoon", logo: "/Fork.png" },
            { id: 4, name: "Wolf Coffee", logo: "/WolfCoffee.png" },
            { id: 5, name: "Bistro", logo: "/Bistro.png" },
            { id: 6, name: "Cupcake", logo: "/Bakery1.png" },
          ].map((partner) => (
            <div
              key={partner.id}
              className="flex flex-col items-center space-y-2 transition-all duration-300 transform hover:scale-105"
            >
              {/* Logo Image */}
              <Image
                src={partner.logo}
                alt={`${partner.name} Logo`}
                width={100}
                height={100}
              />
              {/* Text */}
              <p className="text-sm text-gray-500">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}





























// import Link from "next/link";
// import Image from "next/image";

// import { Award, Calendar, Pizza, Users,Search , ShoppingBag } from "lucide-react";


// export default function Menu() {
//   const menuSections = [
//       {
//         title: "Starter Menu",
//         image: "/starter.png",
//         items: [
//           {
//             name: "Alder Grilled Chinook Salmon",
//             description: "Toasted French bread topped with romesco, cheddar",
//             calories: "560 Cal.",
//             price: "$32",
//           },
//           {
//             name: "Berries and creme tart",
//             description: "Gorgonzola, ricotta, mozzarella, brioche",
//             calories: "760 Cal.",
//             price: "$43",
//           },
//           {
//             name: "Tormentoso Bush Pizza Pintoage",
//             description: "Ground lamb, avocados, roasted red salad",
//             calories: "1020 Cal.",
//             price: "$14",
//           },
//           {
//             name: "Spicy Vegan Potato Curry",
//             description: "Spectacular cream cheese, crumbled blue cheese",
//             calories: "560 Cal.",
//             price: "$35",
//           },
//         ],
//       },
//       {
//         title: "Main Course",
//         image: "/maincourse.png",
//         items: [
//           {
//             name: "Optic Big Breakfast Combo Menu",
//             description: "Toasted French bread topped with romesco, cheddar",
//             calories: "960 Cal.",
//             price: "$32",
//           },
//           {
//             name: "Cashew Chicken With Stir-Fry",
//             description: "Gorgonzola, ricotta, mozzarella, brioche",
//             calories: "700 Cal.",
//             price: "$43",
//           },
//           {
//             name: "Vegetables & Green Salad",
//             description: "Ground lamb, avocados, roasted red salad",
//             calories: "1050 Cal.",
//             price: "$14",
//           },
//           {
//             name: "Spicy Vegan Potato Curry",
//             description: "Spectacular cream cheese, crumbled blue cheese",
//             calories: "460 Cal.",
//             price: "$35",
//           },
//         ],
//       },
//       {
//         title: "Dessert",
//         image: "/desert.png",
//         items: [
//           {
//             name: "Fig and lemon cake",
//             description: "Toasted French bread topped with romesco, cheddar",
//             calories: "560 Cal.",
//             price: "$32",
//           },
//           {
//             name: "Creamy mascarpone cake",
//             description: "Gorgonzola, ricotta, mozzarella, brioche",
//             calories: "700 Cal.",
//             price: "$43",
//           },
//           {
//             name: "Pastry, blueberries, lemon juice",
//             description: "Ground lamb, avocados, roasted and salad",
//             calories: "1000 Cal.",
//             price: "$14",
//           },
//           {
//             name: "Pain au chocolat",
//             description: "Spectacular cream cheese, crumbled blue cheese",
//             calories: "560 Cal.",
//             price: "$35",
//           },
//         ],
//       },
//       {
//         title: "Drinks",
//         image: "/drink.png",
//         items: [
//           {
//             name: "Caffé macchiato",
//             description: "Toasted French bread topped with syrups, cheddar",
//             calories: "560 Cal.",
//             price: "$32",
//           },
//           {
//             name: "Aperol Spritz Capacianno",
//             description: "Gorgonzola, ricotta, mozzarella, brioche",
//             calories: "700 Cal.",
//             price: "$43",
//           },
//           {
//             name: "Caffe Latte Campuri",
//             description: "Ground lamb, avocados, roasted and salad",
//             calories: "1000 Cal.",
//             price: "$14",
//           },
//           {
//             name: "Tormentoso BushTea Pintoage",
//             description: "Spectacular cream cheese, crumbled blue cheese",
//             calories: "560 Cal.",
//             price: "$35",
//           },
//         ],
//       },
//     ]
  
//     const stats = [
//       {
//         icon: <Award className="h-6 w-6" />,
//         value: "420",
//         label: "Restaurant rating",
//       },
//       {
//         icon: <Calendar className="h-6 w-6" />,
//         value: "320",
//         label: "Years of Food",
//       },
//       {
//         icon: <Pizza className="h-6 w-6" />,
//         value: "30+",
//         label: "Years of Experience",
//       },
//       {
//         icon: <Users className="h-6 w-6" />,
//         value: "220",
//         label: "Happy Customers",
//       },
//     ]




// return (
  
  
//   <div className='min-h-screen'>
      

//     {/* Hero Section */}
//     <div
//   className="relative h-[300px] w-full bg-cover bg-center"
//   style={{ backgroundImage: "url('/hero.png')" }}
// >
//   <div className="absolute inset-0 bg-black/50" />
//   <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
//     <h1 className="mb-4 text-5xl font-bold text-white">Our Menu</h1>
//     <div className="flex items-center gap-2 text-lg">
//       <Link href="/" className="text-white hover:text-orange-500">
//         Home
//       </Link>
//       <span className="text-white">&gt;</span>
//       <span className="text-orange-500">Menu</span>
//     </div>
//   </div>
// </div>

 



// {/* card */}
// <div className="container mx-auto px-4 py-8">
//     {menuSections.map((section, index) => (
//       <div key={index} className="mb-16">
//         <div className={`grid md:grid-cols-2 gap-8 items-start ${index % 2 === 0 ? '' : 'md:grid-flow-col-dense'}`}>
//           {index % 2 === 0 ? (
//             <>
//               <div className="relative h-[400px] rounded-lg overflow-hidden mx-auto">
//                 <Image
//                   src={section.image}
//                   alt={section.title}
//                   width={300}
//                   height={300}
//                   className='object-cover'
                  
//                 />
//               </div>
//               <div className="space-y-6 mx-auto">
//                 <h2 className="text-2xl font-bold">{section.title}</h2>
//                 <div className="space-y-4">
//                   {section.items.map((item, itemIndex) => (
//                     <div
//                       key={itemIndex}
//                       className="flex justify-between items-start border-b border-gray-200 pb-4"
//                     >
//                       <div className="space-y-1">
//                         <h3 className="font-medium">{item.name}</h3>
//                         <p className="text-sm text-muted-foreground">
//                           {item.description}
//                         </p>
//                         <p className="text-xs text-muted-foreground">
//                           {item.calories}
//                         </p>
//                       </div>
//                       <div className="text-orange-400 font-medium">{item.price}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </>
//           ) : (
//             <>
//               <div className="space-y-6 mx-auto">
//                 <h2 className="text-2xl font-bold">{section.title}</h2>
//                 <div className="space-y-4">
//                   {section.items.map((item, itemIndex) => (
//                     <div
//                       key={itemIndex}
//                       className="flex justify-between items-start border-b border-gray-200 pb-4"
//                     >
//                       <div className="space-y-1">
//                         <h3 className="font-medium">{item.name}</h3>
//                         <p className="text-sm text-muted-foreground">
//                           {item.description}
//                         </p>
//                         <p className="text-xs text-muted-foreground">
//                           {item.calories}
//                         </p>
//                       </div>
//                       <div className="text-orange-400 font-medium">{item.price}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div className="relative h-[300px] rounded-lg overflow-hidden mx-auto">
//                 <Image
//                   src={section.image}
//                   alt={section.title}
//                   width={300}
//                   height={300}
//                   className="object-cover"
//                 />
//               </div>
//             </>
//           )}
//         </div>

//         {/* Stats Section */}
//         {index === 1 && (
//           <div className="bg-black text-white py-8 px-4 rounded-lg my-16">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//               {stats.map((stat, statIndex) => (
//                 <div
//                   key={statIndex}
//                   className="flex flex-col items-center text-center space-y-2"
//                 >
//                   {stat.icon}
//                   <span className="text-2xl font-bold">{stat.value}</span>
//                   <span className="text-sm text-gray-400">{stat.label}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     ))}
//   </div>

//   <div>
//       <Image
//       src="/menuclient.png"
//       alt='menu-5'
//       height={1000}
//       width={1000}
//       className=' mx-auto mb-14'
//       />
//   </div>

//     </div>

// )
//  
// }
