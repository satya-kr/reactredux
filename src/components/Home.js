import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export const Home = () => {


    const addNewTeam = () => {
        
    }

    const [title, setTitle] = useState('');
    const [editMode, seteditMode] = useState(false);

    const handleSubmit = event => {}


    return (
        <div className="wrapper">
            <div style={{
                padding: "20px"
            }}>
                <ul style={{display:"inline"}}>
                    <li className='nav-item'><Link to="/">Home</Link></li>
                    <li className='nav-item'>|</li>
                    <li className='nav-item'><Link to="/team">Service Team</Link></li>
                </ul>
                <br />
                <fieldset>
                    <legend><h1>Welcome Home</h1></legend>
                    <br />
                    <p>
                        Service Team (0)  | 
                        <a href='javascript:void(0)' onClick={ ()=> {seteditMode(!editMode)} }>{ (!editMode) ? 'Add New' : '' }</a>
                        {
                            (editMode) ?
                                <form onSubmit={handleSubmit} style={{display: 'inline-flex'}}>
                                    <table cellSpacing={10}>
                                        <tr>
                                            <td><label>Title</label></td>
                                            <td>
                                                <input type='text' value={title}
                                                    onChange={(e) => { setTitle(e.target.value) }}
                                                />
                                            </td>
                                            <td><button type='submit'>Save</button></td>
                                            <td>{
                                                    (editMode) ? 
                                                        <button type='button' onClick={ ()=> {seteditMode(!editMode)} }>Close</button>
                                                    : ''
                                                }
                                            </td>
                                        </tr>
                                    </table>
                                </form>
                            : null
                        }
                    </p>
                </fieldset>
            </div>
        </div>
    );
}