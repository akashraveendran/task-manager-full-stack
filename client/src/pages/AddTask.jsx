import { Box, Button, Card } from '@mui/material'
import React from 'react'
import SideBar from '../components/SideBar'



function AddTask() {
    return (
        <div>
            <SideBar addTask />
            <div className='tasks-container' style={{ display: 'flex', flexDirection: 'column', marginLeft: '25vw' }}>
                <h2 style={{ textAlign: 'center', fontSize: 35, color: '#fff' }}>Add New Task</h2>
                <Card sx={{ margin: '100px', padding: '30px 0', minHeight: '40vh' }}>
                    <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
                        <input type="text" placeholder='Enter Task title' style={{ width: "60%", marginBottom: 20, padding: 7, background: '#E0EAFC', border: 'none' }} />
                        <textarea name="" id="" cols="21" rows="5" style={{ width: "60%", marginBottom: 20, padding: 5, background: '#E0EAFC', border: 'none' }} placeholder='Enter task description'></textarea>
                        <Box style={{ display: 'flex', width: "60%", margin: 10 }}>
                            <label style={{ alignSelf: 'center' }} htmlFor="">Due Date</label>
                            <input type="date" placeholder='Due date' style={{ width: "67%", marginLeft: 'auto', padding: 5, background: '#E0EAFC', border: 'none' }} />
                        </Box>
                        <Box style={{ display: 'flex', width: "60%", margin: 10 }}>
                            <label style={{ alignSelf: 'center' }} htmlFor="">Difficulty :</label>
                            <select name="" id="" style={{ width: "70%", padding: 5, marginLeft: 'auto', background: '#E0EAFC', border: 'none' }}>
                                <option value="Easy">Easy</option>
                                <option value="Normal">Normal</option>
                                <option value="Hard">Hard</option>
                            </select>
                        </Box>
                        <Button variant="contained">Add Task</Button>
                    </form>
                </Card>
            </div>
        </div >
    )
}

export default AddTask