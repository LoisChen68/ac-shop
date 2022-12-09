import style from './Main.module.scss'
import RegisterForm from './RegisterForm/RegisterForm'
import StepProgress from './StepProgress/StepProgress'

export default function Main() {
  return (
    <>
      <main className={style['site-main']}>
        <div className={style['main-container']}>
          {/* register-title */}
          <div className={style['checkout-title']}>
            <h3>結帳</h3>
          </div>
          <StepProgress />
          <RegisterForm />
        </div>
      </main>
    </>
  )
}
