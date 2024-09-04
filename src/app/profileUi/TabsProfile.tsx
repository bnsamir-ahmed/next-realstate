"use client"
import { SetStateAction, useState } from 'react';
import Style from "./profile.module.css";
import Grid from '../UI/Grid';
import Card from '../UI/Card';
import HomeCard from '../UI/HomeCard';
const TabsProfile = () => {
  const [activeTab, setActiveTab] = useState('My_Visits');

  const handleTabClick = (tab: SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto py-6">
      <div className="tabs flex space-x-4 nav-tabs">
        <button
          className={`fs-16 sm-fs-12 cursor black-70 ${activeTab === 'My_Visits' ? `${Style.active}` : ''}`}
          onClick={() => handleTabClick('My_Visits')}
        >
          My Visits
        </button>
        <button
          className={`fs-16 sm-fs-12 cursor black-70 ${activeTab === 'My_units' ? `${Style.active}` : ''}`}
          onClick={() => handleTabClick('My_units')}
        >
         My units
        </button>
        <button
          className={`fs-16 sm-fs-12 cursor black-70 ${activeTab === 'My_inquiries' ? `${Style.active}` : ''}`}
          onClick={() => handleTabClick('My_inquiries')}
        >
          My inquiries
        </button>
        <button
          className={`fs-16 sm-fs-12 cursor black-70 ${activeTab === 'Favorites' ? `${Style.active}` : ''}`}
          onClick={() => handleTabClick('Favorites')}
        >
       Favorites
        </button>
      </div>

      <div className="tab-content mt-4">
        <div className={`${activeTab === 'My_Visits' ? 'block' : 'hidden'}`}>
          <Grid className="grid grid-cols-3 gap-4">
          <Card location='New Cairo' code={556644} profileName={'ahmed ali'} date={`16/08/2021`} time={`04:00PM`} type={'calunder'} />
          <Card location='New Cairo' code={556644} profileName={'ahmed ali'} date={`16/08/2021`} time={`04:00PM`} type={'review'} />
          <HomeCard  past={'past'} upcoming={"upcoming"} home={`Find a new home`} description={` It is a long established fact that a reader will be distracted by the readable content of a page when looking
            at its layout. It is a long established fact that a reader will be distracted by the readable content of a
            page when looking at its layout. It is a...`}/>

        </Grid>
        </div>
        <div className={`${activeTab === 'My_units' ? 'block' : 'hidden'}`}>
          <p>Content for Tab 2</p>
        </div>
        <div className={`${activeTab === 'My_inquiries' ? 'block' : 'hidden'}`}>
          <p>Content for Tab 3</p>
        </div>
        <div className={`${activeTab === 'Favorites' ? 'block' : 'hidden'}`}>
          <p>Content for Tab 3</p>
        </div>
      </div>
    </div>
  );
};

export default TabsProfile;
