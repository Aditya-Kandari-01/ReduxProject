# Redux Project

This project is a hands-on implementation of Redux for state management in a React application. It demonstrates how to efficiently manage global state, handle actions, and structure scalable frontend applications.


# ⚙️ Tech Stack:

  . React.js
  
  . Redux / Redux Toolkit
  
  . JavaScript (ES6+)
  
  . HTML5 & CSS3

# 🧠 Concepts :

  .Store – Centralized state container
  
  .Actions – Describe what happens
  
  .Reducers – Handle state updates
  
  .Dispatch – Send actions to reducers
  
  .Selectors – Access state from components

# 🚀 Getting Started :
  1. Clone the repository
     
    git clone https://github.com/Aditya-Kandari-01/ReduxProject.git
    cd ReduxProject

  2. Install dependencies
     
    npm install
    
  3. Run the project
    npm start
    
  4. Set up API Keys
     
    This project requires API keys from the following services:
      Photos → Unsplash
      Videos → Giphy
      GIFs → Pexels
    
    Create an account on each platform
    Generate your API keys
    Create a .env file in the root directory
    
  5. Structure of .env file:
   
    VITE_UNSPLASH_KEY = "keep ur key in brackets"
    
    VITE_GIPHY_KEY = "keep ur key in brackets"
    
    VITE_PEXELS_KEY = "keep ur key in brackets"
    
# 🔄 Redux Flow (How it Works)

  1.User interacts with UI
  
  2.Component dispatches an action
  
  3.Action is sent to reducer
  
  4.Reducer updates the state
  
  5.Updated state is reflected in UI
