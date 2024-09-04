import Image from "next/image";
import Link from "next/link";
import Edit from "../svg/Edit";
import Style from "./profile.module.css";

const Profile =() =>{
return(<>
<div className="flex justify-between items-center pt-30 relative">
          <div className={Style.holder_profile_info}>
            <Image
              src="/assets/pic_profile.png"
              alt="profile"
              width={500}
              height={500}
              className={Style.img_profile}
            />
          </div>
          <div className="ml-14">
            <h4 className="fs-30 fw-700 font-bold	text-3xl">Ahmed Ali</h4>
            <span className="black-70">+201112225566</span>
          </div>
          <Link
            href="/editprofile"
            className={`${Style.btn_edit_profile} fs-19 fw-500 font-medium flex items-center  edit_desktop`}
          >
            Edit Profile
            <Edit className="mx-2" />
          </Link>
          {/* <Link href="/editprofile">
          <a className="edit_mobile">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
              <path
                opacity="0.5"
                d="M0 10.5C0 5.78595 0 3.42893 1.46447 1.96447C2.92893 0.5 5.28595 0.5 10 0.5C14.714 0.5 17.0711 0.5 18.5355 1.96447C20 3.42893 20 5.78595 20 10.5C20 15.214 20 17.5711 18.5355 19.0355C17.0711 20.5 14.714 20.5 10 20.5C5.28595 20.5 2.92893 20.5 1.46447 19.0355C0 17.5711 0 15.214 0 10.5Z"
                fill="#174D46"
              />
              <path
                d="M11.7509 12.5926C11.9737 12.4188 12.1757 12.2168 12.5797 11.8128L17.6164 6.77613C17.7382 6.65436 17.6824 6.44463 17.5197 6.38818C16.9252 6.18192 16.1518 5.79467 15.4284 5.07123C14.705 4.34779 14.3177 3.57442 14.1115 2.97989C14.055 2.8172 13.8453 2.76147 13.7235 2.88324L8.68681 7.91993C8.2828 8.32394 8.08079 8.52595 7.90706 8.74868C7.70213 9.01143 7.52643 9.29572 7.38307 9.59652C7.26155 9.85151 7.17121 10.1225 6.99053 10.6646L6.75706 11.365L6.38583 12.4787L6.03775 13.5229C5.94883 13.7897 6.01826 14.0837 6.21708 14.2826C6.41589 14.4814 6.70998 14.5508 6.97672 14.4619L8.02097 14.1138L9.13467 13.7426L9.83506 13.5091L9.83514 13.5091C10.3771 13.3284 10.6481 13.2381 10.9031 13.1166C11.2039 12.9732 11.4882 12.7975 11.7509 12.5926Z"
                fill="#174D46"
              />
              <path
                d="M19.1934 5.19914C20.2684 4.12415 20.2684 2.38124 19.1934 1.30624C18.1184 0.231252 16.3755 0.231252 15.3005 1.30624L15.1386 1.46817C14.9823 1.62442 14.9115 1.84268 14.9506 2.06018C14.9751 2.197 15.0206 2.39704 15.1034 2.63573C15.2691 3.11309 15.5818 3.73971 16.1709 4.32877C16.7599 4.91783 17.3866 5.23058 17.8639 5.39619C18.1026 5.479 18.3026 5.52452 18.4395 5.54908C18.657 5.58812 18.8752 5.51732 19.0315 5.36107L19.1934 5.19914Z"
                fill="#174D46"
              />
            </svg>
          </a>
        </Link> */}
        </div></>)    
}
export default Profile;