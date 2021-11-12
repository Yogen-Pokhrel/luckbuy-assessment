const Breadcrumb = (props) => {
  return (
    <div className={`d-block w-100 breadcrumb-wrapper `+props.className}>
      <h3 className="font-size-normal mb-0"><i className={props.iconClass}></i> {props.title}</h3>
    </div>
  )
}

export default Breadcrumb
