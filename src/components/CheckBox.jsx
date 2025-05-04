export default function CheckBox({onClick,dataId,children}) {
  return (
    <CheckBox type="checkbox" onClick={onClick} data-id={dataId} className="checkBox">
      {children}
    </CheckBox>
  );
}
