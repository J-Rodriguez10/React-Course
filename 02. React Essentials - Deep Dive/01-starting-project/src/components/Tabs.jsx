export default function Tabs({children, buttons, ButtonsCont = "menu"}) {
  return (
    <>
      <ButtonsCont>
        {buttons}
      </ButtonsCont>
      {children}
    </>
  );
}
