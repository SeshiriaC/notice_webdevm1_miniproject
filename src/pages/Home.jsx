import Menu from "../component/Menu";
import PageFooter from "../component/PageFooter";

function Home() {
  const header = (
    <>
      <Menu></Menu>
    </>
  );

  const foot = (
    <>
      <PageFooter></PageFooter>
    </>
  );

  return (
    <div id="pageContainer">
      <div>
        {header}
        {foot}
      </div>
    </div>
  );
}

export default Home;
