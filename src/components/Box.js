import './Box.css';

const Box = (props) => {
  let classNames = ["box"];

  if (typeof props.className !== 'undefined') {
    classNames.push(props.className); 
  }

  classNames = classNames.join(" ");

  return (
    <div className={classNames}>
      { props.children }
    </div>
  )
};

export default Box;
