import './Spinner.css'

const Spinner = () => (
  <div className="absolute top-1/2 left-1/2">
    <div className="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
)

export default Spinner
