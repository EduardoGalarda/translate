import './Login.css'
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../../components/LanguageSelector';
import Title from '../../components/Title';
import Settings from '../../components/Settings'

function Login() {
  const { t } = useTranslation();

  return (

    <>

      <Settings>{t("language")}</Settings>

      <section className='menu'>
        <h2>{t('page.home')}</h2>
        <h2>{t('page.about')}</h2>
        <h2>{t('page.contact')}</h2>
      </section>

      <section className='title'>
        <Title>{t('login.title')}</Title>
      </section>

      <section className='selector'>
        <LanguageSelector />
      </section>


    </>
  );
}

export default Login;
