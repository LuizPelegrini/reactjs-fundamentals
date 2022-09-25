export function Post(props) {
  return ( 
    <div>
      <p>{ props.content }</p>
      <strong>{ props.author }</strong>
    </div>
  );
}