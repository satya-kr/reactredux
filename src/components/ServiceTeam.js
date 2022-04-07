import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import { Link } from 'react-router-dom';
import { getTeamList, addNewTeam } from '../store/actions/action';
import { useDispatch, useSelector } from 'react-redux';

export const ServiceTeam = () => {

    const dispatch = useDispatch();
    const teamList = useSelector(state => state.teamList);

    // const [teamList, setTeamList] = useState([]);
    const [title, setTitle] = useState('');
    const [item, setItem] = useState(null);

    const handleSubmit = event => {
        event.preventDefault();

        var data = {};

        if (item == null) {
            data = {
                title: title,
            };

            dispatch(addNewTeam(data)).then(()=> setTitle(''));

        } else {
            data = {
                id: item.id,
                title: title
            };
        }
        

        // axios.post(`http://loepalace.astergo.in/api/createServiceTeam`, data)
        //     .then(res => {

        //         alert(res.data.msg);
        //         setTitle('');
        //         var temp;
        //         if (item == null) {
        //             temp = [...teamList, res.data.data];
        //         } else {
        //             // case 1 not effective we call api two times
        //             // getServiceTeam();

        //             // case 2 to update existing data set
        //             temp = teamList.map(row => {
        //                 if (row.id == item.id) {
        //                     return res.data.data;
        //                 }
        //                 return row;
        //             });


        //         }
        //         setTeamList(temp);
        //         setItem(null);

        //     }).catch((err) => {
        //         console.log(err);
        //     });
    }

    const getServiceTeam = () => {
        // axios.get(`http://loepalace.astergo.in/api/getServiceTeam`)
        //     .then(res => {
        //         // console.log(res.data);
        //         setTeamList(res.data.data);
        //     });
        
        dispatch(getTeamList());
    }

    useEffect(() => {
        getServiceTeam();
    }, []);


    const deleteServiceTeam = (item) => {
        const data = {
            id: item.id
        }
        axios.post(`http://loepalace.astergo.in/api/deleteServiceTeam`, data)
            .then(res => {

                alert(res.data.msg);

                var temp = teamList.filter(row => {
                    if (row.id == item.id) {
                        return false;
                    }
                    return true;
                });

                // setTeamList(temp);

            }).catch((err) => {
                console.log(err);
            });
    }
    
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
                    <legend><h4>Service Team Create</h4></legend>
                    <form onSubmit={handleSubmit}>
                        <table cellSpacing={20}>
                            <tr>
                                <td><label>Title</label></td>
                                <td>
                                    <input type='text' value={title}
                                        onChange={(e) => { setTitle(e.target.value) }}
                                    />
                                </td>
                                <td><button type='submit'>{(item != null) ? 'Update' : 'Save'}</button></td>
                            </tr>
                        </table>
                    </form>
                </fieldset>
                <br />
                <fieldset>
                    <legend><h4>Service Team List</h4></legend>
                    {
                        (Object.keys(teamList).length > 0) ?
                            <table width={400} cellSpacing={0} cellPadding={2} border="0" bordercolor="black">
                                {
                                    teamList.map(item => {
                                        return <tr key={item.id}>
                                            <td>{item.id ?? ''}</td>
                                            <td>{item.title ?? ''}</td>
                                            <td>
                                                &nbsp;
                                                <button type="button" onClick={() => {
                                                    setItem(item);
                                                    setTitle(item.title);
                                                }}>Edit</button>
                                                &nbsp;
                                                <button type="button" onClick={() => {
                                                    if (window.confirm("Are you sure want to delete!")) {
                                                        deleteServiceTeam(item);
                                                    }
                                                }}>Delete</button>
                                            </td>
                                        </tr>
                                    })
                                }
                            </table>
                        :
                        <center><h4>Loading ...</h4></center>
                    }
                    
                </fieldset>
            </div>
        </div>
    );
}