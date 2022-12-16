import PropTypes from 'prop-types';
import { MySection, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <MySection>
      <Title>{title}</Title>
      {children}
    </MySection>
  );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
};