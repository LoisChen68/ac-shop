import style from './InputBox.module.scss'

interface p {
  placeholder: string
  label: string
}

export default function InputBox(props: p) {
  return (
    <div className={style['input-group']}>
      <label htmlFor={props.label} className={style['input-label']}>
        {props.label}
      </label>
      <input
        id={props.label}
        className={style['input']}
        placeholder={props.placeholder}
      ></input>
    </div>
  )
}
