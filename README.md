# Q-Commerce Website Project - Food-Tunk

## Project Overview
**Food-Tunk** is a Quick-Commerce (Q-Commerce) platform that offers users an efficient and seamless way to order food and chef services with rapid delivery. The website is designed for a user-friendly experience, focusing on a clean and modern UI/UX for easy navigation and quick access to food items, chef services, and more.

---

## **Day 1 - Laying the Foundation**

### Goal
The goal was to outline the core purpose of the Q-Commerce platform, ensuring that it meets the needs of users by offering fast delivery services.

### What We Did
- Defined the **purpose** of the website to deliver value by meeting immediate delivery demands.
- Designed with a **user-centric approach** for fast access to a variety of food and chef options.

### Website Advantages:
- Comprehensive **food menu** and **chef services**.
- Scalable and adaptable to meet **growing user demands**.
- **Modern UI/UX design** to improve user experience.

---

## **Day 2 - Planning the Technical Foundation**

### Goal
Establish the technical structure, including the selection of tools, technologies, and architectural setup for the platform.

### What We Did
- Designed a **robust architecture** combining **Sanity CMS** as the backend for content management and **Next.js** for frontend development.
- Used **GROQ queries** to fetch data from **Sanity CMS**.

### Technology Stack:
- **Sanity CMS**: For managing content like food items and chef details.
- **Next.js**: Frontend framework for building fast, SEO-optimized applications.
- **GROQ Queries**: For efficient data retrieval from Sanity CMS.

### Requirements Identified:
- Created **schemas** for food and chef data.
- Planned the **API integration strategy** to import and display dynamic data.

---

## **Day 3 - API Integration Report**

### Goal
To integrate APIs and migrate data into Sanity CMS, ensuring a functional marketplace backend while displaying data on the frontend.

### What We Did
- **Data Migration**: Used a custom migration script to fetch data from APIs and import it into Sanity CMS.
- **API Integration**: Integrated APIs for **Food** and **Chef**.
    - Food API: `https://sanity-nextjs-rouge.vercel.app/api/foods`
    - Chef API: `https://sanity-nextjs-rouge.vercel.app/api/chefs`
- Fetched data using **Axios** and displayed it dynamically on the frontend using **GROQ queries**.

### Frontend Integration:
- Displayed imported data (food items and chef details) with images, descriptions, and categories.

---

## **Day 4 - Enhancing Functionality**

### Goal
To implement advanced features that improve user experience and interactivity on the Q-Commerce platform.

### What We Did
- **Dynamic Routing**: Implemented dynamic pages for product details, allowing users to click on items and view their individual pages.
- **Add to Cart Functionality**: Added a button to each product for adding it to the cart. Items in the cart can be adjusted in quantity, and the total price updates dynamically.
- **Checkout Page**: Built a checkout page with basic form validation for user information.
- **Search Bar Functionality**: Integrated a search bar that updates the product list as users type.
- **Price Filtering**: Added a filter to sort products by price range. The list updates dynamically based on the selected range.

### Other Functionalities:
- Ensured responsiveness across devices.
- Used **React Context API** for global state management to handle cart and product data efficiently.

---

## **Day 6 - Deployment Preparation and Staging Environment Setup**

### Objective
Focus on preparing the marketplace application for deployment, setting up a staging environment, configuring hosting platforms, ensuring production-readiness, and following best practices.

### Deployment Strategy Planning
1. **Choose a Hosting Platform**: 
    - **Vercel**: Easy integration with Next.js, automatic deployment from GitHub, scalable for varying traffic.
2. **Finalize Application’s Interaction with Backend Services**:
    - **Sanity CMS**: Ensured content fetching works correctly.
    - **Third-party APIs**: Verified secure API calls and proper handling of sensitive data.

### Environment Variable Configuration:
- **Secure API Keys and Database Credentials**: Stored sensitive data securely using `.env` files.
- **Vercel Configuration**: Set up environment variables in Vercel for secure deployment.

### Staging Environment Setup:
1. **Deploy to Staging**: Pushed the latest code to GitHub, linked the staging branch in Vercel, and triggered automatic deployment.
2. **Validate Deployment**: Verified build success through Vercel logs, tested all pages, features, and backend integrations.

### Troubleshooting:
- Checked build logs and verified environment variable configurations.

### Staging Environment Testing:
1. **Functional Testing**: Used **Cypress** for workflow testing and **Postman** to validate API responses.
2. **Performance Testing**: Analyzed load times and performance using **Lighthouse** and **GTmetrix**.
3. **Verify Responsiveness & Error Handling**: Tested across different screen sizes and ensured proper error handling.

---

## **Test Case Reporting**

| **Test Case ID** | **Description**             | **Steps**                                          | **Expected Result**       | **Actual Result**         | **Status** | **Remarks**           |
|------------------|-----------------------------|----------------------------------------------------|---------------------------|---------------------------|------------|-----------------------|
| TC001            | Validate product listing     | Open product page > Verify products                | Products displayed         | Products displayed         | Passed     | No issues found       |
| TC002            | Test API error handling      | Disconnect API > Refresh page                      | Show fallback message      | Fallback message shown     | Passed     | Handled gracefully     |
| TC003            | Check cart functionality     | Add item to cart > Verify cart                     | Cart updates correctly     | Cart updates correctly     | Passed     | Works as expected      |
| TC004            | Test form validation         | Submit form with empty fields                      | Display error message      | Error message displayed    | Failed     | Missing validation    |
| TC005            | Verify HTTPS connection      | Open site > Check HTTPS status                     | HTTPS enabled              | HTTPS enabled              | Passed     | Secure connection     |

---

## **Conclusion**

Over the past six days, the **Food-Tunk Q-Commerce Website** has been successfully built and deployed to a staging environment. Key achievements include:

- **Backend Integration**: Seamless data management via Sanity CMS.
- **Dynamic Content Rendering**: Efficient data display using GROQ queries.
- **User Experience Enhancements**: Features like dynamic routing, cart management, and real-time search.
- **Testing and Validation**: Comprehensive functional, performance, and security tests to ensure robustness and reliability.

The project is now ready for further enhancements like **user authentication**, **order management**, and **real-time updates**, which will further improve the overall user experience.


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
