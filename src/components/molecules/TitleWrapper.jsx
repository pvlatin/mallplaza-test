import React, {Component} from 'react';
import SectionTitle from '../atoms/SectionTitle';

const TitleWrapper = props => (
  <SectionTitle />
);

export default TitleWrapper;

const SectionTitle = props => {
  const [title, setTitle] = useState({
    title: {
      tiendas: 'Tiendas',
      restaurantes: 'Restaurantes'
    }
  });
  return (
    <h1>{title.title}</h1>
  );
};

export default SectionTitle;
