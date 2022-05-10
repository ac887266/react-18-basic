import Layout1 from "../common/Layout1";

export default function MainLayout(props) {
  const changeLayoutTheme = (res) => {
    props.setLayoutTheme(res);
  };

  return (
    <>
      <Layout1 changeLayoutTheme={changeLayoutTheme} theme={props.theme} />
    </>
  );
}
