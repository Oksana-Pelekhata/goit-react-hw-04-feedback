import PropTypes from 'prop-types';
import { SectionContainer, Title } from './styled';

export const Section = ({ title, children }) => {
  return (
      <SectionContainer>
     <Title>{title}</Title>
      {children}
   </SectionContainer>
   
  );
};


Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};