const Page = props => {
  return <div>{props.path}</div>;
};

Page.getInitialProps = async context => {
  return {
    path: `/data/${context.query.group}/${context.query.id}`,
  };
};

export default Page;
