import {useTranslation} from 'react-i18next';
import styled from 'styled-components';
import {colors, fontSizes} from '../theme/tokens';

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 40px;
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 600px;
`;

const Message = styled.p`
  font-size: ${fontSizes.heading[2]};
  color: ${colors.text.primary};
`;

export function Welcome() {
  const {t} = useTranslation();

  return (
    <Center>
      <Stack>
        <Message>{t('welcome.message')}</Message>
      </Stack>
    </Center>
  );
}
