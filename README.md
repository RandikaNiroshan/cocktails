<h1 align="center">React.js Cocktails App</h1>

### A fully responsive Single Page Application created using React JS, Redux, Redux Async Thunk, React Router, Tailwind and Framer Motion. 

![Cocktails App](https://i.imgur.com/fmdlxd8.jpg "Device Preview of Cocktails App")

[![](https://i.imgur.com/NyD504y.png)](https://cocktails-lk.netlify.app/)

### Tools & Skills
![Tools and Skills](https://skillicons.dev/icons?i=js,react,redux,tailwind,netlify)

### Features
- Responsive Design.
- Featured and Popular cocktails (Featured cocktails are random).
- Filter cocktails by Alcoholic type, Category and Glass type.
- Persistent Favorite list. Saved on browser local storage.
- Search or get cocktails by the first letter.
- Ingredients, Instructions and Video guide on the cocktail details page.
- Skip the video option to skip not relevant videos.
- Get cocktails by Ingredient.

### About "Cocktails App"
- Single Page Application created using React.js
- App state managed using Redux and Redux Tool Kit.
- Handle API requests using Redux Async Thunk and Axios.
- Store locally and managed the Favorite cocktails list using Redux Persist.
- Lazy load images and Paginated results.
- Designed and animated using Tailwind and Framer-Motion.

### Credits
- CocktailsDB API from [TheCocktailsDB](https://www.thecocktaildb.com "TheCocktailsDB")
- Cocktail Quotes from [CLIQUE](https://cliquelv.com/clique-bar-lounge-20-incredible-quotes-cocktails "CLIQUE")
- Youtube search - [Youtube Data API](https://developers.google.com/youtube/v3 "Youtube Data API")

### Build & Run
- Need an API Key from  [Youtube Data API](https://developers.google.com/youtube/v3 "Youtube Data API") to work **Video Guide** section in Cocktail details page.
- Then create **.env** file and put `REACT_APP_YOUTUBE_API_KEY={Youtube API Key}`
- Run `npm i && npm start`
- App should now be running on `http://localhost:3000/`