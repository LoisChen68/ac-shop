import style from './Main.module.scss'
import StepProgress from './StepProgress/StepProgress'

export default function Main() {
  return (
    <>
      <main className={style['site-main']}>
        <div className={style['main-container']}>
          {/* register-title */}
          <div className={style['step-title']}>
            <h2>結帳</h2>
          </div>
          <StepProgress />
        </div>
      </main>
    </>
  )
}
