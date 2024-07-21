import { Button, Result } from 'antd';

import useLanguage from '@/locale/useLanguage';

const About = () => {
  const translate = useLanguage();
  return (
    <Result
      status="info"
      title={'Alkhatab tech services'}
      subTitle={translate('Do you need any technical support ?')}
      extra={
        <>
          <p>
            Website : <a href="www.almourid.net">www.almourid.net</a>{' '}
          </p>
          <Button
            type="primary"
            onClick={() => {
              window.location.href="mailto: ktssalisaif@gmail.com";
            }}
          >
            {translate('Contact us')}
          </Button>
        </>
      }
    />
  );
};

export default About;
