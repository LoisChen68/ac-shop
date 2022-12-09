import style from './Selector.module.scss'

interface p {
  label: string
  value: o[]
}

interface o {
  value: string
  name: string
}

export default function Selector(props: p) {
  const items = props.value.map((i: o) => (
    <option key={i.value} value={i.value}>
      {i.name}
    </option>
  ))

  return (
    <div className={style['input-group']}>
      <label htmlFor={props.label} className={style['select-label']}>
        {props.label}
      </label>
      <div className={style['select-wrapper']}>
        <select id={props.label} className={style['select']}>
          {items}
        </select>
      </div>
    </div>
  )
}
