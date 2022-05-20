import React from 'react'
import Singletask from '../components/Singletask'
import './TodaysTaskList.css'
import SideBar from '../components/SideBar'

function TodaysTaskList() {
    return (
        <div >
            <SideBar today />
            <div className='tasks-container' style={{ display: 'flex', flexDirection: 'column', marginLeft: '20vw' }}>
                <h2 style={{ textAlign: 'center', fontSize: 35, color: '#fff' }}>Todays Tasks</h2>
                <div className="tasks" style={{ padding: '0 10vw' }}>

                    <Singletask />
                    <Singletask />
                    <Singletask />
                    <Singletask />
                </div>
            </div>
        </div>
    )
}

export default TodaysTaskList