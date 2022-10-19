import "./sidebar.module.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from '@mui/icons-material';
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link href="/" className="link">
            <a className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </a>
            </Link>
            <a className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </a>
            <a className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </a>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link href="/users" className="link">
              <a className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </a>
            </Link>
            <Link href="/products" className="link">
              <a className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Products
              </a>
            </Link>
            <a className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Transactions
            </a>
            <a className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </a>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <a className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </a>
            <a className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </a>
            <a className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </a>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
