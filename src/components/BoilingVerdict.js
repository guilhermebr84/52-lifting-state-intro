function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>A água ferveria.</p>;
  } else {
    return <p>A água não ferveria</p>;
  }
}

export default BoilingVerdict;
