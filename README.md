
Here’s a well-structured and organized version of your README.md file for your project:

Peddy - Pet Adoption Platform
Project Description
Peddy is a beautifully designed platform that allows users to adopt pets of various types. By adopting, users not only find a new companion but also contribute to the betterment of the world with a kind deed.

Key Features
View All Pets
Browse through a list of all available pets for adoption.
Filter by Pet Category
Select pets based on specific categories, such as dogs, cats, rabbits, or birds.
View Detailed Information
Explore detailed information about any pet, including vaccination history and other key details.
Like Your Favorite Pets
Mark your favorite pets by liking their posts.
Sort Pets by Price
Easily sort the pets based on their price to find the one that fits your budget.
APIs Available in Peddy
1. Fetch All Pets
Endpoint:

ruby
Copy code
https://openapi.programming-hero.com/api/peddy/pets  
Description:
Retrieve a list of all available pets for adoption, including their names, types, ages, and adoption status.

2. Fetch Pet Details by ID
Endpoint:

ruby
Copy code
https://openapi.programming-hero.com/api/peddy/pet/{pet-id}  
Example:

ruby
Copy code
https://openapi.programming-hero.com/api/peddy/pet/1  
Description:
Fetch detailed information about a specific pet using its ID, such as vaccination history and additional descriptions.

3. Fetch All Pet Categories
Endpoint:

ruby
Copy code
https://openapi.programming-hero.com/api/peddy/categories  
Description:
Get a list of all pet categories available on the platform, such as dogs, cats, rabbits, and birds.

4. Fetch Pets by Category
Endpoint:

ruby
Copy code
https://openapi.programming-hero.com/api/peddy/category/{categoryName}  
Example:

ruby
Copy code
https://openapi.programming-hero.com/api/peddy/category/dog  
Description:
Retrieve data of pets belonging to a specific category (e.g., dogs) to filter and explore pets by their type.

ES6 Features Used in the Project
Arrow Functions
Simplified function syntax for cleaner and more readable code.
Template Literals
Embed dynamic expressions and variables in strings using backticks.
Spread Operator
Efficiently copy or merge arrays and objects.
Default Parameters
Provide default values to function parameters.
Let and Const
Use block-scoped variables and constants for safer and more predictable code.
Promises and .then
Handle asynchronous operations like API calls.
Short-Circuit Evaluation
Simplify conditional logic in expressions.
Live Project