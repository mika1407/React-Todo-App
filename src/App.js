import React, { Component } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import TodoItem from "./components/TodoItem";
import ContactCard from "./components/ContactCard";
import jokesData from "./jokesData";
import Joke from "./components/Joke";
import todosData from "./components/todosData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      answer: "Answer: Yes it is!",
      todos: todosData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      });
      console.log(prevState.todos);
      console.log(updatedTodos);
      return {
        todos: updatedTodos
      };
    });
  }
  render() {
    // function App() {
    const jokeComponents = jokesData.map(joke => (
      <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
    ));
    const TodoItems = this.state.todos.map(item => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));

    return (
      <div className="App">
        <Header />
        <MainContent />
        <div className="todo-list">{TodoItems}</div>
        <div>
          <h1>Is state importat to know? {this.state.answer}</h1>
        </div>
        <div>{jokeComponents}</div>
        <div className="contacts">
          <ContactCard
            contact={{
              name: "Mr. Whiskerson",
              imgUrl: "http://placekitten.com/300/200",
              phone: "(212) 555-1234",
              email: "mr.whiskaz@catnap.meow"
            }}
          />

          <ContactCard
            contact={{
              name: "Fluffykins",
              imgUrl: "http://placekitten.com/400/200",
              phone: "(212) 555-2345",
              email: "fluff@me.com"
            }}
          />

          <ContactCard
            contact={{
              name: "Destroyer",
              imgUrl: "http://placekitten.com/400/300",
              phone: "(212) 555-3456",
              email: "ofworlds@yahoo.com"
            }}
          />

          <ContactCard
            contact={{
              name: "Felix",
              imgUrl: "http://placekitten.com/300/100",
              phone: "(212) 555-4567",
              email: "thecat@hotmail.com"
            }}
          />

          <ContactCard
            contact={{
              name: "Kisu",
              imgUrl: "http://placekitten.com/300/300",
              email: "VainSähköpostilla@yhteyttä.com"
            }}
          />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
