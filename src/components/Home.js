import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../App.css';

import { addNewTeam, getTeamList } from '../store/actions/action';

const Home = (props) => {

    const dispatch = useDispatch();
    const teamList = useSelector((state) => { return state.teamList })


    const [title, setTitle] = useState('');
    const [editMode, seteditMode] = useState(false);

    // const handleSubmit = event => {
    //     event.preventDefault();

    //     props.addNewTeam({title:title});
    // }

    // useEffect(() => {
    //   props.getTeamList();
    // }, [])

    useEffect(() => {
        dispatch(getTeamList());
    }, []);




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
                        Service Team ({teamList.length})  | 
                        <a href='javascript:void(0)' onClick={ ()=> {seteditMode(!editMode)} }>{ (!editMode) ? 'Add New' : '' }</a>
                        {
                            (editMode) ?
                                // <form onSubmit={handleSubmit} style={{display: 'inline-flex'}}>
                                    <table cellSpacing={10}>
                                        <tr>
                                            <td><label>Title</label></td>
                                            <td>
                                                <input type='text' value={title}
                                                    onChange={(e) => { setTitle(e.target.value) }}
                                                />
                                            </td>
                                            {/* <td><button type='submit'>Save</button></td> */}
                                            <td><button type='button' onClick={ ()=> {
                                                console.log("start loader...");
                                                dispatch(addNewTeam({title:title}))
                                                .then(() => console.log('loader off...'))
                                                .catch( err => console.log('loader off.....'));
                                                setTitle('');
                                            }}>Save</button></td>
                                            <td>{
                                                    (editMode) ? 
                                                        <button type='button' onClick={ ()=> {seteditMode(!editMode)} }>Close</button>
                                                    : ''
                                                }
                                            </td>
                                        </tr>
                                    </table>
                                // </form>
                            : null
                        }
                    </p>
                </fieldset>
            </div>
        </div>
    );
}

export default Home;