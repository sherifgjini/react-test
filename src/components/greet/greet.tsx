type GreetTypes = {
  name?: string;
};
const Greet = ({ name }: GreetTypes) => {
  return <div>Hi {name}</div>;
};

export default Greet;
