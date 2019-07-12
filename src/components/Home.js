import React, {Component} from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import PokeBall from '../pokeball.png'
class Home extends Component {
   
   
    render() {        
         const {Posts} =this.props;         
         const PostList = Posts.length ? (
             Posts.map(post =>{
                 return(
                     <div className="post card" key={post.id}>
                       
                        <div className="card-content">
                         <Link to={'/' + post.id}>                         
                          <div className="card-title red-text">
                          <img src={PokeBall} alt="A Pokeball" width="50" /><b>{post.title}</b>
                          </div>
                            </Link>
                             <p>{post.body}</p>
                          </div>
                    </div>
                                      
                   
                     
                 )
             })
         ):(
             <div className="center">
              <h4>No Posts Yet</h4>
             </div>
         )
         return (
        <div className='container'>            
                {PostList}
        </div>
    )
    }
}
const mapStateToProps =(state)=>{
    return {
        Posts :state.Posts
    }

}


export default connect(mapStateToProps)(Home);