import style from './StepProgress.module.scss'

export default function StepProgress() {
  return (
    <>
      {/* register-progress */}
      <section className={style['progress-panel']}>
        <div className={style['progress-container']}>
          <div className={style['step']}>
            <div className={style['circle-container-active']} />
            <label className={style['progress-label']}>寄送地址</label>
          </div>
          <span className={style['connect-line-active']} />
          <div className={style['step']}>
            <div className={style['circle-container']} />
            <label className={style['progress-label']}>運送方式</label>
          </div>
          <span className={style['connect-line']} />
          <div className={style['step']}>
            <div className={style['circle-container']} />
            <label className={style['progress-label']}>付款資訊</label>
          </div>
        </div>
      </section>
    </>
  )
}
