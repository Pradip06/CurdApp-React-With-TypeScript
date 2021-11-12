import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { Table } from 'react-bootstrap'
import NavBarMenu from '../component/NavBar'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from 'react-router-dom'

toast.configure()

type IUserlist={
    id:number,
    name:string,
    email:string,
    address:string,
    rating:number,
}

function HomeList() {
    const [lists, setList] = useState<IUserlist[]>([])

    useEffect(() => {
        loadlists();
    }, []);

    const loadlists = async () => {
        const result = await axios.get("http://localhost:3000/list");
        // console.warn(result);
        setList(result.data);
    }

    const deleteList = async (id: number) => {
        toast.success('Delete Item Success', {position: toast.POSITION.TOP_LEFT});
         fetch("http://localhost:3000/list/"+ id,
            {
                method: "DELETE",
            }).then((result) => {
                result.json().then((resp) => {
                    console.warn(resp)
                    // alert("delete")
                    loadlists();
                })
            })
        
    }

    console.warn(lists);
    return (
        <>
        <NavBarMenu />
            {
                lists ?
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
                                    lists.map((pass, i) =>
                                        <tr>
                                            <td>{i}</td>
                                            <td>{pass.name}</td>
                                            <td>{pass.email}</td>
                                            <td>{pass.address}</td>
                                            <td>{pass.rating}</td>
                                            <td>
                                                
                                                <Link className="btn btn-outline-primary mar-2" to={"/update/" + pass.id}>
                                                    <FontAwesomeIcon icon={faEdit} color='green' />Edit</Link> 
                                                <span className="btn btn-danger" onClick={() => deleteList(pass.id)}>Delete</span>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                    </div> : <p>Please Wait...</p>
            }
        </>
    );
}

export default HomeList;