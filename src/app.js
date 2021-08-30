import React,{Component} from 'react';
import './app.css';
import { CardLists } from './components/card-list/card-lists.component';
import { SearchField } from './components/searchField/input.component';
import axios from 'axios';

export class Run extends Component{
    constructor(){
        super()
        this.state = {
            characters:[],
            searchField:''
        }
    }

    componentDidMount(){
        let res = axios.get(`http://hp-api.herokuapp.com/api/characters`);
        res.then((response) => {
            this.setState({characters:response.data})
        })
    }

    eventHandler = (event) => {
        this.setState({searchField:event.target.value})
        }

    render(){
        const {characters,searchField} = this.state;
        const filterTheCharacter = characters.filter((character) => {
            return character.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return(
            <div className = 'characters'>
                <h1>Harry Potter</h1>
                <SearchField placeholder = 'search Character' eventHandler =  {this.eventHandler} />
                <CardLists characters = {filterTheCharacter}></CardLists>
            </div>
        )
    }
}