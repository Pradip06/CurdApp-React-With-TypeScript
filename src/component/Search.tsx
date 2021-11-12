import React, { HTMLInputTypeAttribute } from 'react';
import axios from 'axios';
import { Table,Form,Container } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit } from '@fortawesome/free-solid-svg-icons'
import NavBarMenu from '../component/NavBar'


type MainProps ={
   
}

type MainState ={
    searchData:any,
    noData:boolean,
    lastSearch:string
}

class Search extends React.Component<MainProps,MainState>  {
    constructor(props:MainProps) {
        super(props)
        this.state = {
            searchData: null,
            noData: false,
            lastSearch:"",
        }
    }

    search(key:string):void {
        fetch("http://localhost:3000/list?q=" + key).then((data) => {
            data.json().then((resp) => {
                console.warn(resp);
                if (resp.length > 0) {
                    this.setState({ searchData: resp, noData: false })
                } else {
                    this.setState({noData:true, searchData: null })
                }

            })
        })
    }
    delete(id:React.MouseEvent<HTMLButtonElement>):void{
        fetch('http://localhost:3000/list/'+id,
        {
            method: "DELETE",
            // headers:{
            //     'Content-Type':'application/json'
            // },
        }).then((result)=>{
            result.json().then((resp)=>{
                // alert("Restaurant has heen Delete")
                this.search(this.state.lastSearch)
            })
        })

    }


    render() {
        return (
            <>
            <NavBarMenu />
                <h1>List Search</h1>
                <Form.Control type="text" onChange={(e) => this.search(e.target.value)} placeholder="Search List" />
                
                <div>
                {
                    this.state.searchData ?
                    <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Rating</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                     this.state.searchData.map((pass:any ,i:any) =>
                                        <tr>
                                            <td>{i}</td>
                                            <td>{pass.name}</td>
                                            <td>{pass.email}</td>
                                            <td>{pass.address}</td>
                                            <td>{pass.rating}</td>
                                            <td>
                            <Link className="btn btn-primary mar-2" to={`/detail/${pass.id}`}>View</Link>
                            <Link className="btn btn-outline-primary mar-2" to={"/update/" + pass.id}>
                                <FontAwesomeIcon icon={faEdit} color='green' /> </Link>
                            <span className="btn btn-danger" onClick={()=>this.delete(pass.id)}>Delete</span>
                                                    </td>
                                                </tr>
                                            )
                                } 
                        </tbody>
                    </Table>
                    </div>: ""
                }

                {
                    this.state.noData ?<h3>No Data Found</h3>: null
                }
                </div>
            </>
        );    
    }
}
export default Search;