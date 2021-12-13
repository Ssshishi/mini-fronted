const Loading = (props: { loading: boolean }) => {
  const { loading } = props
  return <>{loading && <h4 className="mainapp-loading">loading...</h4>}</>
}
export default Loading
