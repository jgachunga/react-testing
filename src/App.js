import Header from "./components/header";
import './app.scss';
import Headline from "./components/headline";
import SharedButton from "./components/button";
import ListItem from "./components/listItem";
import { connect } from 'react-redux';
import { fetchPosts } from "./actions";
import React, {Component} from 'react'


const tempArr = [{
  fName : 'Joe',
  lName : 'Rogan',
  email : 'joe#rogan.com',
  age : 24,
  onlineStatus : true,
}];

class App extends Component {
  constructor(props){
    super(props)
    this.fetch = this.fetch.bind(this)
  }
  fetch() {
    this.props.fetchPosts();
  }

  render(){
    const {posts} = this.props;

    const configButton = {
      buttonText: 'Get Posts',
      emitEvent:this.fetch
    }
    return (
      <div className="App">
        <Header/>
        <section className="main">
          <Headline header="Posts" desc="Click the button to render posts" tempArr={tempArr}/>
          <SharedButton {...configButton}/>
          {posts.length > 0 &&
          <div>
            {posts.map((post, index) => {
              const {title, body} = post;
              const configListItem = {
                title,
                desc: body 
              };
              return (
                <ListItem {...configListItem} key={index}/>
              )
            })}
          </div>}
        </section>
      </div>  
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, {fetchPosts})(App);
