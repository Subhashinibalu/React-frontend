import React, { Component } from 'react';

export  class APIManager extends Component{
    constructor() {
         super();
        this.testConnectionResult;
        
      this.testConnection = this.testConnection.bind(this);
    }

     testConnection() {
      fetch(`process.env.link/api/home/`)
       .then(response => response.json())
       .then(result => this.setState({testConnectionResult: result}));
        //.catch((error) => console.error(error));
       console.log("Data:" + this.testConnectionResult);

      return this.testConnectionResult;
    }
}
