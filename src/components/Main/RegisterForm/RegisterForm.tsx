import InputBox from '../../UI/InputBox'
import Selector from '../../UI/Selector'
import style from './RegisterForm.module.scss'

export default function RegisterForm() {
  return (
    <>
      <section className={style['form-container']}>
        <form>
          <div className={style['step-title']}>
            <h3>寄送地址</h3>
          </div>
          <div className={style['form-body']}>
            <div className={style['person-group']}>
              <Selector label={'稱謂'} value={personTitle} />
              <InputBox placeholder="請輸入姓名" label="姓名" />
            </div>
            <InputBox placeholder="請輸入行動電話" label="電話" />
            <InputBox placeholder="請輸入電子郵件" label="Email" />
            <Selector label={'縣市'} value={city} />
            <InputBox placeholder="地址" label="請輸入地址" />
          </div>
        </form>
      </section>
    </>
  )
}

const personTitle = [
  { value: 'mr', name: '先生' },
  { value: 'ms', name: '女士' },
  { value: 'mx', name: '不明' },
]

const city = [
  { value: '', name: '請選擇縣市' },
  { value: 'KLU', name: '基隆市' },
  { value: 'TPH', name: '新北市' },
  { value: 'TPE', name: '臺北市' },
  { value: 'TYC', name: '桃園市' },
  { value: 'HSH', name: '新竹縣' },
  { value: 'HSC', name: '新竹市' },
  { value: 'MAC', name: '苗栗市' },
  { value: 'MAL', name: '苗栗縣' },
  { value: 'TXG', name: '臺中市' },
  { value: 'CWH', name: '彰化縣' },
  { value: 'CWS', name: '彰化市' },
  { value: 'NTC', name: '南投市' },
  { value: 'NTO', name: '南投縣' },
  { value: 'YLH', name: '雲林縣' },
  { value: 'CHY', name: '嘉義縣' },
  { value: 'CYI', name: '嘉義市' },
  { value: 'TNN', name: '臺南市' },
  { value: 'KHH', name: '高雄市' },
  { value: 'IUH', name: '屏東縣' },
  { value: 'PTS', name: '屏東市' },
  { value: 'ILN', name: '宜蘭縣' },
  { value: 'ILC', name: '宜蘭市' },
  { value: 'HWA', name: '花蓮縣' },
  { value: 'HWC', name: '花蓮市' },
  { value: 'TTC', name: '臺東市' },
  { value: 'TTT', name: '臺東縣' },
  { value: 'PEH', name: '澎湖縣' },
  { value: 'KMN', name: '金門縣' },
  { value: 'LNN', name: '連江縣' },
]
