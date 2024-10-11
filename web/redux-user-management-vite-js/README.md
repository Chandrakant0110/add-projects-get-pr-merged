# How to run this code
1) npm install
2) npm run dev

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

This application using vite + react for development
- the features included create, read, delete, update data
- this application fetch data user from https://jsonplaceholder.typicode.com/users with limit 10 user
- this application using redux toolkit for state management
- every user that add new user can automaticly insert profile picture random from https://picsum.photos
- 

for unit testing using vitest
1) npx vitest --run test/sample.test.ts
List Testing:
1. rendering component on App.jsx
2. rendering component on UserList.jsx
3. returning initial state in slicer
4. returning 10 data user in UserList.jsx

