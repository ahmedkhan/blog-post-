import React, { Component } from 'react';
import {connect} from 'react-redux'

class Post extends Component {  
  handleClick=()=>{
    this.props.deletePost(this.props.posts.id);
    
  }
  backClick =()=>{
    this.props.history.push('/')
  }
  
    render() {
      
      const posts = this.props.posts ? (
        <div className="post">
        <h4 className="center">{this.props.posts.title}</h4>
        <p>{this.props.posts.body}</p>
        <div>
        <button className='waves-effect waves-light btn left red darken-3' onClick={this.backClick}>Back</button>
        <button className='waves-effect waves-light btn right red darken-3' onClick={this.handleClick}>DeletePost</button>
        </div>
      </div>
      ):(
        <div className='center'>
        <h4>Loading....</h4>
        </div>
      )
      
      
        return ( 
            <div  className='container'>
            {posts}
            </div>
         );
    }
}

const mapStatetoProps =(state,ownprops)=>{   
  let id = ownprops.match.params.Post_id
 
 return {
   posts : state.Posts.find(p => p.id === id)
   
 }
 
}
const mapDispatchtoProps =(dispatch)=>{
  return {
    deletePost : (id)=>{dispatch({type :"DELETE_POST",id:id})}
  }

}
 
export default connect(mapStatetoProps,mapDispatchtoProps)(Post);