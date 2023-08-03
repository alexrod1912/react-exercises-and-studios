import styles from './Description.module.css';
import React from 'react';

 function RecipeAuthor(){
    let authorLink = "https://pinchofyum.com/grilled-chicken-with-pepperoncini-garlic-butter"
    let authorPhoto ="https://pinchofyum.com/wp-content/assets/images/sidebar/sidebar-lindsay.jpg"
    let authorName = "Lindsay"

    return (
   <div className = {styles.recipeAuthorBlock}>
      <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
      <div>
         <h3>{authorName}</h3>
         <a href={authorLink}>Blog name</a> 
      </div>
   </div>
);
}

class RecipeDescription extends React.Component{
    render(){
        return (
            <div> 
      <div>
         <h1>Recipe Title</h1>
         <p>Short recipe description</p>
      </div>
      <RecipeAuthor />
   </div>
        )
    }
        
}

export default RecipeDescription;