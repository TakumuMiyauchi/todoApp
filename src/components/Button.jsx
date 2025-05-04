export default function Button({onClick,dataId,children}) {
  return (
    <button type="button" onClick={onClick} data-id={dataId} className="btn">
      {children}
    </button>
  );
}
