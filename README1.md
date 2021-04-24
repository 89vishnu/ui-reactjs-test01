/**How to create an app**/
    1) install node
          a) find version -> node -v
    2) create a folder
    3) sudo npx create-react-app my-app
    4) Read-write access to file -> 
          a) Open terminal one folder before the desired folder
          b) chmod -R 0777 <folder name>
    5) sudo npm install axios      
          
          
/**Change running port no**/      
    1) In package.json    
       "scripts": {
         "start": "PORT=3001 react-scripts start",
    2)      
