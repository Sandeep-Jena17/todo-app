import React from 'react';
import './App.css';
import ListItem from '../../Container/ListItem/listItem';
import {library} from '@fortawesome/fontawesome-svg-core';
import{faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

class App extends  React.Component{
    state={
        items:[],
        currentItem:{
            text:'',
            key:''
        }
    }

    addItem=(e)=>{
        e.preventDefault();
       const newItem=this.state.currentItem;
       if(newItem.text!==''){
         const items=[...this.state.items,newItem]
         console.log(items);
         this.setState({
            items:items,
            currentItem:{
                text:'',
                key:''
            }
        })
     
       }
     
    }
     
    inputChangeHandler=(e)=>{
    console.log(e.target.value);
     let newText=e.target.value;
     this.setState({
       currentItem:{
           text:newText,
           key:Date.now()
       }  
     })
    };

    setUpdate=(text,key)=>{
        const items=this.state.items;
        items.map(item =>  
         { 
            if(item.key===key){
            item.text=text;
        }
    })
        this.setState({
            items:items
        })

    }

    deleteItemHandler=(key)=>{
        const item=this.state.items;
        console.log(item);
     const filteredItem= this.state.items.filter(item=>item.key!==key)
     console.log(filteredItem);
     this.setState({
         items:filteredItem
     })
    }
     
 render(){
     return(
         <React.Fragment >
             <div className='App'>
             <form className='to-do-form' onSubmit={this.addItem}>
              <input type='text' placeholder='Enter your Task' value={this.state.currentItem.text} onChange={this.inputChangeHandler} ></input>
              <button >Add</button>
             </form>
             <ListItem  items={this.state.items} 
             deleteItem={this.deleteItemHandler}
             setUpdate={this.setUpdate}/>
             </div>,
             
              
         </React.Fragment>
     )
 }

}
export default App;