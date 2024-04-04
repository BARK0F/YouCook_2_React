export default function FormField({ type, className, value, placeholder, label, name, onChange }) {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      {type !== 'textarea' && <input type={type} id={name} name={name} className={className} value={value} placeholder={placeholder} onChange={onChange} />}

      {type === 'textarea' && <textarea className={className} id={name} name={name} placeholder={placeholder} onChange={onChange}>{value}</textarea>}
    </label>
  )
}
