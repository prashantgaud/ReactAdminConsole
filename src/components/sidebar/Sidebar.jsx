import React from 'react'
import "./sidebar.css";
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import MailLockOutlinedIcon from '@mui/icons-material/MailLockOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import { Link } from 'react-router-dom';




export default function Sidebar() {
  return (
    <div className="sidebar">
      
      <div className="sidebarWrapper">
      
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">

           <Link to="/" className="link"> 
            <li className="sidebarListItem active">
              <LineStyleIcon className="sidebarIcon" />
              Home
            </li>
            </Link>
            <li className="sidebarListItem">
              <TimelineOutlinedIcon className="sidebarIcon" />
              Analytics
            </li>

            <li className="sidebarListItem">
              <TrendingUpOutlinedIcon className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>

        
        <div className="sidebarMenu">
         
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            
            <Link to="/users" className='link'>
              <li className="sidebarListItem">
                <PeopleOutlinedIcon className="sidebarIcon" />
                Users
              </li>
              </Link> 
              
              <Link to="/productList" className='link'>
              <li className="sidebarListItem">
                <Inventory2OutlinedIcon className="sidebarIcon" />
                Products
              </li>
              </Link>
              
              
            
              <li className="sidebarListItem">
              <CurrencyRupeeOutlinedIcon className="sidebarIcon" />
              Transactions
              </li>
            
            <li className="sidebarListItem">
              <InsertChartOutlinedIcon className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
            
            <div className="sidebarMenu">
             <h3 className="sidebarTitle">Notifications</h3>
             
             <ul className="sidebarList">
             
             <li className="sidebarListItem">
              <MailLockOutlinedIcon className="sidebarIcon" />
              Mail
            </li>
              
              <li className="sidebarListItem">
              <FeedOutlinedIcon className="sidebarIcon" />
              Feedback
            </li>
              
               <li className="sidebarListItem">
                <ChatOutlinedIcon className="sidebarIcon" />
                 Messages
               </li>
          </ul>
        </div>
          
          
          <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
               
               <ul className="sidebarList">
              <li className="sidebarListItem">
              <ManageAccountsOutlinedIcon className="sidebarIcon" />
              Manage
              </li>
               
               <li className="sidebarListItem">
               <InsightsOutlinedIcon className="sidebarIcon" />
                 Analytics
                </li>
                <li className="sidebarListItem">
                <AssessmentOutlinedIcon className="sidebarIcon" />
                 Reports
                </li>
              </ul>
             </div>
            
            </div>
    </div>
    
  );
}
