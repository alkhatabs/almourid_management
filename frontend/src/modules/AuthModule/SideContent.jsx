import { Space, Layout, Divider, Typography } from 'antd';
import logo from '@/style/images/Almourid-logo.svg';
import text_logo from '@/style/images/logo-text.svg'
import useLanguage from '@/locale/useLanguage';
import { useSelector } from 'react-redux';
import { selectLangDirection } from '@/redux/translate/selectors';

const { Content } = Layout;
const { Title, Text } = Typography;

export default function SideContent() {
  const translate = useLanguage();
  const langDirection = useSelector(selectLangDirection);

  return (
    <Content
      style={{
        padding: '300px 40px 10px',
        width: '100%',
        maxWidth: '450px',
        margin: '0 auto',
      }}
      className="sideContent"
    >
      <div style={{ width: '100%' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
          }}
        >
          <img
            src={logo}
            alt="Almourid"
            height={126} 
            width={100} 
            style={{ display: 'block' }}
          />
          <div
            style={{
              marginLeft: '-10px',
              textAlign: 'left',
            }}
          >
            <img
            src = {text_logo}
            alt= "almourid text"
            height= {200}
            width= {150}
            style = {{display:'block'}}
            />
          </div>
        </div>
        <Title level={3}>{translate('Almourid Management System')}</Title>
      </div>
    </Content>
  );
}
