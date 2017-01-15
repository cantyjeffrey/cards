import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Card.css';

class Card extends Component {
  render() {
    return (
      <div styleName="Card">
        <div styleName="CardContainer">
          <div styleName="CardBack">
            <span>Back</span>
          </div>
          <div styleName="CardPage">
            <span>Page</span>
          </div>
          <div styleName="CardFront">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 180.1">
              <path fill="#FE0A1C" d="M117.5 61l-7.4 7.1c-2 1.9-4.2 3.7-6.1 5.7-2.2 2.3-2.1 4.2-.3 6.8.7 1 1.6 1.8 2.4 2.7 1.5 1.6 1.2 3.1-1 3.4-2.8.4-5.7.5-8.4.1-4.8-.6-9.1-2.7-12.8-5.8-1.8-1.5-3.2-3.6-4.8-5.5-.1 2.2-.3 4.7-.4 7.2-.1 2.6 0 5.2.1 7.9.1 2.5.3 5.1.5 7.7h-2.8V78.5l-.6-.3c-.6.8-1.2 1.6-1.9 2.3-2.7 2.9-5.9 4.6-9.8 4.9-.5 0-1-.3-1.4-.5.4-.2.8-.7 1.3-.7 3.6-.3 6.5-1.9 9-4.4.9-.9 2.1-1.7 2.8-2.7.7-1.1.9-2.5 1.3-3.8-.1-.1-.3-.2-.4-.3-1 .4-1.9.8-2.9 1.1-4 1.5-7.9 2-12.1.2-1.7-.7-3.9-.3-5.8-.1-1.3.1-2.4.9-3.7 1.3-.4.1-1 0-1.5 0 .3-.4.5-.9.9-1 3.9-2 7.9-2.9 12.1-.9 2.3 1.1 4.7.8 7 .1 1.9-.5 3.8-1.3 5.6-2 .4-.1.7-.6.8-1 .3-1.1.4-2.2.6-3.6-.8.1-1.5.2-2.2.2-2.2.1-4.3.4-6.5.3-3.2-.2-5.4-1.9-6.8-4.7-.7-1.3-1.5-2.6-2.5-3.6-.9-.9-2-1.3-3.1-.1-.2.2-.7.2-1 .4 0-.4-.1-.9.1-1.2.9-1.3 2.7-1.7 4.1-.5 1.3 1.1 2.4 2.4 3.1 3.9 1.5 3.3 4 4.8 7.6 4.7 2.2-.1 4.3-.3 6.5-.6.4-.1.9-.6 1-1 .7-4.4 1.4-8.8 2.1-13.1.5-3.2-.1-6.3-.8-9.5-2.7-11-4.1-22.2-3.3-33.5.1-1.6.5-3.3 1.1-4.8 1.2-3 3.9-4.3 7.1-3.4 1.2.4 2.3.9 3.4 1.5 9.1 5.4 17.6 11.6 24.9 19.3 1.6 1.7 3.4 2.5 5.7 2.4 4.8-.1 9.7-.1 14.5 0 2.3.1 4.1-.8 5.6-2.4 7.2-7.8 15.7-14 24.8-19.4 6.4-3.8 10.5-2 11.4 5.3.6 5 .4 10.1.1 15.2-.4 7.3-1.6 14.5-3.6 21.5-1.2 4.2-.3 8.4.4 12.5.4 2.6.9 5.3 1.2 7.9.1.9.4 1.3 1.3 1.4 2.2.1 4.4.5 6.6.5 3.3 0 5.6-1.5 7-4.5.7-1.5 1.9-3 3.2-4.1 1.4-1.2 3.3-.8 4.2.6.2.3.1.7.1 1-.3-.1-.8 0-1-.3-1.2-1.4-2.4-.9-3.4.2-.9 1-1.6 2.2-2.2 3.4-1.4 2.9-3.7 4.6-6.9 4.8-2.8.1-5.5 0-8.5 0 .1-.3.1-.2.1-.1-.2 3.3 1.5 4.7 4.5 5.6 3.8 1.1 7.3 1.7 11.1 0 3.8-1.6 7.5-.2 10.9 1.7.2.1.3.6.4 1-.4 0-.7.1-1.1 0-1.9-.6-3.8-1.5-5.8-1.9-1.3-.2-2.8-.2-4 .4-4.2 2-8.3 1.3-12.4-.2-.9-.3-1.8-.7-2.7-1.1-.1 2.1-.1 3.9 2 5.1 1.2.8 2.1 2.1 3.2 3 2.1 1.8 4.6 2.8 7.4 3.1.5 0 1 .2 1.5.4v.6c-.5.1-1.1.3-1.6.2-4-.3-7.2-2.1-9.8-4.9-.7-.7-1.2-1.5-1.9-2.2-.2.1-.4.2-.6.2v19.9h-2.6V75.1c-4.7 8.2-12.3 11.1-21 12-1.7.2-3.5-.1-5.2-.6-2-.5-2.3-1.9-.8-3.4 1-1 2-2.1 2.8-3.2 1.5-2.2 1.5-3.8-.3-5.8-1.9-2.1-4-4-6.2-5.9-3-2.6-6.2-4.8-8-8-.6.5-1.2 1.3-1.8 1.4-.8.1-1.8-.3-2.5-.5-1 .8-1.8 1.5-2.9 2.4.6.1.8.2 1 .2 6.5.4 12.4 6.1 12.8 12.6 0 .6-.6 1.2-1 1.8-.4-.5-1-1.1-1-1.6-.1-3.3-1.5-6-3.7-8.4-2.6-2.8-5.8-3.5-9.3-2.6-6.9 1.9-10.5 6.7-10.4 13.9 0 .5-.7 1.1-1 1.7-.3-.5-1-1-1-1.6 0-4.5 1.5-8.6 5.1-11.5 1.9-1.5 4.3-2.5 6.5-3.7.5-.3 1-.6 1.6-1-1.2-.7-2-1.1-2.7-1.6-1.4-.6-3.3 2.5-4.6-.7.1-.3.2-.5.3-.8.2-.2.3-.4.5-.5.1-.1.2-.3.3-.4 2.5-2.4 5.7-2.5 8.9-2.4 1.3 0 2.5.9 3.8 1.4.1.2.3.3.4.5.1 0 .1-.1.2-.1l-.3-.6c-.2-1-.5-2.1-.8-3.1-.1-.4-.5-.7-.7-1-.4-.8-.9-1.6-1-2.5-.1-.9.3-1.9.5-2.8 1.1-4.4.3-8.4-2.5-12-1.2-1.6-2.2-1.7-3.5-.3-2.5 2.9-4.1 6.1-3.4 10.1.2 1.3.5 2.7.8 4 .3 1.4.6 2.8-1.2 3.6-.2.1-.3.5-.4.9-.4 1.4-.8 2.7-1.2 4.1-.1.2-.1.3-.2.5s-.2.4-.4.7c-.4.3-.6.5-.7.7zm52.7-57.7c-1.5-.9-2.6-.8-3.7-.1-1.1.8-2.4 1.7-3.2 2.8-3.9 4.7-7.8 9.4-11.4 14.2-2.2 3-4.6 5.7-8 7.2-.7.3-1.7.4-2.4.3-9.9-1.9-19.9-2.3-29.9-.3-3.8.8-6.5-.5-9-2.8-1.3-1.2-2.3-2.6-3.4-4-3.7-4.6-7.3-9.3-11-13.9-1.1-1.3-2.5-2.3-3.8-3.4-1.2-.9-2.5-.9-3.4-.4 1.5.9 3.3 1.6 4.6 3 3.4 3.6 6.7 7.3 9.7 11.2 3.1 4 5.4 8.7 10.6 11.2-1.3.3-2 .5-2.8.6C96.4 30 92 34 89.2 40c-.6 1.3-1 2.7-1.7 3.9-.7 1.2-1.4 2.5-2.4 3.4-1.9 1.8-2.8 3.9-2.6 7 .2-.5.4-.9.5-1.2.2-.4.3-.8.6-1.2 2.6-4.5 5.9-8 11.7-7.7.8 0 1.7-.1 2.6-.2 2.6-.1 4.9-1.2 6.6-3.1 1.4-1.6 2.8-3.2 4.1-4.8 1.3-1.6 2.9-2.6 4.9-3.2 6-1.9 12.1-2.2 18.2-1.1 4.2.7 8.5 1.2 11.1 5.4 3.3 5.2 7.9 7.6 14.1 7.2 2.6-.1 4.9 1 6.6 3.1 1.7 2.1 3.2 4.3 4.6 6.3.3-2.5-.6-4.4-2.4-6.2-1.1-1-1.9-2.4-2.6-3.7-1.1-2.1-1.9-4.4-3.1-6.4-2.5-4.3-6.2-7.1-11.1-8.1-1.2-.3-2.4-.6-4.1-1 5.1-2.5 7.4-7 10.4-11 2.8-3.8 6-7.3 9.2-10.8 1.4-1.6 3.1-3.1 5.8-3.3zm-54.7 51.5c-2.5-.2-4.8-.4-6.9-.6-1 1.8-1.7 3.6-2.7 5.1-1.7 2.5-4.1 4-7.3 3.4-3.2-.6-4.6-3.1-5.4-6-.3-1-.4-2-.6-3-.7.1-1.3.3-2 .3-1.5 0-1.9.7-1.7 2.1.4 4.7 4.2 9.2 9 10.5 8 2.3 16.2-3.2 17.6-11.8zm19.6 0c1.2 6 4.6 9.9 10.2 11.7 6.8 2.2 14.1-1.6 16.1-8.1 1.2-3.8.9-4.2-2.9-4.7-.1 0-.2.1-.4.2 0 .3 0 .6-.1 1-.4 4.1-2.7 7.2-5.8 7.8-3.1.7-6.3-1.2-8.3-5l-.3-.6-1.2-3c-2.5.3-4.8.5-7.3.7zm-4 5.8c-2-3.4-9.7-2.8-11.9.9 1-.4 1.6-.7 2.4-.9.6-.1 1.4-.1 1.9.2 1.5 1.1 2.3 1.1 3.6-.2.4-.4 1.1-.5 1.7-.5.7.1 1.4.3 2.3.5zm-32-5.1c0-1.3-.8-2.2-2.1-2.2-1.5-.1-2.8 1.1-2.8 2.6 0 1.3.8 2.1 2.1 2.2 1.4.1 2.7-1.2 2.8-2.6zm48.9.5c-1.1-.9-1.9-1.6-2.6-2.3-.4.5-1.2 1-1.3 1.6-.2 1.1 1.1 2.5 2 2.3.6-.2 1-.8 1.9-1.6z"/>
              <path fill="#000000" d="M139 140.1v-17.4c0-.9-.1-1.8-.3-2.7-1-3.9-2.4-4.4-5.2-4.1h-.7c-4.4 0-5.5-1.1-5.3-5.5.1-2.3 1.2-3.5 3.6-3.4 2.3.1 4.5.4 6.8.7 5.4.7 10.8.4 16.2-.4 1.4-.2 2.8-.3 4.3-.2 1.9.1 2.9 1.3 3 3.2.2 4.1-.2 6.2-5.8 5.4-5.6-.8-7.5.9-7.6 6.6-.3 10.9-.5 21.9-.7 32.8 0 2.3.3 4.7.7 6.9.5 2.8 2 4.9 4.5 6.3 6.5 3.7 13.2 4 20 1 4.7-2 6.2-6.1 6.6-10.8.2-2.9.3-5.8.3-8.7 0-9.4-.1-18.8-.2-28.2 0-1.2-.4-2.5-.8-3.6-.8-1.8-2.2-2.7-4.2-2.6-1.4.1-2.8.2-4.3.3-2.2.1-3.7-1.2-3.8-3.4v-1.9c0-2.2 1.1-3.5 3.3-3.5 1.9-.1 3.8.1 5.6.4 6 .9 12 .8 18-.3.2 0 .3-.1.5-.1 5.7-.7 6 2.4 5.3 6.7-.3 1.5-1.8 2-3.2 2.1-1.1.1-2.2 0-3.2.1-1.7.1-3 .9-3.3 2.6-.3 1.7-.6 3.5-.6 5.2-.1 8.1-.1 16.3-.2 24.4 0 3.8-.2 7.6-.3 11.4-.1 8.3-5.1 17.5-17.2 19.8-6 1.1-12 1-17.9-.6-9-2.5-14.2-9.3-14.1-17.6.1-7 0-14 0-21 .1.1.2.1.2.1z"/>
              <path fill="#000000" d="M132.4 140.4c-.1 9.6-1.3 17.8-5.4 25.5-10.2 19-38.4 18.8-48.6 1-2.7-4.7-4.4-9.8-5-15.1-.9-8.2-1.1-16.5 1.2-24.6 2.9-10.3 8.7-18 19.5-20.9 12.1-3.2 25.1-.3 32.4 11.2 3.3 5.1 4.9 10.8 5.5 16.9.2 2.3.3 4.7.4 6zm-9.2 1.6c-.1-4.9-.5-9.6-2.2-14.1-1.8-5.1-4.7-9.3-9.8-11.7-10-4.8-21.2-.7-26.1 9.4-2.3 4.8-3.1 9.9-3.3 15.1-.2 6.4.5 12.8 3.2 18.6 3.2 6.9 8.4 11 16.3 11.3 8 .3 13.7-3.2 17.5-10 3.4-5.8 4.3-12.2 4.4-18.6z"/>
              <path fill="#000000" d="M23.4 115.5c5.4 9.2 10.6 18.1 16 27.2 5.4-9.1 10.7-18 16.3-27.4-2.8.2-5.2.4-7.6.7-1.8.2-3.5.2-4.6-1.4-.9-1.2-1-5.2 0-6.2.8-.8 2-1.4 3.1-1.4 2.5 0 5 .3 7.5.6 5.6.7 11.1.4 16.7-.4 1.3-.2 2.7-.3 4.1-.2 1.8.1 2.8 1.1 3 2.9v.2c.4 4.7-.6 6-5.2 5.4-5.3-.7-8.4 1.2-11 5.9-5.5 9.9-11.6 19.5-17.4 29.3-.5.8-.8 1.8-.7 2.7.1 4.1.1 8.2.4 12.3.3 3.3 2.1 4.6 5.5 4.2 1.3-.2 2.6-.3 3.9-.4 2.2-.2 3.4.9 3.5 3 .3 4.9-1.2 6.5-6.2 5.8-7.9-1.2-15.7-1.2-23.6.1-1.8.3-4.1.4-4.9-1.5-.7-1.7-.5-3.9-.3-5.8.2-1.3 1.6-1.6 2.9-1.6 1.1 0 2.3.2 3.4.3 3.8.5 6.3-1.2 6.5-5.1.3-3.9.1-7.7.1-11.6 0-.5-.3-1-.5-1.4-6.1-10.4-12.3-20.7-18.4-31.1-2-3.4-4.8-4.6-8.5-4.4-1.5.1-3.1 0-4.6-.2-1.8-.3-2.6-1.4-2.7-3.2-.3-5 1-6.3 5.9-5.6 7.4 1.1 14.8 1.3 22.3 0 .5-.1 1-.1 1.5-.1 4.3-.2 5.3.7 5.2 5 0 2.3-1.1 3.4-3.7 3.5-2.5 0-5-.1-7.9-.1z"/>
              <path fill="#000000" d="M26.4 59.8V39.6c0-.8 0-1.6-.1-2.4-.5-4.2-2.7-5.9-6.8-5.4-1.1.1-2.3.4-3.4.3-.9-.1-1.9-.5-2.5-1.1-1.1-.9-1.2-4.8-.5-6.2.7-1.4 2.5-2.1 4.6-1.9 2.5.3 5.1.5 7.6.8 6.2.7 12.4-.1 18.6-.8 1.8-.2 3.7-.2 4.7 1.5 1.1 1.8 1.1 4 .1 5.9-.4.8-1.8 1.4-2.9 1.6-1.2.2-2.5-.2-3.7-.3-3.7-.4-5.9 1.2-6.4 4.9-.2 1.2-.2 2.4-.2 3.6v39.6c0 1.5.1 3 .5 4.4.8 2.8 2.8 4.1 5.7 3.7 1.3-.1 2.6-.3 3.9-.4 2.2-.2 3.5.8 3.7 3 .4 5.1-1.2 6.8-6.3 6-6.2-.9-12.4-1.4-18.7-.7-2 .2-4.1.7-6.1.7-1.5 0-3.1-.4-4.5-1.1-1.2-.6-1.4-4.9-.6-6.5.9-1.8 2.5-1.7 4.2-1.4 1 .2 2 .2 3.1.3 2.9.3 5-1 5.7-3.9.3-1.4.4-2.8.4-4.2 0-6.3-.1-13.1-.1-19.8z"/>
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

export default CSSModules(Card, styles);
