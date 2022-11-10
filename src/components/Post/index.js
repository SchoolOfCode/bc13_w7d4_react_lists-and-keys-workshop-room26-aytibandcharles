import React from 'react';
import './index.css';
function Post( props) {
  return <article>
    <h1>{props.title}</h1>
    <date>{props.date}</date>
    <h2>{props.author}</h2>
    <p>{props.text}</p>
    {props.highlights.map((highlight) => <li key={highlight.indexOf()}>highlight</li>)}
    <img src = {props.image.link} alt={props.image.alt}/>
  </article>;
}
export default Post;