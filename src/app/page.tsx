import Profile from "./profileUi/Profile";
import TabsProfile from "./profileUi/TabsProfile";
import Style from "./profileUi/profile.module.css";

export default function Home() {
  return (
    <>
      <div className={Style.bg_landing_profile} />
      <section className="mx-auto max-w-full  items-center justify-between p-6 lg:px-8">
        <Profile />
        <TabsProfile />


      </section>
    </>
  );
}
